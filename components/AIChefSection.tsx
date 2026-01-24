
import React, { useState } from 'react';
import { STATIC_RECIPES } from '../constants';
import { Recipe } from '../types';

const AIChefSection: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  const selectRecipe = (type: string) => {
    setLoading(true);
    setTimeout(() => {
      setRecipe(STATIC_RECIPES[type] || null);
      setLoading(false);
    }, 400);
  };

  return (
    <section id="recipes" className="py-24 bg-linen reveal">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left: Standard Recipe Display */}
          <div className="bg-white p-10 border border-linen shadow-sm">
            <span className="text-xs uppercase tracking-[0.3em] text-orange-600 font-bold mb-4 block">Οι Συνταγές μας</span>
            <h2 className="text-4xl font-bold text-kastoria-blue mb-6 serif">Παραδοσιακές Γεύσεις</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Ανακαλύψτε τις αυθεντικές συνταγές για κάθε προϊόν μας. Επιλέξτε την κατηγορία που σας ενδιαφέρει για να δείτε τον παραδοσιακό τρόπο μαγειρέματος.
            </p>
            
            <div className="flex flex-wrap gap-3 mb-10">
              {['Μικρά', 'Μεσαία', 'Μεγάλα', 'Γίγαντες'].map(type => (
                <button 
                  key={type}
                  onClick={() => selectRecipe(type)}
                  className={`px-6 py-2 border border-kastoria-blue text-xs font-bold uppercase tracking-widest transition-all ${recipe?.name.includes(type) ? 'bg-kastoria-blue text-white' : 'text-kastoria-blue hover:bg-kastoria-blue hover:text-white'}`}
                >
                  {type}
                </button>
              ))}
            </div>

            {loading && !recipe && (
              <div className="flex items-center space-x-4 animate-pulse">
                <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                <div className="space-y-2">
                  <div className="h-4 w-48 bg-gray-200 rounded"></div>
                  <div className="h-4 w-32 bg-gray-200 rounded"></div>
                </div>
              </div>
            )}

            {recipe && (
              <div className="border-t border-linen pt-8 animate-fadeIn">
                <h3 className="text-2xl font-bold mb-4 serif italic text-kastoria-blue">{recipe.name}</h3>
                <div className="flex space-x-6 mb-6 text-sm text-gray-500 font-medium italic">
                  <span>Προετοιμασία: {recipe.prepTime}</span>
                  <span>Μερίδες: {recipe.servings}</span>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-3">Συστατικα</h4>
                    <ul className="text-sm text-gray-700 space-y-2">
                      {recipe.ingredients.map((ing, i) => (
                        <li key={i} className="flex items-start">
                          <span className="mr-2 text-orange-500">•</span> {ing}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase tracking-widest font-bold text-gray-400 mb-3">Εκτελεση</h4>
                    <ol className="text-sm text-gray-700 space-y-3">
                      {recipe.instructions.map((step, i) => (
                        <li key={i} className="flex">
                          <span className="mr-3 text-kastoria-blue font-bold">{i + 1}.</span> {step}
                        </li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            )}

            {!recipe && !loading && (
              <div className="text-center py-10 border-2 border-dashed border-linen">
                <p className="text-gray-400 italic">Επιλέξτε μια κατηγορία για να εμφανιστεί η συνταγή.</p>
              </div>
            )}
          </div>

          {/* Right: Video Section */}
          <div className="reveal">
            <div className="bg-black rounded-lg overflow-hidden shadow-xl">
              <video
                src="/video1.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AIChefSection;
