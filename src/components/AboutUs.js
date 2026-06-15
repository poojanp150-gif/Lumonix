"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
import smalllogo from "../../public/smalllogo.png";
import mainabout from "../../public/mainabout.png";
import aboutimg1 from "../../public/aboutimg1.png"
import aboutimg2 from "../../public/aboutimg2.png"
import aboutimg3 from "../../public/aboutimg3.png"
import aboutimg4 from "../../public/aboutimg4.png"
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

        {/* Review Content */}
        <p className="text-[12px] text-[#595858] leading-relaxed text-left h-[90px] mb-[20px] font-normal font-[family-name:var(--font-poppins)] overflow-hidden line-clamp-5">
          {content}
        </p>

        {/* Date */}
        <span className="text-[12px] text-neutral-400 text-right w-full font-[family-name:var(--font-inter)] mt-auto block">
          {date}
        </span>
      </div>
    </div>
  );
};

const teamMembers = [
  {
    name: "Aarav Mehta",
    role: "Founder & Creative Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=320&q=80"
  },
  {
    name: "Elena Rostova",
    role: "Co-Founder & Head of AI",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=300&h=320&q=80"
  },
  {
    name: "Marcus Chen",
    role: "CTO & Lead Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&h=320&q=80"
  },
  {
    name: "Sarah Jenkins",
    role: "Head of Design & Product",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=300&h=320&q=80"
  }
];

