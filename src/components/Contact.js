"use client";

import { useState } from "react";

export default function Contact() {
  const [activeProject, setActiveProject] = useState("Web App");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const projectTypes = [
    "Web App",
    "AI Engineering",
    "Cloud Native",
    "Cybersecurity",
    "Mobile App",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate API request
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", email: "", message: "" });
      // Reset success state after a few seconds
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#0b0c10] text-white relative overflow-hidden flex flex-col font-[family-name:var(--font-inter)]">
      {/* Decorative Grid & Glow Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]"></div>
        <div className="absolute top-[10%] right-[10%] w-[550px] h-[550px] bg-[#9390f9]/8 rounded-full blur-[140px] pointer-events-none"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[500px] h-[500px] bg-[#4177fd]/8 rounded-full blur-[150px] pointer-events-none"></div>
      </div>

      <div className="relative z-10 flex-grow w-full max-w-[1280px] mx-auto px-4 md:px-10 py-16 md:py-24">
        {/* Header */}
        <div className="max-w-[700px] mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9390f9] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9390f9]"></span>
            </span>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[#bbb2b2] font-[family-name:var(--font-poppins)]">
              COLLABORATION
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-white tracking-tight leading-[1.15] mb-6 font-[family-name:var(--font-poppins)]">
            Let's build the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#9390f9] to-[#beb3ff] drop-shadow-[0_0_35px_rgba(147,144,249,0.25)]">
              extraordinary
            </span>.
          </h1>

          <p className="text-lg text-[#9f9f9f] leading-relaxed max-w-[600px] font-light">
            Have an ambitious project, design challenge, or system architecture in mind? Drop us a line. We reply within 2 hours.
          </p>
        </div>

        {/* Form and Info Section Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Info & Visual Locator (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Contact Details Cards */}
            <div className="flex flex-col gap-6">
              {/* Card: Email */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#111218]/40 border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#9390f9] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[13px] tracking-wider uppercase font-semibold text-[#7c7c7c] font-[family-name:var(--font-poppins)] mb-1">
                    Direct Email
                  </h4>
                  <a href="mailto:hello@lumonix.io" className="text-white hover:text-[#9390f9] text-base transition-colors font-medium">
                    hello@lumonix.io
                  </a>
                </div>
              </div>

              {/* Card: Phone */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#111218]/40 border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#4177fd] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[13px] tracking-wider uppercase font-semibold text-[#7c7c7c] font-[family-name:var(--font-poppins)] mb-1">
                    Phone Inquiry
                  </h4>
                  <a href="tel:+15558392011" className="text-white hover:text-[#4177fd] text-base transition-colors font-medium">
                    +1 (555) 839-2011
                  </a>
                </div>
              </div>

              {/* Card: Headquarters */}
              <div className="flex items-start gap-4 p-5 rounded-2xl bg-[#111218]/40 border border-white/5 hover:border-white/10 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[#beb3ff] shrink-0">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-[13px] tracking-wider uppercase font-semibold text-[#7c7c7c] font-[family-name:var(--font-poppins)] mb-1">
                    Offices
                  </h4>
                  <p className="text-white text-base font-medium">
                    San Francisco, CA (HQ) <br />
                    London, UK
                  </p>
                </div>
              </div>
            </div>

            {/* Stylized Locator Map Graphic */}
            <div className="relative rounded-2xl border border-white/5 bg-[#111218]/30 h-[220px] w-full overflow-hidden flex items-center justify-center group shadow-inner">
              {/* Tech lines grid overlay inside map */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:2rem_2rem]"></div>
              
              {/* Concentric location waves */}
              <div className="absolute w-[160px] h-[160px] border border-[#9390f9]/10 rounded-full flex items-center justify-center animate-pulse-slow">
                <div className="absolute w-[110px] h-[110px] border border-[#9390f9]/20 rounded-full flex items-center justify-center">
                  <div className="absolute w-[60px] h-[60px] border border-[#9390f9]/30 rounded-full flex items-center justify-center">
                    <span className="relative flex h-4 w-4">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#9390f9] opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-4 w-4 bg-gradient-to-tr from-[#9390f9] to-[#beb3ff] shadow-[0_0_12px_rgba(147,144,249,0.6)]"></span>
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating Map Label Badge */}
              <div className="absolute bottom-5 bg-[#0b0c10]/90 border border-white/10 px-3.5 py-1.5 rounded-full backdrop-blur-md shadow-2xl flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                <span className="text-[10px] tracking-widest font-semibold text-[#e7e0e0] uppercase font-[family-name:var(--font-inter)]">
                  LUMONIX SF HQ
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl bg-[#111218]/60 backdrop-blur-md border border-white/10 p-8 shadow-2xl relative overflow-hidden">
              
              {/* Gradient border glows */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9390f9]/40 to-transparent"></div>
              
              {isSuccess ? (
                <div className="py-16 flex flex-col items-center text-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 animate-bounce">
                    <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white font-[family-name:var(--font-poppins)] mb-3">
                    Message Dispatched!
                  </h3>
                  <p className="text-[#9f9f9f] text-sm max-w-[340px] leading-relaxed">
                    Thank you for reaching out. We have logged your request and a project architect will follow up with you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                  
                  {/* Field: Project Category Pills */}
                  <div>
                    <span className="text-xs text-[#7c7c7c] tracking-widest uppercase font-semibold block mb-3 font-[family-name:var(--font-poppins)]">
                      Project Category
                    </span>
                    <div className="flex flex-wrap gap-2.5">
                      {projectTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setActiveProject(type)}
                          className={`px-4 py-2 rounded-full text-xs font-semibold font-[family-name:var(--font-poppins)] transition-all duration-300 ${
                            activeProject === type
                              ? "bg-gradient-to-r from-[#9390f9] to-[#beb3ff] text-[#0b0c10] shadow-[0_0_15px_rgba(147,144,249,0.3)] hover:brightness-105"
                              : "bg-white/5 border border-white/10 text-[#bbb2b2] hover:bg-white/10 hover:border-white/20"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Field: Full Name */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="text-xs text-[#7c7c7c] tracking-widest uppercase font-semibold mb-2 font-[family-name:var(--font-poppins)]">
                      Full Name
                    </label>
                    <input
                      required
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="e.g. Sarah Chen"
                      className="h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#9390f9] focus:ring-1 focus:ring-[#9390f9]/50 transition-all font-light"
                    />
                  </div>

                  {/* Field: Email */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="text-xs text-[#7c7c7c] tracking-widest uppercase font-semibold mb-2 font-[family-name:var(--font-poppins)]">
                      Email Address
                    </label>
                    <input
                      required
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="e.g. sarah@example.com"
                      className="h-12 px-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#9390f9] focus:ring-1 focus:ring-[#9390f9]/50 transition-all font-light"
                    />
                  </div>

                  {/* Field: Message */}
                  <div className="flex flex-col">
                    <label htmlFor="message" className="text-xs text-[#7c7c7c] tracking-widest uppercase font-semibold mb-2 font-[family-name:var(--font-poppins)]">
                      Tell us about your project
                    </label>
                    <textarea
                      required
                      rows={5}
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="What are we engineering?"
                      className="p-4 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/20 focus:outline-none focus:border-[#9390f9] focus:ring-1 focus:ring-[#9390f9]/50 transition-all font-light resize-none leading-relaxed"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group/btn h-14 mt-2 rounded-xl bg-white hover:bg-neutral-100 disabled:bg-neutral-600 disabled:cursor-not-allowed text-[#0b0c10] font-[family-name:var(--font-poppins)] font-medium text-base transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2.5 shadow-xl relative overflow-hidden"
                  >
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin h-5 w-5 text-[#0b0c10]" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Dispatching...</span>
                      </>
                    ) : (
                      <>
                        <span>Submit Inquiry</span>
                        <svg className="w-4 h-4 transform transition-transform duration-300 group-hover/btn:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </>
                    )}
                  </button>

                </form>
              )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
