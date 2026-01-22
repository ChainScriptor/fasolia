
import { Product, Recipe } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'small-001',
    name: 'Φασόλια Μικρά Καστοριάς',
    scientificName: 'Phaseolus vulgaris',
    category: 'Specialty',
    description: 'Ιδανικά για παραδοσιακές σούπες και σαλάτες. Βράζουν γρήγορα και έχουν λεπτή φλούδα.',
    pricePerKg: 6.50,
    image: 'https://images.unsplash.com/photo-1551462147-ff29053fad31?auto=format&fit=crop&q=80&w=800',
    pgiStatus: false,
    texture: 'Τρυφερή',
    flavorProfile: 'Ήπια, γήινη'
  },
  {
    id: 'med-001',
    name: 'Φασόλια Μεσαία Καστοριάς',
    scientificName: 'Phaseolus vulgaris',
    category: 'Specialty',
    description: 'Το κλασικό φασόλι για την παραδοσιακή ελληνική φασολάδα. Πλούσια γεύση και τέλεια χυλωμένο αποτέλεσμα.',
    pricePerKg: 7.20,
    image: 'https://images.unsplash.com/photo-1585912089912-585324296684?auto=format&fit=crop&q=80&w=800',
    pgiStatus: false,
    texture: 'Βελούδινη',
    flavorProfile: 'Γεμάτη, παραδοσιακή'
  },
  {
    id: 'large-001',
    name: 'Φασόλια Μεγάλα (Πλακέ)',
    scientificName: 'Phaseolus vulgaris',
    category: 'Specialty',
    description: 'Εκλεκτά μεγάλα φασόλια, εξαιρετικά για το φούρνο ή για πιάτα με σάλτσα ντομάτας.',
    pricePerKg: 8.50,
    image: 'https://images.unsplash.com/photo-1626094309830-abbb0c99da4a?auto=format&fit=crop&q=80&w=800',
    pgiStatus: false,
    texture: 'Στιβαρή',
    flavorProfile: 'Γλυκιά, καρυδάτη'
  },
  {
    id: 'gig-001',
    name: 'Φασόλια Γίγαντες Καστοριάς ΠΓΕ',
    scientificName: 'Phaseolus coccineus',
    category: 'Gigantes',
    description: 'Το καμάρι της Καστοριάς. Τεράστια, λευκά και εξαιρετικά κρεμώδη. Προϊόν Γεωγραφικής Ένδειξης.',
    pricePerKg: 12.80,
    image: 'https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?auto=format&fit=crop&q=80&w=800',
    pgiStatus: true,
    texture: 'Κρεμώδης, βουτυρένια',
    flavorProfile: 'Πλούσια, εκλεπτυσμένη'
  }
];

