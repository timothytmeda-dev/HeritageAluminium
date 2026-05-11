import { NavLink } from 'react-router-dom';
import { Menu, X, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Products & Services', path: '/products' },
    { name: 'Contact Us', path: '/contact' },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex-shrink-0 flex items-center">
            <NavLink to="/" className="flex items-center">
              <img src="/logo.png" alt="Heritage Aluminium Logo" className="h-12 w-auto" />
            </NavLink>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  `text-sm font-semibold tracking-wide uppercase transition-colors hover:text-heritage-orange ${
                    isActive ? 'text-heritage-orange underline underline-offset-8' : 'text-heritage-navy'
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <a 
              href="https://wa.me/263773403284" 
              className="flex items-center gap-2 px-4 py-2 bg-heritage-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-heritage-orange transition-colors"
            >
              <PhoneCall size={14} />
              Quick Quote
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-heritage-navy p-2 focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 space-y-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block text-base font-semibold uppercase tracking-wide px-3 py-2 ${
                      isActive ? 'text-heritage-orange' : 'text-heritage-navy'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <a 
                href="https://wa.me/263773403284" 
                className="flex items-center justify-center gap-2 w-full py-3 bg-heritage-navy text-white text-sm font-bold uppercase tracking-widest"
              >
                <PhoneCall size={18} />
                Quick Quote
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
