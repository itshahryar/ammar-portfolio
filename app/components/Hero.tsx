'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const heroRef = useRef<HTMLDivElement>(null);
  const opacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);

  return (
    <motion.section
      ref={heroRef}
      style={{ opacity }}
      className="relative min-h-screen flex items-center justify-center bg-white pt-6 overflow-hidden"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Large circles */}
        <motion.div
          className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 -left-32 w-80 h-80 bg-emerald-300 rounded-full opacity-15 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            x: [0, -40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-64 h-64 bg-emerald-400 rounded-full opacity-10 blur-2xl"
          animate={{
            scale: [1, 1.4, 1],
            x: [0, 30, 0],
            y: [0, -40, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
{/* --- LARGE CIRCLE FOR BOTTOM LEFT (Darker Version) --- */}
<motion.div
  className="absolute -bottom-40 -left-40 w-96 h-96 bg-emerald-400 rounded-full opacity-30 blur-3xl"
  animate={{
    scale: [1, 1.15, 1],
    x: [0, -30, 0],
    y: [0, -40, 0],
  }}
  transition={{
    duration: 22,
    repeat: Infinity,
    ease: "easeInOut",
  }}
/>
        
        {/* Medium circles */}
        <motion.div
          className="absolute top-1/3 left-1/4 w-48 h-48 bg-emerald-300 rounded-full opacity-20 blur-2xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-56 h-56 bg-emerald-200 rounded-full opacity-15 blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        
        {/* Small decorative dots */}
        <div className="absolute top-20 left-1/2 w-2 h-2 bg-emerald-400 rounded-full opacity-30" />
        <div className="absolute top-40 right-1/3 w-3 h-3 bg-emerald-500 rounded-full opacity-25" />
        <div className="absolute bottom-40 left-1/3 w-2.5 h-2.5 bg-emerald-400 rounded-full opacity-30" />
        <div className="absolute bottom-60 right-1/2 w-2 h-2 bg-emerald-300 rounded-full opacity-25" />
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          // --- CHANGE HERE ---
          className="max-w-4xl md:max-w-3xl mx-auto"
        >
          {/* Video Placeholder with Emerald Background */}
          <div className="mb-12 relative">
            <div className="aspect-square sm:aspect-video rounded-3xl bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700 flex items-center justify-center shadow-2xl overflow-hidden relative">
              {/* Inner decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                <motion.div
                  className="absolute top-4 right-4 w-32 h-32 bg-white/10 rounded-full blur-xl"
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-4 left-4 w-24 h-24 bg-emerald-300/20 rounded-full blur-lg"
                  animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.2, 0.3, 0.2],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-emerald-400/10 rounded-full blur-2xl" />
              </div>
              
              {/* Video content */}
              <div className="text-center p-12 relative z-10">
                <motion.div
                  className="text-6xl mb-4"
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  🎥
                </motion.div>
                <p className="text-lg text-white font-semibold">Introductory Video</p>
                <p className="text-sm text-emerald-100 mt-2">Add your video here</p>
              </div>
              
              {/* Corner decorations */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-4 border-l-4 border-white/20 rounded-tl-3xl" />
              <div className="absolute top-0 right-0 w-20 h-20 border-t-4 border-r-4 border-white/20 rounded-tr-3xl" />
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-4 border-l-4 border-white/20 rounded-bl-3xl" />
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-4 border-r-4 border-white/20 rounded-br-3xl" />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

