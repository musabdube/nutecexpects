"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import {
  ArrowRight,
  House,
  Info,
  BriefcaseBusiness,
  Phone,
  Sparkles,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const navItems = [
  { label: "Home", href: "/", Icon: House },
  { label: "About", href: "/#about", Icon: Info },
  { label: "Services", href: "/#services", Icon: BriefcaseBusiness },
  { label: "Gallery", href: "/gallery", Icon: Sparkles },
  { label: "Contact", href: "/#contact", Icon: Phone },
];

const categories = [
  "All Projects",
  "Wendy Houses",
  "Nutec Houses",
  "Log Cabins",
];

const projects = [
  {
    id: 1,
    title: "Modern Nutec Home",
    category: "Nutec Houses",
    location: "Western Cape",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200",
    size: "large",
  },
  {
    id: 2,
    title: "Garden Wendy House",
    category: "Wendy Houses",
    location: "Western Cape",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=1000",
    size: "small",
  },
  {
    id: 3,
    title: "Contemporary Cabin",
    category: "Log Cabins",
    location: "Western Cape",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1000",
    size: "small",
  },
  {
    id: 4,
    title: "Modern Residential Design",
    category: "Nutec Houses",
    location: "Western Cape",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200",
    size: "small",
  },
  {
    id: 5,
    title: "Woodland Cabin",
    category: "Log Cabins",
    location: "Western Cape",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=1000",
    size: "small",
  },
  {
    id: 6,
    title: "Stylish Modern Home",
    category: "Nutec Houses",
    location: "Western Cape",
    image:
      "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?w=1200",
    size: "large",
  },
];

