"use client";

import { motion } from "framer-motion";
import {
  UsersIcon,
  CodeBracketSquareIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Hackathons & Competitions",
    description:
      "Participate in national and global hackathons. We've organized 8+ successful hackathons with thousands of participants and amazing prizes.",
    icon: CodeBracketSquareIcon,
  },
  {
    name: "Workshops & Learning",
    description:
      "Over 50+ technical workshops covering everything from AI/ML to Web3. Learn from industry experts and hands-on projects.",
    icon: SparklesIcon,
  },
  {
    name: "Global Community",
    description:
      "Join 500+ passionate developers, designers, and tech enthusiasts from around the world. Network, collaborate, and grow together.",
    icon: UsersIcon,
  },
];

export default function Features() {
  return (
    <section id="features" className="py-20 md:py-28 bg-gray-900">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
        <motion.div
          className="max-w-3xl mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4 text-white">
            What We&apos;re About
          </h2>
          <p className="text-xl text-gray-300">
            We&apos;re just a bunch of developers who like building stuff together. 
            No corporate speak, no fluff—just code, community, and maybe some memes.
          </p>
        </motion.div>

        <div className="space-y-12 md:space-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={feature.name}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 md:gap-12 items-start`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <div className="flex-shrink-0">
                <div className="w-16 h-16 rounded-2xl bg-gradient-primary text-white flex items-center justify-center shadow-lg">
                  <feature.icon className="h-8 w-8" aria-hidden="true" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                  {feature.name}
                </h3>
                <p className="text-lg text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