export default function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c10] text-white">

      {/* 1. Hero Section */}
      <section className="relative w-full h-[492px] flex items-center justify-center overflow-hidden bg-[#0b0c10] px-6 lg:px-[60px]">

        {/* BACKGROUND IMAGE */}
        <div
          className="absolute inset-0 z-0 pointer-events-none bg-cover bg-center opacity-10"
          style={{
            backgroundImage: `url(${mainabout.src})`
          }}
        />

        {/* Subtle Tech Grid + Glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage: `
          linear-gradient(to right, #ffffff 1px, transparent 1px),
          linear-gradient(to bottom, #ffffff 1px, transparent 1px)
        `,
              backgroundSize: "80px 52px"
            }}
          />

          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[500px] h-[300px] bg-[#9390f9]/8 rounded-full blur-[100px]" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 w-full max-w-[1030px] mx-auto text-center flex flex-col items-center gap-6">
          <h1 className="text-[48px] sm:text-[64px] lg:text-[76px] lg:leading-[91px] font-semibold text-white tracking-tight font-[family-name:var(--font-poppins)]">
            About{" "}
            <span className="text-[#635cff] drop-shadow-[0_0_35px_rgba(99,92,255,0.3)]">
              us
            </span>
          </h1>

          <p className="text-base sm:text-[20px] lg:text-[24px] lg:leading-[34px] text-[#b2b2b2] max-w-[850px] font-light font-[family-name:var(--font-inter)] tracking-wide">
            With over 20 years of experience, we can deliver great results for your
            online business without additional costs or commitments.
          </p>
        </div>

      </section>

      {/* 2. Metrics & Testimonials Section */}

      <section className="w-full bg-white text-black lg:h-[793px] flex items-center justify-center overflow-hidden relative  py-16 lg:py-0">
        <div className="w-full max-w-[1440px] h-full mx-auto px-6 lg:px-[60px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 relative z-10">
          <div className="inline-flex lg:hidden items-center gap-2 px-3 py-1.5 rounded-full bg-[#7f7f7f]/15 border border-neutral-200/50 mb-6">
            <span className="w-2 h-2 rounded-full bg-[#06007c]"></span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#595858] font-[family-name:var(--font-poppins)]">
              ABOUT US
            </span>
          </div>
          {/* Left Column: Metrics & Info */}
          <div className="w-full lg:w-[725px]  flex flex-col items-start text-left lg:shrink-0 order-2 lg:order-1">
            {/* About Us Badge Pill */}
            <div className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7f7f7f]/15 border border-neutral-200/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#06007c]"></span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#595858] font-[family-name:var(--font-poppins)]">
                ABOUT US
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] lg:leading-[90px] font-semibold text-black tracking-tight mb-6 font-[family-name:var(--font-poppins)]">
              Numbers that tell <br />
              <span className="text-[#06007c]">our story</span>
            </h2>

            {/* Description */}
            <p className="text-lg lg:text-[24px] lg:leading-[36px] text-[#595858] max-w-[680px] mb-12 font-[family-name:var(--font-inter)] font-normal">
              Lumonix transforms bold ideas into stunning websites, apps, and brands that captivate audiences and drive growth.
            </p>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px] w-full lg:w-[725px]">
              {/* Card 1: TRUST */}
              <div className="w-full lg:w-[350px] h-[168px] bg-[#fff9f9] rounded-[16px] p-5 shadow-[0_0_4px_rgba(0,0,0,0.25)] border border-neutral-100/50 flex items-center justify-between relative shrink-0">
                <div className="flex items-center gap-5">
                  <div className="w-[85px] h-[128px] rounded-lg overflow-hidden flex-shrink-0 relative">
                    <Image
                      src={aboutimg1}
                      alt="About Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[32px] font-medium text-[#06007c] leading-none mb-2 font-[family-name:var(--font-poppins)]">
                      310+
                    </span>
                    <span className="text-sm font-normal text-[#595858] leading-snug font-[family-name:var(--font-poppins)]">
                      5-Star Clutch Reviews
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#7f7f7f]/15 border border-neutral-200/50">
                  <span className="text-[10px] font-medium text-[#595858] font-[family-name:var(--font-poppins)]">
                    TRUST
                  </span>
                </div>
              </div>

              {/* Card 2: LEGACY */}
              <div className="w-full lg:w-[350px] h-[168px] bg-white rounded-[16px] p-5 shadow-[0_0_4px_rgba(0,0,0,0.25)] border border-neutral-100/50 flex items-center justify-between relative shrink-0">
                <div className="flex items-center gap-5">
                  <div className="w-[85px] h-[128px] rounded-lg overflow-hidden flex-shrink-0 relative">
                    <Image
                      src={aboutimg2}
                      alt="About Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[32px] font-medium text-[#06007c] leading-none mb-2 font-[family-name:var(--font-poppins)]">
                      10+
                    </span>
                    <span className="text-sm font-normal text-[#595858] leading-snug font-[family-name:var(--font-poppins)]">
                      Years of Experience
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#7f7f7f]/15 border border-neutral-200/50">
                  <span className="text-[10px] font-medium text-[#595858] font-[family-name:var(--font-poppins)]">
                    LEGACY
                  </span>
                </div>
              </div>

              {/* Card 3: DELIVERY */}
              <div className="w-full lg:w-[350px] h-[168px] bg-white rounded-[16px] p-5 shadow-[0_0_4px_rgba(0,0,0,0.25)] border border-neutral-100/50 flex items-center justify-between relative shrink-0">
                <div className="flex items-center gap-5">
                  <div className="w-[85px] h-[128px] rounded-lg overflow-hidden flex-shrink-0 relative">
                    <Image
                      src={aboutimg3}
                      alt="About Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[32px] font-medium text-[#06007c] leading-none mb-2 font-[family-name:var(--font-poppins)]">
                      100+
                    </span>
                    <span className="text-sm font-normal text-[#595858] leading-snug font-[family-name:var(--font-poppins)]">
                      Completed Projects
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#7f7f7f]/15 border border-neutral-200/50">
                  <span className="text-[10px] font-medium text-[#595858] font-[family-name:var(--font-poppins)]">
                    DELIVERY
                  </span>
                </div>
              </div>

              {/* Card 4: LOYALTY */}
              <div className="w-full lg:w-[350px] h-[168px] bg-white rounded-[16px] p-5 shadow-[0_0_4px_rgba(0,0,0,0.25)] border border-neutral-100/50 flex items-center justify-between relative shrink-0">
                <div className="flex items-center gap-5">
                  <div className="w-[85px] h-[128px] rounded-lg overflow-hidden flex-shrink-0 relative">
                    <Image
                      src={aboutimg4}
                      alt="About Image"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[32px] font-medium text-[#06007c] leading-none mb-2 font-[family-name:var(--font-poppins)]">
                      95%
                    </span>
                    <span className="text-sm font-normal text-[#595858] leading-snug font-[family-name:var(--font-poppins)]">
                      Client Retention
                    </span>
                  </div>
                </div>
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#7f7f7f]/15 border border-neutral-200/50">
                  <span className="text-[10px] font-medium text-[#595858] font-[family-name:var(--font-poppins)]">
                    LOYALTY
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Infinite Scrolling Testimonials */}
          <div className="w-full lg:w-[558px] h-[640px] lg:h-[793px] relative overflow-hidden flex items-center justify-center lg:shrink-0 mt-8 lg:mt-0 select-none order-1 lg:order-2">
            {/* Top and Bottom Gradient Mask Overlay */}
            <div className="absolute inset-x-0 top-0 h-[82px] bg-gradient-to-b from-white to-transparent pointer-events-none z-20"></div>
            <div className="absolute inset-x-0 bottom-0 h-[82px] bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>

            <div className="grid grid-cols-2 gap-5 h-full w-full justify-center">
              {/* Column 1 (Scrolls Up) */}
              <div className="relative h-full overflow-hidden w-full max-w-[269px] mx-auto">
                <div className="flex flex-col gap-10 pb-10 animate-marquee-vertical items-center">
                  {testimonialsCol1.map((t, idx) => (
                    <TestimonialCard key={`c1-${idx}`} {...t} />
                  ))}
                  {testimonialsCol1.map((t, idx) => (
                    <TestimonialCard key={`c1-dup-${idx}`} {...t} aria-hidden="true" />
                  ))}
                </div>
              </div>

              {/* Column 2 (Scrolls Down / Reverse) */}
              <div className="relative h-full overflow-hidden w-[269px]">
                <div className="flex flex-col gap-10 pb-10 animate-marquee-vertical-reverse items-center">
                  {testimonialsCol2.map((t, idx) => (
                    <TestimonialCard key={`c2-${idx}`} {...t} />
                  ))}
                  {testimonialsCol2.map((t, idx) => (
                    <TestimonialCard key={`c2-dup-${idx}`} {...t} aria-hidden="true" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Story Section */}
      <section className="w-full bg-white text-black py-20 lg:py-28 overflow-hidden relative" style={{ marginTop: "-1px" }}>
        <div className="w-full max-w-[1320px]  mx-auto px-6 lg:px-10 flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">

          {/* Left Column */}
          <div className="w-full lg:w-5/12 flex items-center justify-center">
            <div className="relative w-full max-w-[558px] aspect-[558/327] rounded-[16px] overflow-hidden shadow-lg border border-neutral-100 group">
              <Image
                src="/mainabout.png"
                alt="Our Story Illustration"
                fill
                sizes="(max-width: 768px) 100vw, 558px"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Right Column */}
          <div className="w-full lg:w-7/12 flex flex-col items-start text-left">

            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7f7f7f]/15 border border-neutral-200/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#070094]"></span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#595858] font-[family-name:var(--font-poppins)]">
                OUR STORY
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] lg:leading-[60px] font-semibold text-black tracking-tight mb-6 font-[family-name:var(--font-poppins)]">
              A studio built on
              <span className="text-[#070094]"> curiosity</span> and craft.
            </h2>

            {/* Paragraph */}
            <p className="text-base sm:text-lg lg:text-[20px] lg:leading-[32px] text-[#7f7f7f] font-[family-name:var(--font-inter)] leading-relaxed">
              We started Lumoonix in a small apartment with one belief: great design should feel inevitable. A decade later, we've grown into a multidisciplinary team helping founders, marketers and product leaders ship work they're genuinely proud of.
            </p>

          </div>

        </div>
      </section>

      {/* 4. Team Section */}
      <section className="w-full bg-white text-black py-10 lg:py-18 overflow-hidden relative">
        <div className="w-full max-w-[1280px] mx-auto px-6 lg:px-10 flex flex-col gap-16">

          {/* Section Header */}
          <div className="flex flex-col items-start gap-4 max-w-[725px]">
            {/* Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7f7f7f]/15 border border-neutral-200/50">
              <span className="w-2 h-2 rounded-full bg-[#070094]"></span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#595858] font-[family-name:var(--font-poppins)]">
                THE TEAM
              </span>
            </div>

            {/* Heading */}
            <h2 className="text-[32px] sm:text-[40px] lg:text-[48px] lg:leading-[60px] font-semibold text-black tracking-tight font-[family-name:var(--font-poppins)]">
              Small team. <span className="text-[#070094]">Big appetite</span> <br className="hidden sm:inline" />
              for great work.
            </h2>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {teamMembers.map((member, idx) => (
              <div
                key={idx}
                className="w-full max-w-[300px] h-[400px] mx-auto rounded-[16px] overflow-hidden shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:shadow-[0_12px_32px_rgba(7,0,148,0.15)] border border-neutral-100/60 bg-white flex flex-col transition-all duration-300 hover:-translate-y-1.5 group"
              >
                {/* Photo Top container */}
                <div className="w-full h-[319px] relative overflow-hidden bg-neutral-50">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="300px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text Bottom Container */}
                <div className="h-[81px] px-5 py-4 border-t border-neutral-100 flex flex-col justify-center bg-white z-10">
                  <span className="text-[16px] font-medium text-black font-[family-name:var(--font-inter)] leading-tight mb-1">
                    {member.name}
                  </span>
                  <span className="text-[14px] text-[#7f7f7f] font-[family-name:var(--font-inter)] leading-none">
                    {member.role}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. CTA Section */}
      <section className="w-full bg-white py-7 lg:py-4 px-6" style={{ marginTop: "-1px" }}>
        <div className="w-full max-w-[1320px] min-h-[385px] mx-auto rounded-[40px] md:rounded-[238px] bg-[#0b0c10] text-white flex flex-col items-center justify-center relative overflow-hidden px-8 py-12 text-center shadow-xl">
          {/* Subtle Grid backdrop and Glow overlay */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Custom 75x41px grid lines matching Zeplin coordinates */}
            <div
              className="absolute inset-0 opacity-[0.1]"
              style={{
                backgroundImage: `
                  linear-gradient(to right, #ffffff 1px, transparent 1px),
                  linear-gradient(to bottom, #ffffff 1px, transparent 1px)
                `,
                backgroundSize: "75px 41px"
              }}
            />
            {/* Soft backdrop radial light gradient */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#9390f9]/5 rounded-full blur-[90px]" />
          </div>

          <div className="relative z-10 w-full max-w-[859px] mx-auto flex flex-col items-center gap-8">
            <div className="flex flex-col gap-4">
              {/* Heading */}
              <h2 className="text-3xl sm:text-[40px] lg:text-[48px] lg:leading-[58px] font-semibold text-white tracking-tight font-[family-name:var(--font-poppins)] max-w-[800px]">
                Have a bold idea? <br className="sm:hidden" />
                <span className="text-[#9390f9] drop-shadow-[0_0_35px_rgba(147,144,249,0.35)]">
                  Let&apos;s build it together.
                </span>
              </h2>
              {/* Subheading */}
              <p className="text-sm sm:text-base lg:text-[20px] text-[#b2b2b2] font-light font-[family-name:var(--font-inter)] tracking-wide">
                Tell us about your project and we&apos;ll get back within one business day.
              </p>
            </div>

            {/* Action button */}
            <Link
              href="/contact"
              className="group/cta inline-flex items-center justify-center px-8 h-[60px] rounded-full bg-[#9390f9] hover:bg-[#827ef5] text-[#0b0c10] font-[family-name:var(--font-poppins)] font-medium text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg shrink-0"
            >
              Start a Project
              <span className="ml-2 transform transition-transform duration-300 group-hover/cta:translate-x-1">
                →
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
