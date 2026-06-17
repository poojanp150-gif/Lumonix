"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "./Footer";
import Image from "next/image";
import HeroGraphic from "./HeroGraphic";
import vector from "../../public/vector.png"
import Ai from "../../public/AI.png";
import Cybersecurity from "../../public/Cybersecurity.png";
import CustomSoftware from "../../public/CustomSoftware.png";
import AppDevelopment from "../../public/AppDevelopment.png";
import web from "../../public/web.png";
const servicesData = [
  {
    id: "01",
    title: "Shopify Development",
    label: "INFRASTRUCTURE",
    subLabel: "NEXVORA",
    topic: "INFRASTRUCTURE",
    description: " Build high-performing Shopify stores and custom apps that convert visitors into customers and scale with your business.",
    capabilities: ["Ecommerce brands", "D2C startups", "merchants who need custom Shopify solutions"],
    gradient: "from-[#06007c] to-[#4177fd]",
    icon: vector
  },
  {
    id: "02",
    title: "Custom Software",
    label: "ENGINEERING",
    subLabel: "NEXVORA",
    topic: "ENGINEERING",
    description: "Design and build bespoke web and mobile applications engineered for peak performance and scale.",
    capabilities: ["React", "API Integration", "Full-Stack Web Dev"],
    gradient: "from-[#9390f9] to-[#beb3ff]",
    icon: CustomSoftware
  },
  {
    id: "03",
    title: "AI & Data Engineering",
    label: "INTELLIGENCE",
    subLabel: "NEURAL",
    topic: "AI",
    description: "Integrate intelligent LLM copilots, predictive models, and data pipelines into your enterprise workflows.",
    capabilities: ["LLM & Agentic AI", "Data Pipelines", "Model Fine-Tuning"],
    gradient: "from-[#4177fd] to-[#9390f9]",
    icon: Ai
  },
  {
    id: "04",
    title: "Cybersecurity",
    label: "SECURITY",
    subLabel: "SECUREX",
    topic: "SECURITY",
    description: "Secure your digital assets with advanced threat detection, penetration testing, and zero-trust architectures.",
    capabilities: ["Penetration Testing", "Zero-Trust Design", "Compliance Auditing"],
    gradient: "from-[#beb3ff] to-[#06007c]",
    icon: Cybersecurity
  },
  {
    id: "05",
    title: "Full Stack Development",
    label: "DEVELOPMENT",
    subLabel: "FULLSTACK",
    topic: "WEB DEVELOPMENT",
    description: "Custom web applications, enterprise solutions, and scalable software architecture built with modern technologies.",
    capabilities: [
      "Custom Web Applications",
      "API Development",
      "Cloud Integrations",
      "Scalable Software Architecture"
    ],
    gradient: "from-[#61dafb] to-[#0f172a]",
    icon: web
  },
  {
    id: "06",
    title: "App Development",
    label: "MOBILE",
    subLabel: "APPX",
    topic: "MOBILE DEVELOPMENT",
    description: "Design and build mobile apps, web apps, and SaaS products that deliver seamless user experiences across platforms.",
    capabilities: ["Mobile App Development", "SaaS Product Development", "Cross-Platform Applications"],
    gradient: "from-[#4177fd] to-[#beb3ff]",
    icon: AppDevelopment
  }
];

