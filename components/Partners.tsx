"use client";

import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const communityPartners = [
  { name: "Blockseblock", description: "Web3 and blockchain community" },
  { name: "BlockOn", description: "Decentralized innovation network" },
];

const corporatePartners = [
  {
    name: "Nextease Solutions",
    description: "Leading software development and IT consulting firm specializing in innovative solutions.",
    website: "#",
  },
  {
    name: "DMV Technologies",
    description: "Pioneering research and development in emerging technologies and AI solutions.",
    website: "#",
  },
];

export default function Partners() {
  return (
    <section id="partners" className="py-20 md:py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4 text-white">
            Community Partners
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Organizations that collaborate with us to build a stronger tech community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {communityPartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary-500 transition-all duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-2">
                {partner.name}
              </h3>
              <p className="text-gray-400">
                {partner.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Corporate Partners */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4 text-center">
            Corporate Partners
          </h3>
          <p className="text-gray-300 text-center mb-12">
            Strategic collaborations that drive innovation and growth in our community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {corporatePartners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="bg-gray-800 rounded-2xl p-8 border border-gray-700 hover:border-primary-500 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h3 className="text-2xl font-bold text-white mb-3">
                {partner.name}
              </h3>
              <p className="text-gray-300 mb-6">
                {partner.description}
              </p>
              <a
                href={partner.website}
                className="inline-flex items-center gap-2 text-primary-400 hover:text-primary-300 font-semibold transition-colors"
              >
                Visit Website
                <ArrowTopRightOnSquareIcon className="h-5 w-5" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Become a Partner CTA */}
        <motion.div
          className="bg-gray-800 rounded-2xl p-12 border border-gray-700 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold text-white mb-4">
            Become a Partner
          </h3>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Join forces with Hacker&apos;s Unity to drive innovation and create meaningful impact 
            in the tech ecosystem. We offer tailored partnership opportunities for companies of all sizes.
          </p>
          <a
            href="mailto:hackerunity.community@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white font-bold rounded-lg transition-colors"
          >
            Partner With Us
            <ArrowRightIcon className="h-5 w-5" />
          </a>
          <p className="text-gray-400 text-sm mt-6">
            Interested in becoming a sponsor or partner? Email us at{" "}
            <a href="mailto:hackerunity.community@gmail.com" className="text-primary-400 hover:underline">
              hackerunity.community@gmail.com
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

