"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon, CodeBracketIcon } from "@heroicons/react/24/outline";
import Particles from "./Particles";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle"
    >
      {/* Animated Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900/70 pointer-events-none" />
      </div>
      
      {/* Interactive Particles Layer */}
      <div className="absolute inset-0 overflow-hidden z-10">
        <Particles
          particleColors={["#0ea5a4", "#7c3aed", "#60a5fa", "#a78bfa"]}
          particleCount={300}
          particleSpread={5}
          speed={0.5}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32 py-16 md:py-24 text-center z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-900/30 border border-primary-800 mb-8"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <CodeBracketIcon className="h-5 w-5 text-primary-400" />
            <span className="text-sm font-semibold text-primary-300">
              ✨ India&apos;s Premier Hackathon Community
            </span>
          </motion.div>

          {/* Headline */}
          <h1 className="heading-xl mb-6">
            <span className="block text-white">
              Hacker&apos;s Unity
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-10 leading-relaxed">
            Join our vibrant community of passionate developers, designers, and tech enthusiasts. 
            Learn, build, and grow together through hackathons, workshops, and collaborative projects.
          </p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <a
              href="#events"
              className="btn-primary inline-flex items-center gap-2 group"
            >
              Join the Community
              <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </motion.div>

          {/* Stats Preview */}
          <motion.div
            className="mt-16 flex flex-wrap justify-center gap-x-12 gap-y-8 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            {[
              { value: "500+", label: "Community Members" },
              { value: "15+", label: "Events Hosted" },
              { value: "8+", label: "Projects Completed" },
              { value: "3+", label: "Partner Companies" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-600 dark:text-primary-400">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
      >
        <div className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center p-2">
          <div className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full" />
        </div>
      </motion.div>
    </section>
  );
}

