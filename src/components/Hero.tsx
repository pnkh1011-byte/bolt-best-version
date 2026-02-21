import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const Hero = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <motion.div 
        style={{ y: y1, opacity }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.pexels.com/photos/3062541/pexels-photo-3062541.jpeg?auto=compress&cs=tinysrgb&w=1920" 
          alt="Cinematic Background"
          className="w-full h-full object-cover brightness-50"
        />
      </motion.div>

      <div className="relative z-10 text-center px-4">
        <motion.h1 
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-7xl md:text-9xl font-bold tracking-tighter mb-6"
        >
          CRAFTING <br />
          <span className="text-transparent border-text border-2 px-4 italic" style={{ WebkitTextStroke: '1px white' }}>VISUAL</span> STORIES
        </motion.h1>
        
        <motion.p
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-textSecondary text-lg md:text-xl max-w-2xl mx-auto font-light tracking-wide"
        >
          Award-winning creative videographer specializing in cinematic narratives and high-end commercial production.
        </motion.p>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-textSecondary">Scroll to explore</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};
