
import React from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <div className="group bg-white border border-linen hover:shadow-xl transition-all duration-500 overflow-hidden flex flex-col reveal">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {product.pgiStatus && (
          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-kastoria-blue border border-kastoria-blue/20">
            Πιστοποιηση ΠΓΕ
          </div>
        )}
        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <button 
                onClick={() => onAddToCart(product)}
                className="bg-white text-kastoria-blue px-6 py-3 font-semibold uppercase tracking-wider text-sm hover:bg-kastoria-blue hover:text-white transition-colors"
            >
                Προσθηκη στο Καλαθι
            </button>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <div className="flex justify-between items-start mb-2">
            <div>
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold mb-1 block">
                    Φασολια Καστοριας
                </span>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-kastoria-blue transition-colors serif">
                    {product.name}
                </h3>
            </div>
            <div className="text-right">
                <span className="text-lg font-bold text-kastoria-blue">€{product.pricePerKg.toFixed(2)}</span>
                <span className="text-[10px] block text-gray-400">το κιλό</span>
            </div>
        </div>
        
        <p className="text-sm text-gray-600 line-clamp-2 mb-4 leading-relaxed">
          {product.description}
        </p>
        
        <div className="mt-auto grid grid-cols-2 gap-4 border-t border-linen pt-4">
            <div>
                <span className="text-[9px] uppercase tracking-tighter text-gray-400 font-bold block">Υφη</span>
                <span className="text-xs font-medium text-gray-700">{product.texture}</span>
            </div>
            <div>
                <span className="text-[9px] uppercase tracking-tighter text-gray-400 font-bold block">Γευση</span>
                <span className="text-xs font-medium text-gray-700">{product.flavorProfile}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
