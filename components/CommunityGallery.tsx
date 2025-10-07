"use client";

import { motion } from "framer-motion";
import GridMotion from "./GridMotion";

export default function CommunityGallery() {
  const galleryItems = [
    // Event photos and highlights
    <div key="hack-arya" className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-primary-400 to-accent-600 text-white p-4 text-center">
      <div className="text-4xl mb-2">🏆</div>
      <div className="text-sm font-bold">Hack Arya Verse 2025</div>
    </div>,
    "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
    <div key="acehack" className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-blue-500 to-cyan-600 text-white p-4 text-center">
      <div className="text-4xl mb-2">🎯</div>
      <div className="text-sm font-bold">AceHack 4.0</div>
    </div>,
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60",
    <div key="wchl" className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-purple-500 to-pink-600 text-white p-4 text-center">
      <div className="text-4xl mb-2">🌐</div>
      <div className="text-sm font-bold">WCHL 2025</div>
    </div>,
    "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=60",
    <div key="workshop" className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-orange-500 to-red-600 text-white p-4 text-center">
      <div className="text-4xl mb-2">🔧</div>
      <div className="text-sm font-bold">Skill Workshop</div>
    </div>,
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=60",
    <div key="hardware" className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-green-500 to-emerald-600 text-white p-4 text-center">
      <div className="text-4xl mb-2">⚙️</div>
      <div className="text-sm font-bold">Hardware Workshop</div>
    </div>,
    "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=800&auto=format&fit=crop&q=60",
    <div key="meetup" className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-accent-600 to-purple-700 text-white p-4 text-center">
      <div className="text-4xl mb-2">👥</div>
      <div className="text-sm font-bold">Pre-Meet Up</div>
    </div>,
    "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=60",
    <div key="hackathon" className="flex flex-col items-center justify-center h-full bg-gradient-to-br from-yellow-500 to-amber-600 text-white p-4 text-center">
      <div className="text-4xl mb-2">💡</div>
      <div className="text-sm font-bold">National Hackathon</div>
    </div>,
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=60",
  ];

  return (
    <section id="gallery" className="py-20 md:py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
        <motion.div
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4 text-white">
            Showcase Gallery
          </h2>
          <p className="text-xl text-gray-300">
            Highlights from our hackathons, workshops, and community events. 
            Join us to be part of the next big thing!
          </p>
        </motion.div>

        <GridMotion items={galleryItems} />

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p className="text-gray-400 mb-4">
            Want to be featured here? Join our next event!
          </p>
          <a
            href="#events"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-900 font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            View Upcoming Events
          </a>
        </motion.div>
      </div>
    </section>
  );
}

