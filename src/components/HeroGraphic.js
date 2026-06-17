import Image from "next/image";
import smalllogo from "../../public/smalllogo.png";
import lumonixlogo from "../../public/lumonixlogo.png";

export default function HeroGraphic() {
  return (
    <div className="lg:col-span-5 flex justify-center lg:justify-center items-center">
      <div className="relative w-full max-w-[433px] aspect-square flex items-center justify-center mx-auto">

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
          <div className="flex flex-col items-center justify-center">
            <span>
              <Image src={smalllogo} alt="logo" width={20} height={20} />
            </span>
            <span>
              <Image src={lumonixlogo} alt="logo" width={100} height={100} />
            </span>
          </div>
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
        <div className="absolute left-[-7%] sm:left-[0%] top-[40%] bg-[#111218]/90 border border-white/10 px-4 py-2.5 rounded-xl backdrop-blur-md shadow-2xl flex items-center gap-2.5 animate-float-medium">
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
        <div className="absolute right-[-6%] sm:right-[2%] top-[40%] bg-[#111218]/90 border border-white/10 px-4 py-2.5 rounded-xl backdrop-blur-md shadow-2xl flex flex-col items-center justify-center animate-float-slow">
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
  );
}
