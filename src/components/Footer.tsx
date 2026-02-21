import React from 'react';
import { Instagram, Twitter, Youtube, ArrowUpRight } from 'lucide-react';

export const Footer = () => {
  return (
    <footer id="contact" className="pt-32 pb-12 px-8 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-24">
          <div>
            <h2 className="text-7xl md:text-9xl font-bold tracking-tighter mb-8">LET'S <br />TALK.</h2>
            <a 
              href="mailto:hello@elarafilms.com" 
              className="text-2xl md:text-4xl font-light hover:text-primary transition-colors flex items-center gap-4 group"
              data-cursor-expand
            >
              hello@elarafilms.com
              <ArrowUpRight className="w-8 h-8 group-hover:translate-x-2 group-hover:-translate-y-2 transition-transform" />
            </a>
          </div>
          
          <div className="mt-12 md:mt-0 flex gap-6">
            {[Instagram, Twitter, Youtube].map((Icon, i) => (
              <a key={i} href="#" className="p-4 rounded-full border border-border hover:bg-primary hover:border-primary transition-all duration-300">
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>

        <div className="pt-12 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6 text-textSecondary text-sm">
          <p>© 2025 ELARA FILMS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">PRIVACY POLICY</a>
            <a href="#" className="hover:text-white transition-colors">TERMS OF SERVICE</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
