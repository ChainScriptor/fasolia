
import { GoogleGenAI } from "@google/genai";

const getAI = () => new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateHeroImage = async (prompt: string): Promise<string | null> => {
  try {
    const ai = getAI();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [{ text: prompt }],
      },
      config: {
        imageConfig: {
          aspectRatio: "16:9"
        }
      }
    });

    for (const part of response.candidates?.[0]?.content?.parts || []) {
      if (part.inlineData) {
        return `data:image/png;base64,${part.inlineData.data}`;
      }
    }
    return null;
  } catch (error) {
    console.error("Error generating image:", error);
    return null;
  }
};

export const chatWithHeritageExpert = async (message: string) => {
    const ai = getAI();
    const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents: message,
        config: {
            systemInstruction: "Είσαι ένας ειδικός στην κληρονομιά των φασολιών ΠΓΕ Καστοριάς. Γνωρίζεις την ιστορία, το μεράκι των αγροτών, το μοναδικό μικροκλίμα κοντά στη λίμνη Ορεστιάδα και πώς να μαγειρεύεις τέλεια αυτά τα φασόλια. Να είσαι ευγενικός, ποιητικός και γνώστης. Απάντησε υποχρεωτικά στα Ελληνικά."
        }
    });
    return response.text;
};
