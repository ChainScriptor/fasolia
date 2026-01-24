
import React, { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (p: Product, quantity: number) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    if (quantity > 0) {
      onAddToCart(product, quantity);
      setQuantity(1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(prev => prev + 0.5);
  };

  const decrementQuantity = () => {
    setQuantity(prev => Math.max(0.5, prev - 0.5));
  };

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
        
        <div className="mt-auto grid grid-cols-2 gap-4 border-t border-linen pt-4 mb-4">
            <div>
                <span className="text-[9px] uppercase tracking-tighter text-gray-400 font-bold block">Υφη</span>
                <span className="text-xs font-medium text-gray-700">{product.texture}</span>
            </div>
            <div>
                <span className="text-[9px] uppercase tracking-tighter text-gray-400 font-bold block">Γευση</span>
                <span className="text-xs font-medium text-gray-700">{product.flavorProfile}</span>
            </div>
        </div>

        {/* Quantity Selector and Add to Cart */}
        <div className="border-t border-linen pt-4">
          <div className="flex items-center justify-between gap-3 mb-3">
            <label className="text-xs font-medium text-gray-700">Ποσότητα:</label>
            <div className="flex items-center gap-2">
              <button
                onClick={decrementQuantity}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors text-gray-600 font-semibold"
                type="button"
              >
                −
              </button>
              <input
                type="number"
                min="0.5"
                step="0.5"
                value={quantity}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  if (val >= 0.5) setQuantity(val);
                }}
                className="w-20 px-2 py-1.5 border border-gray-300 rounded text-center text-sm font-semibold focus:outline-none focus:border-kastoria-blue"
              />
              <button
                onClick={incrementQuantity}
                className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors text-gray-600 font-semibold"
                type="button"
              >
                +
              </button>
              <span className="text-xs text-gray-500 ml-1">κιλά</span>
            </div>
          </div>
          <button
            onClick={handleAddToCart}
            className="w-full bg-kastoria-blue text-white py-3 font-semibold uppercase tracking-wider text-sm hover:bg-slate-800 transition-colors"
          >
            Προσθήκη στο Καλάθι
          </button>
          <p className="text-xs text-gray-500 text-center mt-2">
            Σύνολο: €{(product.pricePerKg * quantity).toFixed(2)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
