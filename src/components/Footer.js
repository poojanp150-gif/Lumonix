"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";

export default function Footer() {
  const [timeString, setTimeString] = useState("01:25 PM");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "America/New_York", // Set to Eastern Time (Brooklyn) or dynamic
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };

      try {
        const formatter = new Intl.DateTimeFormat("en-US", options);
        setTimeString(formatter.format(new Date()));
      } catch (e) {
        // Fallback
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12; // the hour '0' should be '12'
        const hoursStr = String(hours).padStart(2, '0');
        setTimeString(`${hoursStr}:${minutes} ${ampm}`);
      }
    };

    updateTime();
    const timer = setInterval(updateTime, 1000 * 60); // Update every minute
    return () => clearInterval(timer);
  }, []);

  return (
    <footer className="w-full bg-[#04060c] text-white border-t border-white/5 relative overflow-hidden z-10">
      {/* Decorative Grid Lines Overlay (Subtle) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-30 pointer-events-none"></div>

      <div className="w-full max-w-[1280px] mx-auto px-4  py-10 relative z-10">
        {/* Top Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start mb-16">
          {/* Left Column: Slogan, Location and Logo */}
          <div className="lg:col-span-5 flex flex-col items-start gap-8">
            {/* Logo Group */}
            <div className="flex items-center gap-3">

              <Image
                src={logo}
                alt="Logo"
                width="auto"
                height="auto"
                className="object-contain rounded-full"
              />

            </div>

            {/* Slogan */}
            <p className="text-[#9f9f9f] text-[16px] leading-relaxed max-w-[355px] font-[family-name:var(--font-inter)] font-normal">
              Crafting premium digital identities for brands that dare to be different.
            </p>

            {/* Location Tag */}
            <span className="text-sm text-[#7c7c7c] font-[family-name:var(--font-inter)] font-medium">
              Est. 2026 · Brooklyn / AHMEDABAD
            </span>
          </div>

          {/* Right Columns: Links & Clock */}
          <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8 lg:gap-4 w-full">
            {/* Col 1: Studio */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] tracking-wider uppercase font-semibold text-[#7c7c7c] font-[family-name:var(--font-poppins)]">
                Studio
              </h4>
              <ul className="flex flex-col gap-2.5 text-[15px] font-[family-name:var(--font-inter)] font-medium text-[#9f9f9f]">
                <li><Link href="/work" className="hover:text-white transition-colors duration-200">Work</Link></li>
                <li><Link href="/about" className="hover:text-white transition-colors duration-200">About</Link></li>
                <li><Link href="/services#process" className="hover:text-white transition-colors duration-200">Process</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors duration-200">Journal</Link></li>
              </ul>
            </div>

            {/* Col 2: Services */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] tracking-wider uppercase font-semibold text-[#7c7c7c] font-[family-name:var(--font-poppins)]">
                Services
              </h4>
              <ul className="flex flex-col gap-2.5 text-[15px] font-[family-name:var(--font-inter)] font-medium text-[#9f9f9f]">
                <li><Link href="/services#brand" className="hover:text-white transition-colors duration-200">Brand</Link></li>
                <li><Link href="/services#web" className="hover:text-white transition-colors duration-200">Web</Link></li>
                <li><Link href="/services#product" className="hover:text-white transition-colors duration-200">Product</Link></li>
                <li><Link href="/services#motion" className="hover:text-white transition-colors duration-200">Motion</Link></li>
              </ul>
            </div>

            {/* Col 3: Social */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] tracking-wider uppercase font-semibold text-[#7c7c7c] font-[family-name:var(--font-poppins)]">
                Social
              </h4>
              <ul className="flex flex-col gap-2.5 text-[15px] font-[family-name:var(--font-inter)] font-medium text-[#9f9f9f]">
                <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Instagram</a></li>
                <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">LinkedIn</a></li>
                <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Twitter</a></li>
                <li><a href="https://behance.net" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">Behance</a></li>
              </ul>
            </div>

            {/* Col 4: Local Time Clock */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[13px] tracking-wider uppercase font-semibold text-[#7c7c7c] font-[family-name:var(--font-poppins)]">
                Local time
              </h4>
              <div className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white/5 border border-white/10 w-fit shrink-0">
                {/* Blinking indicator dot */}
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-sm font-semibold tracking-wider font-[family-name:var(--font-poppins)] text-white">
                  {timeString}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-white/5 mb-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#7c7c7c] font-[family-name:var(--font-inter)]">
          <span>
            &copy; {new Date().getFullYear()} Lumonix. All rights reserved.
          </span>
          <div className="flex items-center gap-6">
            <Link href="#" className="hover:text-white transition-colors duration-200">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors duration-200">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
