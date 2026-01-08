'use client';

import { FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="relative py-8 bg-gradient-to-br from-emerald-700 to-emerald-600">
      {/* Decorative top border with a slightly lighter accent */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent"></div>
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-3 text-white">
              Ammar
            </h3>
            <p className="text-base text-emerald-100 max-w-md leading-relaxed">
              Multidisciplinary professional crafting compelling narratives across media, content, and digital spaces.
            </p>
          </div>
          
          <div className="flex gap-4">
            <a 
              href="#" 
              className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-emerald-500/30 text-emerald-100 hover:text-white hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-110" 
              aria-label="LinkedIn"
            >
              <FaLinkedin className="text-xl" />
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </a>
            <a 
              href="#" 
              className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-emerald-500/30 text-emerald-100 hover:text-white hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-110" 
              aria-label="Twitter"
            >
              <FaTwitter className="text-xl" />
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </a>
            <a 
              href="#" 
              className="group relative p-3 rounded-full bg-white/10 backdrop-blur-sm border border-emerald-500/30 text-emerald-100 hover:text-white hover:bg-white/20 hover:border-emerald-400/50 transition-all duration-300 hover:scale-110" 
              aria-label="Instagram"
            >
              <FaInstagram className="text-xl" />
              <span className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

