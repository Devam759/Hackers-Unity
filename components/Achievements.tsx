"use client";

import { motion } from "framer-motion";
import {
  TrophyIcon,
  UsersIcon,
  BuildingOfficeIcon,
  CalendarIcon,
} from "@heroicons/react/24/outline";

const achievements = [
  {
    icon: TrophyIcon,
    title: "Hackathons Organized",
    value: "8+",
    description: "Successful hackathons with global participation",
  },
  {
    icon: UsersIcon,
    title: "Community Members",
    value: "500+",
    description: "Active members from around the world",
  },
  {
    icon: BuildingOfficeIcon,
    title: "Partner Organizations",
    value: "4+",
    description: "Collaborations with leading tech companies",
  },
  {
    icon: CalendarIcon,
    title: "Events Conducted",
    value: "15+",
    description: "Online and offline tech events",
  },
];

export default function Achievements() {
  return (
    <section id="achievements" className="py-12 md:py-16 bg-black">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4 text-white">
            Our Achievements
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Celebrating our milestones and impact in the global tech community
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.title}
              className="text-center p-8 bg-black rounded-2xl border border-gray-800 hover:border-primary-500 transition-all duration-300 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-primary text-white mb-6 group-hover:scale-110 transition-transform">
                <achievement.icon className="h-8 w-8" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                {achievement.value}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">
                {achievement.title}
              </h3>
              <p className="text-gray-400 text-sm">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

