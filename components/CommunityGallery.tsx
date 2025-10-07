"use client";

import { motion } from "framer-motion";
import CircularGallery from "./CircularGallery";

export default function CommunityGallery() {
  return (
    <section id="gallery" className="py-12 md:py-16 bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 font-heading tracking-tight uppercase"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="bg-gradient-to-r from-primary-400 via-accent-500 to-primary-600 bg-clip-text text-transparent">
              Event Highlights
            </span>
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-primary-500 to-accent-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Highlights from our hackathons, workshops, and community events. 
            Join us to be part of the next big thing!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
        <div className="h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] relative">
          <CircularGallery 
            bend={3} 
            textColor="#ffffff" 
            borderRadius={0.05} 
            scrollEase={0.02}
            scrollSpeed={1.2}
            items={[
              { image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=80", text: "Hack Arya Verse 2025" },
              { image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80", text: "AceHack 4.0 " },
              { image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&auto=format&fit=crop&q=80", text: "Hack Arya Verse 1.0" },
              { image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80", text: "Skill Improvement Workshop" },
              { image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80", text: "WCHL 2025 GLOBAL HACKATHON" },
              { image: "https://images.unsplash.com/photo-1528901166007-3784c7dd3653?w=800&auto=format&fit=crop&q=80", text: "Hardware Skill Improvement Workshop" },
            ]}
          />
        </div>
        <p className="text-center text-gray-400 text-sm mt-6">
          Drag or scroll to explore our event gallery
        </p>
      </motion.div>

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

