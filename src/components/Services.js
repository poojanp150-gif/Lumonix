"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "./Footer";

const servicesData = [
  {
    id: "01",
    title: "Cloud Solutions",
    label: "INFRASTRUCTURE",
    subLabel: "NEXVORA",
    description: "Architect, migrate and scale on AWS, Azure and GCP with Zero-downtime deployments.",
    capabilities: ["Multi-cloud Setup", "DevOps Pipelines", "Kubernetes Scaling"],
    gradient: "from-[#06007c] to-[#4177fd]",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    )
  },
  {
    id: "02",
    title: "Custom Software",
    label: "APPLICATION",
    subLabel: "ENGINEX",
    description: "Design and build bespoke web and mobile applications engineered for peak performance and scale.",
    capabilities: ["React / Next.js", "API Integration", "Full-Stack Web Dev"],
    gradient: "from-[#9390f9] to-[#beb3ff]",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    )
  },
  {
    id: "03",
    title: "AI & Data Engineering",
    label: "INTELLIGENCE",
    subLabel: "NEURAL",
    description: "Integrate intelligent LLM copilots, predictive models, and data pipelines into your enterprise workflows.",
    capabilities: ["LLM & Agentic AI", "Data Pipelines", "Model Fine-Tuning"],
    gradient: "from-[#4177fd] to-[#9390f9]",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94-3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    )
  },
  {
    id: "04",
    title: "Cybersecurity",
    label: "SECURITY",
    subLabel: "SECUREX",
    description: "Secure your digital assets with advanced threat detection, penetration testing, and zero-trust architectures.",
    capabilities: ["Penetration Testing", "Zero-Trust Design", "Compliance Auditing"],
    gradient: "from-[#beb3ff] to-[#06007c]",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.57-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    )
  },
  {
    id: "05",
    title: "Brand & Design",
    label: "IDENTITY",
    subLabel: "DESIGN",
    description: "Craft premium digital identities and UI/UX design languages that set your brand apart in competitive markets.",
    capabilities: ["UI/UX Design", "Design Systems", "Brand Strategy"],
    gradient: "from-[#06007c] to-[#9390f9]",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-3.078 0L3.72 17.653a3 3 0 00-1.5 2.598V21h19.5v-1.75a3 3 0 00-1.5-2.598l-2.732-1.531a3 3 0 00-3.078 0L12 17.25l-2.47-1.128zm0 0a3 3 0 10-6 0 3 3 0 006 0zm6-6a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    id: "06",
    title: "IT Infrastructure",
    label: "NETWORKING",
    subLabel: "TOPOLOGY",
    description: "Optimize your enterprise network topology and secure hosting infrastructure for peak cloud performance.",
    capabilities: ["Network Topology", "Hybrid Cloud Setup", "Disaster Recovery"],
    gradient: "from-[#4177fd] to-[#beb3ff]",
    icon: (
      <svg className="w-12 h-12 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 14.25h13.5m-13.5 3h13.5m-13.5-6h13.5m-13.5-3h13.5m-13.5-3h13.5" />
      </svg>
    )
  }
];

const chooseUsData = [
  {
    title: "Expert Team",
    desc: "Our architects and developers have decades of collective experience in top tech firms."
  },
  {
    title: "On-Time Delivery",
    desc: "We respect your timelines and use agile methodologies to ship working software in weekly increments."
  },
  {
    title: "Quality Assurance",
    desc: "Every line of code undergoes manual review and automated unit and integration testing."
  },
  {
    title: "Client-Centric Approach",
    desc: "We align with your communication tools, provide weekly demos, and welcome feedback at every stage."
  },
  {
    title: "Scalable Solutions",
    desc: "We build systems prepared for high traffic, big data, and future feature expansions."
  },
  {
    title: "24/7 Support",
    desc: "We provide round-the-clock monitoring and support SLAs to keep your critical systems running."
  }
];