export const STATIC_RECIPES: Record<string, Recipe> = {
  'Μικρά': {
    name: 'Παραδοσιακή Φασολάδα με Μικρά Φασόλια',
    ingredients: [
      '500γρ Φασόλια Μικρά Καστοριάς',
      '2 μεγάλα καρότα σε ροδέλες',
      '2 κλωνάρια σέλινο ψιλοκομμένο',
      '1 μεγάλο κρεμμύδι ξερό',
      '1 φλιτζάνι ελαιόλαδο',
      '2 κ.σ. πελτέ ντομάτας',
      'Αλάτι, πιπέρι, μπούκοβο'
    ],
    instructions: [
      'Μουλιάζετε τα φασόλια σε κρύο νερό για 8-10 ώρες.',
      'Βράζετε τα φασόλια σε καθαρό νερό για 15 λεπτά και πετάτε το πρώτο νερό.',
      'Προσθέτετε το κρεμμύδι, τα καρότα και το σέλινο.',
      'Σιγοβράζετε μέχρι να μαλακώσουν τα φασόλια.',
      'Προσθέτετε τον πελτέ, το λάδι και τα μπαχαρικά.',
      'Βράζετε για άλλα 20 λεπτά μέχρι να χυλώσει η σούπα.'
    ],
    prepTime: '45 λεπτά (συν μούλιασμα)',
    servings: 4
  },
  'Μεσαία': {
    name: 'Κλασική Φασολάδα Καστοριανή',
    ingredients: [
      '500γρ Φασόλια Μεσαία Καστοριάς',
      '1 φλιτζάνι εξαιρετικό παρθένο ελαιόλαδο',
      '2 ξερά κρεμμύδια ψιλοκομμένα',
      '2 καρότα',
      'Λίγο σέλινο',
      '1 κ.σ. πάπρικα γλυκιά',
      'Αλάτι, πιπέρι'
    ],
    instructions: [
      'Μουλιάζετε τα φασόλια αποβραδίς.',
      'Βράζετε τα φασόλια μέχρι να αρχίσουν να μαλακώνουν.',
      'Σοτάρετε ελαφρά το κρεμμύδι και τα λαχανικά σε ξεχωριστό τηγάνι.',
      'Ενώνετε τα υλικά στην κατσαρόλα.',
      'Προσθέτετε την πάπρικα και το λάδι στο τέλος.',
      'Αφήνετε να σιγοβράσει μέχρι να γίνει το φαγητό μελωμένο.'
    ],
    prepTime: '60 λεπτά',
    servings: 5
  },
  'Μεγάλα': {
    name: 'Φασόλια Πλακέ στο Φούρνο με Μυρωδικά',
    ingredients: [
      '500γρ Φασόλια Μεγάλα Πλακέ',
      '3 ντομάτες ώριμες τριμμένες',
      '2 σκελίδες σκόρδο',
      '1/2 φλιτζάνι ελαιόλαδο',
      'Φρέσκο θυμάρι και ρίγανη',
      '1 κρεμμύδι σε φέτες'
    ],
    instructions: [
      'Βράζετε τα φασόλια στην κατσαρόλα μέχρι να μαλακώσουν κατά 80%.',
      'Σε ένα ταψί στρώνετε τα φασόλια μαζί με το ζουμί τους (να τα καλύπτει ελαφρώς).',
      'Προσθέτετε τη ντομάτα, το σκόρδο, το κρεμμύδι και το λάδι.',
      'Πασπαλίζετε με τα μυρωδικά.',
      'Ψήνετε στους 180°C για περίπου 45 λεπτά μέχρι να μείνουν με το λάδι τους.'
    ],
    prepTime: '1.5 ώρα',
    servings: 4
  },
  'Γίγαντες': {
    name: 'Γίγαντες Καστοριάς Πλακί (ΠΓΕ)',
    ingredients: [
      '500γρ Γίγαντες Καστοριάς ΠΓΕ',
      '2 μεγάλα κρεμμύδια σε ροδέλες',
      '1 φλιτζάνι ελαιόλαδο',
      '400γρ ντομάτα κονκασέ',
      'Λίγο ψιλοκομμένο μαϊντανό',
      '1 κ.σ. μέλι (προαιρετικά)',
      'Αλάτι, πιπέρι'
    ],
    instructions: [
      'Μουλιάζετε τους γίγαντες για τουλάχιστον 12 ώρες.',
      'Τους βράζετε μέχρι να γίνουν μαλακοί αλλά να μην διαλύονται.',
      'Σοτάρετε τα κρεμμύδια μέχρι να καραμελώσουν.',
      'Μεταφέρετε τους γίγαντες σε ταψί, προσθέτετε τη σάλτσα και τα κρεμμύδια.',
      'Προσθέτετε το λάδι και το μαϊντανό.',
      'Ψήνετε στους 200°C μέχρι να ξεροψηθούν από πάνω και να "μελώσει" η σάλτσα.'
    ],
    prepTime: '2 ώρες',
    servings: 6
  }
};

export const HERO_IMAGE_PROMPT = `
Cinematic Marketplace Hero Banner - Authentic Greek Village Square Atmosphere. 
Low-angle, wide-lens perspective looking into a traditional market stall. 
Large burlap sacks filled with white giant beans positioned in the left-third, tilted toward the viewer. 
The texture of the beans leads the eye from the foreground toward the distant mountains of Kastoria and the misty Orestiada lake. 
Early morning blue hour transitioning to sunrise. 
Rustic Luxury, soulful, nostalgic, premium, artisanal, 'Pure Greece'.
`;
