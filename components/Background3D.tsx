"use client";

import { motion, useMotionTemplate, useMotionValue, animate, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function Background3D() {
  const rawMousePosition = { x: 0, y: 0 };
  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      rawMousePosition.x = (e.clientX / window.innerWidth) * 2 - 1;
      rawMousePosition.y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(rawMousePosition.x);
      mouseY.set(rawMousePosition.y);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Aurora gradient colors for dynamic background
  const auroraColors = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];
  const auroraColor = useMotionValue(auroraColors[0]);
  useEffect(() => {
    animate(auroraColor, auroraColors, {
      ease: "easeInOut",
      duration: 20,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);
  const auroraBackground = useMotionTemplate`radial-gradient(125% 125% at 50% 0%, #020617 50%, ${auroraColor})`;

  // Code symbols and UX/UI related text
  const codeSymbols = [
    "{ }",
    "</>",
    "( )",
    "[ ]",
    ";",
    "=",
    "+",
    "-",
    "*",
    "/",
    "CSS",
    "JS",
    "UX",
    "UI",
    "HTML",
    "React",
    "Figma",
    "Adobe",
    "Design",
    "Code",
    "API",
    "JSON",
    "CSS3",
    "ES6",
  ];

  // Generate fewer floating code particles
  const codeParticles = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 50 - 25,
    symbol: codeSymbols[Math.floor(Math.random() * codeSymbols.length)],
    size: Math.random() * 16 + 12,
    delay: Math.random() * 5,
    rotation: Math.random() * 360,
    color: [
      "text-cyan-400/20",
      "text-purple-400/20",
      "text-blue-400/20",
      "text-indigo-400/20",
      "text-violet-400/20",
    ][Math.floor(Math.random() * 5)],
  }));

  // Fewer UX/UI Design elements with z-depth
  const designElements = Array.from({ length: 6 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 40 - 20,
    size: Math.random() * 50 + 30,
    delay: Math.random() * 3,
    duration: Math.random() * 10 + 12,
    type: Math.floor(Math.random() * 4),
    colorScheme: ["cyan", "purple", "blue", "indigo"][Math.floor(Math.random() * 4)],
  }));

  // Tech stack badges (fewer)
  const techStack = [
    { name: "Figma", color: "from-pink-500/10 to-purple-500/10 text-pink-400/60 border-pink-400/20" },
    { name: "Sketch", color: "from-orange-500/10 to-yellow-500/10 text-orange-400/60 border-orange-400/20" },
    { name: "Adobe XD", color: "from-purple-500/10 to-pink-500/10 text-purple-400/60 border-purple-400/20" },
    { name: "React", color: "from-cyan-500/10 to-blue-500/10 text-cyan-400/60 border-cyan-400/20" },
    { name: "Vue", color: "from-green-500/10 to-emerald-500/10 text-green-400/60 border-green-400/20" },
    { name: "Angular", color: "from-red-500/10 to-pink-500/10 text-red-400/60 border-red-400/20" },
    { name: "JavaScript", color: "from-yellow-500/10 to-orange-500/10 text-yellow-400/60 border-yellow-400/20" },
    { name: "TypeScript", color: "from-blue-500/10 to-indigo-500/10 text-blue-400/60 border-blue-400/20" },
    { name: "HTML5", color: "from-orange-500/10 to-red-500/10 text-orange-400/60 border-orange-400/20" },
    { name: "CSS3", color: "from-blue-500/10 to-cyan-500/10 text-blue-400/60 border-blue-400/20" },
    { name: "Sass", color: "from-pink-500/10 to-rose-500/10 text-pink-400/60 border-pink-400/20" },
    { name: "Tailwind", color: "from-cyan-500/10 to-teal-500/10 text-cyan-400/60 border-cyan-400/20" },
  ];

  const floatingBadges = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 30 - 15,
    tech: techStack[Math.floor(Math.random() * techStack.length)],
    delay: Math.random() * 4,
    duration: Math.random() * 12 + 14,
  }));

  // Design tool icons with z-depth
  const designTools = Array.from({ length: 4 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    z: Math.random() * 20 - 10,
    size: Math.random() * 60 + 40,
    delay: Math.random() * 3,
    duration: Math.random() * 8 + 10,
    tool: ["pen", "brush", "vector", "grid"][i],
    gradient: [
      "from-cyan-500/15 to-blue-500/10",
      "from-purple-500/15 to-pink-500/10",
      "from-indigo-500/15 to-purple-500/10",
      "from-blue-500/15 to-cyan-500/10",
    ][i],
  }));

  const renderWireframe = (type: number, size: number, colorScheme: string) => {
    const getColorClass = (opacity: string) => {
      switch (colorScheme) {
        case "cyan":
          return `bg-cyan-400/${opacity} border-cyan-400/15 shadow-cyan-500/10`;
        case "purple":
          return `bg-purple-400/${opacity} border-purple-400/15 shadow-purple-500/10`;
        case "blue":
          return `bg-blue-400/${opacity} border-blue-400/15 shadow-blue-500/10`;
        default:
          return `bg-indigo-400/${opacity} border-indigo-400/15 shadow-indigo-500/10`;
      }
    };

    const baseClass = `absolute ${getColorClass("5")} rounded backdrop-blur-sm shadow-md`;

    switch (type % 4) {
      case 0: // Mobile wireframe
        return (
          <div className={`${baseClass} w-full h-full`}>
            <div className="p-2 h-full flex flex-col gap-1">
              <div className={`h-2 ${getColorClass("15")} rounded w-full`}></div>
              <div className={`h-1 ${getColorClass("10")} rounded w-3/4`}></div>
              <div className={`h-1 ${getColorClass("10")} rounded w-1/2`}></div>
              <div className={`flex-1 ${getColorClass("3")} rounded mt-1`}></div>
              <div className={`h-1 ${getColorClass("8")} rounded w-full`}></div>
            </div>
          </div>
        );
      case 1: // Desktop wireframe
        return (
          <div className={`${baseClass} w-full h-full`}>
            <div className="p-2 h-full flex flex-col gap-1">
              <div className={`h-1 ${getColorClass("15")} rounded w-full`}></div>
              <div className="flex gap-1 flex-1">
                <div className={`w-1/4 ${getColorClass("10")} rounded`}></div>
                <div className={`flex-1 ${getColorClass("5")} rounded`}></div>
              </div>
            </div>
          </div>
        );
      case 2: // Card layout
        return (
          <div className={`${baseClass} w-full h-full p-1`}>
            <div className="grid grid-cols-2 gap-1 h-full">
              <div className={`${getColorClass("12")} rounded`}></div>
              <div className={`${getColorClass("8")} rounded`}></div>
              <div className={`${getColorClass("8")} rounded`}></div>
              <div className={`${getColorClass("12")} rounded`}></div>
            </div>
          </div>
        );
      default: // Flow diagram
        return (
          <div className={`${baseClass} w-full h-full p-2`}>
            <div className="flex items-center justify-between h-full">
              <div className={`w-3 h-3 ${getColorClass("15")} rounded-full`}></div>
              <div className={`flex-1 h-px ${getColorClass("10")} mx-1`}></div>
              <div className={`w-3 h-3 ${getColorClass("15")} rounded-full`}></div>
            </div>
          </div>
        );
    }
  };

  const renderDesignTool = (tool: string, size: number, gradient: string) => {
    const baseClass = `w-full h-full bg-gradient-to-br ${gradient} rounded-lg border border-white/5 backdrop-blur-sm flex items-center justify-center shadow-md`;

    switch (tool) {
      case "pen":
        return (
          <div className={baseClass}>
            <div className="w-1 h-6 bg-white/20 rounded transform rotate-45"></div>
          </div>
        );
      case "brush":
        return (
          <div className={baseClass}>
            <div className="w-4 h-4 rounded-full bg-white/20"></div>
          </div>
        );
      case "vector":
        return (
          <div className={baseClass}>
            <div className="relative">
              <div className="w-4 h-4 border-2 border-white/20 rounded transform rotate-45"></div>
            </div>
          </div>
        );
      default: // grid
        return (
          <div className={baseClass}>
            <div className="grid grid-cols-3 gap-px w-4 h-4">
              {[...Array(9)].map((_, i) => (
                <div key={i} className="bg-white/20 rounded-sm"></div>
              ))}
            </div>
          </div>
        );
    }
  };

  return (
    <motion.div
      className="fixed inset-0 overflow-hidden pointer-events-none z-0"
      style={{
        perspective: "1000px",
        transformStyle: "preserve-3d",
        backgroundImage: auroraBackground,
      }}
    >
      {/* Subtle Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/3 to-blue-500/5 mix-blend-overlay" />
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/3 via-transparent to-pink-500/3 mix-blend-overlay" />

      {/* Animated Grid Pattern */}
      <motion.div
        className="absolute inset-0 opacity-15"
        animate={{
          backgroundPosition: ["0px 0px", "40px 40px"],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          backgroundImage: `
            linear-gradient(rgba(34, 211, 238, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(168, 85, 247, 0.08) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
          transform: `translate(${mouseX.get() * 5}px, ${mouseY.get() * 5}px)`,
          willChange: "transform",
        }}
      />

      {/* Floating Code Symbols */}
      {codeParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className={`absolute ${particle.color} font-mono font-medium pointer-events-none select-none`}
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            fontSize: `${particle.size}px`,
            zIndex: particle.z,
            willChange: "transform",
          }}
          animate={{
            y: [0, -15], // Two keyframes for spring
            opacity: [0.2, 0.5],
            rotateZ: [particle.rotation, particle.rotation + 180],
            scale: [1, 1.05],
          }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 100,
            repeat: Infinity,
            repeatType: "mirror", // Oscillate back and forth
            delay: particle.delay,
          }}
        >
          {particle.symbol}
        </motion.div>
      ))}

      {/* UX/UI Design Elements */}
      {designElements.map((element) => (
        <motion.div
          key={element.id}
          className="absolute"
          style={{
            left: `${element.x}%`,
            top: `${element.y}%`,
            width: `${element.size}px`,
            height: `${element.size * 0.8}px`,
            zIndex: element.z,
            willChange: "transform",
          }}
          animate={{
            rotateX: [0, 8],
            rotateY: [0, 12],
            scale: [1, 1.03],
            opacity: [0.2, 0.4],
          }}
          transition={{
            type: "spring",
            damping: 25,
            stiffness: 80,
            repeat: Infinity,
            repeatType: "mirror",
            delay: element.delay,
          }}
        >
          {renderWireframe(element.type, element.size, element.colorScheme)}
        </motion.div>
      ))}

      {/* Tech Stack Badges */}
      {floatingBadges.map((badge) => (
        <motion.div
          key={badge.id}
          className={`absolute bg-gradient-to-r ${badge.tech.color} px-2 py-1 rounded-full text-xs font-medium backdrop-blur-sm shadow-sm`}
          style={{
            left: `${badge.x}%`,
            top: `${badge.y}%`,
            zIndex: badge.z,
            willChange: "transform",
          }}
          animate={{
            y: [0, -10],
            x: [0, 8],
            rotateZ: [0, 3, 0, -3], // Use tween for more than two keyframes
            scale: [1, 1.05],
          }}
          transition={{
            y: { type: "spring", damping: 20, stiffness: 100, repeat: Infinity, repeatType: "mirror" },
            x: { type: "spring", damping: 20, stiffness: 100, repeat: Infinity, repeatType: "mirror" },
            rotateZ: { type: "tween", ease: "easeInOut", duration: badge.duration, repeat: Infinity, repeatType: "loop" },
            scale: { type: "spring", damping: 20, stiffness: 100, repeat: Infinity, repeatType: "mirror" },
            delay: badge.delay,
          }}
        >
          {badge.tech.name}
        </motion.div>
      ))}

      {/* Design Tool Icons */}
      {designTools.map((tool) => (
        <motion.div
          key={tool.id}
          className="absolute"
          style={{
            left: `${tool.x}%`,
            top: `${tool.y}%`,
            width: `${tool.size}px`,
            height: `${tool.size}px`,
            zIndex: tool.z,
            willChange: "transform",
          }}
          animate={{
            rotateZ: [0, 360],
            scale: [1, 1.05],
            opacity: [0.3, 0.6],
          }}
          transition={{
            duration: tool.duration,
            repeat: Infinity,
            ease: "linear",
            delay: tool.delay,
          }}
        >
          {renderDesignTool(tool.tool, tool.size, tool.gradient)}
        </motion.div>
      ))}

      {/* Code Brackets */}
      <motion.div
        className="absolute top-1/4 left-1/4 text-3xl text-cyan-400/15 font-mono"
        animate={{
          rotateZ: [0, 360],
          scale: [1, 1.1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transform: `translate(${mouseX.get() * 8}px, ${mouseY.get() * 8}px)`,
          willChange: "transform",
        }}
      >
        {"{ }"}
      </motion.div>

      <motion.div
        className="absolute bottom-1/4 right-1/4 text-2xl text-purple-400/20 font-mono"
        animate={{
          rotateZ: [360, 0],
          scale: [1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transform: `translate(${mouseX.get() * -8}px, ${mouseY.get() * -8}px)`,
          willChange: "transform",
        }}
      >
        {"</>"}
      </motion.div>

      {/* Design Process Flow */}
      <motion.div
        className="absolute top-1/2 left-1/6 flex items-center gap-3"
        animate={{
          x: [0, 15],
          opacity: [0.2, 0.4],
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 80,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ willChange: "transform" }}
      >
        <div className="w-6 h-6 border border-cyan-400/20 bg-cyan-400/5 rounded flex items-center justify-center text-xs text-cyan-400/60 backdrop-blur-sm shadow-sm">
          UX
        </div>
        <div className="w-4 h-px bg-gradient-to-r from-cyan-400/20 to-purple-400/20"></div>
        <div className="w-6 h-6 border border-purple-400/20 bg-purple-400/5 rounded flex items-center justify-center text-xs text-purple-400/60 backdrop-blur-sm shadow-sm">
          UI
        </div>
        <div className="w-4 h-px bg-gradient-to-r from-purple-400/20 to-blue-400/20"></div>
        <div className="w-6 h-6 border border-blue-400/20 bg-blue-400/5 rounded flex items-center justify-center text-xs font-mono text-blue-400/60 backdrop-blur-sm shadow-sm">
          &lt;/&gt;
        </div>
      </motion.div>

      {/* Glowing Orbs */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-radial from-cyan-500/15 to-transparent rounded-full blur-2xl shadow-2xl shadow-cyan-500/20"
        animate={{
          scale: [1, 1.3],
          opacity: [0.2, 0.4],
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 50,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ willChange: "transform" }}
      />

      <motion.div
        className="absolute bottom-1/3 left-1/3 w-20 h-20 bg-gradient-radial from-purple-500/20 to-transparent rounded-full blur-xl shadow-xl shadow-purple-500/20"
        animate={{
          scale: [1.2, 1],
          opacity: [0.3, 0.5],
        }}
        transition={{
          type: "spring",
          damping: 15,
          stiffness: 50,
          repeat: Infinity,
          repeatType: "mirror",
        }}
        style={{ willChange: "transform" }}
      />

      {/* Floating Pixel Art */}
      <motion.div
        className="absolute top-1/5 right-1/5 grid grid-cols-3 gap-px w-6 h-6"
        animate={{
          rotateZ: [0, 360],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ willChange: "transform" }}
      >
        {[...Array(9)].map((_, i) => (
          <motion.div
            key={i}
            className={`rounded-sm ${["bg-cyan-400/15", "bg-purple-400/15", "bg-blue-400/15"][i % 3]}`}
            animate={{
              opacity: [0.1, 0.4],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "mirror",
              delay: i * 0.15,
            }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}