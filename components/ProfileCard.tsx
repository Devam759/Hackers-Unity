"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface ProfileCardProps {
  name: string;
  title: string;
  handle: string;
  status: "Online" | "Offline" | "Busy" | "Away";
  contactText?: string;
  avatarUrl: string;
  showUserInfo?: boolean;
  enableTilt?: boolean;
  enableMobileTilt?: boolean;
  onContactClick?: () => void;
}

export default function ProfileCard({
  name,
  title,
  handle,
  status,
  contactText = "Contact Me",
  avatarUrl,
  showUserInfo = true,
  enableTilt = true,
  enableMobileTilt = false,
  onContactClick,
}: ProfileCardProps) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!enableTilt || (isMobile && !enableMobileTilt)) return;
    
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const tiltX = ((y - centerY) / centerY) * -10;
    const tiltY = ((x - centerX) / centerX) * 10;

    setTilt({ x: tiltX, y: tiltY });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
  };

  const statusColors = {
    Online: "bg-green-500",
    Offline: "bg-gray-500",
    Busy: "bg-red-500",
    Away: "bg-yellow-500",
  };

  return (
    <motion.div
      ref={cardRef}
      className="relative w-full max-w-sm group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl p-8 shadow-2xl border border-gray-700 hover:border-primary-500 transition-all duration-300 overflow-hidden">
        {/* Background glow effect */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-transparent to-accent-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Content */}
        <div className="relative z-10 flex flex-col items-center text-center">
          {/* Avatar */}
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-gradient-primary rounded-full blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-700 group-hover:border-primary-500 transition-colors duration-300">
              <Image
                src={avatarUrl}
                alt={name}
                fill
                className="object-cover"
                sizes="128px"
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 flex items-center gap-1.5 bg-gray-900 px-2 py-1 rounded-full border border-gray-700">
              <div className={`w-2 h-2 rounded-full ${statusColors[status]} animate-pulse`} />
              <span className="text-xs text-gray-300">{status}</span>
            </div>
          </div>

          {/* User Info */}
          {showUserInfo && (
            <div className="mb-6 w-full">
              <h3 className="text-2xl font-bold text-white mb-1 group-hover:text-primary-400 transition-colors">
                {name}
              </h3>
              <p className="text-gray-400 text-sm mb-2">{title}</p>
              <p className="text-primary-400 text-sm font-mono">@{handle}</p>
            </div>
          )}

          {/* Contact Button */}
          {onContactClick && (
            <button
              onClick={onContactClick}
              className="w-full px-6 py-3 bg-gradient-primary hover:shadow-lg hover:shadow-primary-500/50 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95"
            >
              {contactText}
            </button>
          )}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-primary-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-accent-500/5 rounded-full blur-3xl" />
      </div>
    </motion.div>
  );
}

