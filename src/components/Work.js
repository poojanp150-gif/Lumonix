"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Footer from "./Footer";
import HeroGraphic from "./HeroGraphic";

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

const testimonialsList = [
  {
    name: "Michael K.",
    role: "CEO, TechSphere",
    content: "Lumoonix transforms bold ideas into stunning websites, apps and brand systems that consistently exceed performance expectations. Their engineering precision is unmatched.",
    date: "May 01, 2026",
    initials: "MK",
    gradient: "from-[#06007c] to-[#4177fd]"
  },
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
  },
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

const statsList = [
  { value: "180+", label: "Total Projects" },
  { value: "120+", label: "Happy Clients" },
  { value: "8+", label: "Years Experience" },
  { value: "25+", label: "Team Members" }
];

const projectsData = [
  {
    id: "01",
    num: "/ 01 — Brand System",
    title: "Aurora — A Sonic Identity",
    category: "Brand System",
    year: "2026",
    tabs: ["Branding", "Moblie App"],
    graphic: (
      <div className="w-full h-full relative flex  overflow-hidden ">
        <div className="absolute top-10 right-10">
          {/* Animated Tech Grid Lines inside Thumbnail */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:2rem_2rem]"> </div>
          {/* Glowing background mesh */}
          <div className="absolute w-[200px] h-[200px] bg-[#3F44A0]/30 rounded-full blur-[40px] animate-pulse"></div>
          {/* Abstract Concentric Circles */}
          <div className="relative w-[154px] h-[154px] rounded-full bg-[#3F44A0] border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(63,68,160,0.5)]">
            <div className="w-[100px] h-[100px] rounded-full border border-white/20 flex items-center justify-center">
              <div className="w-[72px] h-[72px] rounded-full bg-[#8F89FF] flex items-center justify-center animate-ping opacity-75"></div>
              <div className="absolute w-[72px] h-[72px] rounded-full bg-[#8F89FF] shadow-[inset_0_0_15px_rgba(255,255,255,0.4)] flex items-center justify-center">
                {/* Central Soundwave Symbol */}
                {/* <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: "02",
    num: "/ 02 — Art Direction",
    title: "Halcyon Editorial",
    category: "Art Direction",
    year: "2026",
    tabs: ["Website Design", "Branding"],
    graphic: (
      <div className="w-full h-full bg-[#0b0c10] relative flex items-center justify-center overflow-hidden px-10">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff01_1px,transparent_1px),linear-gradient(to_bottom,#ffffff01_1px,transparent_1px)] bg-[size:3rem_3rem]"></div>
        <div className="absolute -right-10 -top-10 w-[200px] h-[200px] bg-[#9390f9]/10 rounded-full blur-[60px]"></div>
        {/* Sleek Layout Mock */}
        <div className="w-full h-[140px] bg-[#111218] border border-white/10 rounded-xl p-4 flex flex-col justify-between relative shadow-xl">
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-red-500"></span>
              <span className="w-2 h-2 rounded-full bg-yellow-500"></span>
              <span className="w-2 h-2 rounded-full bg-green-500"></span>
            </div>
            <span className="text-[10px] text-neutral-500 tracking-wider">HALCYON.CO</span>
          </div>
          <div className="grid grid-cols-3 gap-3">
            <div className="col-span-2 flex flex-col gap-2">
              <div className="h-4 bg-[#9390f9]/20 rounded w-3/4"></div>
              <div className="h-2 bg-neutral-800 rounded w-full"></div>
              <div className="h-2 bg-neutral-800 rounded w-5/6"></div>
            </div>
            <div className="bg-[#beb3ff]/10 border border-[#beb3ff]/20 rounded-lg flex items-center justify-center h-[54px] w-full">
              <span className="text-[10px] font-mono text-[#beb3ff]">H / E</span>
            </div>
          </div>
          <div className="h-2 bg-[#9390f9]/10 rounded w-1/3 mt-2"></div>
        </div>
      </div>
    )
  },
  {
    id: "03",
    num: "/ 03 — Type Design",
    title: "Field Notes",
    category: "Type Design",
    year: "2026",
    tabs: ["Branding"],
    graphic: (
      <div className="w-full h-full bg-[#11131c] relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:1.5rem_1.5rem]"></div>
        {/* Large Typographic Element */}
        <div className="flex items-center justify-center font-mono font-bold text-[96px] text-neutral-800 select-none tracking-widest relative">
          Fn
          <span className="absolute text-[24px] text-[#9390f9] top-4 right-[-24px] font-light">™</span>
        </div>
      </div>
    )
  },
  {
    id: "04",
    num: "/ 04 — Color Study",
    title: "Palette 04",
    category: "Color Study",
    year: "2026",
    tabs: ["Website Design", "Branding"],
    graphic: (
      <div className="w-full h-full bg-neutral-900 grid grid-cols-2 relative overflow-hidden">
        {/* Interactive 4-block grid representation */}
        <div className="bg-[#635cff]/50 flex items-center justify-center group/p">
          <span className="text-[11px] font-mono text-white tracking-widest opacity-0 group-hover/p:opacity-100 transition-opacity">#635CFF</span>
        </div>
        <div className="bg-[#0b0d14] flex items-center justify-center group/p">
          <span className="text-[11px] font-mono text-white tracking-widest opacity-0 group-hover/p:opacity-100 transition-opacity">#0B0D14</span>
        </div>
        <div className="bg-white/50 flex items-center justify-center group/p">
          <span className="text-[11px] font-mono text-black tracking-widest opacity-0 group-hover/p:opacity-100 transition-opacity">#FFFFFF</span>
        </div>
        <div className="bg-[#030132] flex items-center justify-center group/p">
          <span className="text-[11px] font-mono text-white tracking-widest opacity-0 group-hover/p:opacity-100 transition-opacity">#030132</span>
        </div>
      </div>
    )
  },
  {
    id: "05",
    num: "/ 05 — Report",
    title: "Annual / 24",
    category: "Report",
    year: "2026",
    tabs: ["Dashboard UI", "Website Design"],
    graphic: (
      <div className="w-full h-full bg-[#111314] relative flex items-center justify-center overflow-hidden p-6">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
        <div className="absolute top-[10%] left-[20%] w-[150px] h-[150px] bg-emerald-500/10 rounded-full blur-[30px]"></div>
        {/* Graph representation */}
        <div className="w-full max-w-[400px] h-[130px] flex flex-col justify-between">
          <div className="flex items-end gap-3 h-[90px] px-4">
            <div className="w-full bg-[#9390f9]/30 rounded-t-lg h-[40%] transition-all hover:bg-[#9390f9] duration-300"></div>
            <div className="w-full bg-[#9390f9]/30 rounded-t-lg h-[65%] transition-all hover:bg-[#9390f9] duration-300"></div>
            <div className="w-full bg-[#9390f9]/30 rounded-t-lg h-[50%] transition-all hover:bg-[#9390f9] duration-300"></div>
            <div className="w-full bg-[#9390f9]/30 rounded-t-lg h-[90%] transition-all hover:bg-[#9390f9] duration-300"></div>
            <div className="w-full bg-[#9390f9]/30 rounded-t-lg h-[75%] transition-all hover:bg-[#9390f9] duration-300"></div>
          </div>
          <div className="flex items-center justify-between border-t border-white/10 pt-2 font-mono text-[10px] text-neutral-500">
            <span>Q1</span>
            <span>Q2</span>
            <span>Q3</span>
            <span>Q4</span>
            <span>Q5</span>
          </div>
        </div>
      </div>
    )
  }
];

