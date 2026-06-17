"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import smalllogo from "../../public/smalllogo.png";
import Footer from "@/components/Footer";
import { ServicesCarousel } from "@/components/Services";
import { WorkGrid } from "@/components/Work";
import { ContactSection } from "@/components/Contact";
import { AboutSection } from "@/components/AboutUs";
import HeroGraphic from "@/components/HeroGraphic";

const Typewriter = dynamic(() => import("typewriter-effect"), { ssr: false });

const testimonialsCol1 = [
  {
    name: "Sarah Jenkins",
    role: "Product Lead, Velo",
    content: "Lumonix transformed our complex data workflows into an elegant, blazing-fast web app. Their attention to detail in design and engineering is unmatched.",
    date: "June 02, 2026",
    initials: "SJ",
    gradient: "from-[#06007c] to-[#4177fd]"
  },
  {
    name: "Marcus Chen",
    role: "CTO, Fintech Corp",
    content: "The AI pipelines Lumonix built for us are incredibly stable and scalable. They delivered on time, exceeding our performance expectations.",
    date: "May 18, 2026",
    initials: "MC",
    gradient: "from-[#9390f9] to-[#beb3ff]"
  },
  {
    name: "Elena Rostova",
    role: "Co-founder, Bloom",
    content: "Exceptional design aesthetics combined with solid cloud-native engineering. The team feels like an extension of our own. Highly recommended!",
    date: "May 01, 2026",
    initials: "ER",
    gradient: "from-[#4177fd] to-[#9390f9]"
  }
];

const testimonialsCol2 = [
  {
    name: "David Beck",
    role: "VP of Engineering, Velo",
    content: "Outstanding cybersecurity integrations. Lumonix ensured our mobile applications are robustly protected while maintaining a flawless user experience.",
    date: "June 10, 2026",
    initials: "DB",
    gradient: "from-[#beb3ff] to-[#06007c]"
  },
  {
    name: "Amina Diallo",
    role: "Director of Product, Zenith",
    content: "Their web applications are beautiful, responsive, and performant. Our user engagement increased by 40% after launching the new platform.",
    date: "May 25, 2026",
    initials: "AD",
    gradient: "from-[#06007c] to-[#9390f9]"
  },
  {
    name: "Hiroshi Tanaka",
    role: "CEO, Sora Tech",
    content: "From prototype to global deployment, Lumonix guided us with expertise. Their technical leadership and execution speed are top-tier.",
    date: "April 15, 2026",
    initials: "HT",
    gradient: "from-[#4177fd] to-[#beb3ff]"
  }
];

const TestimonialCard = ({ name, content, date, initials, gradient }) => {
  return (
    <div className="w-[249px] h-[314px] bg-white rounded-[6px] p-5 shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-neutral-100 flex flex-col shrink-0">
      <div className="flex flex-col items-center text-center h-full">
        {/* Avatar circle (78x78px) */}
        <div className={`w-[78px] h-[78px] rounded-full bg-gradient-to-tr ${gradient} flex items-center justify-center text-white font-semibold text-xl mb-[10px] shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] shrink-0`}>
          {initials}
        </div>

        {/* Client Name */}
        <span className="text-[15px] font-semibold text-black mb-[10px] font-[family-name:var(--font-poppins)] leading-none">
          {name}
        </span>

        {/* Star Ratings (5 stars, 14px high) */}
        <div className="flex items-center gap-0.5 justify-center mb-[20px] text-[#ffb152] h-[14px] shrink-0">
          {[...Array(5)].map((_, i) => (
            <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          ))}
        </div>

        {/* Review Content (using Poppins per Zeplin spec) */}
        <p className="text-[12px] text-[#595858] leading-relaxed text-left h-[90px] mb-[20px] font-normal font-[family-name:var(--font-poppins)] overflow-hidden line-clamp-5">
          {content}
        </p>

        {/* Date (using Inter per Zeplin spec) */}
        <span className="text-[12px] text-neutral-400 text-right w-full font-[family-name:var(--font-inter)] mt-auto block">
          {date}
        </span>
      </div>
    </div>
  );
};

