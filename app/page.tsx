"use client"; // Mark as client component for Next.js

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ImageWithFallback } from "@/components/ImageWithFallback";
import dynamic from "next/dynamic";
import {
  Mail,
  Phone,
  MapPin,
  ExternalLink,
  Github,
  Linkedin,
  Download,
  Star,
  Users,
  Briefcase,
  Award,
  Menu,
  X,
  ArrowUp,
  GraduationCap,
  Calendar,
  Building,
  Code,
  Palette,
  Zap,
} from "lucide-react";

// Dynamically import Background3D
const Background3D = dynamic(() => import("@/components/Background3D"), {
  ssr: false,
});

// Define interfaces
interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  category: string;
  tools: string[];
  year: string;
  gradient: string;
}

interface Experience {
  id: number;
  company: string;
  position: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  gradient: string;
}

interface Education {
  id: number;
  institution: string;
  degree: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  gradient: string;
}

interface Skill {
  name: string;
  color: string;
}

interface Tool {
  name: string;
  color: string;
}

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
}

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  gradient?: string;
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress, scrollY } = useScroll();

  // Parallax effects
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);

  // Show scroll to top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Data arrays (unchanged)
  const projects: Project[] = [
    {
      id: 1,
      title: "Angkor Tourism App",
      description:
        "Mobile app redesign for Cambodia's premier tourism platform, featuring temple guides and cultural experiences.",
      image:
        "https://images.unsplash.com/photo-1539650116574-75c0c6d73f1b?w=600&h=400&fit=crop",
      category: "Mobile App",
      tools: ["Figma", "Principle", "Adobe XD"],
      year: "2024",
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      title: "Khmer Banking Dashboard",
      description:
        "Complete UX overhaul of a local banking platform with focus on accessibility and Khmer language support.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Web App",
      tools: ["Figma", "Miro", "InVision"],
      year: "2024",
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      title: "Cambodian E-commerce Platform",
      description:
        "Full-stack e-commerce solution designed for local artisans and craftspeople selling traditional goods.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
      category: "E-commerce",
      tools: ["Sketch", "Figma", "Zeplin"],
      year: "2023",
      gradient: "from-indigo-500 to-purple-500",
    },
    {
      id: 4,
      title: "Phnom Penh Metro Map",
      description:
        "Interactive public transportation system design with multilingual support and accessibility features.",
      image:
        "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=600&h=400&fit=crop",
      category: "Public Service",
      tools: ["Figma", "Illustrator", "Principle"],
      year: "2023",
      gradient: "from-blue-500 to-cyan-500",
    },
    {
      id: 5,
      title: "Cambodian Recipe App",
      description:
        "Cultural cooking app preserving traditional Khmer recipes with step-by-step video tutorials.",
      image:
        "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&h=400&fit=crop",
      category: "Mobile App",
      tools: ["Figma", "After Effects", "Lottie"],
      year: "2023",
      gradient: "from-violet-500 to-purple-500",
    },
    {
      id: 6,
      title: "Education Platform",
      description:
        "Online learning platform designed for Cambodian students with gamification and progress tracking.",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      category: "EdTech",
      tools: ["Figma", "Maze", "Hotjar"],
      year: "2022",
      gradient: "from-pink-500 to-rose-500",
    },
  ];

  const experiences: Experience[] = [
    {
      id: 1,
      company: "Digital Innovation Cambodia",
      position: "Senior UX/UI Designer",
      period: "2022 - Present",
      location: "Phnom Penh, Cambodia",
      description:
        "Leading design initiatives for fintech and e-commerce solutions targeting Southeast Asian markets. Mentoring junior designers and establishing design systems.",
      achievements: [
        "Led redesign of banking platform serving 100K+ users",
        "Established company-wide design system",
        "Improved user engagement by 35%",
      ],
      gradient: "from-cyan-500/15 to-blue-500/15",
    },
    {
      id: 2,
      company: "Khmer Tech Solutions",
      position: "UX/UI Designer",
      period: "2020 - 2022",
      location: "Phnom Penh, Cambodia",
      description:
        "Designed mobile applications and web platforms for local startups and government projects, focusing on accessibility and cultural relevance.",
      achievements: [
        "Designed 15+ mobile applications",
        "Improved accessibility compliance by 80%",
        "Collaborated with government on digital initiatives",
      ],
      gradient: "from-purple-500/15 to-pink-500/15",
    },
    {
      id: 3,
      company: "Creative Studio Asia",
      position: "Junior Designer",
      period: "2019 - 2020",
      location: "Phnom Penh, Cambodia",
      description:
        "Started career focusing on branding and digital design for SMEs across Cambodia and Vietnam markets.",
      achievements: [
        "Created brand identities for 20+ companies",
        "Expanded services to Vietnam market",
        "Won 'Rising Designer' award 2020",
      ],
      gradient: "from-indigo-500/15 to-violet-500/15",
    },
  ];

  const education: Education[] = [
    {
      id: 1,
      institution: "Norton University",
      degree: "Year 4 of Sowftware Devolopment",
      period: "2022 - 2025",
      location: "Phnom Penh, Cambodia",
      description:
        "Specialized in digital media and traditional Khmer art integration. Graduated Summa Cum Laude with focus on cultural preservation through modern design.",
      achievements: [
        "Summa Cum Laude graduate",
        "President of Design Student Association",
        "Thesis: 'Digital Preservation of Khmer Art Forms'",
      ],
      gradient: "from-cyan-500 to-blue-500",
    },
    {
      id: 2,
      institution: "Principles of UX/UI Design  Certificate Meta ",
      degree: "Professional Certificate",
      period: "2025",
      location: "Online",
      description:
        "Comprehensive UX UI  design program covering user research, wireframing, prototyping, and usability testing methodologies.",
      achievements: [
        "Completed 6-month intensive program",
        "Portfolio project featured by Meta",
        "Peer mentor for 10+ students",
      ],
      gradient: "from-purple-500 to-pink-500",
    },
    {
      id: 3,
      institution: "ANT Training Center",
      degree: "web development (laravel)",
      period: "2023-25",
      location: "Phnom Penh, Cambodia",
      description:
        "I am a recipient of a scholarship from the CBRD Foundation, Ministry of Posts and Telecommunications, enrolled in a program from February 2024 to February 2025.",
      achievements: [
        "Expert level certification",
        "Top 5% of test takers globally",
        "Community contributor to Adobe forums",
      ],
      gradient: "from-indigo-500 to-violet-500",
    },
  ];

  const skills: Skill[] = [
    {
      name: "User Experience Design",
      color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/25",
    },
    {
      name: "User Interface Design",
      color: "bg-purple-500/15 text-purple-300 border-purple-500/40 hover:bg-purple-500/25",
    },
    {
      name: "Prototyping",
      color: "bg-blue-500/15 text-blue-300 border-blue-500/40 hover:bg-blue-500/25",
    },
    {
      name: "User Research",
      color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/40 hover:bg-indigo-500/25",
    },
    {
      name: "Wireframing",
      color: "bg-violet-500/15 text-violet-300 border-violet-500/40 hover:bg-violet-500/25",
    },
    {
      name: "Design Systems",
      color: "bg-pink-500/15 text-pink-300 border-pink-500/40 hover:bg-pink-500/25",
    },
    {
      name: "Interaction Design",
      color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/25",
    },
    {
      name: "Visual Design",
      color: "bg-purple-500/15 text-purple-300 border-purple-500/40 hover:bg-purple-500/25",
    },
    {
      name: "Usability Testing",
      color: "bg-blue-500/15 text-blue-300 border-blue-500/40 hover:bg-blue-500/25",
    },
    {
      name: "Information Architecture",
      color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/40 hover:bg-indigo-500/25",
    },
  ];

  const tools: Tool[] = [
    {
      name: "Figma",
      color: "bg-pink-500/15 text-pink-300 border-pink-500/40 hover:bg-pink-500/25",
    },
    {
      name: "Sketch",
      color: "bg-orange-500/15 text-orange-300 border-orange-500/40 hover:bg-orange-500/25",
    },
    {
      name: "Adobe XD",
      color: "bg-purple-500/15 text-purple-300 border-purple-500/40 hover:bg-purple-500/25",
    },
    {
      name: "Principle",
      color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/25",
    },
    {
      name: "InVision",
      color: "bg-blue-500/15 text-blue-300 border-blue-500/40 hover:bg-blue-500/25",
    },
    {
      name: "Miro",
      color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/40 hover:bg-indigo-500/25",
    },
    {
      name: "Maze",
      color: "bg-violet-500/15 text-violet-300 border-violet-500/40 hover:bg-violet-500/25",
    },
    {
      name: "Hotjar",
      color: "bg-red-500/15 text-red-300 border-red-500/40 hover:bg-red-500/25",
    },
    {
      name: "Zeplin",
      color: "bg-green-500/15 text-green-300 border-green-500/40 hover:bg-green-500/25",
    },
    {
      name: "Adobe Creative Suite",
      color:
        "bg-gradient-to-r from-purple-500/15 to-pink-500/15 text-purple-300 border-purple-500/40 hover:from-purple-500/25 hover:to-pink-500/25",
    },
  ];

  const AnimatedSection: React.FC<AnimatedSectionProps> = ({ children, className = "" }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, {
      once: true,
      margin: "-100px",
    });

    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 75 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 75 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={className}
      >
        {children}
      </motion.div>
    );
  };

  const GlassCard: React.FC<GlassCardProps> = ({ children, className = "", gradient = "" }) => (
    <div
      className={`backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl ${gradient} ${className}`}
    >
      {children}
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-x-hidden relative">
      {/* 3D Background */}
      <Background3D />

      {/* Fixed Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10"
      >
        <div className="container mx-auto max-w-6xl px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div
              className="text-xl font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              Vatanak
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              {[
                { name: "Home", id: "hero" },
                { name: "Projects", id: "projects" },
                { name: "Experience", id: "experience" },
                { name: "Education", id: "education" },
                { name: "Skills", id: "skills" },
                { name: "About", id: "about" },
                { name: "Contact", id: "contact" },
              ].map((item) => (
                <motion.button
                  key={item.name}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-200 hover:text-white transition-colors relative"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  {item.name}
                  <motion.div
                    className="absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-cyan-400 to-purple-400"
                    initial={{ width: 0 }}
                    whileHover={{ width: "100%" }}
                    transition={{ duration: 0.2 }}
                  />
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Toggle */}
            <motion.button
              className="md:hidden p-2 rounded-lg backdrop-blur-sm bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-white" />
              ) : (
                <Menu className="w-6 h-6 text-white" />
              )}
            </motion.button>
          </div>

          {/* Mobile Menu */}
          <motion.div
            initial={false}
            animate={{
              height: isMenuOpen ? "auto" : 0,
              opacity: isMenuOpen ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden"
          >
            <GlassCard className="mt-4 p-4">
              <div className="space-y-4">
                {[
                  { name: "Home", id: "hero" },
                  { name: "Projects", id: "projects" },
                  { name: "Experience", id: "experience" },
                  { name: "Education", id: "education" },
                  { name: "Skills", id: "skills" },
                  { name: "About", id: "about" },
                  { name: "Contact", id: "contact" },
                ].map((item) => (
                  <motion.button
                    key={item.name}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left text-gray-200 hover:text-white transition-colors"
                    whileHover={{ x: 8 }}
                    transition={{ duration: 0.2 }}
                  >
                    {item.name}
                  </motion.button>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </div>
      </motion.nav>

      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Hero Section */}
      <section id="hero" className="relative px-4 py-20 pt-32 min-h-screen flex items-center">
        <motion.div
          ref={heroRef}
          style={{ y: heroY, opacity: heroOpacity }}
          className="container mx-auto max-w-6xl relative z-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-2">
                <motion.h1
                  className="text-4xl lg:text-6xl font-medium text-white drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Hi, I'm{" "}
                  <motion.span
                    className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"
                    animate={{
                      backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                    }}
                    style={{ backgroundSize: "200% 200%" }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    Vatanak
                  </motion.span>
                </motion.h1>
                <motion.h2
                  className="text-2xl lg:text-3xl text-gray-200 drop-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  UX/UI Designer Based in Cambodia
                </motion.h2>
              </div>
              <motion.p
                className="text-lg text-gray-300 max-w-lg drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Crafting digital experiences that bridge traditional Cambodian culture with modern technology. Specializing in user-centered design for Southeast Asian markets.
              </motion.p>
              <motion.div
                className="flex gap-4 items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    size="lg"
                    className="gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 border-0 text-white shadow-lg"
                  >
                    <Download className="w-4 h-4" />
                    Download Resume
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="gap-2 backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/15 shadow-lg"
                    onClick={() => scrollToSection("contact")}
                  >
                    <Mail className="w-4 h-4" />
                    Get in Touch
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex gap-6 pt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {[
                  {
                    value: "1+",
                    label: "Years Experience",
                    gradient: "from-cyan-500/25 to-blue-500/25",
                  },
                  {
                    value: "10+",
                    label: "Projects Completed",
                    gradient: "from-purple-500/25 to-pink-500/25",
                  },
                  {
                    value: "10+",
                    label: "Happy Clients",
                    gradient: "from-indigo-500/25 to-violet-500/25",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 1.4 + index * 0.1,
                    }}
                    whileHover={{ scale: 1.05, y: -3 }}
                  >
                    <GlassCard
                      className={`p-4 bg-gradient-to-br ${stat.gradient} shadow-lg`}
                    >
                      <div className="text-2xl font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </GlassCard>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50, rotate: 5 }}
              animate={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <GlassCard className="p-8 aspect-square bg-gradient-to-br from-cyan-500/15 to-purple-500/15 shadow-xl">
                <motion.div
                  className="w-full h-full rounded-xl overflow-hidden relative"
                  whileHover={{ rotate: 2, scale: 1.02 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    duration: 0.4,
                  }}
                >
                  <ImageWithFallback
                    src="/images/vatanak.jpeg" // Fixed path
                    alt="UX/UI Designer Portrait"
                    width={400} // Added width
                    height={400} // Added height
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
                </motion.div>
              </GlassCard>
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-4 rounded-full shadow-lg"
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  rotate: {
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear",
                  },
                  scale: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
              >
                <Star className="w-6 h-6" />
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Portfolio Section */}
      <section id="projects" className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              A selection of recent UX/UI projects that showcase my approach to solving complex design challenges in the Cambodian market.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <GlassCard className="group hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-400 h-full overflow-hidden">
                  <div className="p-0">
                    <motion.div
                      className="aspect-[4/3] overflow-hidden"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithFallback
                        src={project.image}
                        alt={project.title}
                        width={600} // Added width
                        height={400} // Added height
                        className="w-full h-full object-cover transition-transform duration-400"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-2">
                      <Badge
                        className={`text-xs bg-gradient-to-r ${project.gradient} text-white border-0`}
                      >
                        {project.category}
                      </Badge>
                      <span className="text-sm text-gray-300">{project.year}</span>
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool) => (
                        <Badge
                          key={tool}
                          variant="outline"
                          className="text-xs border-white/20 text-gray-300 hover:bg-white/10"
                        >
                          {tool}
                        </Badge>
                      ))}
                    </div>
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Button
                        variant="ghost"
                        size="sm"
                        className="gap-2 p-0 h-auto text-cyan-400 hover:text-cyan-300"
                      >
                        View Project
                        <ExternalLink className="w-4 h-4" />
                      </Button>
                    </motion.div>
                  </div>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                <Briefcase className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Professional Experience
              </h2>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              My journey through the design industry, working with innovative companies and contributing to meaningful projects across Southeast Asia.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <AnimatedSection key={exp.id}>
                <motion.div
                  initial={{
                    opacity: 0,
                    x: index % 2 === 0 ? -50 : 50,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ scale: 1.02, y: -3 }}
                >
                  <GlassCard
                    className={`p-8 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-400 bg-gradient-to-br ${exp.gradient}`}
                  >
                    <div className="flex flex-col lg:flex-row gap-8">
                      <div className="lg:w-1/3">
                        <div className="flex items-center gap-2 mb-2">
                          <Building className="w-5 h-5 text-cyan-400" />
                          <h3 className="text-xl font-medium text-white">{exp.company}</h3>
                        </div>
                        <h4 className="text-purple-400 font-medium mb-2">{exp.position}</h4>
                        <div className="flex items-center gap-2 text-gray-300 mb-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-300">
                          <MapPin className="w-4 h-4" />
                          <span className="text-sm">{exp.location}</span>
                        </div>
                      </div>
                      <div className="lg:w-2/3">
                        <p className="text-gray-300 mb-4">{exp.description}</p>
                        <div className="space-y-2">
                          <h5 className="font-medium text-sm text-white">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {exp.achievements.map((achievement, idx) => (
                              <motion.li
                                key={idx}
                                className="text-sm text-gray-300 flex items-start gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                  delay: 0.3 + idx * 0.1,
                                  duration: 0.3,
                                }}
                              >
                                <Zap className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                                {achievement}
                              </motion.li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Education & Certifications
              </h2>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Continuous learning and professional development that shaped my design philosophy and technical expertise.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {education.map((edu, index) => (
              <AnimatedSection key={edu.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <GlassCard className="p-6 h-full hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-400">
                    <div className="text-center mb-4">
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${edu.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                      >
                        <GraduationCap className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="font-medium mb-2 text-white">{edu.institution}</h3>
                      <h4 className="text-purple-400 text-sm font-medium mb-2">{edu.degree}</h4>
                      <div className="flex items-center justify-center gap-2 text-gray-300 mb-2">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{edu.period}</span>
                      </div>
                      <div className="flex items-center justify-center gap-2 text-gray-300">
                        <MapPin className="w-4 h-4" />
                        <span className="text-sm">{edu.location}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm mb-4">{edu.description}</p>
                    <div>
                      <h5 className="font-medium text-sm mb-2 text-white">Highlights:</h5>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, idx) => (
                          <motion.li
                            key={idx}
                            className="text-sm text-gray-300 flex items-start gap-2"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              delay: 0.3 + idx * 0.1,
                              duration: 0.3,
                            }}
                          >
                            <Star className="w-3 h-3 text-cyan-400 mt-0.5 flex-shrink-0" />
                            {achievement}
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </GlassCard>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <AnimatedSection className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full">
                <Palette className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl lg:text-4xl font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Skills & Expertise
              </h2>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive skill set developed through years of experience in digital design and user experience research.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <GlassCard className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                    <Palette className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-white">Design Skills</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <Badge
                        className={`py-2 px-4 ${skill.color} hover:shadow-lg transition-all duration-200`}
                      >
                        {skill.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection>
              <GlassCard className="p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg">
                    <Code className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-xl font-medium text-white">Tools & Software</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={tool.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.3,
                        delay: index * 0.05,
                      }}
                      whileHover={{ scale: 1.05, y: -2 }}
                    >
                      <Badge
                        variant="outline"
                        className={`py-2 px-4 ${tool.color} hover:shadow-lg transition-all duration-200`}
                      >
                        {tool.name}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-medium mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Vatanak
              </h2>
              <GlassCard className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                <div className="space-y-4 text-gray-300">
                  <p>
                    I'm Vatanak, a passionate UX/UI designer with over 5 years of experience creating digital solutions that resonate with Southeast Asian audiences, particularly in Cambodia.
                  </p>
                  <p>
                    My approach combines modern design principles with deep cultural understanding, ensuring that every project not only looks great but also feels authentic to local users.
                  </p>
                  <p>
                    I believe in the power of user-centered design to solve real problems and create meaningful experiences that bridge the gap between technology and traditional Khmer culture.
                  </p>
                </div>
              </GlassCard>
            </AnimatedSection>

            <AnimatedSection className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                {[
                  {
                    icon: Users,
                    value: "15+",
                    label: "Happy Clients",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: Briefcase,
                    value: "50+",
                    label: "Projects",
                    gradient: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: Award,
                    value: "5+",
                    label: "Years Experience",
                    gradient: "from-purple-500 to-violet-500",
                  },
                  {
                    icon: Star,
                    value: "4.9",
                    label: "Rating",
                    gradient: "from-yellow-500 to-orange-500",
                  },
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.4,
                      delay: index * 0.1,
                    }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <GlassCard className="text-center p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300">
                      <div
                        className={`w-12 h-12 bg-gradient-to-br ${stat.gradient} rounded-full flex items-center justify-center mx-auto mb-3`}
                      >
                        <stat.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="text-2xl font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-300">{stat.label}</div>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative z-10">
        <GlassCard className="container mx-auto max-w-6xl p-12 bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-medium mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let's Work Together
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Ready to bring your next project to life? I'd love to hear about your ideas and discuss how we can create something amazing together.
            </p>
          </AnimatedSection>

          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "hello@vatanak.design",
                  gradient: "from-red-500 to-pink-500",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  info: "+855 12 345 678",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: MapPin,
                  title: "Location",
                  info: "Phnom Penh, Cambodia",
                  gradient: "from-blue-500 to-cyan-500",
                },
              ].map((contact, index) => (
                <motion.div
                  key={contact.title}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.1,
                  }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${contact.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}
                  >
                    <contact.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-medium mb-2 text-white">{contact.title}</h3>
                  <p className="text-gray-300">{contact.info}</p>
                </motion.div>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection>
            <div className="flex justify-center gap-4 flex-wrap">
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="gap-2  border-0 shadow-lg"
                >
                  <Mail className="w-4 h-4" />
                  Send Email
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-white/30 shadow-lg"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="gap-2 border-white/30 shadow-lg"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </Button>
              </motion.div>
            </div>
          </AnimatedSection>
        </GlassCard>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 relative z-10">
        <AnimatedSection>
          <div className="container mx-auto max-w-6xl">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-300 text-sm">© 2024 Vatanak. All rights reserved.</p>
              <p className="text-gray-300 text-sm">Made with ❤️ in Cambodia</p>
            </div>
          </div>
        </AnimatedSection>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-3 rounded-full shadow-lg z-40 bg-gradient-to-r from-cyan-500 to-purple-500 text-white"
        initial={{ scale: 0 }}
        animate={{ scale: showScrollTop ? 1 : 0 }}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        transition={{
          type: "spring",
          stiffness: 300,
          duration: 0.2,
        }}
      >
        <ArrowUp className="w-5 h-5" />
      </motion.button>
    </div>
  );
}