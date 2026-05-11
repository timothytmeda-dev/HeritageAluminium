import { NavLink } from 'react-router-dom';
import { Facebook, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-heritage-navy text-white pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-2">
             <NavLink to="/" className="flex items-center mb-6">
              <img src="/logo.png" alt="Heritage Aluminium Logo" className="h-14 w-auto brightness-0 invert" />
            </NavLink>
            <p className="text-slate-400 max-w-sm leading-relaxed mb-8">
              Zimbabwe's leading provider of premium aluminium accessories and security solutions. Engineering excellence into every frame since 2008.
            </p>
            <div className="flex gap-4">
              {[
                { Icon: Facebook, href: "https://www.facebook.com/people/Heritage-Aluminium/61581813990447/#" },
                { Icon: Instagram, href: "https://www.instagram.com/heritage.aluminium/" },
                { Icon: Mail, href: "mailto:mary@heritagealuminium.co.zw" }
              ].map(({ Icon, href }, i) => (
                <a 
                  key={i} 
                  href={href} 
                  target={href.startsWith('http') ? "_blank" : undefined}
                  rel={href.startsWith('http') ? "noopener noreferrer" : undefined}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-heritage-orange hover:border-heritage-orange transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-heritage-orange font-bold uppercase tracking-widest text-sm mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li><NavLink to="/" className="text-slate-400 hover:text-white transition-colors">Home</NavLink></li>
              <li><NavLink to="/products" className="text-slate-400 hover:text-white transition-colors">Products & Services</NavLink></li>
              <li><NavLink to="/contact" className="text-slate-400 hover:text-white transition-colors">Contact Us</NavLink></li>
              <li><a href="#" className="text-slate-400 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
             <h4 className="text-heritage-orange font-bold uppercase tracking-widest text-sm mb-6">Get In Touch</h4>
             <ul className="space-y-3 text-slate-400 text-sm">
                <li>Shop No. 5 J-Way Mall, Harare</li>
                <li>+263 773 403 284</li>
                <li>mary@heritagealuminium.co.zw</li>
             </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs tracking-wide">
            © 2024 Heritage Aluminium. All Rights Reserved.
          </p>
          <a href="http://www.heritagealuminium.co.zw" className="text-heritage-orange text-xs font-bold tracking-widest hover:underline">
            WWW.HERITAGEALUMINIUM.CO.ZW
          </a>
        </div>
      </div>
    </footer>
  );
}
