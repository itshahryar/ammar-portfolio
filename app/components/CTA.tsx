'use client';

import { motion } from 'framer-motion';

export default function CTA() {
  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-2"
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-emerald-100 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-emerald-700">
              <span className="h-1 w-1 rounded-full bg-emerald-500 animate-pulse"></span>
              Let&apos;s Collaborate
            </span>
          </motion.div>

          <h1 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl lg:text-4xl">
            Ready to{' '}
            <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
              Work Together?
            </span>
          </h1>

          <div className="mt-3 flex justify-center">
            <div className="h-0.5 w-24 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full"></div>
          </div>

          <p className="mx-auto mt-3 max-w-2xl text-sm text-slate-600 leading-relaxed mb-12">
            Ready to bring your vision to life? Let&apos;s discuss how we can work together to create something extraordinary.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.a
              href="mailto:contact@ammar.com"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Get In Touch
            </motion.a>
            <motion.a
              href="#work"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-emerald-500 text-emerald-600 rounded-full font-semibold text-lg hover:bg-emerald-50 transition-colors"
            >
              View Portfolio
            </motion.a>
          </div>
          <div className="flex justify-center gap-8 text-gray-600">
            <a href="#" className="hover:text-emerald-500 transition-colors text-lg">LinkedIn</a>
            <a href="#" className="hover:text-emerald-500 transition-colors text-lg">Twitter</a>
            <a href="#" className="hover:text-emerald-500 transition-colors text-lg">Instagram</a>
            <a href="#" className="hover:text-emerald-500 transition-colors text-lg">Email</a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

