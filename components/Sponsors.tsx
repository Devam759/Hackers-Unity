"use client";

import { motion } from "framer-motion";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const sponsors = [
  { name: "Microsoft", logo: "/sponsors/Microsoft.png" },
  { name: "Google", logo: "/sponsors/google.webp" },
  { name: "Hocco Ice Cream", logo: "/sponsors/hocco.jpeg" },
];

export default function Sponsors() {
  return (
    <section id="sponsors" className="py-12 md:py-16 bg-black">
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
              Our Sponsors
            </span>
          </motion.h2>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-primary-500 to-accent-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl mx-auto">
            Proud partners who support our mission and community
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-20 mb-12">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="relative cursor-pointer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.15 }}
              animate={{ scale: 1 }}
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={280}
                height={120}
                className="object-contain h-28 w-auto"
                style={{ maxWidth: '280px' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Become a Sponsor CTA */}
        <motion.div
          className="bg-black/50 border border-gray-900 rounded-xl p-8 md:p-12 text-center backdrop-blur-sm"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-2xl md:text-3xl font-semibold text-white mb-3">
            Become a Sponsor
          </h3>
          <p className="text-gray-400 text-base md:text-lg mb-6 max-w-2xl mx-auto">
            Support our community and gain visibility among tech enthusiasts and innovators.
          </p>
          <a
            href="mailto:hackerunity.community@gmail.com"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 hover:bg-gray-800 text-white font-medium rounded-lg transition-all border border-gray-800 hover:border-gray-700"
          >
            Contact Us
            <ArrowRightIcon className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

