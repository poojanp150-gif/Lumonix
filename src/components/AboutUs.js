"use client";

import Image from "next/image";
import teamBg from "../../public/mainabout.png";

export default function AboutUs() {
    return (
        <div className="min-h-[calc(100vh-78px)] bg-[#0b0c10] text-white relative overflow-hidden flex flex-col items-center justify-center">
            <div className="absolute inset-0 z-0">
                <Image
                    src={teamBg}
                    alt="Lumonix Team Meeting"
                    fill
                    priority
                    placeholder="blur"
                    className="object-cover opacity-20 filter brightness-[0.4] contrast-[1.1]"
                />


            </div>
            <div className="z-10 w-full max-w-[950px] mx-auto px-6 flex flex-col items-center text-center py-20 md:py-28">
                <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white mb-2 ">
                    About <span className="text-[#635cff]">us</span>
                </h1>
                <p className="text-lg sm:text-xl md:text-[22px] md:leading-[38px] text-[#bbb2b2] max-w-[820px]  ">
                    With over 20 years of experience, we can deliver great results for your online business without additional costs or commitments.
                </p>
            </div>
        </div>
    );
}
