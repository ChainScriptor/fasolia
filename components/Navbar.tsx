
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onCartClick: () => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isProductsOpen, setIsProductsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#' },
    { 
      name: 'Προϊόντα', 
      href: '#marketplace', 
      dropdown: ['Μικρά', 'Μεσαία', 'Μεγάλα', 'Γίγαντες'] 
    },
    { name: 'Η Παράδοση', href: '#heritage' },
    { name: 'Συνταγές', href: '#recipes' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md h-16 shadow-sm border-b border-linen' 
            : 'bg-transparent h-24'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-kastoria-blue"
            onClick={() => setIsMobileMenuOpen(true)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className={`serif font-bold tracking-tighter transition-all duration-500 ${isScrolled ? 'text-xl' : 'text-2xl'}`}>
              <span className="text-kastoria-blue">Η ΚΛΗΡΟΝΟΜΙΑ</span>
              <span className="text-orange-600 italic ml-1">της</span>
              <span className="text-kastoria-blue block md:inline md:ml-1">ΚΑΣΤΟΡΙΑΣ</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative group py-2"
                onMouseEnter={() => link.dropdown && setIsProductsOpen(true)}
                onMouseLeave={() => link.dropdown && setIsProductsOpen(false)}
              >
                <a 
                  href={link.href}
                  className={`text-[11px] uppercase tracking-[0.2em] font-bold transition-colors hover:text-orange-600 flex items-center ${
                    isScrolled ? 'text-gray-700' : 'text-kastoria-blue md:text-white'
                  }`}
                >
                  {link.name}
                  {link.dropdown && (
                    <svg className={`ml-1 w-3 h-3 transition-transform ${isProductsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  )}
                </a>
                
                {/* Dropdown Menu */}
                {link.dropdown && (
                  <div className={`absolute left-0 mt-2 w-48 bg-white border border-linen shadow-xl transition-all duration-300 transform origin-top ${
                    isProductsOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                  }`}>
                    <div className="py-2">
                      {link.dropdown.map((item) => (
                        <a 
                          key={item}
                          href="#marketplace"
                          className="block px-6 py-3 text-[10px] uppercase tracking-widest text-gray-600 hover:bg-linen hover:text-kastoria-blue transition-colors font-bold"
                        >
                          Φασόλια {item}
                        </a>
                      ))}
                    </div>
                  </div>
                )}
                
                {/* Underline effect */}
                <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-orange-600 transition-all duration-300 group-hover:w-full"></div>
              </div>
            ))}
          </div>

          {/* Icons/Actions */}
          <div className="flex items-center space-x-4 md:space-x-8">
            <button 
              onClick={onCartClick}
              className={`relative p-2 transition-colors ${isScrolled ? 'text-gray-700' : 'text-kastoria-blue md:text-white'}`}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute top-1 right-1 bg-orange-600 text-white text-[9px] font-bold w-4 h-4 flex items-center justify-center rounded-full ring-2 ring-white">
                  {cartCount}
                </span>
              )}
            </button>
            
            <button className="hidden lg:block bg-kastoria-blue text-white px-6 py-2.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-slate-800 transition-all">
              Εισοδος
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu */}
      <div className={`fixed inset-0 z-[70] transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
        <div className={`absolute top-0 left-0 h-full w-[80%] max-w-sm bg-white shadow-2xl transition-transform duration-500 transform ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
          <div className="p-8 h-full flex flex-col">
            <div className="flex items-center justify-between mb-12">
              <span className="serif font-bold text-kastoria-blue text-xl uppercase tracking-tighter">Μενού</span>
              <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400">
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <nav className="space-y-8">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <a 
                    href={link.href}
                    onClick={() => !link.dropdown && setIsMobileMenuOpen(false)}
                    className="text-2xl font-bold text-kastoria-blue serif block"
                  >
                    {link.name}
                  </a>
                  {link.dropdown && (
                    <div className="mt-4 ml-4 space-y-4 border-l border-linen pl-6">
                      {link.dropdown.map(item => (
                        <a 
                          key={item} 
                          href="#marketplace" 
                          onClick={() => setIsMobileMenuOpen(false)}
                          className="block text-sm text-gray-500 uppercase tracking-widest font-medium"
                        >
                          {item}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            <div className="mt-auto pt-12 border-t border-linen">
              <button className="w-full bg-kastoria-blue text-white py-4 font-bold uppercase tracking-widest text-xs">
                Εισοδος μελους
              </button>
              <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-gray-400 font-bold">
                Καστοριά, Ελλάδα • 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
