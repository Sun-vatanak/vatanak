"use client"; // Mark as client component for Next.js
import { useEffect, useRef, useState, useCallback } from "react";
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
import debounce from "lodash/debounce"; // Import lodash debounce for scroll optimization

// Dynamically import Background3D
const Background3D = dynamic(() => import("@/components/Background3D"), {
  ssr: false,
});

// Define interfaces
interface Project {
  link: string | undefined;
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

  // Parallax effects with reduced range for better performance
  const heroY = useTransform(scrollY, [0, 300], [0, 100]);
  const heroOpacity = useTransform(scrollY, [0, 200], [1, 0.5]);

  // Optimized scroll handler with debounce
  const handleScroll = useCallback(
    debounce(() => {
      setShowScrollTop(window.scrollY > 500);
    }, 100),
    []
  );

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true }); // Passive listener for performance
    return () => {
      window.removeEventListener("scroll", handleScroll);
      handleScroll.cancel(); // Clean up debounce
    };
  }, [handleScroll]);

  // Enhanced smooth scrolling with focus management
  const scrollToSection = useCallback((id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      // Set focus for accessibility
      element.setAttribute("tabindex", "-1");
      element.focus({ preventScroll: true });
      element.removeAttribute("tabindex");
    }
    setIsMenuOpen(false);
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    const hero = document.getElementById("hero");
    if (hero) {
      hero.setAttribute("tabindex", "-1");
      hero.focus({ preventScroll: true });
      hero.removeAttribute("tabindex");
    }
  }, []);

  // Updated projects data with corrected IDs
  const projects: Project[] = [
    {
      id: 1,
      title: "Fishion & Shop App",
      description:
        "Mobile app redesign for Cambodia's premier tourism platform, featuring temple guides and cultural experiences.",
      image: "/images/project1.jpg",
      category: "Mobile App",
      tools: ["Figma", "Freepick", "Adobe XD"],
      year: "2024",
      gradient: "from-cyan-500 to-blue-500",
      link: "https://www.figma.com/design/EOnlswLUhwEjtJghsNBahk/Fashion--Shop?node-id=0-1&t=lPLsI07xo9foTIah-1",
    },
    {
      id: 2,
      title: "Figma Project Phser Baitong",
      description:
        "Complete UX overhaul of a local banking platform with focus on accessibility and Khmer language support.",
      image: "/images/project2.jpg",
      category: "Web App",
      tools: ["Figma", "Vue", "Laravel"],
      year: "2024",
      gradient: "from-purple-500 to-pink-500",
      link: "https://www.figma.com/design/5NiaE7l5yVRXEiG9MaQC2z/UX%2FUI-Figma-File?t=fsy2KilShLh1Fvxh-1",
    },
    {
      id: 3,
      title: "Figma Project IOne Office V2",
      description:
        "Full-stack e-commerce solution designed for local artisans and craftspeople selling traditional goods.",
      image: "/images/project3.jpg",
      category: "HR Management",
      tools: ["Sketch", "Figma", "Zeplin"],
      year: "2025",
      gradient: "from-indigo-500 to-purple-500",
      link: "https://www.figma.com/design/i5JurepNjQNiT22IY7Wfuy/iOne?node-id=1-2&t=xCOb7cwa9X926H5d-1",
    },
    {
      id: 4,
      title: "Figma Project IOne Office V2 Dashboard",
      description:
        "Interactive public transportation system design with multilingual support and accessibility features.",
      image: "/images/project4.jpg",
      category: "HR Management And dashboard",
      tools: ["Figma", "Illustrator", "Principle"],
      year: "2025",
      gradient: "from-blue-500 to-cyan-500",
      link: "https://www.figma.com/design/JaUet4VrOsF4zc1PlGHf8t/iOne-Office?node-id=18-5227&t=Fe2kHL9FMMN6En7i-1",
    },
    {
      id: 5,
      title: "Cambodian Recipe App",
      description:
        "Cultural cooking app preserving traditional Khmer recipes with step-by-step video tutorials.",
      image: "/images/project5.png",
      category: "Mobile App",
      tools: ["Figma", "After Effects", "Lottie"],
      year: "2024",
      gradient: "from-violet-500 to-purple-500",
      link: "http://antstudents.com/WebScholarshipS2/Group-17/ProjectCSS_GreenGrowth/mains/index.html",
    },
    {
      id: 6,
      title: "គេហទំព័រ ហ្រ្គីនហ្រ្កូ Green Growth",
      description:
        "Social media learning platform for Cambodian students about agriculture, with gamification and local product selling.",
      image: "/images/project6.png",
      category: "Web App Social Media",
      tools: ["Figma", "HTML", "Hotjar"],
      year: "2024",
      gradient: "from-pink-500 to-rose-500",
      link: "https://example.com/phnom-penh-metro-map",
    },
    {
      id: 7,
      title: "Project Phser Baitong",
      description:
        "Social media learning platform for Cambodian students about agriculture, with gamification and local product selling.",
      image: "/images/project7.jpg",
      category: "Web App E-commerce",
      tools: ["Figma", "Figjam"],
      year: "2024",
      gradient: "from-pink-500 to-rose-500",
      link: "https://www.figma.com/board/LyzNv1v3GDlD2N4gLT12Px/UX-UI-FigJam?node-id=0-1&t=uOG0tpSukN3FYIaL-0",
    },
    {
      id: 8,
      title: "Project Phser Baitong Video Demo",
      description:
        "Social media learning platform for Cambodian students about agriculture, with gamification and local product selling.",
      image: "/images/project8.png",
      category: "Web App E-commerce",
      tools: ["Video"],
      year: "2025",
      gradient: "from-pink-500 to-rose-500",
      link: "https://www.facebook.com/share/v/17AzXzyc4b/",
    },
    {
      id: 9,
      title: "គេហទំព័រ កសិករ / Kaksekar",
      description:
        "Social media learning platform for Cambodian students about agriculture, with gamification and local product selling.",
      image: "/images/project9.png",
      category: "Web Design",
      tools: ["Figma", "HTML", "CSS"],
      year: "2024",
      gradient: "from-pink-500 to-rose-500",
      link: "http://antstudents.com/WebScholarship/Group-16/ProjectHTML/index.html",
    },
    {
      id: 10,
      title: "Clinic System",
      description:
        "System learning platform for Cambodian students about agriculture, with gamification and local product selling.",
      image: "/images/project14.png",
      category: "Web System",
      tools: ["Laravel", "Vue", "MySQL"],
      year: "2025",
      gradient: "from-pink-500 to-rose-500",
      link: "https://github.com/Sun-vatanak/Clinic-system-api.git",
    },
    {
      id: 11,
      title: "Mobile App API",
      description:
        "Mobile app learning platform for Cambodian students about agriculture, with gamification and local product selling.",
      image: "/images/project15.jpg",
      category: "Web System",
      tools: ["Laravel", "Flutter", "PostgreSQL"],
      year: "2025",
      gradient: "from-pink-500 to-rose-500",
      link: "https://github.com/Sun-vatanak/moblieapp-api-nu.git",
    },
    {
      id: 12,
      title: "Website Web Body UX UI",
      description:
        "Website body platform for Cambodian students about agriculture, with gamification and local product selling.",
      image: "/images/project16.jpg",
      category: "Web UX UI",
      tools: ["Laravel", "Flutter", "PostgreSQL"],
      year: "2024",
      gradient: "from-pink-500 to-rose-500",
      link: "https://www.figma.com/design/kofJywV4nFD2u2tLAjfFt9/Group3-Web-body?node-id=6-576&t=K1a7NvfHfZXrz2Au-1",
    },
  ];

  const experiences: Experience[] = [
    {
      id: 1,
      company: "ANT Training Center",
      position: "UX/UI Designer",
      period: "2024 - 2025",
      location: "Phnom Penh, Cambodia",
      description:
        "Developed the website គេហទំព័រ ផ្សារបៃតង (Green Market Website). Focused on UX/UI and front-end development using Vue.js. Collaborated with team members using Git for version control and project management. Practiced effective time management, took responsibility, and worked in team environments.",
      achievements: [
        "Led redesign of web app platform serving users",
        "Established company-wide design system",
        "Improved user engagement by 35%",
      ],
      gradient: "from-cyan-500/15 to-blue-500/15",
    },
    {
      id: 2,
      company: "IT ស្រុកស្រែ (Srok Srae)",
      position: "UX/UI Designer And Frontend Developer",
      period: "2024 - 2025",
      location: "Phnom Penh, Cambodia",
      description:
        "Contributed to UX/UI and front-end development using Vue.js. Assisted the back-end team with database analysis.",
      achievements: [
        "Designed 2+ mobile applications",
        "Improved accessibility compliance by 80%",
        "Collaborated with government on digital initiatives",
      ],
      gradient: "from-purple-500/15 to-pink-500/15",
    },
    {
      id: 3,
      company: "iOne Cambodia",
      position: "Junior Designer",
      period: "2025 - present",
      location: "Phnom Penh, Cambodia",
      description:
        "Contributed to UX/UI for iOne Office and front-end development using Next.js.",
      achievements: [
        "Created brand identities for 2+ companies",
        "Expanded services to HR management and dashboard design",
        "Won 'Rising Designer' award 2025",
      ],
      gradient: "from-indigo-500/15 to-violet-500/15",
    },
  ];

  const education: Education[] = [
    {
      id: 1,
      institution: "Norton University",
      degree: "Year 4 of Software Development",
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
      institution: "Principles of UX/UI Design Certificate Meta",
      degree: "Professional Certificate",
      period: "2025",
      location: "Online",
      description:
        "Comprehensive UX/UI design program covering user research, wireframing, prototyping, and usability testing methodologies.",
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
      degree: "Web Development (Laravel)",
      period: "2023-2025",
      location: "Phnom Penh, Cambodia",
      description:
        "Recipient of a scholarship from the CBRD Foundation, Ministry of Posts and Telecommunications, enrolled in a program from February 2024 to February 2025.",
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
    { name: "Figma", color: "bg-pink-500/15 text-pink-300 border-pink-500/40 hover:bg-pink-500/25" },
    { name: "HTML", color: "bg-orange-500/15 text-orange-300 border-orange-500/40 hover:bg-orange-500/25" },
    { name: "CSS", color: "bg-blue-500/15 text-blue-300 border-blue-500/40 hover:bg-blue-500/25" },
    { name: "JavaScript", color: "bg-yellow-500/15 text-yellow-300 border-yellow-500/40 hover:bg-yellow-500/25" },
    { name: "React", color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/25" },
    { name: "Next.js", color: "bg-slate-500/15 text-slate-300 border-slate-500/40 hover:bg-slate-500/25" },
    { name: "Tailwind CSS", color: "bg-teal-500/15 text-teal-300 border-teal-500/40 hover:bg-teal-500/25" },
    { name: "Bootstrap", color: "bg-purple-500/15 text-purple-300 border-purple-500/40 hover:bg-purple-500/25" },
    { name: "Shadcn UI", color: "bg-violet-500/15 text-violet-300 border-violet-500/40 hover:bg-violet-500/25" },
    { name: "Vue.js", color: "bg-green-500/15 text-green-300 border-green-500/40 hover:bg-green-500/25" },
    { name: "Nuxt.js", color: "bg-emerald-500/15 text-emerald-300 border-emerald-500/40 hover:bg-emerald-500/25" },
    { name: "Python", color: "bg-yellow-500/15 text-yellow-300 border-yellow-500/40 hover:bg-yellow-500/25" },
    { name: "Django", color: "bg-green-700/15 text-green-300 border-green-700/40 hover:bg-green-700/25" },
    { name: "FastAPI", color: "bg-lime-500/15 text-lime-300 border-lime-500/40 hover:bg-lime-500/25" },
    { name: "PHP", color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/40 hover:bg-indigo-500/25" },
    { name: "Laravel", color: "bg-red-500/15 text-red-300 border-red-500/40 hover:bg-red-500/25" },
    { name: "Git & GitHub", color: "bg-gray-500/15 text-gray-300 border-gray-500/40 hover:bg-gray-500/25" },
    { name: "Postman", color: "bg-orange-600/15 text-orange-300 border-orange-600/40 hover:bg-orange-600/25" },
    { name: "GitLab", color: "bg-orange-500/15 text-orange-300 border-orange-500/40 hover:bg-orange-500/25" },
    { name: "Data Analysis", color: "bg-sky-500/15 text-sky-300 border-sky-500/40 hover:bg-sky-500/25" },
    { name: "VS Code", color: "bg-blue-500/15 text-blue-300 border-blue-500/40 hover:bg-blue-500/25" },
    { name: "Adobe XD", color: "bg-purple-500/15 text-purple-300 border-purple-500/40 hover:bg-purple-500/25" },
    { name: "Photoshop", color: "bg-cyan-500/15 text-cyan-300 border-cyan-500/40 hover:bg-cyan-500/25" },
    { name: "MySQL", color: "bg-yellow-600/15 text-yellow-300 border-yellow-600/40 hover:bg-yellow-600/25" },
    { name: "Canva", color: "bg-indigo-500/15 text-indigo-300 border-indigo-500/40 hover:bg-indigo-500/25" },
    { name: "Trello", color: "bg-violet-500/15 text-violet-300 border-violet-500/40 hover:bg-violet-500/25" },
    { name: "FigJam", color: "bg-red-500/15 text-red-300 border-red-500/40 hover:bg-red-500/25" }, // Corrected "Figma Make" to "FigJam"
    { name: "Netlify", color: "bg-green-500/15 text-green-300 border-green-500/40 hover:bg-green-500/25" },
    { name: "Vercel", color: "bg-gradient-to-r from-purple-500/15 to-pink-500/15 text-purple-300 border-purple-500/40 hover:from-purple-500/25 hover:to-pink-500/25" },
    { name: "PVS Cloud", color: "bg-gradient-to-r from-indigo-500/15 to-blue-500/15 text-indigo-300 border-indigo-500/40 hover:from-indigo-500/25 hover:to-blue-500/25" },
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
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-auto">
      {/* Ensure smooth scrolling globally */}
      <style jsx global>{`
        html, body {
          scroll-behavior: smooth;
          overscroll-behavior-y: auto;
          -webkit-overflow-scrolling: touch;
          height: 100%;
          margin: 0;
          touch-action: auto;
        }
        #__next {
          min-height: 100%;
          display: flex;
          flex-direction: column;
        }
        section {
          min-height: 100vh; /* Ensure sections have enough height for scrolling */
        }
      `}</style>

      {/* 3D Background */}
      <Background3D />

      {/* Fixed Navigation */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-20 backdrop-blur-xl bg-black/20 border-b border-white/10"
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
                  className="text-gray-200 hover:text-white transition-colors relative focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
              className="md:hidden p-3 rounded-lg backdrop-blur-sm bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <X className="w-7 h-7 text-white" />
              ) : (
                <Menu className="w-7 h-7 text-white" />
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
            <GlassCard className="mt-4 p-6">
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
                    className="block w-full text-left text-lg text-gray-200 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 py-3"
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
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 origin-left z-30"
        style={{ scaleX: scrollYProgress }}
        animate={{ opacity: [1, 0.7, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
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
                  className="text-4xl md:text-5xl lg:text-6xl font-medium text-white drop-shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  Hi, I am{" "}
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
                  className="text-2xl md:text-3xl text-gray-200 drop-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  UX/UI Designer Based in Cambodia
                </motion.h2>
              </div>
              <motion.p
                className="text-base md:text-lg text-gray-300 max-w-lg drop-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Crafting digital experiences that bridge traditional Cambodian culture with modern technology. Specializing in user-centered design for Southeast Asian markets.
              </motion.p>
              <motion.div
                className="flex gap-4 items-center flex-wrap"
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
                    className="gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-400 hover:to-purple-400 border-0 text-white shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                  >
                    <Download className="w-5 h-5" />
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
                    className="gap-2 backdrop-blur-sm bg-white/10 border-white/30 text-white hover:bg-white/15 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                    onClick={() => scrollToSection("contact")}
                  >
                    <Mail className="w-5 h-5" />
                    Get in Touch
                  </Button>
                </motion.div>
              </motion.div>
              <motion.div
                className="flex gap-6 pt-4 flex-wrap"
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
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <GlassCard className="p-8 aspect-square bg-gradient-to-br from-cyan-500/15 to-purple-500/15 shadow-xl">
                <motion.div
                  className="w-full h-full rounded-xl overflow-hidden relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    duration: 0.4,
                  }}
                >
                  <ImageWithFallback
                    src="/images/vatanak.jpeg"
                    alt="UX/UI Designer Portrait"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover rounded-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-500/20 to-transparent" />
                </motion.div>
              </GlassCard>
              <motion.div
                className="absolute -top-4 -right-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white p-4 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.1, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
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
            <h2 className="text-3xl md:text-4xl font-medium mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
              A selection of recent UX/UI projects that showcase my approach to solving complex design challenges in the Cambodian market.
            </p>
          </AnimatedSection>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                        width={600}
                        height={400}
                        className="w-full h-full object-cover transition-transform duration-400"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
                    <p className="text-gray-300 mb-4 line-clamp-2 text-sm md:text-base">{project.description}</p>
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
                    <motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
                      <a
                        href={project.link || "#"}
                        target={project.link ? "_blank" : "_self"}
                        rel={project.link ? "noopener noreferrer" : ""}
                      >
                        <Button
                          variant="ghost"
                          size="sm"
                          className="gap-2 p-0 h-auto text-cyan-400 hover:text-cyan-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                        >
                          View Project
                          <ExternalLink className="w-4 h-4" />
                        </Button>
                      </a>
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
              <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Professional Experience
              </h2>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
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
                        <p className="text-gray-300 mb-4 text-sm md:text-base">{exp.description}</p>
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
              <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Education & Certifications
              </h2>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
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
              <h2 className="text-3xl md:text-4xl font-medium bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Skills & Expertise
              </h2>
            </div>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
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
              <h2 className="text-3xl md:text-4xl font-medium mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                About Vatanak
              </h2>
              <GlassCard className="p-6 bg-gradient-to-br from-cyan-500/10 to-purple-500/10">
                <div className="space-y-4 text-gray-300 text-sm md:text-base">
                  <p>
                    I am Vatanak, a passionate UX/UI designer with over 1 year of experience creating digital solutions that resonate with Southeast Asian audiences, particularly in Cambodia.
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
                    value: "5+",
                    label: "Happy Clients",
                    gradient: "from-blue-500 to-cyan-500",
                  },
                  {
                    icon: Briefcase,
                    value: "10+",
                    label: "Projects",
                    gradient: "from-green-500 to-emerald-500",
                  },
                  {
                    icon: Award,
                    value: "1+",
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
            <h2 className="text-3xl md:text-4xl font-medium mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Let  is Work Together
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto text-base md:text-lg">
              Ready to bring your next project to life? I love to hear about your ideas and discuss how we can create something amazing together.
            </p>
          </AnimatedSection>
          <AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  icon: Mail,
                  title: "Email",
                  info: "sunvatanak61@gmail.com",
                  gradient: "from-red-500 to-pink-500",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  info: "+855 88 609 8255",
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
                  <p className="text-gray-300 text-sm md:text-base">{contact.info}</p>
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
                  className="gap-2 border-0 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <Mail className="w-5 h-5" />
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
                  className="gap-2 border-white/30 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <Linkedin className="w-5 h-5" />
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
                  className="gap-2 border-white/30 shadow-lg focus:outline-none focus:ring-2 focus:ring-cyan-400"
                >
                  <Github className="w-5 h-5" />
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
              <p className="text-gray-300 text-sm">© 2025 Vatanak. All rights reserved.</p>
              <p className="text-gray-300 text-sm">Made with ❤️ in Cambodia</p>
            </div>
          </div>
        </AnimatedSection>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 p-4 rounded-full shadow-lg z-40 bg-gradient-to-r from-cyan-500 to-purple-500 text-white focus:outline-none focus:ring-2 focus:ring-cyan-400"
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
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </div>
  );
}