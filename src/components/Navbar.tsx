import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 w-full z-50 px-8 py-6 flex justify-between items-center mix-blend-difference"
    >
      <div className="text-xl font-bold tracking-tighter" data-cursor-expand>
        ELARA<span className="text-primary">.</span>FILMS
      </div>
      <div className="flex gap-12 text-sm font-medium tracking-widest uppercase">
        {['Work', 'About', 'Contact'].map((item) => (
          <a 
            key={item} 
            href={`#${item.toLowerCase()}`}
            className="hover:text-primary transition-colors duration-300"
          >
            {item}
          </a>
        ))}
      </div>
    </motion.nav>
  );
};
