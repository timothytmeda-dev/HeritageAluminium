import { Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function FloatingCTA() {
  return (
    <motion.div 
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 1, type: 'spring' }}
      className="fixed bottom-8 right-8 z-40 group"
    >
      <button 
        onClick={() => window.print()}
        className="flex items-center gap-3 bg-heritage-navy text-white px-6 py-4 rounded-full shadow-2xl hover:bg-heritage-orange transition-all duration-500 scale-90 hover:scale-100"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold uppercase tracking-widest text-xs">
          Request a Catalog
        </span>
        <Download size={24} />
      </button>
    </motion.div>
  );
}
