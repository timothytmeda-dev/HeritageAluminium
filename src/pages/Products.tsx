import { motion } from 'motion/react';

export default function Products() {
  const categories = [
    {
      title: 'Aluminium Accessories',
      intro: 'Premium components for seamless operation and aesthetic appeal.',
      items: [
        'Door Handles (including Stainless Steel)',
        'Friction Stays & NKT Window Handles',
        'Sliding Door Rollers & Corner Cleats',
        'Aluminium Door Hinges',
        'Concertina, Vista, and Sliding/Folding Accessories'
      ],
      image: '/Hinge.png'
    },
    {
      title: 'Security & Structural',
      intro: 'Robust protection that complements modern architectural design.',
      items: [
        'Steel Expandable Security Doors',
        'Steel Window Grills',
        'Balustrade Accessories',
        'Frameless Glass Door Fittings',
        'Shower Cubicle Accessories'
      ],
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=1000'
    },
    {
      title: 'Hardware & Consumables',
      intro: 'Essential high-grade materials for durability and perfect finishes.',
      items: [
        'Gaskets & Seals (Butterfly, Wedge, Bubble)',
        'Professional Silicone Sealants',
        'Norton Tape (6mm, 8mm)',
        'Woolpiles (Window, Door, Galaxy)',
        'Fasteners (Pop rivets and high-grade screws)'
      ],
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=1000'
    }
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-heritage-navy py-24 overflow-hidden min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/4.jpg" 
            alt="Comprehensive Range" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 tracking-tighter"
          >
            <span className="text-white font-bold">Comprehensive</span> <br />
            <span className="text-heritage-orange font-bold">Product Range</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
          >
            We understand the investment required to construct durable, eye-catching structures. Our inventory is curated for quality and security.
          </motion.p>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 space-y-32">
          {categories.map((cat, idx) => (
            <div key={idx} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <motion.div
                initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className={idx % 2 === 1 ? 'lg:order-2' : ''}
              >
                <span className="text-heritage-orange font-bold text-sm tracking-widest uppercase mb-2 block">Category {idx + 1}</span>
                <h2 className="text-4xl font-bold text-heritage-navy mb-6">{cat.title}</h2>
                <p className="text-slate-600 text-lg mb-8">{cat.intro}</p>
                <ul className="space-y-3">
                  {cat.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-700">
                      <div className="w-2 h-2 mt-2 bg-heritage-orange shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className={`relative ${idx % 2 === 1 ? 'lg:order-1' : ''}`}
              >
                <img src={cat.image} alt={cat.title} className="w-full aspect-square object-cover shadow-2xl bg-white" />
                <div className="absolute inset-0 border-[20px] border-heritage-navy/5 -m-6 -z-10"></div>
              </motion.div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-24 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Professional Services</h2>
            <div className="w-20 h-1 bg-heritage-orange mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-10 border border-white/10 hover:border-heritage-orange transition-colors">
              <h3 className="text-2xl font-bold mb-4">Consultation</h3>
              <p className="text-slate-400">Expert advice on aluminium finishes, hardware selection, and technical installation requirements to ensure project success.</p>
            </div>
            <div className="p-10 border border-white/10 hover:border-heritage-orange transition-colors">
              <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
              <p className="text-slate-400">Tailored product sourcing and design for specific construction needs, meeting trend-setting architectural requirements.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
