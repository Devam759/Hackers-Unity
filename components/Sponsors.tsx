"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";

const sponsors = [
  { name: "Google", logo: "🔍" },
  { name: "Microsoft", logo: "🪟" },
  { name: "Hoko Ice Cream", logo: "🍦" },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-20 md:py-28 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4 text-white">
            Our Sponsors
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Proud partners who support our mission and community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="bg-gray-800 rounded-2xl p-12 border border-gray-700 hover:border-primary-500 transition-all duration-300 flex flex-col items-center justify-center text-center group"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                {sponsor.logo}
              </div>
              <h3 className="text-2xl font-bold text-white">
                {sponsor.name}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          className="bg-gradient-primary rounded-2xl p-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Become a Sponsor
          </h3>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Support our community and gain visibility among tech enthusiasts and innovators. 
            Reach out to explore sponsorship opportunities.
          </p>
          <a
            href="mailto:hackerunity.community@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-bold rounded-lg hover:scale-105 transition-transform"
          >
            Contact Us
            <ArrowRightIcon className="h-5 w-5" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