export function WorkGrid({ showTabs = true }) {
  const [activeTab, setActiveTab] = useState("All");
  const filteredProjects = activeTab === "All"
    ? projectsData
    : projectsData.filter((project) => project.tabs.includes(activeTab));

  return (
    <section id="portfolio-grid" className="w-full bg-[#0b0c10] py-5 sm:py-20 relative overflow-hidden border-b border-white/5">
      <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10">

        {/* Category Tabs (Frame 934 Style) */}
        {showTabs && (
          <div className="w-full bg-[#0B0C10] border border-white/10 rounded-full h-[83px] flex items-center px-4 md:px-8 mb-16 shadow-[0_4px_20px_rgba(255,255,255,0.03)] justify-between overflow-x-auto whitespace-nowrap scrollbar-none">
            {["All", "Website Design", "Moblie App", "Branding", "Dashboard UI"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 md:px-8 py-3 rounded-full text-base md:text-[20px] font-[family-name:var(--font-inter)] font-medium transition-all duration-300 active:scale-95 ${activeTab === tab
                  ? "bg-[#9390f9] text-[#0b0c10] shadow-[0_0_15px_rgba(147,144,249,0.4)]"
                  : "text-white hover:text-[#9390f9] bg-transparent"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        )}

        {/* Balanced Portfolio Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-[30px] items-start mb-16">

          {/* Left Column */}
          <div className="flex flex-col gap-[30px] w-full">
            {/* Card 1: Aurora (Large Card) */}
            {filteredProjects.some((p) => p.id === "01") && (
              <div
                className="group relative w-full lg:h-[560px] min-h-[480px] rounded-2xl overflow-hidden border border-white/5 shadow-[0_0_4px_rgba(255,255,255,0.25)] flex flex-col justify-between p-8 transition-all duration-500 hover:scale-[1.01] hover:border-white/15"

              >
                <div
                  className="absolute -top-20 -right-20 w-[200px] h-[200px] rounded-full"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(99,92,255,0.8) 0%, rgba(99,92,255,0) 70%)",
                  }}
                />
                {/* Background Graphic */}
                <div className="absolute inset-0 z-0 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-500">
                  {projectsData[0].graphic}
                </div>

                {/* Header */}
                <div className="flex justify-between items-center z-10 font-mono text-xs text-[#bbb2b2]">
                  <span>{projectsData[0].num}</span>
                  <span className="text-base">{projectsData[0].year}</span>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-end mt-auto z-10 pt-8">
                  <div>

                    <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-poppins)] font-medium text-white hover:text-[#9390f9] transition-colors duration-200">
                      {projectsData[0].title}
                    </h3>
                    <p className="text-sm text-neutral-400 max-w-[420px] font-light leading-relaxed font-[family-name:var(--font-inter)]">
                      Lumoonix transforms bold ideas into stunning websites, apps and premium cloud-native software.
                    </p>
                  </div>
                  <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-[#9390f9] hover:text-[#0b0c10] text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shrink-0 shadow-md">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Card 5: Annual / 24 */}
            {filteredProjects.some((p) => p.id === "05") && (
              <div className="group relative w-full h-[265px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl flex flex-col justify-between p-5 transition-all duration-500 hover:scale-[1.01] hover:border-white/15 bg-[#0b0d14]">
                {/* Background Graphic */}
                {/* <div className="absolute inset-0 z-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                    {projectsData[4].graphic}
                  </div> */}

                {/* Header */}
                <div className="flex justify-between items-center z-10 font-mono text-xs text-[#bbb2b2]">
                  <span>{projectsData[4].num}</span>
                  <span className="text-base">{projectsData[4].year}</span>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-end mt-auto z-10">
                  <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-poppins)] font-medium text-white hover:text-[#9390f9] transition-colors duration-200">
                    {projectsData[4].title}
                  </h3>
                  <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-[#9390f9] hover:text-[#0b0c10] text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shrink-0 shadow-md">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[30px] w-full">
            {/* Card 2: Halcyon Editorial */}
            {filteredProjects.some((p) => p.id === "02") && (
              <div className="group relative w-full h-[265px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl flex flex-col justify-between p-5 transition-all duration-500 hover:scale-[1.01] hover:border-white/15 bg-[#0b0d14]">
                {/* Background Graphic */}
                {/* <div className="absolute inset-0 z-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                    {projectsData[1].graphic}
                  </div> */}

                {/* Header */}
                <div className="flex justify-between items-center z-10 font-mono text-xs text-[#bbb2b2]">
                  <span>{projectsData[1].num}</span>
                  <span className="text-base">{projectsData[1].year}</span>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-end mt-auto z-10">
                  <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-poppins)] font-medium text-white hover:text-[#9390f9] transition-colors duration-200">
                    {projectsData[1].title}
                  </h3>
                  <button className="w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-[#9390f9] hover:text-[#0b0c10] text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shrink-0 shadow-md">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </button>
                </div>
              </div>
            )}

            {/* Sub grid for Card 3 and Card 4 */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] w-full">
              {/* Card 3: Field Notes */}
              {filteredProjects.some((p) => p.id === "03") && (
                <div className="group relative w-full h-[265px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl flex flex-col justify-between p-5 transition-all duration-500 hover:scale-[1.01] hover:border-white/15 bg-[#0b0d14]">
                  {/* Background Graphic */}
                  {/* <div className="absolute inset-0 z-0 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                      {projectsData[2].graphic}
                    </div> */}

                  {/* Header */}
                  <div className="flex justify-between items-center z-10 font-mono text-xs text-[#bbb2b2]">
                    <span>{projectsData[2].num}</span>
                    <span className="text-base">{projectsData[2].year}</span>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-end mt-auto z-10">
                    <h3 className="text-xl md:text-2xl font-[family-name:var(--font-poppins)] font-medium text-white hover:text-[#9390f9] transition-colors duration-200">
                      {projectsData[2].title}
                    </h3>
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#9390f9] hover:text-[#0b0c10] text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shrink-0 shadow-md">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}

              {/* Card 4: Palette 04 */}
              {filteredProjects.some((p) => p.id === "04") && (
                <div className="group relative w-full h-[265px] rounded-2xl overflow-hidden border border-white/5 shadow-2xl flex flex-col justify-between p-5 transition-all duration-500 hover:scale-[1.01] hover:border-white/15 bg-[#0b0d14]">
                  {/* Background Graphic */}
                  <div className="absolute inset-0 z-0 pointer-events-none opacity-90 group-hover:opacity-80 transition-opacity duration-500">
                    {projectsData[3].graphic}
                  </div>

                  {/* Header */}
                  <div className="flex justify-between items-center z-10 font-mono text-xs text-[#bbb2b2]">
                    <span>{projectsData[3].num}</span>
                    <span className="text-base">{projectsData[3].year}</span>
                  </div>

                  {/* Footer */}
                  <div className="flex justify-between items-end mt-auto z-10">
                    <h3 className="text-xl md:text-2xl font-[family-name:var(--font-poppins)] font-medium text-white hover:text-[#9390f9] transition-colors duration-200">
                      {projectsData[3].title}
                    </h3>
                    <button className="w-10 h-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#9390f9] hover:text-[#0b0c10] text-white flex items-center justify-center transition-all duration-300 group-hover:rotate-45 shrink-0 shadow-md">
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Bottom Right: "Have a project in mind ?" CTA Card */}
            <div className="w-full h-[265px] rounded-2xl bg-[#08090e] border border-white/10 p-8 flex flex-col justify-between relative shadow-2xl group overflow-hidden">
              {/* Glow effect */}

              <div className="flex flex-col gap-4 z-10 text-left">
                <span className="text-[10px] tracking-widest font-semibold text-[#7c7c7c] uppercase font-[family-name:var(--font-poppins)] block">
                  READY TO COLLABORATE?
                </span>
                <h3 className="text-2xl md:text-3xl font-[family-name:var(--font-poppins)] text-white">
                  Have a project in mind?
                </h3>
                <p className="text-sm text-neutral-400 max-w-[420px] font-light leading-relaxed font-[family-name:var(--font-inter)]">
                  Lumoonix transforms bold ideas into stunning websites, apps and premium cloud-native software.
                </p>
              </div>
              <Link
                href="/contact"
                className="w-fit inline-flex items-center justify-center px-6 h-[44px] rounded-lg bg-[#9390f9] hover:bg-[#827ef5] text-[#0b0c10] font-[family-name:var(--font-inter)] font-semibold text-sm transition-all duration-300 hover:scale-[1.03] shadow-md shrink-0 z-10"
              >
                Start Your Project &rarr;
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function Work() {
  return (
    <div className="flex flex-col min-h-[calc(100vh-78px)] bg-[#0b0c10] text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[627px] flex items-center justify-center overflow-hidden px-4 md:px-10 lg:px-20 py-16 md:py-24 border-b border-white/5 bg-[#0b0c10]">
        {/* Tech Grid & Glow Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]"></div>
        </div>

        <div className="z-10 w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6 shrink-0">
              <span className="w-2 h-2 rounded-full bg-[#9390f9]"></span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#bbb2b2] font-[family-name:var(--font-poppins)]">
                OUR WORK
              </span>
            </div>

            <h1 className="text-[42px] sm:text-[56px] lg:text-[76px] lg:leading-[91px] font-semibold text-white tracking-tight mb-6 font-[family-name:var(--font-poppins)]">
              Designs That <br />
              <span className="text-[#9390f9]">
                Drive Results
              </span>
            </h1>

            <p className="text-lg md:text-[24px] text-[#9f9f9f] leading-relaxed max-w-[620px] mb-10 font-[family-name:var(--font-inter)] font-normal">
              Strategic and scalable design systems built to elevate brands and drive business outcomes.
            </p>

            <a
              href="#portfolio-grid"
              className="group/btn inline-flex items-center justify-center px-8 h-[60px] rounded-full bg-[#9390f9] hover:bg-[#827ef5] text-[#0b0c10] font-[family-name:var(--font-inter)] font-medium text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg"
            >
              View All Projects
              <span className="ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1">
                →
              </span>
            </a>
          </div>

          <HeroGraphic />
        </div>
      </section>

      {/* Portfolio Grid Section */}
      <WorkGrid showTabs={true} />

      {/* Featured Fintech Case Study Section */}
      <section className="w-full bg-[#0b0c10] py-5 sm:py-24 border-b border-white/5 relative overflow-hidden">
        {/* Glow Spheres */}
        < div className="absolute top-[30%] right-[10%] w-[350px] h-[350px] bg-[#4177fd]/5 rounded-full blur-[100px] pointer-events-none" ></div >

        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10">
          {/* Header Row */}


          <div className="flex flex-col lg:flex-row gap-12 items-center">

            {/* Left Column */}
            <div className="w-full lg:w-[30%] flex flex-col justify-center">
              <div className="inline-flex items-center w-fit gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-2 shrink-0">
                <span className="w-2 h-2 rounded-full bg-[#9390f9]"></span>
                <span className="text-[10px] font-semibold uppercase tracking-wider text-[#bbb2b2] font-[family-name:var(--font-poppins)]">
                  CASE STUDY
                </span>
              </div>
              <h2 className="text-xl md:text-4xl font-semibold tracking-tight text-white font-[family-name:var(--font-poppins)] leading-tight">
                Fintech Website <span className="text-[#9390f9]">Redesign</span>
              </h2>

              <p className="text-lg md:text-1xl text-[#9f9f9f] leading-relaxed max-w-[700px] font-[family-name:var(--font-inter)] font-normal mt-2">
                With over 20 years of experience, we can deliver great results for your
              </p>

              <Link
                href="/contact"
                className="group/cs mt-[67px] inline-flex items-center justify-center px-[12px] py-[14px] rounded-full bg-[#9390f9] hover:bg-[#827ef5] text-[#0b0c10] font-[family-name:var(--font-poppins)] font-medium text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg w-fit"
              >
                View Full Case Study
                <span className="ml-2 transform transition-transform duration-300 group-hover/cs:translate-x-1">
                  →
                </span>
              </Link>
            </div>

            {/* Center Column */}
            <div className="w-full lg:w-[40%] flex items-center justify-center">
              <div className="w-full max-w-[380px] h-[320px] bg-[#11141F] border border-white/10 rounded-2xl relative shadow-[0_4px_30px_rgba(147,144,249,0.1)] flex flex-col justify-between p-6 overflow-hidden group">

                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#4177fd]/10 to-transparent rounded-full pointer-events-none" />

                {/* Visa Card Mockup */}
                <div className="w-full h-[140px] bg-gradient-to-tr from-[#9390f9] to-[#4177fd] rounded-xl p-4 flex flex-col justify-between text-[#0b0c10] relative shadow-lg group-hover:scale-[1.02] transition-transform duration-500">

                  <div className="flex justify-between items-start">
                    <span className="text-xs font-bold tracking-widest uppercase font-mono">
                      LUMONIX CARD
                    </span>
                    <span className="text-lg italic font-bold">VISA</span>
                  </div>

                  <div className="flex flex-col gap-1">
                    <span className="text-[10px] tracking-wider opacity-80">
                      CARD NUMBER
                    </span>
                    <span className="text-sm font-semibold tracking-[0.2em] font-mono">
                      •••• •••• •••• 8430
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-end">
                  <div className="flex flex-col gap-1 text-left">
                    <span className="text-[10px] text-neutral-400">
                      TOTAL BALANCE
                    </span>
                    <span className="text-lg font-bold font-mono text-white">
                      $28,450.00
                    </span>
                  </div>

                  <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 10l7-7m0 0l7 7m-7-7v18"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full lg:w-[30%] flex flex-col gap-6 text-left">

              {[
                {
                  label: "Problem",
                  desc: "The legacy fintech platform suffered from high churn due to a fragmented user experience.",
                },
                {
                  label: "Solution",
                  desc: "We engineered a clean, modern dashboard featuring intuitive transaction tracking, real-time balance analytics, and a simplified payment flow.",
                },
                {
                  label: "Design Process",
                  desc: "Through exhaustive user interviews and interactive prototyping, we optimized the information architecture to decrease task completion times by 40%.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start group">

                  {/* Number */}
                  <div className="w-10 h-10 rounded-full bg-[#11141f] border border-white/5 group-hover:border-[#9390f9]/30 flex items-center justify-center text-[#9390f9] text-xs font-bold font-mono shrink-0 transition-colors duration-300 shadow-inner">
                    {idx + 1}
                  </div>

                  {/* Content */}
                  <div className="flex flex-col">
                    <h4 className="text-lg font-semibold text-white font-[family-name:var(--font-poppins)] mb-1">
                      {item.label}
                    </h4>

                    <p className="text-sm text-[#9f9f9f] leading-relaxed font-[family-name:var(--font-inter)] font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section >
      {/* Tech Stack Marquee Section */}
      < section id="tech-stack" className="w-full bg-[#08090e] py-16 border-b border-white/5 relative overflow-hidden" >
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold text-white tracking-tight font-[family-name:var(--font-poppins)]">
            Technologies We Engineer
          </h2>
        </div>

        {/* Marquee Wrapper */}
        <div className="w-full overflow-hidden relative select-none">
          {/* Fading Mask Overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-[100px] bg-gradient-to-r from-[#08090e] to-transparent z-10 pointer-events-none"></div>
          <div className="absolute right-0 top-0 bottom-0 w-[100px] bg-gradient-to-l from-[#08090e] to-transparent z-10 pointer-events-none"></div>

          <div className="flex w-max items-center gap-6 animate-marquee py-4">
            {/* Tech Stack items - Double for infinite loop */}
            {[...techStack, ...techStack, ...techStack].map((tech, idx) => (
              <div
                key={idx}
                className="bg-[#050508] border border-white/5 w-[160px] h-[160px] rounded-2xl flex flex-col items-center justify-center gap-4 hover:border-[#9390f9]/30 hover:shadow-[0_0_15px_rgba(147,144,249,0.1)] transition-all duration-300 hover:-translate-y-1 shadow-md shrink-0 group"
              >
                <div className="w-16 h-16 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform duration-300">
                  {tech.svg}
                </div>
                <span className="text-xs font-semibold text-[#bbb2b2] group-hover:text-white transition-colors duration-200 font-[family-name:var(--font-poppins)]">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section >

      {/* Testimonials Vertical Marquee Wall Section */}
      < section className="w-full bg-[#08090e] py-24 pb-0 relative overflow-hidden" >
        {/* Top/Bottom Gradient Fading Mask */}
        < div className="absolute top-0 inset-x-0 h-[100px] bg-gradient-to-b from-[#08090e] to-transparent z-10 pointer-events-none" ></div >
        <div className="absolute bottom-0 inset-x-0 h-[100px] bg-gradient-to-t from-[#08090e] to-transparent z-10 pointer-events-none"></div>

        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 text-center mb-16 relative z-20">
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight font-[family-name:var(--font-poppins)] mb-4">
            Client Testimonials
          </h2>
          <p className="text-sm sm:text-base text-neutral-400 font-light max-w-[600px] mx-auto leading-relaxed">
            Discover what our clients have to say about working with Lumonix.
          </p>
        </div>

        {/* 5-Column Vertical Marquee Grid */}
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 h-[640px] relative overflow-hidden select-none z-20">

          {/* TOP FADE */}
          <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-black to-transparent z-20 pointer-events-none" />

          {/* BOTTOM FADE */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" />

          {/* MAIN BACKGROUND (optional subtle glow) */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%)]" />

          {/* CONTENT */}
          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 h-full">

            {/* Column 1 */}
            <div className="relative h-full overflow-hidden w-full">
              <div className="flex flex-col gap-6 pb-6 animate-marquee-vertical items-center">
                {testimonialsList.map((t, idx) => (
                  <TestimonialCard key={`c1-${idx}`} {...t} />
                ))}
                {testimonialsList.map((t, idx) => (
                  <TestimonialCard key={`c1-dup-${idx}`} {...t} aria-hidden="true" />
                ))}
              </div>
            </div>

            {/* Column 2 */}
            <div className="relative h-full overflow-hidden w-full hidden sm:block">
              <div className="flex flex-col gap-6 pb-6 animate-marquee-vertical-reverse items-center">
                {testimonialsList.slice().reverse().map((t, idx) => (
                  <TestimonialCard key={`c2-${idx}`} {...t} />
                ))}
                {testimonialsList.slice().reverse().map((t, idx) => (
                  <TestimonialCard key={`c2-dup-${idx}`} {...t} aria-hidden="true" />
                ))}
              </div>
            </div>

            {/* Column 3 */}
            <div className="relative h-full overflow-hidden w-full hidden md:block">
              <div className="flex flex-col gap-6 pb-6 animate-marquee-vertical items-center">
                {testimonialsList.slice(2).concat(testimonialsList.slice(0, 2)).map((t, idx) => (
                  <TestimonialCard key={`c3-${idx}`} {...t} />
                ))}
                {testimonialsList.slice(2).concat(testimonialsList.slice(0, 2)).map((t, idx) => (
                  <TestimonialCard key={`c3-dup-${idx}`} {...t} aria-hidden="true" />
                ))}
              </div>
            </div>

            {/* Column 4 */}
            <div className="relative h-full overflow-hidden w-full hidden lg:block">
              <div className="flex flex-col gap-6 pb-6 animate-marquee-vertical-reverse items-center">
                {testimonialsList.slice(4).concat(testimonialsList.slice(0, 4)).map((t, idx) => (
                  <TestimonialCard key={`c4-${idx}`} {...t} />
                ))}
                {testimonialsList.slice(4).concat(testimonialsList.slice(0, 4)).map((t, idx) => (
                  <TestimonialCard key={`c4-dup-${idx}`} {...t} aria-hidden="true" />
                ))}
              </div>
            </div>

            {/* Column 5 */}
            <div className="relative h-full overflow-hidden w-full hidden lg:block">
              <div className="flex flex-col gap-6 pb-6 animate-marquee-vertical items-center">
                {testimonialsList.slice(1).concat(testimonialsList.slice(0, 1)).map((t, idx) => (
                  <TestimonialCard key={`c5-${idx}`} {...t} />
                ))}
                {testimonialsList.slice(1).concat(testimonialsList.slice(0, 1)).map((t, idx) => (
                  <TestimonialCard key={`c5-dup-${idx}`} {...t} aria-hidden="true" />
                ))}
              </div>
            </div>

          </div>
        </div>
      </section >

      {/* Stats Section */}
      <section className="w-full bg-[#020203] py-16 relative overflow-hidden border-b border-white/5">
        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 z-20 relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {statsList.map((stat, idx) => (
              <div
                key={idx}
                className="flex items-center gap-7 bg-[#08090e] rounded-lg p-[14px] h-[114px] w-full max-w-[290px] mx-auto border border-white/5 shadow-[0_0_4px_rgba(255,255,255,0.25)] hover:border-[#9390f9]/30 transition-all duration-300 group"
              >
                {/* Glowing Circle */}
                <div className="w-[86px] h-[86px] rounded-full bg-[#08090e] shadow-[inset_0_0_9.1px_#9390f9] flex-shrink-0 transition-shadow duration-300 group-hover:shadow-[inset_0_0_15px_#9390f9] flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#9390f9]/30 group-hover:bg-[#9390f9] transition-colors duration-300"></div>
                </div>
                {/* Stats Texts */}
                <div className="flex flex-col justify-center text-left">
                  <span className="text-4xl font-medium text-white font-[family-name:var(--font-inter)] leading-none mb-1 group-hover:text-[#9390f9] transition-colors duration-300">
                    {stat.value}
                  </span>
                  <span className="text-[12px] text-[#bbb6b6] font-[family-name:var(--font-inter)] tracking-wide leading-tight">
                    {stat.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Start CTA Section */}
      <section className="w-full bg-[#04060c] py-20 relative overflow-hidden border-b border-white/5 flex items-center justify-center text-center">
        {/* Subtle Background Glows */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] bg-[#9390f9]/5 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="w-full max-w-[1280px] mx-auto px-4 md:px-10 z-20 relative flex flex-col items-center gap-10">
          <div className="flex flex-col gap-4 max-w-[859px]">
            <h2 className="text-3xl sm:text-5xl lg:text-[48px] font-semibold text-white tracking-tight font-[family-name:var(--font-poppins)] leading-tight">
              Ready to Start Your <span className="text-[#9390f9]">Next Project?</span>
            </h2>
            <p className="text-sm sm:text-lg lg:text-[20px] text-[#b2b2b2] font-light max-w-[750px] mx-auto leading-relaxed font-[family-name:var(--font-inter)]">
              Tell us about your project and we&apos;ll get back within one business day.
            </p>
          </div>

          <Link
            href="/contact"
            className="group/btn inline-flex items-center justify-center w-[270px] h-[60px] rounded-full bg-[#9390f9] hover:bg-[#827ef5] text-[#0b0c10] font-[family-name:var(--font-inter)] font-normal text-lg sm:text-[24px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-lg"
          >
            Start Your Project
            <span className="ml-2 transform transition-transform duration-300 group-hover/btn:translate-x-1">
              →
            </span>
          </Link>
        </div>
      </section>

      {/* Footer component */}
      < Footer />
    </div >
  );
}

// Testimonial Card Component (Dark style to match page style)
function TestimonialCard({ name, role, content, date, initials, gradient }) {
  return (
    <div className="w-full max-w-[249px] h-[314px] bg-[#0b0c10] rounded-[6px] p-5 shadow-[0_4px_20px_rgba(255,255,255,0.01)] border border-white/5 flex flex-col shrink-0 group hover:border-[#9390f9]/30 transition-colors duration-300">
      <div className="flex flex-col items-center text-center h-full">
        {/* Avatar circle (78x78px) */}
        <div className={`w-[78px] h-[78px] rounded-full bg-gradient-to-tr ${gradient} flex items-center justify-center text-white font-semibold text-xl mb-[10px] shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] shrink-0`}>
          {initials}
        </div>

        {/* Client Name */}
        <span className="text-[15px] font-semibold text-white mb-[10px] font-[family-name:var(--font-poppins)] leading-none group-hover:text-[#9390f9] transition-colors">
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
        <p className="text-[12px] text-neutral-400 leading-relaxed text-left h-[90px] mb-[20px] font-normal font-[family-name:var(--font-poppins)] overflow-hidden line-clamp-5">
          {content}
        </p>

        {/* Date */}
        <span className="text-[12px] text-neutral-600 text-right w-full font-[family-name:var(--font-inter)] mt-auto block">
          {date}
        </span>
      </div>
    </div>
  );
}
