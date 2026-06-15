"use client";

import { useState, useEffect } from "react";
import Footer from "./Footer";
import Image from "next/image";
import contact from "../../public/contact.png"
export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "", // BRAND, WEBSITE, PRODUCT, APP, OTHER
    message: "",
  });

  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Time State for Clock in bottom (matching design local time if needed, though footer has it)
  const [timeString, setTimeString] = useState("01:25 PM");

  useEffect(() => {
    const updateTime = () => {
      const options = {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      };
      try {
        const formatter = new Intl.DateTimeFormat("en-US", options);
        setTimeString(formatter.format(new Date()));
      } catch (e) {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, "0");
        const ampm = hours >= 12 ? "PM" : "AM";
        hours = hours % 12;
        hours = hours ? hours : 12;
        setTimeString(`${String(hours).padStart(2, "0")}:${minutes} ${ampm}`);
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  // Handlers
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (formErrors[name]) {
      setFormErrors((prev) => ({ ...prev, [name]: null }));
    }
  };

  const handlePillSelect = (type) => {
    setFormData((prev) => ({ ...prev, projectType: type }));
    if (formErrors.projectType) {
      setFormErrors((prev) => ({ ...prev, projectType: null }));
    }
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email address is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }
    if (!formData.projectType) errors.projectType = "Please select a project type";
    if (!formData.message.trim()) errors.message = "Please enter a message";
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    // Simulate premium API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        projectType: "",
        message: "",
      });
      // Clear success alert after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false);
      }, 5000);
    }, 2000);
  };

  const projectTypes = ["BRAND", "WEBSITE", "PRODUCT", "APP", "OTHER"];

  return (
    <div className="flex flex-col min-h-screen bg-[#0b0c10] text-white">
      {/* Hero Section */}
      <section className="relative w-full min-h-[567px] flex items-center justify-center overflow-hidden px-6 lg:px-[60px] py-16 md:py-24 bg-[#0b0c10] border-b border-white/5">
        {/* Tech Grid & Glow Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]"></div>
          {/* Glowing spheres */}
          <div className="absolute top-[10%] left-[25%] w-[500px] h-[500px] bg-[#9390f9]/8 rounded-full blur-[140px] animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto text-center flex flex-col items-center">
          {/* Heading (Feel free to get in touch) */}
          <h1 className="text-[40px] sm:text-[60px] lg:text-[76px] font-semibold text-white tracking-tight leading-[1.15] mb-6 font-[family-name:var(--font-poppins)] max-w-[1030px]">
            Feel free to get <br className="sm:hidden" />
            <span className="text-[#9390f9]">in touch</span>
          </h1>

          {/* Description */}
          <p className="text-lg sm:text-[22px] lg:text-2xl text-[#bbb2b2] leading-relaxed max-w-[1030px] font-[family-name:var(--font-inter)] font-normal">
            With over 20 years of experience, we can deliver great results for your
            online business without additional costs or commitments.
          </p>
        </div>
      </section>

      {/* Main Section: Contact Info & Form */}
      <section className="relative w-full bg-[#0b0c10] py-20 lg:py-28 overflow-hidden border-b border-white/5">
        {/* Tech Grid Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4.5rem_4.5rem]"></div>
          <div className="absolute bottom-[10%] right-[15%] w-[400px] h-[400px] bg-[#635cff]/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 w-full max-w-[1280px] mx-auto px-4 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

          {/* Left Column: Contact Details (Frame 550) */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-12 lg:sticky lg:top-[120px]">
            {/* Info Badge (Frame 437) */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shrink-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#635cff] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#635cff]"></span>
              </span>
              <span className="text-[12px] font-semibold uppercase tracking-wider text-[#bbb2b2] font-[family-name:var(--font-poppins)]">
                Get in touch
              </span>
            </div>

            {/* Main Ambition Title (Frame 498) */}
            <h2 className="text-[36px] sm:text-[48px] lg:text-[64px] font-semibold text-white tracking-tight leading-[1.15] font-[family-name:var(--font-poppins)] max-w-[593px]">
              Tell us about your <br />
              <span className="text-[#9390f9]">ambition.</span>
            </h2>

            {/* Description (Frame 549) */}
            <p className="text-base sm:text-lg lg:text-xl text-[#bbb2b2] leading-relaxed max-w-[593px] font-[family-name:var(--font-inter)] font-light">
              Whether you&apos;re starting from scratch or refining an icon, we partner with
              brands that value craft and long-term vision.
            </p>

            {/* Contact Cards (Frame 548) */}
            <div className="flex flex-col gap-10 mt-6">
              {/* Card 1: New Business */}
              <div className="flex flex-col gap-2">
                <span className="text-[14px] font-normal uppercase tracking-[1.82px] text-[#bbb2b2] font-[family-name:var(--font-geist-mono)]">
                  New business
                </span>
                <a
                  href="mailto:hello@lumoonix.com"
                  className="text-lg sm:text-[20px] font-medium text-white hover:text-[#9390f9] transition-colors duration-200 font-[family-name:var(--font-poppins)] underline decoration-white/20 underline-offset-4"
                >
                  hello@lumoonix.com
                </a>
              </div>

              {/* Card 2: Visit us */}
              <div className="flex flex-col gap-2">
                <span className="text-[14px] font-normal uppercase tracking-[1.82px] text-[#bbb2b2] font-[family-name:var(--font-geist-mono)]">
                  Visit us
                </span>
                <span className="text-lg sm:text-[20px] font-normal text-white font-[family-name:var(--font-inter)]">
                  brooklyn — ahmedabad
                </span>
              </div>

              {/* Card 3: Reply window */}
              <div className="flex flex-col gap-2">
                <span className="text-[14px] font-normal uppercase tracking-[1.82px] text-[#bbb2b2] font-[family-name:var(--font-geist-mono)]">
                  Reply window
                </span>
                <span className="text-lg sm:text-[20px] font-normal text-white font-[family-name:var(--font-inter)]">
                  within ~24 hours
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (Frame 563) */}
          <div className="lg:col-span-5 w-full ps-8 pe-8 sm:p-10 pt-0 pb-0   relative group/form">
            {/* <div className="lg:col-span-5 w-full bg-[#111218]/20 border border-white/5 p-8 sm:p-10 rounded-3xl backdrop-blur-sm relative group/form shadow-2xl"> */}
            <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#9390f9]/0 to-transparent group-hover/form:via-[#9390f9]/20 transition-all duration-300"></div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-8">
              {/* Field 1: Name */}
              <div className="flex flex-col gap-3 relative">
                <label
                  htmlFor="name"
                  className="text-[12px] font-medium uppercase tracking-[1.82px] text-[#bbb2b2] font-[family-name:var(--font-geist-mono)]"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Jane doe"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-lg font-normal text-white focus:border-[#9390f9] focus:outline-none transition-colors duration-200 placeholder-white/20 font-[family-name:var(--font-inter)]"
                />
                {formErrors.name && (
                  <span className="text-xs text-rose-500 mt-1 font-[family-name:var(--font-inter)]">
                    {formErrors.name}
                  </span>
                )}
              </div>

              {/* Field 2: Email */}
              <div className="flex flex-col gap-3 relative">
                <label
                  htmlFor="email"
                  className="text-[12px] font-medium uppercase tracking-[1.82px] text-[#bbb2b2] font-[family-name:var(--font-geist-mono)]"
                >
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Jane@lumoonix.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-lg font-normal text-white focus:border-[#9390f9] focus:outline-none transition-colors duration-200 placeholder-white/20 font-[family-name:var(--font-inter)]"
                />
                {formErrors.email && (
                  <span className="text-xs text-rose-500 mt-1 font-[family-name:var(--font-inter)]">
                    {formErrors.email}
                  </span>
                )}
              </div>

              {/* Field 3: Project Type (Pills) */}
              <div className="flex flex-col gap-4">
                <span className="text-[12px] font-medium uppercase tracking-[1.82px] text-[#bbb2b2] font-[family-name:var(--font-geist-mono)]">
                  Project Type
                </span>
                <div className="flex flex-wrap gap-3">
                  {projectTypes.map((type) => {
                    const isSelected = formData.projectType === type;
                    return (
                      <button
                        key={type}
                        type="button"
                        onClick={() => handlePillSelect(type)}
                        className={`px-5 py-2 rounded-full border text-xs font-semibold tracking-wider transition-all duration-300 font-[family-name:var(--font-poppins)] ${isSelected
                          ? "bg-[#9390f9] border-[#9390f9] text-[#0b0c10] shadow-[0_0_15px_rgba(147,144,249,0.3)] scale-[1.05]"
                          : "bg-transparent border-[#bbb2b2]/40 text-[#bbb2b2] hover:border-[#bbb2b2] hover:text-white"
                          }`}
                      >
                        {type}
                      </button>
                    );
                  })}
                </div>
                {formErrors.projectType && (
                  <span className="text-xs text-rose-500 mt-1 font-[family-name:var(--font-inter)]">
                    {formErrors.projectType}
                  </span>
                )}
              </div>

              {/* Field 4: Message */}
              <div className="flex flex-col gap-3 relative">
                <label
                  htmlFor="message"
                  className="text-[12px] font-medium uppercase tracking-[1.82px] text-[#bbb2b2] font-[family-name:var(--font-geist-mono)]"
                >
                  What&apos;s on your mind?
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows="3"
                  placeholder="Timeline, budget, the vision..."
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-white/10 py-3 text-lg font-normal text-white focus:border-[#9390f9] focus:outline-none transition-colors duration-200 placeholder-white/20 resize-none font-[family-name:var(--font-inter)]"
                />
                {formErrors.message && (
                  <span className="text-xs text-rose-500 mt-1 font-[family-name:var(--font-inter)]">
                    {formErrors.message}
                  </span>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full h-[60px] border border-[#bbb2b2] hover:border-white text-white font-[family-name:var(--font-geist-mono)] text-sm tracking-[2.8px] uppercase relative overflow-hidden flex items-center justify-center transition-all duration-300 hover:bg-white hover:text-[#0b0c10] active:scale-[0.99] disabled:opacity-50 mt-4 group/submit"
              >
                {isSubmitting ? (
                  <span className="flex items-center gap-2 text-xs">
                    <svg
                      className="animate-spin h-4 w-4 text-white group-hover/submit:text-[#0b0c10]"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      />
                    </svg>
                    Sending...
                  </span>
                ) : (
                  "Send inquiry →"
                )}
              </button>
            </form>

            {/* Success Alert Overlay */}
            {submitSuccess && (
              <div className="absolute inset-0 bg-[#0b0c10]/95 backdrop-blur-sm rounded-3xl flex flex-col items-center justify-center p-8 text-center animate-fade-in z-20">
                <div className="w-16 h-16 rounded-full bg-[#9390f9]/10 border border-[#9390f9]/30 flex items-center justify-center mb-6 shadow-[0_0_20px_rgba(147,144,249,0.15)]">
                  <svg
                    className="w-8 h-8 text-[#9390f9]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-2xl font-semibold text-white mb-2 font-[family-name:var(--font-poppins)]">
                  Inquiry Sent!
                </h3>
                <p className="text-sm text-[#bbb2b2] max-w-[280px] font-[family-name:var(--font-inter)] leading-relaxed">
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Bottom CTA Section: Let's Talk */}
      <section className="relative w-full bg-[#0b0c10] py-24 overflow-hidden border-b border-white/5">
        {/* Subtle Tech Grid overlay and glowing light source */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_2.75rem] opacity-35"></div>
          <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[500px] h-[300px] bg-[#9390f9]/6 rounded-full blur-[100px] animate-pulse-slow"></div>
        </div>

        <div className="relative z-10 w-full max-w-[859px] mx-auto text-center flex flex-col items-center gap-8">

          {/* Badge: We Ready 24 Hours */}
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#635cff] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#635cff]"></span>
            </span>
            <span className="text-[12px] font-semibold uppercase tracking-wider text-[#bbb2b2] font-[family-name:var(--font-poppins)]">
              We Ready 24 Hours
            </span>
          </div>

          <div className="flex flex-col gap-4">
            <h2 className="text-3xl sm:text-[44px] sm:leading-[54px] lg:text-[48px] font-semibold text-white tracking-tight font-[family-name:var(--font-poppins)] max-w-[800px]">
              Have a project in mind?
              <span className="text-[#9390f9]"> Let&apos;s Talk</span>
            </h2>
            <p className="text-base sm:text-lg text-[#bbb2b2] font-light font-[family-name:var(--font-inter)] tracking-wide max-w-[650px] leading-relaxed mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>

          {/* Premium Call Button (Frame 839) */}
          <a
            href="tel:+9112345678909"
            className="group/cta inline-flex items-center justify-evenly pl-0 pr-0 w-[277px] h-[60px] rounded-full bg-[#9390f9] hover:bg-[#827ef5] text-[#0b0c10] font-[family-name:var(--font-inter)] font-semibold text-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] shadow-[0_0_30px_rgba(147,144,249,0.3)] hover:shadow-[0_0_40px_rgba(147,144,249,0.4)]"
          >
            <span>+91 12345678909</span>
            {/* Phone Icon Circle (Frame 837) */}
            <div className="w-[44px] h-[44px] rounded-full bg-white flex items-center justify-center shadow-md shrink-0 transition-transform duration-300 group-hover/cta:rotate-12 group-hover/cta:scale-105">

              <Image src={contact} alt="" width={24} height={24} className="text-[#0b0c10] transition-colors duration-200" />
            </div>
          </a>
        </div>
      </section>

      {/* Footer component */}
      <Footer />
    </div>
  );
}
