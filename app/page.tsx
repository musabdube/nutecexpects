"use client";

import {
  ArrowRight,
  BriefcaseBusiness,
  Check,
  House,
  Info,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Warehouse,
  MessageCircle as WhatsAppIcon,
} from "lucide-react";
import { MdBuild } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useState, useEffect } from "react";

const phone = "27736252866";

const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(
  "Hello Nutec Expects, I would like to request a quotation."
)}`;

const services = [
  {
    title: "Wendy Houses",
    description:
      "Affordable and practical Wendy houses designed to suit your space and requirements.",
    image:
      "https://images.unsplash.com/photo-1510798831971-661eb04b3739?w=800",
  },
  {
    title: "Nutec Houses",
    description:
      "Modern Nutec structures built from scratch and customised to your preferred dimensions.",
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
  },
  {
    title: "Log Cabins",
    description:
      "Beautiful wooden cabins offering functional and stylish additional spaces.",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?w=800",
  },
];

const navItems = [
  { label: "Home", href: "#home", Icon: House },
  { label: "About", href: "#about", Icon: Info },
  { label: "Services", href: "#services", Icon: BriefcaseBusiness },
  { label: "Gallery", href: "/gallery", Icon: Sparkles },
  { label: "Contact", href: "#contact", Icon: Phone },
];

const currentYear = 2026;

// Animated typing text component
function AnimatedText() {
  const phrases = [
    "extra accommodation",
    "a backyard office",
    "additional storage",
    "a beautiful cabin",
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
        }, 2000);
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
    <span className="relative text-red-600">
      {displayText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="ml-1 inline-block h-[1.2em] w-[2px] bg-red-600"
      />
    </span>
  );
}

function AnimatedHeroText() {
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

export default function Home() {
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

  return (
    <main className="min-h-screen bg-white text-black">
      <nav className="absolute inset-x-0 top-0 z-50 flex items-center justify-between px-6 py-4 md:px-16">
        <a href="#" className="flex items-center rounded-full bg-white/95 p-2 shadow-lg shadow-black/15">
          <img
            src="/images/logo.png"
            alt="Nutec Expects logo"
            className="h-12 w-auto object-contain md:h-14"
          />
        </a>

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

      <section ref={heroRef} className="relative h-[120vh] overflow-hidden">
        <div className="sticky top-0 flex min-h-screen items-center overflow-hidden px-6 pt-24 md:px-16">
          <motion.div
            className="hero-media absolute inset-0"
            style={{
              scale: heroScale,
              opacity: heroOpacity,
              filter: heroFilter,
              backgroundImage:
                "linear-gradient(90deg, rgba(0,0,0,0.9), rgba(0,0,0,0.35)), url('/images/hero1.png')",
            }}
          />

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
                <AnimatedHeroText />
              </span>
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-gray-200 md:mt-6 md:text-lg md:leading-8">
              We build Wendy houses, Nutec houses and log cabins from scratch,
              customised to your requirements and dimensions.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 md:mt-9">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-red-600 px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-black md:px-8 md:py-4"
              >
                Request a Quote
                <ArrowRight size={16} />
              </a>

              <a
                href="#services"
                className="group inline-flex items-center gap-2 border border-white px-7 py-3.5 text-sm font-bold text-white transition hover:bg-white hover:text-black md:px-8 md:py-4"
              >
                <MdBuild size={18} className="transition group-hover:text-black" />
                <span className="transition group-hover:text-black">Our Services</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="about" className="px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 flex justify-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600">
              <Sparkles size={22} />
            </div>
          </div>

          <p className="font-bold uppercase tracking-widest text-red-600">
            Welcome to Nutec Expects
          </p>

          <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">
            Building Spaces That Work For You
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            We have solutions tailored to your needs. Our structures are built from scratch to be exactly what you're looking for. Whether you need <AnimatedText />, we've got you covered.
          </p>
        </div>
      </section>

      <section id="services" className="bg-gray-100 px-6 py-16 md:px-16 md:py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 text-center md:mb-12">
            <p className="font-bold uppercase tracking-widest text-red-600">
              What We Offer
            </p>

            <h2 className="mt-3 text-4xl font-black uppercase">Our Services</h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="group overflow-hidden bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <img
                  src={service.image}
                  alt={service.title}
                  className="h-64 w-full object-cover transition duration-500 group-hover:scale-105"
                />

                <div className="p-7">
                  <div className="mb-5 flex items-center gap-3">
                    <div className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-red-100 text-red-600">
                      {service.title.includes("Wendy") ? (
                        <Warehouse size={18} />
                      ) : service.title.includes("Nutec") ? (
                        <ShieldCheck size={18} />
                      ) : (
                        <MapPin size={18} />
                      )}
                    </div>
                    <h3 className="text-2xl font-black uppercase leading-tight">
                      {service.title}
                    </h3>
                  </div>

                  <p className="mt-4 leading-7 text-gray-600">
                    {service.description}
                  </p>

                  <a
                    href={whatsappLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 rounded-full bg-red-600 px-4 py-2.5 text-sm font-bold text-white transition hover:bg-black"
                  >
                    Enquire Now
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black px-6 py-16 text-white md:px-16 md:py-20">
        <div className="mx-auto max-w-7xl text-center">
          <p className="font-bold uppercase tracking-widest text-red-500">
            Why Choose Us
          </p>

          <h2 className="mt-3 text-3xl font-black uppercase md:text-5xl">
            Your Vision, Our Expertise
          </h2>

          <div className="mt-14 grid gap-10 md:grid-cols-3">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                <Check size={20} />
              </div>
              <h3 className="text-xl font-black text-red-500">Custom Built</h3>
              <p className="mt-3 text-gray-400">
                Structures designed around your preferred requirements and
                dimensions.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                <ShieldCheck size={20} />
              </div>
              <h3 className="text-xl font-black text-red-500">
                Quality Solutions
              </h3>
              <p className="mt-3 text-gray-400">
                Practical building solutions for different spaces and purposes.
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 text-left">
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-red-500/15 text-red-400">
                <MapPin size={20} />
              </div>
              <h3 className="text-xl font-black text-red-500">Western Cape</h3>
              <p className="mt-3 text-gray-400">
                Serving customers across all Western Cape areas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-16 text-center md:px-16 md:py-20">
        <p className="font-bold uppercase tracking-widest text-red-600">
          Let&apos;s Get Started
        </p>

        <h2 className="mt-4 text-4xl font-black uppercase md:text-6xl">
          Ready to Transform Your Space?
        </h2>

        <p className="mx-auto mt-6 max-w-xl leading-7 text-gray-600">
          Contact Nutec Expects today and tell us about your next building
          project. Get in touch for a quote.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-2 md:gap-8">
          {/* Chat Card */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center rounded-lg border-2 border-red-600 bg-gradient-to-br from-red-50 to-white p-8 transition-all hover:shadow-2xl"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-red-600 text-white group-hover:scale-110 transition-transform">
              <FaWhatsapp size={28} />
            </div>
            <h3 className="text-lg font-bold text-black">Chat With Us</h3>
            <p className="mt-2 text-sm text-gray-600">Get instant support on WhatsApp</p>
            <p className="mt-3 font-bold text-red-600">+27 73 625 2866</p>
          </a>

          {/* Email Card */}
          <a
            href="mailto:augustinerunyowa50@gmail.com"
            className="group flex flex-col items-center rounded-lg border-2 border-gray-300 bg-white p-8 transition-all hover:border-red-600 hover:shadow-2xl"
          >
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gray-200 text-black group-hover:bg-red-600 group-hover:text-white transition-colors">
              <Mail size={28} />
            </div>
            <h3 className="text-lg font-bold text-black">Email Us</h3>
            <p className="mt-2 text-sm text-gray-600">Drop us a message anytime</p>
            <p className="mt-3 text-sm font-bold text-gray-700 group-hover:text-red-600">augustinerunyowa50@gmail.com</p>
          </a>
        </div>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-12 inline-flex items-center gap-2 bg-gradient-to-r from-red-600 to-red-700 px-12 py-4 font-bold text-white rounded-full hover:shadow-xl hover:scale-105 transition-all"
        >
          <FaWhatsapp size={18} />
          Start Chatting Now
          <ArrowRight size={16} />
        </a>
      </section>

      <footer className="bg-black px-6 py-12 text-center text-white">
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
          <a href="mailto:augustinerunyowa50@gmail.com" className="hover:text-red-500">
            augustinerunyowa50@gmail.com
          </a>
        </div>
      </footer>

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
