import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  category: string;
  image?: string;
  videoUrl?: string;
  index: number;
}

export const ProjectCard = ({ title, category, image, videoUrl, index }: ProjectCardProps) => {
  const [isPlaying, setIsPlaying] = useState(false);

  // Extract Video ID and determine platform for the cleanest embed format
  const getEmbedUrl = (url: string) => {
    if (!url) return '';

    // YouTube Regex
    const youtubeRegExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const youtubeMatch = url.match(youtubeRegExp);
    const youtubeVideoId = (youtubeMatch && youtubeMatch[2].length === 11) ? youtubeMatch[2] : null;

    if (youtubeVideoId) {
      return `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&modestbranding=1&rel=0`;
    }

    // Vimeo Regex
    const vimeoRegExp = /(?:vimeo)\.com\/(?:video\/|channels\/\w+\/|groups\/[^/]+\/videos\/|album\/\d+\/video\/|)(\d+)(?:$|\/|\?)/;
    const vimeoMatch = url.match(vimeoRegExp);
    const vimeoVideoId = vimeoMatch ? vimeoMatch[1] : null;

    if (vimeoVideoId) {
      // Using parameters from the user's provided embed code for consistency
      return `https://player.vimeo.com/video/${vimeoVideoId}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479`;
    }
    
    return url; // Fallback if neither YouTube nor Vimeo
  };

  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group relative aspect-[16/9] overflow-hidden rounded-2xl bg-surface border border-border/50"
    >
      <AnimatePresence mode="wait">
        {!isPlaying ? (
          <motion.div 
            key="thumbnail"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="relative w-full h-full cursor-pointer"
            onClick={() => videoUrl && setIsPlaying(true)}
          >
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 brightness-[0.85] group-hover:brightness-100"
            />
            
            {/* Play Button Overlay */}
            {videoUrl && (
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-20 h-20 flex items-center justify-center rounded-full bg-primary/90 text-background backdrop-blur-sm shadow-2xl shadow-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-300"
                >
                  <Play fill="currentColor" size={32} className="ml-1" />
                </motion.div>
              </div>
            )}

            {/* Content Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent flex flex-col justify-end p-8 pointer-events-none">
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-2">{category}</span>
              <h3 className="text-3xl font-bold tracking-tight">{title}</h3>
            </div>
          </motion.div>
        ) : (
          <motion.div 
            key="video"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="w-full h-full bg-black"
          >
            <iframe 
              src={getEmbedUrl(videoUrl!)}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
              allowFullScreen
              title={title}
            />
            {/* Close Video Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                setIsPlaying(false);
              }}
              className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-primary hover:text-background text-white px-3 py-1 rounded-full text-xs font-bold backdrop-blur-md transition-colors"
            >
              CLOSE
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};
