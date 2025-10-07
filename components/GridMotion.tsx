"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

interface GridMotionProps {
  items: (string | React.ReactNode)[];
}

export default function GridMotion({ items }: GridMotionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const isImageUrl = (item: any): boolean => {
    return typeof item === "string" && (item.startsWith("http") || item.startsWith("/"));
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <motion.div
      className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="relative aspect-square overflow-hidden rounded-xl bg-gradient-to-br from-gray-800 to-gray-700"
          variants={itemVariants}
          whileHover={{ scale: 1.05, zIndex: 10 }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
        >
          {isImageUrl(item) ? (
            <div className="relative w-full h-full">
              <Image
                src={item as string}
                alt={`Gallery item ${index + 1}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 hover:bg-black/20 transition-colors duration-300" />
            </div>
          ) : typeof item === "string" ? (
            <div className="flex items-center justify-center h-full p-6 text-center">
              <p className="text-lg font-semibold text-gray-300">
                {item}
              </p>
            </div>
          ) : (
            <div className="flex items-center justify-center h-full p-4">
              {item}
            </div>
          )}
          
          {hoveredIndex === index && (
            <motion.div
              className="absolute inset-0 border-2 border-primary-500 rounded-xl pointer-events-none"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
          )}
        </motion.div>
      ))}
    </motion.div>
  );
}

