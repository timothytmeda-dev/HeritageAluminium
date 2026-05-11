import { MapPin, Phone, Mail, FileText, Landmark } from 'lucide-react';
import { motion } from 'motion/react';

export default function Contact() {
  const contacts = [
    { name: 'Marylene Makosa', role: 'Sales & Marketing', phone: '+263 773 403 284', email: 'mary@heritagealuminium.co.zw' },
    { name: 'Patrick Makosa', role: 'Managing Director', phone: '+263 772 890 550', email: 'patrick@heritagealuminium.co.zw' }
  ];

  return (
    <div className="pt-20">
      <section className="relative bg-heritage-navy py-24 overflow-hidden min-h-[400px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="/welcome-building.jpg" 
            alt="Contact Us" 
            className="w-full h-full object-cover brightness-[0.3]"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 text-center relative z-10 w-full text-white">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 uppercase tracking-tighter"
          >
            Let’s Build Something <br/> <span className="text-heritage-orange">Great Together.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-slate-300 text-lg max-w-2xl mx-auto font-medium"
          >
            Visit our showroom in Harare or get in touch with our experts for professional consultation.
          </motion.p>
        </div>
      </section>

      <section className="bg-slate-50 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="bg-white p-10 shadow-sm border-l-8 border-heritage-navy">
                <h2 className="text-2xl font-bold mb-8 flex items-center gap-3">
                  <Phone className="text-heritage-orange" />
                  Direct Contacts
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                  {contacts.map((c, idx) => (
                    <div key={idx} className="space-y-2">
                       <p className="text-xs font-bold uppercase tracking-widest text-slate-400">{c.role}</p>
                       <h3 className="text-xl font-bold text-heritage-navy">{c.name}</h3>
                       <div className="pt-4 space-y-2">
                          <a 
                            href={`https://wa.me/${c.phone.replace(/[\+\s]/g, '')}`} 
                            target="_blank" 
                            rel="noopener noreferrer" 
                            className="flex items-center gap-2 text-slate-600 hover:text-heritage-orange transition-colors group"
                          >
                            <span className="font-medium">{c.phone}</span>
                            <span className="text-[10px] bg-[#25D366] text-white px-2 py-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">WhatsApp</span>
                          </a>
                          <a href={`mailto:${c.email}`} className="flex items-center gap-2 text-slate-600 hover:text-heritage-orange transition-colors">
                            <span className="font-medium text-sm">{c.email}</span>
                          </a>
                       </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white p-10 shadow-sm border-l-8 border-heritage-orange">
                <h2 className="text-2xl font-bold mb-6 flex items-center gap-3 text-heritage-navy">
                  <MapPin size={24} className="text-heritage-orange" />
                  Visit Our Showroom
                </h2>
                <p className="text-slate-600 font-medium text-lg leading-relaxed mb-6">
                  Shop No. 5 J-Way Mall, 13 Julius Nyerere Way, Harare, Zimbabwe.
                </p>
                <div className="w-full h-64 bg-slate-200 grayscale">
                  {/* Map Placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm font-bold uppercase tracking-widest">
                    Google Maps Integration Window
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-8">
               <div className="bg-heritage-navy p-10 text-white shadow-xl">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                    <FileText className="text-heritage-orange" />
                    Credentials
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Registered Name</p>
                      <p className="font-bold">Heritage Technologies (Pvt) Ltd.</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">Registration No.</p>
                      <p className="font-bold">15069/2008</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-widest text-white/50 mb-1">VAT Number</p>
                      <p className="font-bold">10073372</p>
                    </div>
                    <p className="text-xs italic text-white/60 pt-4">* Tax Clearance (ITF263) & Certificate of Incorporation available upon request.</p>
                  </div>
               </div>

               <div className="bg-white p-10 shadow-sm border border-slate-100">
                  <h2 className="text-xl font-bold mb-6 flex items-center gap-3 text-heritage-navy border-b border-slate-100 pb-4">
                    <Landmark size={20} className="text-heritage-orange" />
                    Banking Details
                  </h2>
                  <div className="space-y-6">
                    <div>
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Local Currency (ZWL)</h4>
                      <p className="text-sm">Bank: CABS (Borrowdale)</p>
                      <p className="text-sm font-bold">1006279989</p>
                    </div>
                    <div className="pt-4">
                      <h4 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">Nostro FCA (USD)</h4>
                      <p className="text-sm">Bank: CABS (Borrowdale)</p>
                      <p className="text-sm font-bold">1124819436</p>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
