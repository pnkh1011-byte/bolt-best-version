import React from 'react';
import { ProjectCard } from './ProjectCard';

const projects = [
  {
    title: "The Urban Pulse",
    category: "Commercial",
    image: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Wilderness Echoes",
    category: "Documentary",
    videoUrl: "https://www.youtube.com/watch?v=P64CWPaCzf8",
    image: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "Neon Dreams",
    category: "Music Video",
    image: "https://images.pexels.com/photos/1649691/pexels-photo-1649691.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    title: "IBG LA Promo Commercial",
    category: "Commercial",
    videoUrl: "https://vimeo.com/1166864359?share=copy&fl=sv&fe=ci",
    image: "https://images.pexels.com/photos/3184433/pexels-photo-3184433.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Placeholder image for Vimeo project
  },
  {
    title: "Velocity",
    category: "Automotive",
    image: "https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

export const Portfolio = () => {
  return (
    <section id="work" className="py-32 px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div>
          <h2 className="text-sm uppercase tracking-[0.4em] text-primary mb-4">Selected Works</h2>
          <p className="text-5xl md:text-6xl font-bold tracking-tighter">FEATURED PROJECTS</p>
        </div>
        <button className="text-sm font-medium border-b border-primary pb-1 hover:text-primary transition-colors tracking-widest">
          VIEW ALL PROJECTS
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};
