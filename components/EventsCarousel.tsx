"use client";

import { motion, AnimatePresence } from "framer-motion";
import {
  CalendarIcon,
  MapPinIcon,
  ArrowRightIcon,
} from "@heroicons/react/24/outline";
import CardSwap, { Card } from "./CardSwap";
import { useState, useEffect } from "react";

interface Event {
  id: number;
  title: string;
  date: string;
  location: string;
  description: string;
  type: string;
  image: string;
  status?: string;
  participants?: string;
}

export default function EventsCarousel({ events }: { events: Event[] }) {
  const upcomingEvents = events.filter(e => e.status === "upcoming");
  const [currentEventIndex, setCurrentEventIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentEventIndex((prev) => (prev + 1) % upcomingEvents.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [upcomingEvents.length]);

  const currentEvent = upcomingEvents[currentEventIndex];

  return (
    <section id="events" className="py-12 md:py-16 bg-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 xl:px-32">
        <motion.div
          className="text-center mb-12 -mt-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="inline-block"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 font-heading tracking-tight uppercase">
              <span className="bg-gradient-to-r from-primary-400 via-accent-500 to-primary-600 bg-clip-text text-transparent">
                Our Events
              </span>
            </h2>
          </motion.div>
          <motion.div
            className="h-1 w-24 bg-gradient-to-r from-primary-500 to-accent-600 mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
          />
          <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-3xl mx-auto">
            Join us at our events to learn, connect, and grow with fellow tech enthusiasts in the blockchain and Web3 space
          </p>
        </motion.div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Right side - Image Cards (Mobile First) */}
          <div className="relative min-h-[280px] sm:min-h-[320px] md:min-h-[400px] lg:order-2 flex items-center justify-center">
            <CardSwap
              width={450}
              height={350}
              cardDistance={40}
              verticalDistance={20}
              delay={4000}
              pauseOnHover={true}
              easing="elastic"
              skewAmount={3}
              onCardClick={(idx) => setCurrentEventIndex(idx)}
            >
              {upcomingEvents.map((event) => (
                <Card key={event.id} className="overflow-hidden border-2">
                  <div className="w-full h-full relative bg-gradient-to-br from-primary-500 to-accent-600">
                    <div className="absolute inset-0 flex items-center justify-center text-white text-5xl sm:text-7xl md:text-9xl font-bold opacity-20">
                      {event.title.charAt(0)}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-4 sm:p-6">
                      <h4 className="text-white font-bold text-lg sm:text-xl line-clamp-2">
                        {event.title}
                      </h4>
                    </div>
                  </div>
                </Card>
              ))}
            </CardSwap>
          </div>

          {/* Left side - Event Details */}
          <div className="relative z-10 lg:pr-8 lg:order-1">
            <AnimatePresence mode="wait">
              {currentEvent && (
                <motion.div
                  key={currentEvent.id}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 50 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-4 sm:space-y-6"
                >
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-heading leading-tight">
                    {currentEvent.title}
                  </h3>

                  <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
                    {currentEvent.description}
                  </p>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 text-xs sm:text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <CalendarIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>10th Aug - 31st Aug</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                      <span>Hybrid: Australia, USA, India</span>
                    </div>
                  </div>

                  <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg transition-colors inline-flex items-center justify-center gap-2 text-base sm:text-lg">
                    Register Now
                    <ArrowRightIcon className="h-4 w-4 sm:h-5 sm:w-5" />
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Host an Event CTA */}
        <motion.div
          className="mt-12 md:mt-16 bg-gradient-to-br from-gray-900/50 to-black border border-gray-800 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Want to host an event with us?
            </h3>
            <p className="text-base sm:text-lg text-gray-400 leading-relaxed mb-6 max-w-2xl mx-auto">
              Join forces with Hacker&apos;s Unity to organize impactful tech events. 
              We provide the platform, community, and expertise to make your event a success.
            </p>

            {/* Benefits */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
              <div className="flex items-start gap-3 text-left sm:text-center sm:flex-col sm:items-center p-4 rounded-lg bg-black/50 border border-gray-800">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-300">Access to our global tech community</p>
              </div>
              
              <div className="flex items-start gap-3 text-left sm:text-center sm:flex-col sm:items-center p-4 rounded-lg bg-black/50 border border-gray-800">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-300">Event promotion and marketing support</p>
              </div>
              
              <div className="flex items-start gap-3 text-left sm:text-center sm:flex-col sm:items-center p-4 rounded-lg bg-black/50 border border-gray-800">
                <div className="flex-shrink-0 w-10 h-10 bg-primary-600/20 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
                <p className="text-sm text-gray-300">Technical infrastructure and resources</p>
              </div>
            </div>

            <a
              href="mailto:hackerunity.community@gmail.com?subject=Event Collaboration Inquiry"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-primary-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Send Us a Proposal
              <ArrowRightIcon className="h-5 w-5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

