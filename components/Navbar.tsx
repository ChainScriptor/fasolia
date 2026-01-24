
import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onCartClick: () => void;
  cartCount: number;
}

const Navbar: React.FC<NavbarProps> = ({ onCartClick, cartCount }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Αρχική', href: '#' },
    { name: 'Προϊόντα', href: '#marketplace' },
    { name: 'Η Παράδοση', href: '#heritage' },
    { name: 'Συνταγές', href: '#recipes' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-lg h-16 shadow-sm border-b border-gray-200/50' 
            : 'bg-transparent h-20'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex items-center justify-between h-full">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 rounded-md hover:bg-gray-100/50 transition-colors"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <svg className="w-5 h-5 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>

            {/* Logo */}
            <div className="flex-shrink-0">
              <a 
                href="#" 
                className={`serif font-bold tracking-tight transition-all duration-300 ${
                  isScrolled 
                    ? 'text-lg' 
                    : 'text-xl md:text-2xl'
                }`}
              >
                <span className="text-kastoria-blue">Η ΚΛΗΡΟΝΟΜΙΑ</span>
                <span className="text-orange-600 italic ml-1">της</span>
                <span className="text-kastoria-blue block md:inline md:ml-1">ΚΑΣΤΟΡΙΑΣ</span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isScrolled 
                      ? 'text-gray-700 hover:text-kastoria-blue' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Icons/Actions */}
            <div className="flex items-center gap-3 md:gap-4">
              <button 
                onClick={onCartClick}
                className={`relative p-2 rounded-md transition-all duration-200 hover:bg-gray-100/50 ${
                  isScrolled ? 'text-gray-700' : 'text-white/90 hover:text-white'
                }`}
                aria-label="Shopping cart"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs font-semibold min-w-[18px] h-[18px] flex items-center justify-center rounded-full px-1.5">
                    {cartCount > 99 ? '99+' : cartCount}
                  </span>
                )}
              </button>
              
              <button 
                className={`hidden lg:flex items-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  isScrolled
                    ? 'bg-kastoria-blue text-white hover:bg-slate-800'
                    : 'bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 border border-white/20'
                }`}
              >
                Είσοδος
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Side Menu - Shadcn Style */}
      <div 
        className={`fixed inset-0 z-50 transition-opacity duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div 
          className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Side Panel */}
        <div 
          className={`absolute top-0 left-0 h-full w-[85%] max-w-sm bg-white shadow-xl transition-transform duration-300 ${
            isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <span className="text-lg font-semibold text-gray-900">Μενού</span>
              <button 
                onClick={() => setIsMobileMenuOpen(false)} 
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            {/* Navigation */}
            <nav className="flex-1 overflow-y-auto p-6 space-y-1">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block py-3 text-base font-medium text-gray-900 hover:text-kastoria-blue transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Footer */}
            <div className="p-6 border-t border-gray-200 space-y-4">
              <button 
                className="w-full bg-kastoria-blue text-white py-3 rounded-md text-sm font-medium hover:bg-slate-800 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Είσοδος Μελών
              </button>
              <p className="text-center text-xs text-gray-500">
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
