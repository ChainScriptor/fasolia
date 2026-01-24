
import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { PRODUCTS } from './constants';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import AIChefSection from './components/AIChefSection';

const App: React.FC = () => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Στατική εικόνα υψηλής ποιότητας που αποπνέει την ατμόσφαιρα της Καστοριάς
  const heroImage = "/image.png";

  // Scroll Reveal Logic - Διασφάλιση ότι τα στοιχεία θα εμφανιστούν ακόμα και αν ο Observer αργήσει
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));

    // Fallback: Αν μετά από 2 δευτερόλεπτα δεν έχουν εμφανιστεί, εμφάνισέ τα όλα
    const timer = setTimeout(() => {
      elements.forEach(el => el.classList.add('active'));
    }, 2000);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  const addToCart = (product: Product, quantity: number) => {
    setCart(prev => {
      const existing = prev.find(item => item.product.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.product.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.product.pricePerKg * item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#FDFCF9]">
      <Navbar onCartClick={() => setIsCartOpen(true)} cartCount={cart.reduce((s, i) => s + i.quantity, 0)} />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={heroImage}
          className="absolute inset-0 w-full h-full object-cover animate-fadeIn"
          alt="Kastoria Hero"
        />
        <div className="absolute inset-0 hero-gradient"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-12 pt-20">
          <div className="hidden md:block"></div>
          <div className="text-white text-center md:text-left space-y-6">
            <span className="text-xs uppercase tracking-[0.5em] font-bold block opacity-90">Φασολια Καστοριας ΠΓΕ</span>
            <h1 className="text-5xl md:text-7xl font-bold leading-tight serif">
              Η Ψυχή του <br /> <span className="italic">Ελληνικού Τραπεζιού</span>
            </h1>
            <p className="text-lg md:text-xl text-blue-50/80 max-w-lg leading-relaxed font-light">
              Απευθείας από τα πλούσια εδάφη της λίμνης Ορεστιάδας. Όσπρια κληρονομιάς καλλιεργημένα με πάθος και παράδοση αιώνων.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a href="#marketplace" className="bg-white text-kastoria-blue px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-kastoria-blue hover:text-white transition-all shadow-xl">
                Αγοραστε Τωρα
              </a>
              <a
                href="#heritage"
                className="border border-white/40 bg-white/10 backdrop-blur-sm text-white px-10 py-4 font-bold uppercase tracking-widest text-sm hover:bg-white/20 transition-all text-center"
              >
                Η Ιστορια Μας
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Stats/Highlight */}
      <div className="py-12 bg-white border-b border-linen">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { label: 'Ιδρυση', val: '1922' },
            { label: 'Τοπικοι Παραγωγοι', val: '240+' },
            { label: 'Περιοχες ΠΓΕ', val: '3' },
            { label: 'Βραβεια Ποιοτητας', val: '12' },
          ].map((stat, idx) => (
            <div key={idx} className="text-center border-r last:border-0 border-linen reveal">
              <p className="text-2xl font-bold text-kastoria-blue serif mb-1">{stat.val}</p>
              <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Marketplace Section */}
      <section id="marketplace" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 space-y-4 md:space-y-0 reveal">
          <div className="max-w-3xl">
            <div className="flex items-center space-x-4 mb-6">
              <div className="h-[1px] w-8 bg-orange-700/40"></div>
              <span className="text-[11px] uppercase tracking-[0.4em] text-orange-700 font-bold block">Επιλογη Παζαριου</span>
            </div>

            <h2 className="text-5xl md:text-7xl font-bold text-kastoria-blue serif leading-none tracking-tight">
              Η Αγορά μας
            </h2>

            <div className="mt-10 space-y-6">
              <p className="text-2xl md:text-4xl text-gray-800 serif italic leading-tight">
                "Από τη λίμνη στο τραπέζι σας."
              </p>
              <p className="text-lg text-gray-500 font-light leading-relaxed max-w-xl border-l border-linen pl-8">
                Επιλέξτε από τα χειροποίητα λινά τσουβάλια μας, σε κάθε μέγεθος για κάθε ανάγκη, μεταφέροντας την αυθεντική γεύση της Καστοριανής γης στο σπίτι σας.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PRODUCTS.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
            />
          ))}
        </div>
      </section>

      {/* Heritage Section */}
      <section id="heritage" className="py-24 overflow-hidden reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-linen grid md:grid-cols-2 overflow-hidden border border-linen">
            <div className="p-12 md:p-20 flex flex-col justify-center">
              <h2 className="text-4xl font-bold text-kastoria-blue mb-8 serif italic">Η Κληρονομιά των "Γιγάντων"</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Η καλλιέργεια των γιγάντων στην Καστοριά χρονολογείται από γενιές. Το μοναδικό μικροκλίμα, που χαρακτηρίζεται από την υγρασία της λίμνης Ορεστιάδας και τις ορεινές αύρες, δημιουργεί ένα φασόλι με εξαιρετικά λεπτή φλούδα.
              </p>
              <p className="text-gray-600 mb-10 leading-relaxed italic">
                Οι αγρότες μας χρησιμοποιούν ακόμα την παραδοσιακή 'μπέσα' - έναν άγραφο κώδικα τιμής - για να διασφαλίσουν ότι μόνο η υψηλότερη ποιότητα σοδειάς φτάνει στην αγορά.
              </p>
              <button className="self-start text-kastoria-blue font-bold uppercase tracking-widest text-xs border-b-2 border-kastoria-blue pb-1 hover:text-orange-600 hover:border-orange-600 transition-all">
                Μαθετε για το ΠΓΕ
              </button>
            </div>
            <div className="relative min-h-[400px]">
              <video
                src="/video2.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </div>
      </section>

      <AIChefSection />

      {/* Footer */}
      <footer className="bg-white border-t border-linen pt-24 pb-12 reveal">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-20">
            <div className="md:col-span-1">
              <h3 className="text-xl font-bold text-kastoria-blue mb-6 serif tracking-tight uppercase">Η ΚΛΗΡΟΝΟΜΙΑ ΤΗΣ ΚΑΣΤΟΡΙΑΣ</h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                Αυθεντική αγορά για premium ελληνικά όσπρια. Διατηρώντας την κληρονομιά της Βόρειας Ελλάδας για τον παγκόσμιο γαστρονομικό καλλιτέχνη.
              </p>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-gray-900">Ανακαλυψτε</h4>
              <ul className="text-sm text-gray-500 space-y-4">
                <li><a href="#heritage" className="hover:text-kastoria-blue transition-colors cursor-pointer">Η Ιστορία μας</a></li>
                <li><a href="#" className="hover:text-kastoria-blue transition-colors">Συνεργάτες Αγρότες</a></li>
                <li><a href="#" className="hover:text-kastoria-blue transition-colors">Βιωσιμότητα</a></li>
                <li><a href="#" className="hover:text-kastoria-blue transition-colors">Αποστολές</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-gray-900">Πιστοποιησεις</h4>
              <ul className="text-sm text-gray-500 space-y-4">
                <li><a href="#" className="hover:text-kastoria-blue transition-colors">Πιστοποίηση ΠΓΕ</a></li>
                <li><a href="#" className="hover:text-kastoria-blue transition-colors">Αρχείο Συνταγών</a></li>
                <li><a href="#" className="hover:text-kastoria-blue transition-colors">Χονδρική Πώληση</a></li>
                <li><a href="#" className="hover:text-kastoria-blue transition-colors">Επικοινωνία</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-xs uppercase tracking-widest font-bold mb-6 text-gray-900">Newsletter</h4>
              <p className="text-sm text-gray-500 mb-4">Εγγραφείτε για νέα της σοδειάς.</p>
              <div className="flex">
                <input type="email" placeholder="email@address.gr" className="bg-gray-50 border border-linen px-4 py-2 text-sm flex-grow focus:outline-none focus:border-kastoria-blue" />
                <button className="bg-kastoria-blue text-white px-4 py-2 text-xs font-bold uppercase tracking-widest">Εγγραφη</button>
              </div>
            </div>
          </div>
          <div className="border-t border-linen pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">© 2024 Η Κληρονομιά της Καστοριάς. Χειροποίητα στην Ελλάδα.</p>
          </div>
        </div>
      </footer>

      {/* Slide-over Cart */}
      {isCartOpen && (
        <div className="fixed inset-0 z-[100] overflow-hidden">
          <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity" onClick={() => setIsCartOpen(false)}></div>
          <div className="absolute inset-y-0 right-0 max-w-full flex">
            <div className="w-screen max-w-md bg-white shadow-2xl">
              <div className="h-full flex flex-col py-6 bg-white overflow-y-scroll">
                <div className="px-6 flex items-start justify-between">
                  <h2 className="text-2xl font-bold text-kastoria-blue serif">Το Καλάθι σας</h2>
                  <button onClick={() => setIsCartOpen(false)} className="text-gray-400 hover:text-gray-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <div className="mt-12 flex-grow px-6">
                  {cart.length === 0 ? (
                    <div className="text-center py-20">
                      <p className="text-gray-500 mb-4 italic">Το καλάθι σας είναι άδειο σαν χωράφι το χειμώνα.</p>
                      <button
                        onClick={() => setIsCartOpen(false)}
                        className="text-kastoria-blue font-bold uppercase tracking-widest text-xs border-b-2 border-kastoria-blue"
                      >
                        Ξεκινηστε τις αγορες
                      </button>
                    </div>
                  ) : (
                    <ul className="divide-y divide-linen">
                      {cart.map(item => (
                        <li key={item.product.id} className="py-6 flex">
                          <div className="flex-shrink-0 w-24 h-24 overflow-hidden border border-linen">
                            <img src={item.product.image} className="w-full h-full object-cover" />
                          </div>
                          <div className="ml-4 flex-grow">
                            <div className="flex justify-between text-base font-medium text-gray-900">
                              <h3 className="font-bold serif">{item.product.name}</h3>
                              <p className="ml-4">€{(item.product.pricePerKg * item.quantity).toFixed(2)}</p>
                            </div>
                            <div className="mt-4 flex items-center justify-between text-sm">
                              <p className="text-gray-500">Ποσότητα: {item.quantity} kg</p>
                              <button
                                onClick={() => removeFromCart(item.product.id)}
                                className="text-orange-600 font-bold hover:text-orange-700 uppercase tracking-tighter text-[10px]"
                              >
                                Αφαιρεση
                              </button>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="border-t border-linen pt-8 px-6 space-y-4">
                  <div className="flex justify-between text-lg font-bold text-kastoria-blue serif">
                    <span>Συνολο</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                  <button className="w-full bg-kastoria-blue text-white py-4 font-bold uppercase tracking-widest text-sm hover:bg-slate-800 transition-all">
                    Ολοκληρωση Αγορας
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};

export default App;
