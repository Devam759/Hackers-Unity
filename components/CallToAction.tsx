"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, SparklesIcon } from "@heroicons/react/24/outline";

export default function CallToAction() {
  return (
    <section id="join" className="relative py-20 md:py-28 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-primary opacity-95" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center max-w-5xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {/* Icon */}
        <motion.div
          className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm mb-8"
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: "spring" }}
        >
          <SparklesIcon className="h-8 w-8 text-white" />
        </motion.div>

        {/* Heading */}
        <h2 className="heading-lg text-white mb-6">
          Ready to Join Us?
        </h2>

        {/* Description */}
        <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto">
          Be part of India&apos;s premier hackathon community. Connect with passionate developers, 
          participate in amazing events, and build the future together.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <motion.a
            href="mailto:hackerunity.community@gmail.com"
            className="px-8 py-4 bg-white text-primary-700 font-bold rounded-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105 inline-flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
            <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </motion.a>
          <motion.a
            href="#events"
            className="px-8 py-4 border-2 border-white text-white font-bold rounded-lg hover:bg-white hover:text-primary-700 transition-all inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Events
          </motion.a>
        </div>

        {/* Stats */}
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-12 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <div>
            <div className="text-3xl font-bold">100% Free</div>
            <div className="text-white/80 text-sm">Always & Forever</div>
          </div>
          <div>
            <div className="text-3xl font-bold">All Levels</div>
            <div className="text-white/80 text-sm">Beginner to Expert</div>
          </div>
          <div>
            <div className="text-3xl font-bold">Active Daily</div>
            <div className="text-white/80 text-sm">24/7 Community</div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

