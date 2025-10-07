"use client";

import { motion } from "framer-motion";
import {
  CalendarIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  type: "online" | "in-person";
  image: string;
  status?: string;
  participants?: string;
}

export default function EventsCarousel({ events }: { events: Event[] }) {
  const upcomingEvents = events.filter(e => e.status === "upcoming");
  const completedEvents = events.filter(e => e.status === "completed");
  const featuredEvent = upcomingEvents[0] || events[0];
  const otherEvents = upcomingEvents.slice(1);

  return (
    <section id="events" className="py-20 md:py-28 bg-gray-800/50">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
        <motion.div
          className="max-w-3xl mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-lg mb-4 text-white">
            Our Events
          </h2>
          <p className="text-xl text-gray-300">
            Join us at our events to learn, connect, and grow with fellow tech enthusiasts in the blockchain and Web3 space
          </p>
        </motion.div>

        {featuredEvent && (
          <motion.div
            className="mb-12 bg-gray-800 rounded-2xl overflow-hidden shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid md:grid-cols-2 gap-0">
              <div className="relative h-64 md:h-auto bg-gradient-to-br from-primary-400 to-accent-600">
                <div className="absolute inset-0 flex items-center justify-center text-white text-8xl font-bold opacity-10">
                  {featuredEvent.title.charAt(0)}
                </div>
                <div className="absolute top-6 left-6">
                  <div className="flex gap-2">
                    <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      featuredEvent.type === "online" ? "bg-blue-500 text-white" : "bg-green-500 text-white"
                    }`}>
                      {featuredEvent.type === "online" ? "Online" : "Hybrid"}
                    </span>
                    {featuredEvent.status === "upcoming" && (
                      <span className="px-4 py-2 rounded-full text-sm font-semibold bg-yellow-500 text-white">
                        Upcoming
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className="p-8 md:p-10">
                <div className="flex gap-4 mb-4 text-sm text-gray-400">
                  <div className="flex items-center gap-2">
                    <CalendarIcon className="h-5 w-5" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPinIcon className="h-5 w-5" />
                    <span>{featuredEvent.location}</span>
                  </div>
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">
                  {featuredEvent.title}
                </h3>
                <p className="text-lg text-gray-300 mb-4 leading-relaxed">
                  {featuredEvent.description}
                </p>
                {featuredEvent.participants && (
                  <p className="text-primary-400 font-semibold mb-6">
                    {featuredEvent.participants}
                  </p>
                )}
                <button className="px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors inline-flex items-center gap-2">
                  Register Now
                  <ArrowRightIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </motion.div>
        )}

        {otherEvents.length > 0 && (
          <div className="space-y-4">
            {otherEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="bg-gray-800 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        event.type === "online" ? "bg-blue-900/30 text-blue-300" : "bg-green-900/30 text-green-300"
                      }`}>
                        {event.type === "online" ? "Online" : "In-Person"}
                      </span>
                      <span className="text-sm text-gray-400">
                        {event.date}
                      </span>
                      <span className="text-sm text-gray-400">
                        • {event.location}
                      </span>
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2">
                      {event.title}
                    </h4>
                    <p className="text-gray-300">
                      {event.description}
                    </p>
                  </div>
                  <button className="px-4 py-2 text-primary-400 hover:bg-primary-900/20 font-semibold rounded-lg transition-colors whitespace-nowrap">
                    Sign Up →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