const processSteps = [
  {
    step: "01",
    title: "Discover",
    desc: "Understand your goals, users, and technical requirements"
  },
  {
    step: "02",
    title: "Plan",
    desc: "Define architecture, roadmap, and success metrics"
  },
  {
    step: "03",
    title: "Build",
    desc: "Agile development with regular updates and transparent communication"
  },
  {
    step: "04",
    title: "Launch",
    desc: "Deploy, test, and optimize for performance"
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
        <path d="M9.5 57C14.7467 57 19 52.7467 19 47.5V38H9.5C4.25329 38 0 42.2533 0 47.5C0 52.7467 4.25329 57 9.5 57Z" fill="#0ACF83" />
        <path d="M0 28.5C0 23.2533 4.25329 19 9.5 19H19V38H9.5C4.25329 38 0 33.7467 0 28.5Z" fill="#A259FF" />
        <path d="M0 9.5C0 4.25329 4.25329 0 9.5 0H19V19H9.5C4.25329 19 0 14.7467 0 9.5Z" fill="#F24E1E" />
        <path d="M19 0H28.5C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19H19V0Z" fill="#FF7262" />
        <path d="M38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5Z" fill="#1BC0F8" />
      </svg>
    )
  },
  {
    name: "Photoshop",
    bgColor: "bg-[#050508]",
    svg: (
      <svg className="w-12 h-12 text-[#31A8FF]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 2H2v20h20V2zM10.2 16.5c-.2.7-.6 1.2-1.2 1.5s-1.3.4-2.2.4H4.5V8.8h2.6c1 0 1.8.2 2.3.6s.7 1.1.7 2c0 .6-.1 1.1-.4 1.5s-.8.6-1.4.7c.7.1 1.2.4 1.5.8s.4 1.1.4 2.1zm8.3.1c0 1.1-.3 1.9-.9 2.5s-1.5.8-2.6.8c-1.2 0-2.1-.3-2.7-.9s-.9-1.5-.9-2.7v-2.3c0-1.1.3-2 .9-2.6s1.5-.9 2.8-.9c1.1 0 2 .3 2.6.8s.8 1.4.8 2.6V16.6zm-11-4.7c0-.4-.1-.7-.3-.8s-.6-.2-1.1-.2h-.8V13h.8c.5 0 .9-.1 1.1-.2s.3-.4.3-.9zm0 3.2c0-.5-.1-.8-.3-1s-.6-.2-1.1-.2h-.8V17h.8c.5 0 .9-.1 1.1-.2s.3-.4.3-1zm8.3 1.5v-2.3c0-.7-.1-1.2-.4-1.5s-.7-.4-1.3-.4c-.5 0-.9.1-1.2.4s-.4.8-.4 1.5v2.3c0 .7.1 1.2.4 1.5s.7.4 1.3.4c.5 0 .9-.1 1.2-.4s.4-.8.4-1.5z" />
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
        <path d="M12.158 12.786l-2.698 7.84c1.77-.442 3.328-1.42 4.472-2.735l-1.774-5.105zm-7.61 5.374c.483.136.953.21 1.408.21.724 0 1.342-.234 1.342-.716 0-.38-.276-.653-.55-.953-.346-.38-.69-.794-.69-1.343 0-.62.483-1.173 1.207-1.173.345 0 .62.103.827.24l-2.035 5.86c-1.344-.964-2.31-2.38-2.706-4.032l.707-.093c.414-.04.93-.093 1.1-.093zm8.972.102l-1.41-4.05 1.586-4.524c1.17 1.62 1.86 3.6 1.86 5.75 0 1.033-.166 2.033-.47 2.973l-1.566-.15zm10.48-6.262c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10 10-4.477 10-10zm-10 8.6c-4.74 0-8.6-3.86-8.6-8.6S7.26 3.4 12 3.4s8.6 3.86 8.6 8.6-3.86 8.6-8.6 8.6z" />
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
        <path d="M5.165 1.5h13.67c.725 0 1.314.59 1.314 1.314v17.37c0 .725-.59 1.314-1.314 1.314H5.165c-.725 0-1.314-.59-1.314-1.314V2.814c0-.725.59-1.314 1.314-1.314zm9.356 12.012l3.414-3.414V6.684l-3.414 3.414v3.414zm-5.042 5.042l5.042-5.042V10.1l-5.042 5.042v3.414z" />
      </svg>
    )
  },
  {
    name: "Tailwind CSS",
    bgColor: "bg-[#050508]",
    svg: (
      <svg className="w-12 h-12 text-[#38BDF8]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.518 14.99 11.8 17.999 11.8c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.082 15.01 4.8 12.001 4.8zm-6 7c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.518 8.99 18.8 11.999 18.8c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.082 9.01 11.8 6.001 11.8z" />
      </svg>
    )
  },
  {
    name: "AWS",
    bgColor: "bg-[#050508]",
    svg: (
      <svg className="w-12 h-12 text-[#FF9900]" viewBox="0 0 24 24" fill="currentColor">
        <path d="M11.233 16.924a10.877 10.877 0 01-2.937-.367c-1.393-.322-2.308-1.077-2.308-2.23 0-.996.697-1.815 1.93-2.148 1.196-.322 2.766-.367 4.148-.367h1.076v.83c0 .872.046 1.868.046 2.698h.046c.138.457.458.747.872.747s.783-.245 1.012-.663c.277-.5.323-1.246.323-1.95V9.45c0-1.745-.644-2.825-1.932-3.283-1.055-.373-2.617-.415-3.855-.415-1.787 0-3.83.166-5.116.997-.506.332-.737.83-.506 1.288.184.373.69.415 1.15.207 1.055-.54 2.57-.747 4.093-.747 1.15 0 2.254.083 2.76.623.368.373.46.996.46 1.702v.706H12.06c-1.84 0-3.87.042-5.433.54-1.79.58-2.756 1.745-2.756 3.447 0 2.036 1.242 3.488 3.542 3.987a11.517 11.517 0 003.358.374 8.784 8.784 0 003.487-.665c.414-.25.599-.083.829.208a1.69 1.69 0 001.382.665c.598 0 .967-.374 1.197-.83.277-.5.322-1.247.322-1.95v-1.703h-1.076c-.92 0-1.795.125-2.393.582-.69.54-.92 1.37-.92 2.2v.292c0 .415-.23.748-.644.748s-.69-.333-.782-.748c-.046-.457-.046-1.079-.046-1.578v-1.121h-.966c-1.38 0-2.667.041-3.633.25-.874.207-1.38.622-1.38 1.287 0 .706.598 1.163 1.564 1.329.967.124 2.21.124 3.176.124h.967v1.12c0 .54-.046 1.164-.046 1.703h.046c.138.457.46.748.874.748s.782-.25 1.012-.665c.276-.5.322-1.246.322-1.95V10.155H12.06zm8.127.318c-1.61.913-3.633 1.453-5.748 1.453-.92 0-1.794-.083-2.623-.207-.506-.083-.736.332-.322.664.92.747 2.023 1.12 3.22 1.287 1.886.25 3.864-.166 5.565-1.12.506-.291.506-.789.046-1.079l-.138-.083a.467.467 0 00-.083.085zM21.2 9.076c-.506-.29-1.012.29-.69.664l1.38 1.578c.322.373.874.207.92-.29l.23-2.076a.573.573 0 00-.69-.623l-1.15.747z" />
      </svg>
    )
  }
];

