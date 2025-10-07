"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const communityPartners = [
  { name: "Blockseblock", logo: "/community parteners/blockseblock.jpg" },
  { name: "BlockOn", logo: "/community parteners/blockon.png" },
];

const corporatePartners = [
  { name: "Nextease Solutions", logo: "/corporate partners/nexteasesolutions.jpg" },
  { name: "DMV Technologies", logo: "/corporate partners/dmetech.jpeg" },
];

export default function Partners() {
  return (
    <section id="partners" className="py-12 md:py-16 bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
        {/* Community Partners */}
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
              Community Partners
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
            Organizations that collaborate with us to build a stronger tech community
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-20 mb-20">
          {communityPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="relative cursor-pointer transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.2 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={280}
                height={120}
                className="object-contain h-28 w-auto"
                style={{ maxWidth: '280px' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Corporate Partners */}
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
              Corporate Partners
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
            Strategic collaborations that drive innovation and growth in our community
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center items-center gap-16 md:gap-20 mb-12">
          {corporatePartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="relative cursor-pointer transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.2 }}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={280}
                height={120}
                className="object-contain h-28 w-auto"
                style={{ maxWidth: '280px' }}
              />
            </motion.div>
          ))}
        </div>

        {/* Contact Line */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-gray-400 text-base">
            Interested in becoming a sponsor or partner? Email us at{" "}
            <a 
              href="mailto:hackerunity.community@gmail.com" 
              className="text-primary-400 hover:text-primary-300 transition-colors font-medium"
            >
              hackerunity.community@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

