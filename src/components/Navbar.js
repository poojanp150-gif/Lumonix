"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/logo.png";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isActive = (path) => pathname === path;

    // Add scroll listener to make the glassmorphism effect look even more premium when scrolling
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    // backdrop-blur-md
    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 p-5 xl:p-0 transition-all duration-300 ${isScrolled
                ? "bg-[#0b0c10]/90 lg:backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.1)] border-b border-white/5 h-[72px]"
                : "bg-[#0b0c10] shadow-[0_2px_4px_rgba(55,55,55,0.25)] h-[78px]"
                } flex items-center`}
        >
            <div className="w-full max-w-[1280px] mx-auto flex items-center justify-between">
                {/* Left Section: Logo & Nav Links */}
                <div className="flex items-center gap-12 lg:gap-24">
                    {/* Logo (Frame 861) */}
                    <Link href="/" className="flex items-center group">
                        {/* SVG Logo Symbol matching Group 165 geometry */}
                        <span className="text-xl font-bold tracking-wider text-[#e7e0e0] ml-3 font-[family-name:var(--font-poppins)] transition-colors duration-300 group-hover:text-white">
                            <Image src={logo} alt="logo" width={150} height={150} />

                        </span>
                    </Link>

                    {/* Navigation Links - Desktop (Frame 617) */}
                    <nav className="hidden md:flex items-center gap-8 font-[family-name:var(--font-inter)] text-[16px]">
                        <Link
                            href="/"
                            className={`transition-colors duration-200 font-medium relative py-2 ${isActive("/") ? "text-white" : "text-[#7c7c7c] hover:text-white"
                                }`}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={`transition-colors duration-200 font-medium relative py-2 ${isActive("/about") ? "text-white" : "text-[#7c7c7c] hover:text-white"
                                }`}
                        >
                            About us

                        </Link>
                        <Link
                            href="/services"
                            className={`transition-colors duration-200 font-medium relative py-2 ${isActive("/services") ? "text-white" : "text-[#7c7c7c] hover:text-white"
                                }`}
                        >
                            Services

                        </Link>

                        <Link
                            href="/work"
                            className={`transition-colors duration-200 font-medium relative py-2 ${isActive("/work") ? "text-white" : "text-[#7c7c7c] hover:text-white"
                                }`}
                        >
                            Work

                        </Link>
                        <Link
                            href="/contact"
                            className={`transition-colors duration-200 font-medium relative py-2 ${isActive("/contact") ? "text-white" : "text-[#7c7c7c] hover:text-white"
                                }`}
                        >
                            Contact

                        </Link>
                    </nav>
                </div>

                {/* Right Section: Call to Action Button */}
                <div className="hidden md:block">
                    <Link
                        href="/contact"
                        className="inline-flex items-center justify-center w-[153px] h-[48px] rounded-[12px] bg-[#7f7f7f]/20 hover:bg-[#7f7f7f]/30 border border-white/10 hover:border-white/20 text-[#d4d4d4] hover:text-white font-[family-name:var(--font-inter)] text-[16px] font-medium transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_12px_rgba(0,0,0,0.1)] backdrop-blur-sm"
                    >
                        Get Started
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden flex items-center justify-center p-2 rounded-xl text-[#7c7c7c] hover:text-white hover:bg-white/5 focus:outline-none transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <svg
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        {isMobileMenuOpen ? (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        ) : (
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Drawer Menu */}
            <div
                className={`fixed inset-y-0 right-0 w-full max-w-sm bg-[#0b0c10] border-l border-white/10 p-6 z-50 shadow-[0_0_40px_rgba(0,0,0,0.6)] md:hidden transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between mb-8">
                    <span className="text-xl font-bold tracking-wider text-white">
                        Lumoonix
                    </span>
                    <button
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="p-2 rounded-xl text-[#7c7c7c] hover:text-white hover:bg-white/5 focus:outline-none"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                <nav className="flex flex-col gap-6 text-lg font-medium">
                    <Link
                        href="/"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`transition-colors duration-200 border-b border-white/5 pb-2 ${isActive("/") ? "text-white font-semibold" : "text-[#7c7c7c] hover:text-white"
                            }`}
                    >
                        Home
                    </Link>
                    <Link
                        href="/about"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`transition-colors duration-200 border-b border-white/5 pb-2 ${isActive("/about") ? "text-white font-semibold" : "text-[#7c7c7c] hover:text-white"
                            }`}
                    >
                        About us
                    </Link>
                    <Link
                        href="/services"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`transition-colors duration-200 border-b border-white/5 pb-2 ${isActive("/services") ? "text-white font-semibold" : "text-[#7c7c7c] hover:text-white"
                            }`}
                    >
                        Services

                    </Link>

                    <Link
                        href="/work"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`transition-colors duration-200 border-b border-white/5 pb-2 ${isActive("/work") ? "text-white font-semibold" : "text-[#7c7c7c] hover:text-white"
                            }`}
                    >
                        Work
                    </Link>
                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`transition-colors duration-200 border-b border-white/5 pb-2 ${isActive("/contact") ? "text-white font-semibold" : "text-[#7c7c7c] hover:text-white"
                            }`}
                    >
                        Contact
                    </Link>

                    <Link
                        href="/contact"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="mt-4 flex items-center justify-center w-full h-[48px] rounded-[12px] bg-[#7f7f7f]/20 hover:bg-[#7f7f7f]/30 border border-white/10 text-white font-medium transition-colors"
                    >
                        Get Started
                    </Link>
                </nav>
            </div>
        </header>
    );
}
