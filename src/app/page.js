import Link from "next/link";
import Image from "next/image";
import smalllogo from "../../public/smalllogo.png"
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

        <div className="relative z-10 w-full max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Heading, Subtitle, CTAs, Metrics (Frame 870) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Main Title Heading (Frame 396) */}
            <h1 className="text-[42px] sm:text-[56px] lg:text-[68px] xl:text-[76px] font-semibold text-white tracking-tight leading-[1.15] mb-6 font-[family-name:var(--font-poppins)]">
              Engineering the <br />
              <span className="text-[#9390f9] drop-shadow-[0_0_35px_rgba(147,144,249,0.35)]">
                midnight magic
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

          {/* Right Column: Concentric Circles & Floating Badges Graphic (Group 123) */}
          <div className="lg:col-span-5 flex items-center justify-center">
            <div className="relative w-full max-w-[433px] aspect-square flex items-center justify-center select-none">

              {/* Concentric Circles */}
              {/* Outer Ring (Ellipse 81) */}
              <div className="absolute w-[400px] h-[400px] border border-[#9390f9]/15 rounded-full flex items-center justify-center animate-spin-slow">
                {/* Decorative dotted layout nodes */}
                <div className="absolute top-0 w-1.5 h-1.5 rounded-full bg-[#9390f9]/60"></div>
                <div className="absolute bottom-0 w-1.5 h-1.5 rounded-full bg-[#9390f9]/60"></div>
              </div>

              {/* Middle Ring (Ellipse 82) */}
              <div className="absolute w-[343px] h-[343px] border border-[#9390f9]/25 rounded-full"></div>

              {/* Inner Ring (Ellipse 83) */}
              <div className="absolute w-[280px] h-[280px] border border-[#9390f9]/35 rounded-full"></div>

              {/* Center Circular Glassmorphic Logo Card (Rectangle 299) */}
              <div className="absolute w-[122px] h-[122px] bg-[#8d85f7]/5 backdrop-blur-md rounded-full border border-white/10 shadow-[inset_0_0_20px_rgba(143,137,255,0.25)] flex items-center justify-center z-10 animate-pulse-slow">
                {/* SVG Logo Symbol */}
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

              {/* Floating Glassmorphic Badges */}
              {/* Top-Left Code Badge (Frame 413) */}
              <div className="absolute left-[24%] top-[10%] w-[34px] h-[34px] bg-[#5d5d5d]/25 border border-white/10 rounded-lg backdrop-blur-md flex items-center justify-center shadow-lg animate-float-slow">
                <svg className="w-[16px] h-[16px] text-[#9390f9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                </svg>
              </div>

              {/* Top-Right Checklist Badge (Frame 412) */}
              <div className="absolute right-[22%] top-[24%] w-[34px] h-[34px] bg-[#5d5d5d]/25 border border-white/10 rounded-lg backdrop-blur-md flex items-center justify-center shadow-lg animate-float-medium">
                <svg className="w-[17px] h-[17px] text-[#9390f9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
                </svg>
              </div>

              {/* Mid-Left "NOW SHIPPING" Card (Rectangle 310) */}
              <div className="absolute left-[0%] top-[40%] bg-[#111218]/90 border border-white/10 px-4 py-2.5 rounded-xl backdrop-blur-md shadow-2xl flex items-center gap-2.5 animate-float-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-[10px] tracking-[0.12em] font-semibold text-white uppercase font-[family-name:var(--font-inter)]">
                  NOW SHIPPING
                </span>
              </div>

              {/* Mid-Left Layout/File Badge (Frame 409) */}
              <div className="absolute left-[20%] top-[28%] w-[34px] h-[34px] bg-[#5d5d5d]/25 border border-white/10 rounded-lg backdrop-blur-md flex items-center justify-center shadow-lg animate-float-slow">
                <svg className="w-[16px] h-[16px] text-[#9390f9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h3a1 1 0 011 1v6a1 1 0 01-1 1h-3a1 1 0 01-1-1v-6z" />
                </svg>
              </div>

              {/* Mid-Right Trend Badge (Frame 411) */}
              <div className="absolute right-[22%] top-[56%] w-[34px] h-[34px] bg-[#5d5d5d]/25 border border-white/10 rounded-lg backdrop-blur-md flex items-center justify-center shadow-lg animate-float-fast">
                <svg className="w-[17px] h-[17px] text-[#9390f9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>

              {/* Bottom-Left DB Badge (Frame 410) */}
              <div className="absolute left-[22%] bottom-[20%] w-[34px] h-[34px] bg-[#5d5d5d]/25 border border-white/10 rounded-lg backdrop-blur-md flex items-center justify-center shadow-lg animate-float-fast">
                <svg className="w-[16px] h-[16px] text-[#9390f9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m-16 5c0 2.21 3.58 4 8 4s8-1.79 8-4" />
                </svg>
              </div>

              {/* Bottom-Right "UPTIME 99.99%" Card (Rectangle 309) */}
              <div className="absolute right-[2%] top-[40%] bg-[#111218]/90 border border-white/10 px-4 py-2.5 rounded-xl backdrop-blur-md shadow-2xl flex flex-col items-center justify-center animate-float-slow">
                <span className="text-[10px] tracking-[0.12em] font-semibold text-[#9f9f9f] uppercase font-[family-name:var(--font-inter)]">
                  UPTIME
                </span>
                <span className="text-sm font-bold text-white mt-1 font-[family-name:var(--font-inter)]">
                  99.99%
                </span>
              </div>

              {/* Bottom-Center Shield/Check Badge (Frame 414) */}
              <div className="absolute right-[44%] bottom-[10%] w-[34px] h-[34px] bg-[#5d5d5d]/25 border border-white/10 rounded-lg backdrop-blur-md flex items-center justify-center shadow-lg animate-float-medium">
                <svg className="w-[16px] h-[16px] text-[#9390f9]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>

            </div>
          </div>
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

      {/* About Us Section (Rectangle 281 / 363) */}
      <div className="w-full bg-white text-black lg:h-[793px] flex items-center justify-center overflow-hidden relative border-t border-neutral-100">
        <div className="w-full max-w-[1440px] h-full mx-auto px-6 lg:px-[60px] flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-0 relative z-10 py-16 lg:py-0">

          {/* Left Column: Metrics & Info (725px wide on desktop) */}
          <div className="w-full lg:w-[725px] flex flex-col items-start text-left lg:shrink-0">
            {/* About Us Badge Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#7f7f7f]/15 border border-neutral-200/50 mb-6">
              <span className="w-2 h-2 rounded-full bg-[#06007c]"></span>
              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#595858] font-[family-name:var(--font-poppins)]">
                ABOUT US
              </span>
            </div>

            {/* Heading (64px desktop size) */}
            <h2 className="text-[40px] sm:text-[52px] lg:text-[64px] lg:leading-[90px] font-semibold text-black tracking-tight mb-6 font-[family-name:var(--font-poppins)]">
              Numbers that tell <br />
              <span className="text-[#06007c]">our story</span>
            </h2>

            {/* Description (24px desktop size) */}
            <p className="text-lg lg:text-[24px] lg:leading-[36px] text-[#595858] max-w-[680px] mb-12 font-[family-name:var(--font-inter)] font-normal">
              Lumonix transforms bold ideas into stunning websites, apps, and brands that captivate audiences and drive growth.
            </p>

            {/* Metrics Grid (25px gaps) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[25px] w-full lg:w-[725px]">
              {/* Card 1: TRUST */}
              <div className="w-full lg:w-[350px] h-[168px] bg-[#fff9f9] rounded-[16px] p-5 shadow-[0_0_4px_rgba(0,0,0,0.25)] border border-neutral-100/50 flex items-center justify-between relative shrink-0">
                <div className="flex items-center gap-5">
                  {/* Accent colored block (85px wide, 128px high) */}
                  <div className="w-[85px] h-[128px] rounded-lg bg-gradient-to-b from-[#06007c] to-[#4177fd] flex-shrink-0"></div>

                  {/* Metric Value & Label */}
                  <div className="flex flex-col">
                    <span className="text-[32px] font-medium text-[#06007c] leading-none mb-2 font-[family-name:var(--font-poppins)]">
                      310+
                    </span>
                    <span className="text-sm font-normal text-[#595858] leading-snug font-[family-name:var(--font-poppins)]">
                      5-Star Clutch Reviews
                    </span>
                  </div>
                </div>

                {/* Top-Right Tag */}
                <div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-[#7f7f7f]/15 border border-neutral-200/50">
                  <span className="text-[10px] font-medium text-[#595858] font-[family-name:var(--font-poppins)]">
                    TRUST
                  </span>
                </div>
              </div>

              {/* Card 2: LEGACY */}
              <div className="w-full lg:w-[350px] h-[168px] bg-white rounded-[16px] p-5 shadow-[0_0_4px_rgba(0,0,0,0.25)] border border-neutral-100/50 flex items-center justify-between relative shrink-0">
                <div className="flex items-center gap-5">
                  <div className="w-[85px] h-[128px] rounded-lg bg-gradient-to-b from-[#9390f9] to-[#beb3ff] flex-shrink-0"></div>

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
                  <div className="w-[85px] h-[128px] rounded-lg bg-gradient-to-b from-[#4177fd] to-[#9390f9] flex-shrink-0"></div>

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
                  <div className="w-[85px] h-[128px] rounded-lg bg-gradient-to-b from-[#beb3ff] to-[#06007c] flex-shrink-0"></div>

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

          {/* Right Column: Infinite Scrolling Testimonials (558px wide on desktop) */}
          <div className="w-full lg:w-[558px] h-[640px] lg:h-[793px] relative overflow-hidden flex items-center justify-center lg:shrink-0 mt-8 lg:mt-0 select-none">
            {/* Top and Bottom Gradient Mask Overlay (Rectangle 363 fade) */}
            <div className="absolute inset-x-0 top-0 h-[82px] bg-gradient-to-b from-white to-transparent pointer-events-none z-20"></div>
            <div className="absolute inset-x-0 bottom-0 h-[82px] bg-gradient-to-t from-white to-transparent pointer-events-none z-20"></div>

            <div className="grid grid-cols-2 gap-5 h-full w-full">
              {/* Column 1 (Scrolls Up, 269px wide) */}
              <div className="relative h-full overflow-hidden w-[269px]">
                <div className="flex flex-col gap-10 pb-10 animate-marquee-vertical items-center">
                  {testimonialsCol1.map((t, idx) => (
                    <TestimonialCard key={`c1-${idx}`} {...t} />
                  ))}
                  {/* Duplicate for seamless infinite loop */}
                  {testimonialsCol1.map((t, idx) => (
                    <TestimonialCard key={`c1-dup-${idx}`} {...t} aria-hidden="true" />
                  ))}
                </div>
              </div>

              {/* Column 2 (Scrolls Down / Reverse, 269px wide) */}
              <div className="relative h-full overflow-hidden w-[269px]">
                <div className="flex flex-col gap-10 pb-10 animate-marquee-vertical-reverse items-center">
                  {testimonialsCol2.map((t, idx) => (
                    <TestimonialCard key={`c2-${idx}`} {...t} />
                  ))}
                  {/* Duplicate for seamless infinite loop */}
                  {testimonialsCol2.map((t, idx) => (
                    <TestimonialCard key={`c2-dup-${idx}`} {...t} aria-hidden="true" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