const phone = "27736252866";
const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
  "Hello Nutec Expects, I would like to request a quotation."
)}`;

const currentYear = 2026;

function AnimatedGalleryText() {
  const phrases = [
    "your home office",
    "your backyard retreat",
    "your man cave",
    "storage",
    "your dream cabin",
  ];

  const [displayText, setDisplayText] = useState("");
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    const currentPhrase = phrases[currentPhraseIndex];
    let timeout: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentPhrase.slice(0, displayText.length + 1));
        }, 50);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 1800);
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, 30);
      } else {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, isTyping, currentPhraseIndex]);

  return (
    <span className="relative text-red-500">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 inline-block h-[1.2em] w-[2px] bg-red-500"
      />
    </span>
  );
}

export default function GalleryPage() {
  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const heroScale = useTransform(scrollYProgress, [0, 0.55, 1], [1, 1.05, 1.18]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.35, 0.7, 1], [1, 1, 0.75, 0]);
  const heroFilter = useTransform(scrollYProgress, [0, 0.5, 1], ["blur(0px)", "blur(2px)", "blur(6px)"]);
  const textY = useTransform(scrollYProgress, [0, 0.35, 0.7], [0, -18, -42]);
  const textOpacity = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.8], [1, 1, 0.5, 0]);

  const [activeCategory, setActiveCategory] =
    useState("All Projects");

  const [selectedImage, setSelectedImage] =
    useState<(typeof projects)[number] | null>(null);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <main className="min-h-screen bg-white text-black">
      <nav className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 md:px-16">
        <Link
          href="/"
          className="flex items-center rounded-full bg-white/95 p-2 shadow-lg shadow-black/15"
        >
          <img
            src="/images/logo.png"
            alt="Nutec Expects"
            className="h-12 w-auto object-contain md:h-14"
          />
        </Link>

        <div className="hidden items-center gap-4 md:flex">
          {navItems.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="group relative inline-flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:border-red-400/60 hover:bg-red-500/10 hover:text-red-400"
            >
              <Icon className="h-6 w-6" />
              <span className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-white px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-slate-900 opacity-0 shadow-lg transition duration-200 group-hover:opacity-100">
                {label}
              </span>
            </a>
          ))}
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-white hover:text-black md:px-5 md:py-3"
        >
          Get a Quote
        </a>
      </nav>

      <section ref={heroRef} className="relative h-[110vh] overflow-hidden">
        <div className="sticky top-0 flex min-h-screen items-center overflow-hidden px-6 pt-24 md:px-16">
          <motion.div
            className="absolute inset-0"
            style={{
              scale: heroScale,
              opacity: heroOpacity,
              filter: heroFilter,
            }}
          >
            <Image
              src="/images/hero.jpg"
              alt="Modern building"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/45 to-black/20" />
          </motion.div>

          <motion.div
            className="relative max-w-2xl py-16 text-white md:py-20"
            style={{ y: textY, opacity: textOpacity }}
          >
            <p className="mb-4 font-bold uppercase tracking-[4px] text-red-500 md:mb-5">
              Quality Building Solutions
            </p>

            <h1 className="text-4xl font-black uppercase leading-[0.95] md:text-6xl lg:text-7xl">
              Transform
              <span className="mt-2 block text-red-500">
                <AnimatedGalleryText />
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-200 md:mt-6 md:text-lg md:leading-8">
              Explore our collection of building inspiration featuring Wendy houses,
              Nutec homes and log cabins created to suit your lifestyle.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 md:mt-9">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-black md:px-8 md:py-4"
              >
                <FaWhatsapp size={18} />
                Request a Quote
                <ArrowRight size={16} />
              </a>

              <a
                href="#gallery-grid"
                className="inline-flex items-center gap-2 border border-white px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-black md:px-8 md:py-4"
              >
                See Our Work
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* INTRO */}
      <section className="px-6 py-16 text-center md:px-16 md:py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-bold uppercase tracking-widest text-red-600">
            Project Gallery
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">
            Explore Our Work
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-gray-600">
            Every space starts with an idea. Discover different
            building styles and find inspiration for your next project.
          </p>
        </motion.div>
      </section>

      {/* FILTERS */}
      <section className="px-6 pb-12 md:px-16">
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-lg px-5 py-3 text-sm font-bold transition-all duration-300 ${
                activeCategory === category
                  ? "bg-red-600 text-white shadow-lg"
                  : "bg-gray-100 text-gray-600 hover:bg-black hover:text-white"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section id="gallery-grid" className="mx-auto max-w-7xl px-6 pb-24 md:px-16">
        <motion.div
          layout
          className="grid auto-rows-[240px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.button
                key={project.id}
                layout
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.06,
                }}
                onClick={() => setSelectedImage(project)}
                className={`group relative block w-full overflow-hidden bg-gray-200 text-left rounded-lg ${
                  project.size === "large"
                    ? "sm:col-span-2 sm:row-span-2"
                    : ""
                }`}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 800px"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-80 transition group-hover:opacity-100" />

                <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                  <p className="text-xs font-bold uppercase tracking-widest text-red-400">
                    {project.category}
                  </p>

                  <h3 className="mt-2 text-xl font-black uppercase md:text-2xl">
                    {project.title}
                  </h3>

                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold">
                    View Project <ArrowRight size={14} />
                  </span>
                </div>

                <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-xl opacity-0 transition duration-300 group-hover:opacity-100">
                  ↗
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <p className="py-20 text-center text-gray-500">
            No projects found.
          </p>
        )}
      </section>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-5"
          >
            <motion.div
              initial={{ scale: 0.85, y: 30 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl"
            >
              <button
                onClick={() => setSelectedImage(null)}
                aria-label="Close image"
                className="absolute -top-12 right-0 text-3xl text-white hover:text-red-500"
              >
                ×
              </button>

              <div className="relative h-[65vh] w-full">
                <Image
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  fill
                  sizes="100vw"
                  className="object-contain"
                />
              </div>

              <div className="mt-5 text-center text-white">
                <p className="text-sm font-bold uppercase tracking-widest text-red-500">
                  {selectedImage.category}
                </p>
                <h3 className="mt-2 text-2xl font-black uppercase">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA */}
      <section className="bg-red-600 px-6 py-20 text-center text-white md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-3xl font-black uppercase md:text-5xl">
            Have A Project In Mind?
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-white/90">
            Let's discuss your ideas and create a space
            that works for you.
          </p>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 bg-black px-9 py-4 font-bold text-white transition hover:bg-white hover:text-black"
          >
            <FaWhatsapp size={18} />
            Request A Quote
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black px-6 py-12 text-center text-white md:px-16">
        <div className="mb-4 flex justify-center">
          <div className="flex items-center justify-center rounded-full bg-white/95 p-3">
            <img
              src="/images/logo.png"
              alt="Nutec Expects logo"
              className="h-14 w-auto object-contain"
            />
          </div>
        </div>

        <p className="text-sm text-gray-400">
          Transform your space. We build from scratch.
        </p>

        <div className="mt-6 flex flex-col gap-2 text-xs text-gray-500 md:gap-3">
          <p>© {currentYear} Nutec Expects. All rights reserved.</p>
          <a href="tel:+27736252866" className="hover:text-red-500">
            +27 73 625 2866
          </a>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact us on WhatsApp"
        className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-green-500 text-white shadow-2xl transition hover:scale-110 hover:bg-green-600"
      >
        <FaWhatsapp size={32} />
      </a>
    </main>
  );
}