export default function Home() {
  const capabilities = [
    "Web Apps",
    "Data Pipelines",
    "AI Engineering",
    "Cloud Native",
    "Cybersecurity",
    "Mobile Apps"
  ];

  return (
    <div className="flex flex-col min-h-[calc(100vh-78px)] bg-[#0b0c10]">
      {/* Hero Section */}
      <div className="relative flex-grow flex items-center overflow-hidden px-4 md:px-10 lg:px-20 py-16 md:py-24">
        {/* Decorative Grid & Glow Background (matching Group 115 and design style) */}
        <div className="absolute inset-0 z-0">
          {/* Tech Grid Lines */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]"></div>

          {/* Glow Spheres */}
          <div className="absolute top-[10%] left-[20%] w-[500px] h-[500px] bg-[#9390f9]/8 rounded-full blur-[130px] pointer-events-none"></div>
          <div className="absolute bottom-[10%] right-[15%] w-[600px] h-[600px] bg-[#4177fd]/8 rounded-full blur-[160px] pointer-events-none"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left Column: Heading, Subtitle, CTAs, Metrics (Frame 870) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Main Title Heading (Frame 396) */}
            <h1 className="text-[32px] sm:text-[56px] lg:text-[68px] xl:text-[76px] font-semibold text-white tracking-tight leading-[1.15] mb-6 font-[family-name:var(--font-poppins)]">
              Engineering the <br />
              <span className="text-[#9390f9] drop-shadow-[0_0_35px_rgba(147,144,249,0.35)] inline-block">
                <Typewriter
                  options={{
                    strings: ["midnight magic"],
                    autoStart: true,
                    loop: true,
                    delay: 75,
                    deleteSpeed: 50,
                  }}
                />
              </span>{" "}
              of <br />
              <span className="text-[#9390f9] drop-shadow-[0_0_35px_rgba(147,144,249,0.35)]">
                modern
              </span>{" "}
              software.
            </h1>

            {/* Subheading Description (Frame 396) */}
            <p className="text-lg md:text-[22px] text-[#9f9f9f] leading-relaxed max-w-[680px] mb-10 font-[family-name:var(--font-inter)] font-normal">
              Lumonix transforms bold ideas into stunning websites, apps, and
              brands that captivate audiences and drive growth.
            </p>

            {/* Action Button Row (Frame 868) */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 mb-16">
              {/* Start a Project Button */}
              <Link
                href="/contact"
                className="group/start inline-flex items-center justify-center px-8 h-[53px] rounded-full bg-[#f1f1f1] hover:bg-white text-[#0b0c10] font-[family-name:var(--font-poppins)] font-medium text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg"
              >
                Start a Project
                <span className="ml-2 transform transition-transform duration-300 group-hover/start:translate-x-1">
                  →
                </span>
              </Link>

              {/* Watch Showreel Button */}
              <button className="group/showreel inline-flex items-center justify-center px-6 h-[53px] rounded-full bg-[#9390f9] hover:bg-[#827ef5] text-[#0b0c10] font-[family-name:var(--font-poppins)] font-medium text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg">
                {/* Play Button Icon */}
                <span className="flex items-center justify-center w-[26px] h-[26px] bg-[#0b0c10] rounded-full mr-3 group-hover/showreel:scale-105 transition-transform">
                  <svg
                    className="w-2.5 h-2.5 text-[#beb3ff] ml-0.5"
                    viewBox="0 0 10 10"
                    fill="currentColor"
                  >
                    <path d="M2 1l7 4-7 4V1z" />
                  </svg>
                </span>
                Watch Showreel

                {/* Decorative Audio soundwaves */}
                <div className="flex items-end gap-[3px] h-[14px] ml-3.5 mb-0.5">
                  <span className="w-[2px] h-[5px] bg-[#0b0c10] rounded-full animate-pulse"></span>
                  <span className="w-[2px] h-[10px] bg-[#0b0c10] rounded-full animate-pulse" style={{ animationDelay: "0.2s" }}></span>
                  <span className="w-[2px] h-[13px] bg-[#0b0c10] rounded-full animate-pulse" style={{ animationDelay: "0.4s" }}></span>
                  <span className="w-[2px] h-[8px] bg-[#0b0c10] rounded-full animate-pulse" style={{ animationDelay: "0.6s" }}></span>
                </div>
              </button>
            </div>

            {/* Metrics Row (Frame 403) */}
            <div className="flex items-center gap-10 sm:gap-14 border-t border-white/5 pt-8 w-full max-w-[500px]">
              {/* Products Shipped */}
              <div className="flex flex-col items-start">
                <span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight font-[family-name:var(--font-inter)]">
                  180+
                </span>
                <span className="text-xs text-[#bbb2b2] mt-1 font-[family-name:var(--font-inter)] uppercase tracking-wider">
                  Products shipped
                </span>
              </div>

              {/* Global Teams */}
              <div className="flex flex-col items-start">
                <span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight font-[family-name:var(--font-inter)]">
                  32
                </span>
                <span className="text-xs text-[#bbb2b2] mt-1 font-[family-name:var(--font-inter)] uppercase tracking-wider">
                  Global teams
                </span>
              </div>

              {/* Client Rating */}
              <div className="flex flex-col items-start">
                <div className="flex items-center gap-1.5">
                  <span className="text-3xl sm:text-4xl font-semibold text-white tracking-tight font-[family-name:var(--font-inter)]">
                    4.5
                  </span>
                  <svg
                    className="w-6 h-6 text-[#9390f9] fill-current"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                  </svg>
                </div>
                <span className="text-xs text-[#bbb2b2] mt-1 font-[family-name:var(--font-inter)] uppercase tracking-wider">
                  Client rating
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Concentric Circles & Floating Badges Graphic */}
          <HeroGraphic />
        </div>
      </div>

      {/* Ticker (Frame 408) */}
      <div className="w-full h-[48px] bg-[#0b0c10] border-y border-white/5 flex items-center overflow-hidden select-none relative z-10 shrink-0">
        <div className="flex w-max items-center animate-marquee">
          {/* Track 1 */}
          <div className="flex items-center gap-[69px] pr-[69px] shrink-0">
            {capabilities.map((text, index) => (
              <div key={index} className="flex items-center gap-[69px] shrink-0">
                <Image src={smalllogo} alt="logo" width={18} height={17} className="w-[18px] h-[17px] shrink-0" />
                <span className="text-sm font-normal text-[#bbb2b2] font-[family-name:var(--font-inter)] tracking-wide shrink-0">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Track 2 */}
          <div className="flex items-center gap-[69px] pr-[69px] shrink-0" aria-hidden="true">
            {capabilities.map((text, index) => (
              <div key={`dup-${index}`} className="flex items-center gap-[69px] shrink-0">
                <Image src={smalllogo} alt="logo" width={18} height={17} className="w-[18px] h-[17px] shrink-0" />
                <span className="text-sm font-normal text-[#bbb2b2] font-[family-name:var(--font-inter)] tracking-wide shrink-0">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <AboutSection />
      {/* Services Carousel Section */}
      <ServicesCarousel />
      <div className="w-full h-[48px] bg-[#0b0c10] border-y border-white/5 flex items-center overflow-hidden select-none relative z-10 shrink-0">
        <div className="flex w-max items-center animate-marquee">
          {/* Track 1 */}
          <div className="flex items-center gap-[69px] pr-[69px] shrink-0">
            {capabilities.map((text, index) => (
              <div key={index} className="flex items-center gap-[69px] shrink-0">
                <Image src={smalllogo} alt="logo" width={18} height={17} className="w-[18px] h-[17px] shrink-0" />
                <span className="text-sm font-normal text-[#bbb2b2] font-[family-name:var(--font-inter)] tracking-wide shrink-0">
                  {text}
                </span>
              </div>
            ))}
          </div>

          {/* Track 2 */}
          <div className="flex items-center gap-[69px] pr-[69px] shrink-0" aria-hidden="true">
            {capabilities.map((text, index) => (
              <div key={`dup-${index}`} className="flex items-center gap-[69px] shrink-0">
                <Image src={smalllogo} alt="logo" width={18} height={17} className="w-[18px] h-[17px] shrink-0" />
                <span className="text-sm font-normal text-[#bbb2b2] font-[family-name:var(--font-inter)] tracking-wide shrink-0">
                  {text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Work Grid Section */}
      <div className="w-full max-w-[1219px] mx-auto mt-10 px-4 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start ">
          <div className="lg:col-span-7 flex flex-col items-start gap-4 text-left">
            {/* Badge (Frame 437) */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-2 shrink-0 select-none">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9390f9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9390f9]"></span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#bbb2b2] font-[family-name:var(--font-poppins)]">
                Selected Works
              </span>
            </div>
            {/* Title (Frame 436) */}
            <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-white tracking-tight font-[family-name:var(--font-poppins)]">
              The portfolio, <br />
              <span>quietly</span>
              <span className="text-[#9390f9]"> assembled.</span>
            </h2>
          </div>
          {/* Subtitle (Frame 983 Right) */}
          <div className="lg:col-span-5 text-left lg:text-left self-end lg:pl-8">
            <p className="text-base sm:text-lg text-[#bbb2b2] leading-relaxed max-w-[536px] font-[family-name:var(--font-inter)] font-normal">
              Work that speaks for itself—built with focus, creativity, and purpose.
            </p>
          </div>
        </div>
        <WorkGrid showTabs={false} />
      </div>
      {/* Enterprise IT Solutions CTA */}
      <section className="relative w-full bg-[#000000] py-20 lg:py-28 overflow-hidden border-b border-white/5">
        {/* Tech Grid & Purple Glowing Blur Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Tech Grid Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]"></div>

          {/* Glowing Purple Orb */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#9390f9]/10 rounded-full blur-[130px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col items-center text-center gap-10">

          {/* Info Badge (Frame 437) */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9390f9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9390f9]"></span>
            </span>
            <span className="text-[12px] font-semibold uppercase tracking-wider text-[#d4d4d4] font-[family-name:var(--font-poppins)]">
              ENTERPRISE IT SOLUTIONS
            </span>
          </div>

          {/* Heading and Subtitle (Frame 799) */}
          <div className="flex flex-col items-center gap-6 max-w-[1096px]">
            <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-bold text-white tracking-tight leading-[1.15] font-[family-name:var(--font-inter)]">
              Ready to modernize your <br className="hidden sm:inline" />
              <span className="text-[#9390f9]">IT infrastructure?</span>
            </h2>
            <p className="text-base sm:text-lg lg:text-[20px] text-[#bbb2b2] leading-relaxed max-w-[804px] font-[family-name:var(--font-inter)] font-light">
              From cloud migration to custom software, our team delivers scalable solutions that drive growth and cut costs.
            </p>
          </div>

          {/* Buttons Row (Frame 798) */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 mt-2">
            {/* Book Consultation Button (Frame 175) */}
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center px-8 h-[50px] rounded-full bg-[#9390f9] hover:bg-[#827ef5] text-[#0b0c10] font-[family-name:var(--font-poppins)] font-medium text-[18px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(147,144,249,0.25)]"
            >
              Book a free consultation →
            </Link>

            {/* See our services Link (Frame 917) */}
            <Link
              href="/services"
              className="text-[18px] font-medium text-[#bbb2b2] hover:text-white transition-colors duration-200 font-[family-name:var(--font-poppins)]"
            >
              See our services
            </Link>
          </div>

          {/* Features Checklist Row (Frame 805) */}
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 lg:gap-16 border-t border-white/5 pt-10 w-full max-w-[861px] mt-4">
            {/* Feature Item 1 (Frame 802) */}
            <div className="flex items-center gap-3">
              <svg className="w-[23px] h-[23px] text-[#bcbaff] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              <span className="text-base sm:text-[18px] font-normal text-[#bbb2b2] font-[family-name:var(--font-poppins)]">
                Free 30-min discovery call
              </span>
            </div>

            {/* Feature Item 2 (Frame 803) */}
            <div className="flex items-center gap-3">
              <svg className="w-[23px] h-[23px] text-[#bcbaff] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              <span className="text-base sm:text-[18px] font-normal text-[#bbb2b2] font-[family-name:var(--font-poppins)]">
                No long-term contract
              </span>
            </div>

            {/* Feature Item 3 (Frame 804) */}
            <div className="flex items-center gap-3">
              <svg className="w-[23px] h-[23px] text-[#bcbaff] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <circle cx="12" cy="12" r="10" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4" />
              </svg>
              <span className="text-base sm:text-[18px] font-normal text-[#bbb2b2] font-[family-name:var(--font-poppins)]">
                99.9% uptime SLA
              </span>
            </div>
          </div>

        </div>
      </section>
      {/* Contact Form Section */}
      <ContactSection />
      <Footer />
    </div>
  );
}
