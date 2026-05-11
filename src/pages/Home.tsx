import { motion } from 'motion/react';
import { ArrowRight, ShieldCheck, Zap, Gem, CircleDollarSign, Target, Eye } from 'lucide-react';
import { Link } from 'react-router-dom';
import Gallery from '../components/Gallery';

export default function Home() {
  const coreValues = [
    { icon: <Zap className="text-heritage-orange" />, title: 'Efficiency', desc: 'Streamlined service and delivery.' },
    { icon: <ShieldCheck className="text-heritage-orange" />, title: 'Durability', desc: 'Products built to last in any environment.' },
    { icon: <Gem className="text-heritage-orange" />, title: 'Integrity', desc: 'Honest, transparent business practices.' },
    { icon: <CircleDollarSign className="text-heritage-orange" />, title: 'Competitive Pricing', desc: 'Quality solutions that fit your budget.' },
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="/Header.jpg" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover grayscale-[0.2] brightness-[0.4]"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-[1.1] mb-6">
              Premium Aluminium <br />
              <span className="text-heritage-orange">& Security</span> Solutions.
            </h1>
            <p className="text-slate-300 text-lg md:text-xl font-medium mb-10 max-w-2xl leading-relaxed">
              Wholly Zimbabwean-owned, providing world-class accessories, expert consultation, and robust security finishes for residential and corporate projects.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/products" className="btn-primary flex items-center gap-2 group">
                Explore Products
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link to="/contact" className="btn-outline border-white text-white hover:bg-heritage-orange hover:border-heritage-orange hover:text-white">
                Get a Quote
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="absolute bottom-12 left-0 w-full">
          <div className="max-w-7xl mx-auto px-4 flex justify-end">
             <div className="bg-heritage-navy/80 p-8 border-l-4 border-heritage-orange max-w-md backdrop-blur-sm hidden lg:block">
                <p className="text-white/80 text-xs uppercase tracking-widest font-bold mb-2">Since 2008</p>
                <p className="text-white text-sm italic font-medium leading-relaxed">
                  "Heritage Technologies (Pvt) Ltd. T/A Heritage Aluminium oers support and consultation regarding any aluminium nishes."
                </p>
             </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="text-heritage-orange font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Welcome to</span>
              <h2 className="text-4xl md:text-5xl font-bold text-heritage-navy mb-8">Heritage Aluminium</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-6">
                We supply premium accessories for doors, windows, and balustrades. We offer more than just products; we provide support and consultation to ensure your finishes are perfect.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                In line with security, we also offer steel expandable doors and window grills, ensuring that your architectural vision is as secure as it is beautiful.
              </p>
            </motion.div>
            <div className="relative max-w-lg mx-auto lg:ml-auto">
                <img 
                  src="/Worker-Welcome.jpg" 
                  alt="Heritage Aluminium Expert Work" 
                  className="w-full aspect-square object-cover shadow-2xl relative z-10"
                />
               <div className="absolute -top-6 -left-6 w-full h-full border-4 border-heritage-orange z-0"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-heritage-navy text-white relative overflow-hidden">
        {/* Faint Logo Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
          style={{ 
            backgroundImage: 'url(/logo.png)', 
            backgroundSize: '120px', 
            backgroundRepeat: 'repeat',
            filter: 'brightness(0) invert(1)'
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-10 border-l-2 border-white/20 bg-white/5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-heritage-orange/10 rounded-lg">
                  <Target className="text-heritage-orange" size={32} />
                </div>
                <h3 className="text-heritage-orange text-3xl font-bold">Our Mission</h3>
              </div>
              <p className="text-slate-300 text-xl font-light leading-relaxed">
                To offer quality and secure aluminium accessories in a customer-friendly environment, meeting trendy needs through custom-designed solutions.
              </p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="p-10 border-l-2 border-white/20 bg-white/5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-heritage-orange/10 rounded-lg">
                  <Eye className="text-heritage-orange" size={32} />
                </div>
                <h3 className="text-heritage-orange text-3xl font-bold">Our Vision</h3>
              </div>
              <p className="text-slate-300 text-xl font-light leading-relaxed">
                To be the key aluminium architectural and hardware supplier nationwide and across borders, setting the gold standard for innovation and reliability.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <span className="text-heritage-orange font-bold uppercase tracking-[0.3em] text-sm mb-4 block">Visual Excellence</span>
          <h2 className="text-4xl font-bold text-heritage-navy mb-4">Our Elite Installations</h2>
          <div className="w-24 h-1 bg-heritage-orange mx-auto"></div>
        </div>
        <Gallery />
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-16">
          <h2 className="text-4xl font-bold text-heritage-navy mb-4 uppercase tracking-tighter">Why Choose Us?</h2>
          <div className="w-24 h-1 bg-heritage-orange mx-auto"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 shadow-sm hover:shadow-xl transition-shadow text-center border-t-4 border-heritage-navy hover:border-heritage-orange"
              >
                <div className="inline-flex p-4 bg-slate-50 rounded-full mb-6">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-heritage-navy mb-3">{value.title}</h4>
                <p className="text-slate-500 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
