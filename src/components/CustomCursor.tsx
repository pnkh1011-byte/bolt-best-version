import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  const mouseX = useSpring(0, { stiffness: 500, damping: 28 });
  const mouseY = useSpring(0, { stiffness: 500, damping: 28 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);

      const target = e.target as HTMLElement;
      setIsHovering(target.hasAttribute('data-cursor-expand'));
      setIsPointer(window.getComputedStyle(target).cursor === 'pointer');
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <>
      <motion.div
        className="cursor-dot"
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
      <motion.div
        className="cursor-outline"
        animate={{
          scale: isHovering ? 2.5 : isPointer ? 1.5 : 1,
          backgroundColor: isHovering ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
        }}
        style={{ x: mouseX, y: mouseY, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
};
