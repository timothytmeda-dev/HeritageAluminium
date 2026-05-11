import React, { useState, useEffect, useCallback } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Maximize2, Grid2X2, ArrowRight } from 'lucide-react';

const IMAGES = [
  "/1.jpg",
  "/2.jpg",
  "/3.jpg",
  "/4.jpg",
  "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000",
  "https://images.unsplash.com/photo-1510074377623-8cf13fb86c08?q=80&w=1000",
  "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1000",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1000",
  "https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=1000",
  "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000",
  "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1000",
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000",
  "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=1000",
  "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=1000",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=1000"
];

export default function Gallery() {
  const [isGridView, setIsGridView] = useState(false);
  const [selectedIdx, setSelectedIdx] = useState<number | null>(null);
  const [emblaRef, emblaApi] = useEmblaCarousel({ 
    loop: true, 
    align: 'start',
    slidesToScroll: 1
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const handleNext = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx + 1) % IMAGES.length);
    }
  };

  const handlePrev = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    if (selectedIdx !== null) {
      setSelectedIdx((selectedIdx - 1 + IMAGES.length) % IMAGES.length);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {!isGridView ? (
        <div className="relative group">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex -ml-4">
              {IMAGES.map((src, index) => (
                <div 
                  key={index} 
                  className="flex-[0_0_100%] sm:flex-[0_0_50%] lg:flex-[0_0_25%] pl-4"
                >
                  <motion.div
                    layoutId={`image-${index}`}
                    className="group relative cursor-pointer overflow-hidden bg-slate-100 aspect-square"
                    onClick={() => setSelectedIdx(index)}
                  >
                    <img 
                      src={src} 
                      alt={`Installation ${index + 1}`} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-heritage-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full scale-0 group-hover:scale-100 transition-transform duration-500">
                        <Maximize2 className="text-heritage-navy" size={16} />
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button
            className="absolute top-1/2 -left-4 md:-left-6 -translate-y-1/2 w-12 h-12 bg-white text-heritage-navy shadow-xl flex items-center justify-center hover:bg-heritage-orange hover:text-white transition-all z-10 opacity-0 group-hover:opacity-100"
            onClick={scrollPrev}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            className="absolute top-1/2 -right-4 md:-right-6 -translate-y-1/2 w-12 h-12 bg-white text-heritage-navy shadow-xl flex items-center justify-center hover:bg-heritage-orange hover:text-white transition-all z-10 opacity-0 group-hover:opacity-100"
            onClick={scrollNext}
          >
            <ChevronRight size={24} />
          </button>

          <div className="mt-12 text-center">
            <button 
              onClick={() => setIsGridView(true)}
              className="inline-flex items-center gap-2 px-8 py-4 bg-heritage-navy text-white text-xs font-bold uppercase tracking-widest hover:bg-heritage-orange transition-colors group"
            >
              <Grid2X2 size={16} />
              Show More / View All Installations
              <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      ) : (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {IMAGES.map((src, index) => (
              <motion.div
                key={index}
                layoutId={`image-${index}`}
                className="group relative cursor-pointer overflow-hidden bg-slate-100 aspect-square"
                onClick={() => setSelectedIdx(index)}
              >
                <img 
                  src={src} 
                  alt={`Installation ${index + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-heritage-navy/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-10 h-10 bg-white flex items-center justify-center rounded-full scale-0 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 className="text-heritage-navy" size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <button 
              onClick={() => setIsGridView(false)}
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-heritage-navy text-heritage-navy text-xs font-bold uppercase tracking-widest hover:bg-heritage-navy hover:text-white transition-colors"
            >
              Show Less
            </button>
          </div>
        </motion.div>
      )}

      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 sm:p-8"
            onClick={() => setSelectedIdx(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-heritage-orange transition-colors z-[60] p-2"
              onClick={() => setSelectedIdx(null)}
            >
              <X size={32} />
            </button>

            <button 
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-heritage-orange transition-colors z-[60] p-4 bg-white/5 rounded-full"
              onClick={handlePrev}
            >
              <ChevronLeft size={32} />
            </button>

            <button 
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-heritage-orange transition-colors z-[60] p-4 bg-white/5 rounded-full"
              onClick={handleNext}
            >
              <ChevronRight size={32} />
            </button>

            <motion.div
              layoutId={`image-${selectedIdx}`}
              className="relative max-w-5xl w-full max-h-[85vh] flex items-center justify-center z-[55]"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={IMAGES[selectedIdx]} 
                alt="Expanded Installation" 
                className="max-w-full max-h-[75vh] object-contain shadow-2xl"
              />
              <div className="absolute bottom-[-50px] left-0 right-0 text-center">
                <p className="text-white font-medium tracking-widest uppercase text-sm">
                  Installation {selectedIdx + 1} / {IMAGES.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}