export function ServicesCarousel() {
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
    <section id="services-carousel" className="w-full bg-white text-black py-20 lg:py-28 relative overflow-hidden border-t border-black/5" style={{ marginTop: "-1px" }}>
      {/* Decorative Grid Pattern for premium aesthetics */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1320px] mx-auto px-4 md:px-10">
        {/* Header (Frame 495) */}
        <div className="flex flex-col items-center text-center max-w-[914px] mx-auto mb-16 px-4">
          <h2 className="text-4xl sm:text-5xl lg:text-[64px] font-semibold tracking-tight font-[family-name:var(--font-poppins)] text-black leading-[1.15]">
            Services that turn complexity <span className="text-[#06007c]">into momentum</span>
          </h2>
          <p className="mt-6 text-lg sm:text-xl text-[#595858] leading-relaxed font-[family-name:var(--font-inter)] font-normal max-w-[850px]">
            We combine development, automation, and growth expertise so you don&apos;t have to manage multiple vendors. Every engagement is tailored to your goals, timeline, and budget.
          </p>
        </div>

        {/* Interactive Slide Controls & Grid Container */}
        <div className="w-full max-w-[1320px] mx-auto">

          <div className="flex justify-end mb-6 gap-3 lg:pr-16">
            <button
              onClick={prevSlide}
              className="w-[50px] h-[50px] rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-md border border-white/5 group cursor-pointer"
              aria-label="Previous service"
            >
              <svg className="w-5 h-5 transform rotate-180 transition-transform duration-300 group-hover:-translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-[50px] h-[50px] rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all duration-300 hover:scale-105 active:scale-95 shadow-md border border-white/5 group cursor-pointer"
              aria-label="Next service"
            >
              <svg className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>


          <div className="grid grid-cols-1 lg:grid-cols-[70px_1fr_391px_70px] gap-6 items-stretch">


            <div className="hidden lg:flex flex-col items-center justify-between h-[456px] py-4 select-none">
              <div className="flex flex-col items-center gap-6">
                {/* Vertical rotated text */}
                <div className="flex items-center gap-2 text-[#595858] font-mono text-xs tracking-[0.2em] font-medium" style={{ writingMode: "vertical-lr", textTransform: "uppercase" }}>
                  <span>{currentService.label}</span>
                  <span className="w-1 h-1 rounded-full bg-[#595858] inline-block my-1"></span>
                  <span>{currentService.subLabel}</span>
                </div>

                {/* Progress Line */}
                <div className="relative w-2 h-32 flex flex-col items-center justify-start py-1">
                  <div className="absolute top-0 bottom-0 w-[1px] bg-[#595858]/20"></div>
                  <div
                    className="absolute top-0 w-[1.5px] bg-[#06007c] transition-all duration-500"
                    style={{ height: `${((currentSlide + 1) / servicesData.length) * 100}%` }}
                  ></div>
                  <div
                    className="absolute w-2.5 h-2.5 rounded-full bg-[#06007c] shadow-md border-2 border-white transition-all duration-500"
                    style={{ top: `calc(${((currentSlide + 1) / servicesData.length) * 100}% - 5px)` }}
                  ></div>
                </div>
              </div>

              <div className="font-mono text-xs text-[#595858] tracking-widest font-semibold mt-4">
                {currentService.id} / 0{servicesData.length}
              </div>
            </div>

            {/* Active Card (Frame 492) */}
            {/*  */}
            <div className="relative flex flex-col md:flex-row rounded-3xl overflow-hidden border border-black/5 shadow-lg sm:min-h-[456px] transition-all duration-500 hover:shadow-xl group/card">
              {/* Left Content Area (Frame 491) */}
              <div
                className={`absolute top-0 right-0 w-40 h-40 bg-gradient-to-br ${currentService.gradient}`}
                style={{
                  clipPath: "polygon(100% 0, 100% 100%, 0 0)"
                }}
              >
              </div>
              <div className="absolute top-5 right-5">
                <p
                  className=" px-2 py-1 rounded-full text-small text-[#070094] bg-gradient-to-r from-white/20 to-white/5 backdrop-blur-lg shadow-[0_8px_32px_rgba(0,0,0,0.15)] font-[family-name:var(--font-poppins)]"
                >
                  {currentService.topic}
                </p>
              </div>
              <div className="w-full  p-8 sm:p-10 flex flex-col justify-between items-start gap-8 ">
                <div className="w-full flex flex-col items-start gap-6">
                  <span className="font-mono text-xs text-[#595858] tracking-widest font-semibold uppercase">
                    SERVICE / {currentService.id}
                  </span>

                  {/* Big Custom Icon Box (Frame 466) */}
                  <div
                    className={`w-[84px] h-[84px] sm:w-[108px] sm:h-[108px] 
bg-gradient-to-br ${currentService.gradient}
rounded-2xl flex items-center justify-center text-white shadow-md`}
                  >
                    <Image
                      src={currentService.icon}
                      alt={currentService.title}
                      className="sm:w-[50px] sm:h-[50px]"
                    />
                  </div>
                </div>

                {/* Title & Description (Frame 490) */}
                <div className="w-full flex flex-col gap-4 text-left">
                  <h3 className="text-3xl sm:text-[40px]  text-black tracking-tight leading-tight font-[family-name:var(--font-poppins)]">
                    {currentService.title}
                  </h3>
                  <p className="text-sm text-[#595858] leading-relaxed max-w-[420px] font-[family-name:var(--font-inter)] font-normal">
                    {currentService.description}
                  </p>
                  <div className="mt-4">
                    {/* Explore Link (Frame 487) */}
                    <Link
                      href={`/services#${currentService.id}`}
                      className="group/link inline-flex items-center gap-2 text-lg sm:text-xl font-medium text-black transition-colors duration-300 cursor-pointer"
                    >
                      <span className="relative pb-0.5">
                        Explore service
                        <span className="absolute left-0 bottom-0 w-[95%] h-[1.5px] bg-black scale-x-100 group-hover/link:scale-x-0 origin-left transition-transform duration-300"></span>
                        <span className="absolute left-0 bottom-0 w-[95%] h-[1.5px] bg-[#06007c] scale-x-0 group-hover/link:scale-x-100 origin-left transition-transform duration-300"></span>
                      </span>
                      <svg className="w-5 h-5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform duration-300 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>

            </div>

            {/* Right Sidebar Columns (Frame 481 + Frame 485) */}
            <div className="flex flex-col gap-6 justify-between">

              {/* Capabilities Checklist Card (Frame 481) */}
              <div className="bg-white border border-black/5 rounded-3xl p-6 sm:p-8 flex flex-col justify-between sm:min-h-[291px] shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex flex-col gap-6 text-left">
                  <span className="font-mono text-xs text-[#06007c] tracking-widest font-semibold uppercase">
                    CAPABILITIES
                  </span>
                  <div className="flex flex-col gap-4">
                    {currentService.capabilities.map((cap, index) => (
                      <div key={index} className="flex items-center gap-4 group/item">
                        <div className={`w-[36px] h-[36px] rounded-full bg-gradient-to-br ${currentService.gradient} text-white flex items-center justify-center font-semibold text-sm font-[family-name:var(--font-poppins)] shrink-0 transition-transform duration-300 group-hover/item:scale-110`}>
                          0{index + 1}
                        </div>
                        <span className="text-base text-black font-medium font-[family-name:var(--font-poppins)] tracking-tight">
                          {cap}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Ready To Start CTA Card (Frame 485) */}
              <Link
                href="/contact"
                className="bg-[#111218] rounded-3xl p-6 sm:px-8 flex items-center justify-between min-h-[135px] hover:bg-[#181a24] transition-all duration-300 group/cta-card shadow-md cursor-pointer"
              >
                <div className="flex flex-col gap-1.5 text-left">
                  <span className="font-mono text-[10px] text-[#7f7f7f] tracking-widest font-semibold">
                    READY TO START?
                  </span>
                  <span className="text-xl sm:text-2xl font-medium text-white tracking-tight font-[family-name:var(--font-poppins)]">
                    Book a 30-min call
                  </span>
                </div>
                <div className={`w-[56px] h-[56px] sm:w-[66px] sm:h-[66px] rounded-full bg-gradient-to-br ${currentService.gradient} hover:bg-[#05006b] text-white flex items-center justify-center shrink-0 transition-all duration-300 group-hover/cta-card:scale-105 group-hover/cta-card:rotate-45 shadow-md`}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </div>
              </Link>

            </div>

            {/* Right Timeline Preview (Frame 477) */}
            <div
              onClick={nextSlide}
              className="hidden lg:flex flex-col items-center justify-between h-[456px] py-4 select-none opacity-30 hover:opacity-60 transition-opacity duration-300 cursor-pointer"
              title="Next service preview"
            >
              <div className="flex flex-col items-center gap-6">
                {/* Vertical rotated text */}
                <div className="flex items-center gap-2 text-[#595858] font-mono text-xs tracking-[0.2em] font-medium" style={{ writingMode: "vertical-lr", textTransform: "uppercase" }}>
                  <span>{nextService.label}</span>
                  <span className="w-1 h-1 rounded-full bg-[#595858] inline-block my-1"></span>
                  <span>{nextService.subLabel}</span>
                </div>

                {/* Progress Line */}
                <div className="relative w-2 h-32 flex flex-col items-center justify-start py-1">
                  <div className="absolute top-0 bottom-0 w-[1px] bg-[#595858]/20"></div>
                  <div
                    className="absolute top-0 w-[1.5px] bg-[#06007c]/50 transition-all duration-500"
                    style={{ height: `${((nextSlideIndex + 1) / servicesData.length) * 100}%` }}
                  ></div>
                  <div
                    className="absolute w-2.5 h-2.5 rounded-full bg-[#06007c]/50 shadow-md border-2 border-white transition-all duration-500"
                    style={{ top: `calc(${((nextSlideIndex + 1) / servicesData.length) * 100}% - 5px)` }}
                  ></div>
                </div>
              </div>

              <div className="font-mono text-xs text-[#595858] tracking-widest font-semibold mt-4">
                {nextService.id} / 0{servicesData.length}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

export default function Services() {
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

        <div className="relative z-10 w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
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
              Drive
              <span className="text-[#9390f9]  ">
                Digital
              </span><br />
              <span className="text-[#9390f9] ">
                Success
              </span>
            </h1>

            {/* Description */}
            <p className="text-lg md:text-[22px] text-[#9f9f9f] leading-relaxed max-w-[620px] mb-10 font-[family-name:var(--font-inter)] font-normal">
              From strategy to deployment, our services are designed to accelerate your digital transformation and business growth.
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

          <HeroGraphic />
        </div>
      </section>


      {/* Our Working Process Section */}
      {/* Services Carousel Section */}
      <ServicesCarousel />

      {/* Our Working Process Section (Frame 1018) */}
      <section id="process" className="w-full bg-[#08090e] py-10 lg:py-18 relative overflow-hidden border-t border-white/5">
        {/* Subtle background glow */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#9390f9]/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-10">
          {/* Header Grid (Frame 983) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-20">
            <div className="lg:col-span-7 flex flex-col items-start gap-4 text-left">
              {/* Badge (Frame 437) */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-2 shrink-0 select-none">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9390f9] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9390f9]"></span>
                </span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#bbb2b2] font-[family-name:var(--font-poppins)]">
                  OUR PROCESS
                </span>
              </div>
              {/* Title (Frame 436) */}
              <h2 className="text-3xl sm:text-4xl lg:text-[48px] font-semibold text-white tracking-tight font-[family-name:var(--font-poppins)]">
                Our Working <span className="text-[#9390f9]">Process</span>
              </h2>
            </div>
            {/* Subtitle (Frame 983 Right) */}
            <div className="lg:col-span-5 text-left lg:text-left self-end lg:pl-8">
              <p className="text-base sm:text-lg text-[#bbb2b2] leading-relaxed max-w-[536px] font-[family-name:var(--font-inter)] font-normal">
                From planning and design to development and deployment, we ensure quality at every stage of the journey.
              </p>
            </div>
          </div>

          {/* Timeline Node Grid (Frame 1017) */}
          <div className="relative w-full sm:py-8">
            {/* Horizontal Timeline Connector Line (hidden on mobile/tablet) */}
            <div className="hidden lg:block absolute top-[70px] left-[120px] right-[120px] h-[1px] bg-gradient-to-r from-[#9390f9]/50 via-white/10 to-[#9390f9]/50 z-0"></div>

            <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-6">
              {processSteps.map((s, idx) => (
                <div key={idx} className="flex flex-col items-center text-center group">
                  {/* Timeline Circle Node */}
                  <div className="relative w-20 h-20 rounded-full bg-[#11141f] border border-[#9390f9]/20 flex items-center justify-center shadow-[inset_0_0_12px_rgba(147,144,249,0.35)] group-hover:border-[#9390f9]/50 transition-all duration-300 mb-6 z-10">
                    {/* Inner glowing dot */}
                    <div className="w-3.5 h-3.5 rounded-full bg-[#9390f9] animate-pulse"></div>
                  </div>

                  {/* Step Meta info */}
                  <span className="text-xs text-[#9f9f9f] font-mono tracking-widest uppercase mb-1">
                    Step {s.step}
                  </span>

                  {/* Step Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 font-[family-name:var(--font-poppins)] group-hover:text-[#9390f9] transition-colors duration-300">
                    {s.title}
                  </h3>

                  {/* Step Description */}
                  <p className="text-sm text-[#9f9f9f] leading-relaxed max-w-[250px] font-[family-name:var(--font-inter)]">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="w-full bg-[#04060c] py-10 lg:py-18 border-t border-white/5 relative overflow-hidden">
        <div className="w-full max-w-[1280px] mx-auto px-4  grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

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

            <h2 className="text-3xl sm:text-4xl lg:text-[48px] lg:leading-[1.2] font-semibold text-white tracking-tight font-[family-name:var(--font-poppins)]">
              We Deliver More <br className="hidden lg:block" />
              Than Just Code
            </h2>

            <p className="text-base sm:text-lg lg:text-[24px] lg:leading-[1.4] text-[#9f9f9f] max-w-[422px] font-[family-name:var(--font-inter)] font-normal">
              Our commitment goes beyond coding we build reliable, scalable, and future-ready digital solutions
            </p>

            <Link
              href="/contact"
              className="group/work inline-flex items-center justify-center px-8 h-[50px] rounded-full bg-[#9390f9] hover:bg-[#827ef5] text-[#11141f] font-[family-name:var(--font-poppins)] font-medium text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] mt-4 shadow-lg"
            >
              Let&apos;s Work Together
              <span className="ml-2 transform transition-transform duration-300 group-hover/work:translate-x-1">
                →
              </span>
            </Link>
          </div>

          {/* Right Column: Grid of 6 value cards */}
          <div className="lg:col-span-8 bg-[#373737] p-[1px] rounded-[13px]">
            <div className="bg-[#373737] p-[1px] rounded-[13px] overflow-hidden ">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[1px]">
                {chooseUsData.map((val, idx) => (
                  <div
                    key={idx}
                    className="bg-[#08090e] p-6 pt-[26px] pb-5 px-5 min-h-[183px] flex flex-col gap-5 group transition-all duration-300 hover:bg-[#0c0e16]"
                  >
                    <div
                      className="w-[50px] h-[50px] rounded-full bg-[#11141f] flex items-center justify-center text-[#9390f9] shrink-0 font-bold font-[family-name:var(--font-poppins)] transition-all duration-300 group-hover:scale-105"
                      style={{ boxShadow: "inset 0 0 9px #9390f9" }}
                    >
                      0{idx + 1}
                    </div>
                    <div>
                      <h3 className="text-[18px] font-semibold text-white mb-2 font-[family-name:var(--font-poppins)] group-hover:text-[#9390f9] transition-colors duration-300">
                        {val.title}
                      </h3>
                      <p className="text-[12px] text-[#9f9f9f] leading-relaxed font-[family-name:var(--font-inter)]">
                        {val.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="w-full bg-[#08090e] py-5 sm:py-20 lg:py-24 border-t border-white/5 relative overflow-hidden">
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
      <section className="relative w-full py-10 sm:py-24 bg-[#0b0c10] overflow-hidden flex items-center justify-center border-t border-white/5">
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