const techStack = [
  {
    name: "Figma",
    bgColor: "bg-[#050508]",
    svg: (
      <svg className="w-12 h-12" viewBox="0 0 38 57" fill="none">
        <path d="M9.5 57C14.7467 57 19 52.7467 19 47.5V38H9.5C4.25329 38 0 42.2533 0 47.5C0 52.7467 4.25329 57 9.5 57Z" fill="#0ACF83"/>
        <path d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" fill="#A259FF"/>
        <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E"/>
        <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262"/>
        <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5Z" fill="#1BC0F8"/>
      </svg>
    )
  },
  {
    name: "Photoshop",
    bgColor: "bg-[#050508]",
    svg: (
      <svg className="w-12 h-12 text-[#31A8FF]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 2H2v20h20V2zM10.2 16.5c-.2.7-.6 1.2-1.2 1.5s-1.3.4-2.2.4H4.5V8.8h2.6c1 0 1.8.2 2.3.6s.7 1.1.7 2c0 .6-.1 1.1-.4 1.5s-.8.6-1.4.7c.7.1 1.2.4 1.5.8s.4 1.1.4 2.1zm8.3.1c0 1.1-.3 1.9-.9 2.5s-1.5.8-2.6.8c-1.2 0-2.1-.3-2.7-.9s-.9-1.5-.9-2.7v-2.3c0-1.1.3-2 .9-2.6s1.5-.9 2.8-.9c1.1 0 2 .3 2.6.8s.8 1.4.8 2.6V16.6zm-11-4.7c0-.4-.1-.7-.3-.8s-.6-.2-1.1-.2h-.8V13h.8c.5 0 .9-.1 1.1-.2s.3-.4.3-.9zm0 3.2c0-.5-.1-.8-.3-1s-.6-.2-1.1-.2h-.8V17h.8c.5 0 .9-.1 1.1-.2s.3-.4.3-1zm8.3 1.5v-2.3c0-.7-.1-1.2-.4-1.5s-.7-.4-1.3-.4c-.5 0-.9.1-1.2.4s-.4.8-.4 1.5v2.3c0 .7.1 1.2.4 1.5s.7.4 1.3.4c.5 0 .9-.1 1.2-.4s.4-.8.4-1.5z"/>
      </svg>
    )
  },
  {
    name: "React",
    bgColor: "bg-[#050508]",
    svg: (
      <svg className="w-12 h-12 text-[#00D8FF] animate-spin-slow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(0 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(60 12 12)" />
        <ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(120 12 12)" />
        <circle cx="12" cy="12" r="2" fill="currentColor" />
      </svg>
    )
  },
  {
    name: "WordPress",
    bgColor: "bg-[#050508]",
    svg: (
      <svg className="w-12 h-12 text-[#21759B]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.158 12.786l-2.698 7.84c1.77-.442 3.328-1.42 4.472-2.735l-1.774-5.105zm-7.61 5.374c.483.136.953.21 1.408.21.724 0 1.342-.234 1.342-.716 0-.38-.276-.653-.55-.953-.346-.38-.69-.794-.69-1.343 0-.62.483-1.173 1.207-1.173.345 0 .62.103.827.24l-2.035 5.86c-1.344-.964-2.31-2.38-2.706-4.032l.707-.093c.414-.04.93-.093 1.1-.093zm8.972.102l-1.41-4.05 1.586-4.524c1.17 1.62 1.86 3.6 1.86 5.75 0 1.033-.166 2.033-.47 2.973l-1.566-.15zm10.48-6.262c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-10 8.6c-4.74 0-8.6-3.86-8.6-8.6S7.26 3.4 12 3.4s8.6 3.86 8.6 8.6-3.86 8.6-8.6 8.6z"/>
      </svg>
    )
  },
  {
    name: "Next.js",
    bgColor: "bg-[#050508]",
    svg: (
      <svg className="w-12 h-12 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
        <circle cx="12" cy="12" r="10" stroke="currentColor" fill="#050508" />
        <path d="M9 17V7l8.2 9.5a8.2 8.2 0 01-1.2 1.1L9 10" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    )
  },
  {
    name: "Laravel",
    bgColor: "bg-[#050508]",
    svg: (
      <svg className="w-12 h-12 text-[#FF2D20]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M5.165 1.5h13.67c.725 0 1.314.59 1.314 1.314v17.37c0 .725-.59 1.314-1.314 1.314H5.165c-.725 0-1.314-.59-1.314-1.314V2.814c0-.725.59-1.314 1.314-1.314zm9.356 12.012l3.414-3.414V6.684l-3.414 3.414v3.414zm-5.042 5.042l5.042-5.042V10.1l-5.042 5.042v3.414z"/>
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    bgColor: "bg-[#050508]",
    svg: (
      <svg className="w-12 h-12 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.518 14.99 11.8 17.999 11.8c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.082 15.01 4.8 12.001 4.8zm-6 7c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.518 8.99 18.8 11.999 18.8c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.082 9.01 11.8 6.001 11.8z"/>
      </svg>
    )
  },
  {
    name: "AWS",
    bgColor: "bg-[#050508]",
    svg: (
      <svg className="w-12 h-12 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.233 16.924a10.877 10.877 0 01-2.937-.367c-1.393-.322-2.308-1.077-2.308-2.23 0-.996.697-1.815 1.93-2.148 1.196-.322 2.766-.367 4.148-.367h1.076v.83c0 .872.046 1.868.046 2.698h.046c.138.457.458.747.872.747s.783-.245 1.012-.663c.277-.5.323-1.246.323-1.95V9.45c0-1.745-.644-2.825-1.932-3.283-1.055-.373-2.617-.415-3.855-.415-1.787 0-3.83.166-5.116.997-.506.332-.737.83-.506 1.288.184.373.69.415 1.15.207 1.055-.54 2.57-.747 4.093-.747 1.15 0 2.254.083 2.76.623.368.373.46.996.46 1.702v.706H12.06c-1.84 0-3.87.042-5.433.54-1.79.58-2.756 1.745-2.756 3.447 0 2.036 1.242 3.488 3.542 3.987a11.517 11.517 0 003.358.374 8.784 8.784 0 003.487-.665c.414-.25.599-.083.829.208a1.69 1.69 0 001.382.665c.598 0 .967-.374 1.197-.83.277-.5.322-1.247.322-1.95v-1.703h-1.076c-.92 0-1.795.125-2.393.582-.69.54-.92 1.37-.92 2.2v.292c0 .415-.23.748-.644.748s-.69-.333-.782-.748c-.046-.457-.046-1.079-.046-1.578v-1.121h-.966c-1.38 0-2.667.041-3.633.25-.874.207-1.38.622-1.38 1.287 0 .706.598 1.163 1.564 1.329.967.124 2.21.124 3.176.124h.967v1.12c0 .54-.046 1.164-.046 1.703h.046c.138.457.46.748.874.748s.782-.25 1.012-.665c.276-.5.322-1.246.322-1.95V10.155H12.06zm8.127.318c-1.61.913-3.633 1.453-5.748 1.453-.92 0-1.794-.083-2.623-.207-.506-.083-.736.332-.322.664.92.747 2.023 1.12 3.22 1.287 1.886.25 3.864-.166 5.565-1.12.506-.291.506-.789.046-1.079l-.138-.083a.467.467 0 00-.083.085zM21.2 9.076c-.506-.29-1.012.29-.69.664l1.38 1.578c.322.373.874.207.92-.29l.23-2.076a.573.573 0 00-.69-.623l-1.15.747z"/>
      </svg>
    )
  }
];

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % servicesData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + servicesData.length) % servicesData.length);
  };

  const currentService = servicesData[currentSlide];
  const nextSlideIndex = (currentSlide + 1) % servicesData.length;
  const nextService = servicesData[nextSlideIndex];

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c10] text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[649px] flex items-center justify-center overflow-hidden px-6 lg:px-[60px] py-16 md:py-24 border-b border-white/5 bg-[#0b0c10]">
        {/* Tech Grid & Glow Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]"></div>
          {/* Subtle glow spheres */}
          <div className="absolute top-[20%] left-[10%] w-[400px] h-[400px] bg-[#9390f9]/8 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[20%] right-[10%] w-[450px] h-[450px] bg-[#4177fd]/8 rounded-full blur-[140px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column (Main Info) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Category Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9390f9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9390f9]"></span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#bbb2b2] font-[family-name:var(--font-poppins)]">
                OUR SERVICES
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-[40px] sm:text-[54px] lg:text-[68px] font-semibold text-white tracking-tight leading-[1.15] mb-6 font-[family-name:var(--font-poppins)]">
              Solutions That <br />
              Drive Digital Success
            </h1>

            {/* Description */}
            <p className="text-lg md:text-[22px] text-[#9f9f9f] leading-relaxed max-w-[620px] mb-10 font-[family-name:var(--font-inter)] font-normal">
              With over 20 years of experience, we deliver exceptional results for your online business with no unnecessary overhead or commitments.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-5">
              <Link
                href="/contact"
                className="group/start inline-flex items-center justify-center px-8 h-[56px] rounded-full bg-[#9390f9] hover:bg-[#827ef5] text-[#0b0c10] font-[family-name:var(--font-poppins)] font-medium text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg"
              >
                Get Started
                <span className="ml-2 transform transition-transform duration-300 group-hover/start:translate-x-1">
                  →
                </span>
              </Link>
              <Link
                href="/work"
                className="group/work inline-flex items-center justify-center px-8 h-[56px] rounded-full bg-transparent border border-white hover:bg-white hover:text-[#0b0c10] text-white font-[family-name:var(--font-poppins)] font-medium text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
              >
                View Our Work
                <span className="ml-2 transform transition-transform duration-300 group-hover/work:translate-x-1">
                  →
                </span>
              </Link>
            </div>
          </div>

          {/* Right Column (Concentric Tech Logo Graphic) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[400px] aspect-square flex items-center justify-center select-none">
              <div className="absolute w-[360px] h-[360px] border border-[#9390f9]/15 rounded-full flex items-center justify-center animate-spin-slow">
                <div className="absolute top-0 w-1.5 h-1.5 rounded-full bg-[#9390f9]/60"></div>
                <div className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#9390f9]/60"></div>
              </div>
              <div className="absolute w-[300px] h-[300px] border border-[#9390f9]/25 rounded-full"></div>
              <div className="absolute w-[240px] h-[240px] border border-[#9390f9]/35 rounded-full"></div>

              {/* Glass Center Circle */}
              <div className="absolute w-[120px] h-[120px] bg-[#8d85f7]/5 backdrop-blur-md rounded-full border border-white/10 shadow-[inset_0_0_20px_rgba(143,137,255,0.25)] flex items-center justify-center z-10 animate-pulse-slow">
                <svg
                  className="w-[30px] h-[28px]"
                  viewBox="0 0 30 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse cx="5.228" cy="11.524" rx="5.228" ry="11.408" fill="#e7e0e0" />
                  <ellipse cx="20.449" cy="13.19" rx="8.183" ry="8.33" fill="#e7e0e0" />
                  <ellipse cx="27.5" cy="2.545" rx="2.5" ry="2.545" fill="#e7e0e0" />
                  <ellipse cx="2.044" cy="10.18" rx="1.364" ry="1.389" fill="#e7e0e0" />
                  <rect x="5.68" y="23.14" width="16.138" height="4.86" fill="#e7e0e0" />
                  <rect x="5.68" y="16.43" width="4.773" height="6.479" fill="#9390f9" />
                  <rect x="0" y="16.43" width="3.068" height="6.479" fill="#9390f9" />
                  <rect x="5.68" y="23.097" width="4.66" height="4.85" fill="#9390f9" />
                </svg>
              </div>

              {/* Floating badges */}
              <div className="absolute left-[15%] top-[12%] w-[34px] h-[34px] bg-[#5d5d5d]/25 border border-white/10 rounded-lg backdrop-blur-md flex items-center justify-center shadow-lg animate-float-slow">
                <svg className="w-4 h-4 text-[#9390f9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>
              <div className="absolute right-[15%] top-[20%] w-[34px] h-[34px] bg-[#5d5d5d]/25 border border-white/10 rounded-lg backdrop-blur-md flex items-center justify-center shadow-lg animate-float-medium">
                <svg className="w-4 h-4 text-[#9390f9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div className="absolute left-[5%] bottom-[20%] w-[34px] h-[34px] bg-[#5d5d5d]/25 border border-white/10 rounded-lg backdrop-blur-md flex items-center justify-center shadow-lg animate-float-fast">
                <svg className="w-4 h-4 text-[#9390f9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m-16 5c0 2.21 3.58 4 8 4s8-1.79 8-4" />
                </svg>
              </div>
              <div className="absolute right-[44%] bottom-[5%] w-[34px] h-[34px] bg-[#5d5d5d]/25 border border-white/10 rounded-lg backdrop-blur-md flex items-center justify-center shadow-lg animate-float-medium">
                <svg className="w-4 h-4 text-[#9390f9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services List / Carousel Section */}
      <section id="services-carousel" className="w-full bg-white text-black py-20 lg:py-28 overflow-hidden relative border-t border-neutral-100">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 flex flex-col gap-16">
          {/* Section Heading */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 max-w-[950px]">
            <div className="flex flex-col items-start gap-4">
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-[58px] font-semibold text-black tracking-tight font-[family-name:var(--font-poppins)]">
                Services that turn complexity <br className="hidden sm:inline" />
                into momentum
              </h2>
              <p className="text-base sm:text-lg text-[#595858] max-w-[680px] font-[family-name:var(--font-inter)] font-normal leading-relaxed">
                From cloud foundations to AI copilots &mdash; one engineering partner for every layer of your stack.
              </p>
            </div>

            {/* Slider Controls (Arrow buttons) */}
            <div className="flex items-center gap-4 self-start md:self-end">
              <button
                onClick={prevSlide}
                aria-label="Previous Slide"
                className="w-12 h-12 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md"
              >
                <svg className="w-5 h-5 transform rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next Slide"
                className="w-12 h-12 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white flex items-center justify-center transition-all duration-300 active:scale-95 shadow-md"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Interactive Carousel Body */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch relative">
            {/* Left Indicator Column (Hidden on mobile) */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-between py-6">
              <span className="text-[15px] font-medium text-[#595858] tracking-widest uppercase font-[family-name:var(--font-poppins)] [writing-mode:vertical-lr] rotate-180">
                {currentService.subLabel}
              </span>
              <div className="flex flex-col items-center gap-4 my-8 shrink-0">
                <span className="w-1 h-12 bg-neutral-200 rounded-full relative overflow-hidden">
                  <span
                    className="absolute top-0 left-0 w-full bg-[#06007c] transition-all duration-500"
                    style={{
                      height: `${((currentSlide + 1) / servicesData.length) * 100}%`
                    }}
                  ></span>
                </span>
                <span className="w-2 h-2 rounded-full bg-[#06007c]"></span>
              </div>
              <span className="text-sm font-semibold tracking-wider font-[family-name:var(--font-poppins)] text-black">
                {currentService.id} / 06
              </span>
            </div>

            {/* Active Card Body (7 Columns on desktop) */}
            <div className="lg:col-span-7 min-h-[456px] rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden flex flex-col justify-between shadow-2xl transition-all duration-500 transform hover:scale-[1.01]">
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${currentService.gradient} transition-all duration-500 -z-10`}></div>
              {/* Decorative Mesh Ring */}
              <div className="absolute -right-10 -bottom-10 w-80 h-80 border border-white/5 rounded-full -z-10"></div>
              <div className="absolute -right-20 -bottom-20 w-80 h-80 border border-white/10 rounded-full -z-10"></div>

              <div>
                {/* Card Header Info */}
                <div className="flex items-center justify-between mb-8">
                  <span className="text-xs sm:text-sm tracking-widest font-semibold uppercase text-white/70 font-[family-name:var(--font-poppins)]">
                    SERVICE / {currentService.id}
                  </span>
                  <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center shrink-0">
                    {currentService.icon}
                  </div>
                </div>

                {/* Service Detail Text */}
                <h3 className="text-3xl sm:text-4xl lg:text-[44px] font-semibold tracking-tight mb-6 font-[family-name:var(--font-poppins)] leading-tight">
                  {currentService.title}
                </h3>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed max-w-[480px] font-light">
                  {currentService.description}
                </p>
              </div>

              {/* Service Link */}
              <Link
                href="/contact"
                className="group/explore inline-flex items-center gap-3 text-white font-medium hover:text-white/80 transition-all duration-300 mt-10 w-fit border-b border-white/30 pb-1 hover:border-white"
              >
                Explore service
                <span className="transform transition-transform duration-300 group-hover/explore:translate-x-1 group-hover/explore:-translate-y-0.5">
                  &rarr;
                </span>
              </Link>
            </div>

            {/* Right Capabilities & Start Block Column (4 Columns on desktop) */}
            <div className="lg:col-span-3 flex flex-col gap-6">
              {/* Capabilities Panel */}
              <div className="bg-neutral-50 rounded-3xl p-8 border border-neutral-100 flex-grow flex flex-col justify-between min-h-[260px] shadow-sm">
                <div>
                  <h4 className="text-xs tracking-wider uppercase font-semibold text-[#595858] font-[family-name:var(--font-poppins)] mb-6">
                    CAPABILITIES
                  </h4>
                  <ul className="flex flex-col gap-4">
                    {currentService.capabilities.map((cap, i) => (
                      <li key={i} className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-[#06007c] text-white text-xs font-semibold flex items-center justify-center shrink-0">
                          0{i + 1}
                        </div>
                        <span className="text-[15px] font-semibold text-neutral-800 font-[family-name:var(--font-poppins)]">
                          {cap}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Mini CTA Panel */}
              <div className="bg-[#0b0c10] text-white rounded-3xl p-6 flex items-center justify-between border border-white/5 hover:border-white/10 transition-colors shadow-md relative group/cta overflow-hidden shrink-0">
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#9390f9]/5 to-transparent rounded-full pointer-events-none"></div>
                <div>
                  <span className="text-[10px] tracking-widest font-semibold text-[#7c7c7c] uppercase font-[family-name:var(--font-poppins)] block mb-1">
                    READY TO START?
                  </span>
                  <Link href="/contact" className="text-base font-bold text-white hover:text-[#9390f9] transition-colors font-[family-name:var(--font-poppins)]">
                    Book a 30-min call
                  </Link>
                </div>
                <Link
                  href="/contact"
                  className="w-12 h-12 rounded-full bg-[#06007c] border border-white/10 text-white flex items-center justify-center shrink-0 group-hover/cta:scale-105 transition-transform shadow-[0_0_15px_rgba(6,0,124,0.3)]"
                >
                  <svg className="w-5 h-5 transform transition-transform duration-300 group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Right Next Slide Indicator Column (Hidden on mobile) */}
            <div className="hidden lg:flex lg:col-span-1 flex-col items-center justify-between py-6 opacity-30 hover:opacity-50 cursor-pointer transition-opacity" onClick={nextSlide}>
              <span className="text-[15px] font-medium text-[#595858] tracking-widest uppercase font-[family-name:var(--font-poppins)] [writing-mode:vertical-lr] rotate-180">
                {nextService.subLabel}
              </span>
              <div className="flex flex-col items-center gap-4 my-8 shrink-0">
                <span className="w-1 h-12 bg-neutral-200 rounded-full relative overflow-hidden">
                  <span
                    className="absolute top-0 left-0 w-full bg-[#06007c] transition-all duration-500"
                    style={{
                      height: `${((nextSlideIndex + 1) / servicesData.length) * 100}%`
                    }}
                  ></span>
                </span>
                <span className="w-2 h-2 rounded-full bg-neutral-400"></span>
              </div>
              <span className="text-sm font-semibold tracking-wider font-[family-name:var(--font-poppins)] text-black">
                {nextService.id} / 06
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Our Working Process Section */}
      <section id="process" className="w-full bg-[#08090e] py-20 lg:py-28 relative overflow-hidden border-t border-white/5">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10">
          {/* Header Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
            <div className="lg:col-span-7 flex flex-col items-start gap-4">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-2 shrink-0">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9390f9] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9390f9]"></span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#bbb2b2] font-[family-name:var(--font-poppins)]">
                  OUR PROCESS
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-white tracking-tight font-[family-name:var(--font-poppins)]">
                Our Working Process
              </h2>
            </div>
            <div className="lg:col-span-5 text-left lg:text-left self-end">
              <p className="text-base sm:text-lg text-[#9f9f9f] leading-relaxed max-w-[536px] font-[family-name:var(--font-inter)] font-normal">
                From cloud foundations to AI copilots &mdash; one engineering partner for every layer of your stack.
              </p>
            </div>
          </div>

          {/* 4 Step Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Discover",
                desc: "We dive deep into your business goals, system architecture, and user workflows to map out a clear project roadmap."
              },
              {
                step: "02",
                title: "Plan",
                desc: "We outline the tech stack, database schema, API designs, and project sprints to ensure a seamless execution."
              },
              {
                step: "03",
                title: "Design & Develop",
                desc: "Our engineers build clean, tested code and stunning user interfaces using modern web frameworks and engineering best practices."
              },
              {
                step: "04",
                title: "Launch",
                desc: "We deploy to production with zero-downtime strategies, conduct final security audits, and transition to ongoing maintenance."
              }
            ].map((s, idx) => (
              <div key={idx} className="bg-[#111218]/40 border border-white/5 hover:border-white/10 p-8 rounded-3xl flex flex-col justify-between min-h-[220px] transition-all duration-300 hover:scale-[1.02] relative group">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9390f9]/0 to-transparent group-hover:via-[#9390f9]/30 transition-all duration-300"></div>
                <div className="flex flex-col gap-6">
                  {/* Step Ring */}
                  <div className="w-[80px] h-[80px] rounded-full bg-[#11141f] border border-white/5 flex items-center justify-center text-lg font-bold text-[#9390f9] tracking-wider font-[family-name:var(--font-poppins)] shrink-0 shadow-inner group-hover:border-[#9390f9]/20 transition-all duration-300">
                    Step {s.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 font-[family-name:var(--font-poppins)]">
                      {s.title}
                    </h3>
                    <p className="text-sm text-[#9f9f9f] leading-relaxed font-[family-name:var(--font-inter)]">
                      {s.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="w-full bg-[#04060c] py-20 lg:py-28 border-t border-white/5 relative overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Heading and CTA */}
          <div className="lg:col-span-4 flex flex-col items-start text-left gap-6 lg:sticky lg:top-[120px]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-2 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9390f9] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9390f9]"></span>
              </span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#bbb2b2] font-[family-name:var(--font-poppins)]">
                WHY CHOOSE US
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[44px] leading-tight font-semibold text-white tracking-tight font-[family-name:var(--font-poppins)]">
              We Deliver More <br />
              Than Just Code
            </h2>

            <p className="text-base sm:text-lg text-[#9f9f9f] leading-relaxed max-w-[422px] font-[family-name:var(--font-inter)] font-normal">
              With over 20 years of experience, we deliver exceptional results for your online business without additional costs or commitments.
            </p>

            <Link
              href="/contact"
              className="group/work inline-flex items-center justify-center px-8 h-[50px] rounded-full bg-[#9390f9] hover:bg-[#827ef5] text-[#0b0c10] font-[family-name:var(--font-poppins)] font-medium text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] mt-4 shadow-lg"
            >
              Let&apos;s Work Together
              <span className="ml-2 transform transition-transform duration-300 group-hover/work:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Right Column: Grid of 6 value cards */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {chooseUsData.map((val, idx) => (
                <div
                  key={idx}
                  className="bg-[#08090e] border border-[#373737] p-8 rounded-3xl min-h-[183px] flex flex-col gap-5 hover:border-[#9390f9]/30 transition-all duration-300 hover:scale-[1.01] relative group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#11141f] border border-white/5 flex items-center justify-center text-[#9390f9] shrink-0 font-bold font-[family-name:var(--font-poppins)] shadow-inner">
                    0{idx + 1}
                  </div>
                  <div>
                    <h3 className="text-[18px] font-semibold text-white mb-2 font-[family-name:var(--font-poppins)]">
                      {val.title}
                    </h3>
                    <p className="text-sm text-[#9f9f9f] leading-relaxed font-[family-name:var(--font-inter)]">
                      {val.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="w-full bg-[#08090e] py-20 lg:py-24 border-t border-white/5 relative overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight font-[family-name:var(--font-poppins)] mb-16">
            Technologies We Engineer
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 justify-center">
            {techStack.map((tech, idx) => (
              <div
                key={idx}
                className="bg-[#050508] border border-white/5 p-6 rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-white/20 transition-all duration-300 group hover:-translate-y-1 shadow-md"
              >
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {tech.svg}
                </div>
                <span className="text-sm font-semibold text-[#bbb2b2] group-hover:text-white transition-colors duration-200 font-[family-name:var(--font-poppins)]">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action (CTA) Section */}
      <section className="relative w-full py-24 bg-[#0b0c10] overflow-hidden flex items-center justify-center border-t border-white/5">
        {/* Subtle Tech Grid overlay and glowing light source */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_2.75rem] opacity-35"></div>
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[500px] h-[300px] bg-[#9390f9]/8 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-[859px] mx-auto px-4 text-center flex flex-col items-center gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-[44px] sm:leading-[54px] font-semibold text-white tracking-tight font-[family-name:var(--font-poppins)] max-w-[800px]">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-sm sm:text-base text-[#9f9f9f] font-light font-[family-name:var(--font-inter)] tracking-wide">
              Tell us about your project and we&apos;ll get back within one business day.
            </p>
          </div>

          <Link
            href="/contact"
            className="group/cta inline-flex items-center justify-center px-8 h-[60px] rounded-full bg-[#9390f9] hover:bg-[#827ef5] text-[#0b0c10] font-[family-name:var(--font-poppins)] font-medium text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-xl"
          >
            Start Your Project
            <span className="ml-2 transform transition-transform duration-300 group-hover/cta:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
