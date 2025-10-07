"use client";

import { motion } from "framer-motion";
import ProfileCard from "./ProfileCard";
import teamData from "@/data/team.json";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  handle: string;
  image: string;
  status: "Online" | "Offline" | "Busy" | "Away";
  description?: string;
  isFounder?: boolean;
}

export default function TeamSection() {
  const founders = teamData.filter((member: TeamMember) => member.isFounder);
  const coreTeam = teamData.filter((member: TeamMember) => !member.isFounder);

  return (
    <section id="team" className="py-20 md:py-28 bg-gray-800/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4 text-white">
            Meet Our Team
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The passionate individuals behind Hacker&apos;s Unity who are dedicated to building 
            and supporting our vibrant tech community
          </p>
        </motion.div>

        {/* Founders */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Founders</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {founders.map((member: TeamMember, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ProfileCard
                  name={member.name}
                  title={member.role}
                  handle={member.handle}
                  status={member.status}
                  contactText="View Profile"
                  avatarUrl={member.image}
                  showUserInfo={true}
                  enableTilt={true}
                  enableMobileTilt={false}
                  onContactClick={() => console.log(`Contact ${member.name}`)}
                />
                {member.description && (
                  <p className="text-gray-400 text-sm text-center mt-4 px-4">
                    {member.description}
                  </p>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Team */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 text-center">Core Team</h3>
          <div className="relative">
            <motion.div
              className="flex gap-8 overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-hide"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none',
              }}
            >
              {coreTeam.map((member: TeamMember, index) => (
                <motion.div
                  key={member.id}
                  className="flex-shrink-0 w-80 snap-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.03 }}
                >
                  <ProfileCard
                    name={member.name}
                    title={member.role}
                    handle={member.handle}
                    status={member.status}
                    contactText="View Profile"
                    avatarUrl={member.image}
                    showUserInfo={true}
                    enableTilt={true}
                    enableMobileTilt={false}
                    onContactClick={() => console.log(`Contact ${member.name}`)}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll Hint */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none bg-gradient-to-l from-gray-800/90 to-transparent w-32 h-full flex items-center justify-end pr-4">
              <div className="text-gray-500 animate-pulse">→</div>
            </div>
          </div>

          {/* Scroll instruction */}
          <motion.p
            className="text-center text-gray-500 text-sm mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
          >
            ← Scroll horizontally to see all team members →
          </motion.p>
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
