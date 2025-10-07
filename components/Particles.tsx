"use client";

import { useEffect, useRef } from "react";

interface ParticlesProps {
  particleColors?: string[];
  particleCount?: number;
  particleSpread?: number;
  speed?: number;
  particleBaseSize?: number;
  moveParticlesOnHover?: boolean;
  alphaParticles?: boolean;
  disableRotation?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  color: string;
  rotation: number;
  rotationSpeed: number;
  shape: "square" | "triangle" | "diamond" | "hexagon";
  angle: number;
  radius: number;
  orbitSpeed: number;
}

export default function Particles({
  particleColors = ["#ffffff", "#ffffff"],
  particleCount = 200,
  particleSpread = 10,
  speed = 0.1,
  particleBaseSize = 100,
  moveParticlesOnHover = true,
  alphaParticles = false,
  disableRotation = false,
}: ParticlesProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000, isActive: false });
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    const initParticles = () => {
      particlesRef.current = [];
      const shapes: Array<"square" | "triangle" | "diamond" | "hexagon"> = ["square", "triangle", "diamond", "hexagon"];
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.sqrt(canvas.width * canvas.width + canvas.height * canvas.height) / 2;
      
      for (let i = 0; i < particleCount; i++) {
        const angle = Math.random() * Math.PI * 2;
        // Use square root for uniform distribution (not clustered in center)
        const radius = Math.sqrt(Math.random()) * maxRadius;
        
        particlesRef.current.push({
          x: centerX + Math.cos(angle) * radius,
          y: centerY + Math.sin(angle) * radius,
          vx: (Math.random() - 0.5) * speed,
          vy: (Math.random() - 0.5) * speed,
          size: Math.random() * particleSpread + 2,
          color: particleColors[Math.floor(Math.random() * particleColors.length)],
          rotation: Math.random() * Math.PI * 2,
          rotationSpeed: (Math.random() - 0.5) * 0.015,
          shape: shapes[Math.floor(Math.random() * shapes.length)],
          angle: angle,
          radius: radius,
          orbitSpeed: (Math.random() - 0.5) * 0.004,
        });
      }
    };

    const drawParticle = (particle: Particle) => {
      ctx.save();
      ctx.translate(particle.x, particle.y);
      
      if (!disableRotation) {
        ctx.rotate(particle.rotation);
      }

      const alpha = alphaParticles ? Math.random() * 0.5 + 0.5 : 1;
      ctx.globalAlpha = alpha * 0.7;
      ctx.fillStyle = particle.color;

      // Draw different shapes based on particle type
      ctx.beginPath();
      
      switch (particle.shape) {
        case "square":
          ctx.rect(-particle.size / 2, -particle.size / 2, particle.size, particle.size);
          break;
          
        case "triangle":
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(particle.size, particle.size);
          ctx.lineTo(-particle.size, particle.size);
          ctx.closePath();
          break;
          
        case "diamond":
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(particle.size, 0);
          ctx.lineTo(0, particle.size);
          ctx.lineTo(-particle.size, 0);
          ctx.closePath();
          break;
          
        case "hexagon":
          for (let i = 0; i < 6; i++) {
            const angle = (Math.PI / 3) * i;
            const x = particle.size * Math.cos(angle);
            const y = particle.size * Math.sin(angle);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
          }
          ctx.closePath();
          break;
      }
      
      ctx.fill();
      ctx.restore();
    };

    const updateParticle = (particle: Particle) => {
      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Orbital motion around center
      particle.angle += particle.orbitSpeed;
      
      // Calculate base orbital position
      const baseX = centerX + Math.cos(particle.angle) * particle.radius;
      const baseY = centerY + Math.sin(particle.angle) * particle.radius;
      
      // Add some drift
      particle.x = baseX + particle.vx * 50;
      particle.y = baseY + particle.vy * 50;
      
      // Gentle random drift
      particle.vx += (Math.random() - 0.5) * 0.001;
      particle.vy += (Math.random() - 0.5) * 0.001;
      particle.vx *= 0.99;
      particle.vy *= 0.99;

      // Rotate the particle itself
      if (!disableRotation) {
        particle.rotation += particle.rotationSpeed;
      }

      // Repel particles away from cursor
      if (moveParticlesOnHover && mouseRef.current.isActive) {
        const dx = mouseRef.current.x - particle.x;
        const dy = mouseRef.current.y - particle.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < 250) {
          const force = (250 - distance) / 250;
          // VERY STRONG repulsion force - exponential for dramatic effect
          const repulsionForce = force * force * 0.6;
          particle.vx -= (dx / distance) * repulsionForce;
          particle.vy -= (dy / distance) * repulsionForce;
          
          // Dramatically speed up rotation when near cursor
          if (!disableRotation) {
            const rotationBoost = force * 0.4;
            particle.rotationSpeed = particle.rotationSpeed > 0 
              ? particle.rotationSpeed + rotationBoost 
              : particle.rotationSpeed - rotationBoost;
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particlesRef.current.forEach((particle) => {
        updateParticle(particle);
        drawParticle(particle);
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        isActive: true,
      };
    };

    const handleMouseEnter = () => {
      mouseRef.current.isActive = true;
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    resizeCanvas();
    initParticles();
    animate();

    window.addEventListener("resize", () => {
      resizeCanvas();
      initParticles();
    });

    if (moveParticlesOnHover) {
      canvas.addEventListener("mousemove", handleMouseMove);
      canvas.addEventListener("mouseenter", handleMouseEnter);
      canvas.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", resizeCanvas);
      if (moveParticlesOnHover) {
        canvas.removeEventListener("mousemove", handleMouseMove);
        canvas.removeEventListener("mouseenter", handleMouseEnter);
        canvas.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, [
    particleColors,
    particleCount,
    particleSpread,
    speed,
    particleBaseSize,
    moveParticlesOnHover,
    alphaParticles,
    disableRotation,
  ]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ 
        pointerEvents: "auto",
        touchAction: "none"
      }}
    />
  );
}

