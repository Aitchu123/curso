import React, { useEffect, useState } from 'react';
import { ShieldCheck } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

export const SalesTopBar = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY < 60);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 24 }}
          className="w-full bg-[#8B5E34] text-white py-2 px-4 shadow-md relative z-40"
        >
          <div className="max-w-7xl mx-auto flex flex-col items-center justify-center text-center gap-1">
            <p className="text-base md:text-lg font-extrabold uppercase tracking-wide animate-pulse">
              ⏰ 96% das vagas preenchidas
            </p>
            <div className="flex items-center gap-2 text-xs md:text-sm font-semibold">
              <span>Instituto Urolaser</span>
              <ShieldCheck className="w-4 h-4 md:w-5 md:h-5 text-yellow-300" />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
