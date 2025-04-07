import React, { useEffect, useRef } from "react";
import { CiLocationOn } from "react-icons/ci";
import gsap from "gsap";

const eventDates = ["25", "26", "27"];
const stats = [
  { value: "20K", label: "Footfall" },
  { value: "15Lakhs", label: "Worth Prizes" },
  { value: "30+", label: "Competitions" },
  { value: "20+", label: "Workshops" },
];

const DateBox = ({ day }) => (
  <div className="w-[37px] h-[30px] cursor-pointer border border-white inline-flex items-center justify-center transition-all hover:scale-110 hover:border-[#DE6604]">
    <span className="font-light text-white text-xl">{day}</span>
  </div>
);

const StatItem = ({ value, label }) => (
  <div className="flex items-center gap-3 group transition-all hover:scale-105">
    <span className="text-[32px] text-[#0b0c12] group-hover:text-[#DE6604]">
      {value}
    </span>
    <div className="w-px h-8 bg-[#DE6604]" />
    <span className="text-base text-[#0b0c12] group-hover:text-[#DE6604]">
      {label}
    </span>
  </div>
);

export const HeroSection = () => {
  const titleRef = useRef();
  const subtitleRef = useRef();
  const dateRef = useRef();
  const statsRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0 }
    )
      .fromTo(
        subtitleRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0 },
        "-=0.6"
      )
      .fromTo(
        dateRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1 },
        "-=0.4"
      )
      .fromTo(
        statsRef.current.children,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, stagger: 0.1 },
        "-=0.4"
      );
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#0b0c12] overflow-hidden">
      <div className="absolute left-0 h-full">
        <img
          className="h-full object-contain"
          src="/images/helmet-image.png"
          alt="Hightech helmet"
        />
      </div>

      <div className="absolute right-0 w-1/2 h-full flex flex-col items-start justify-center px-10">
        <h1
          ref={titleRef}
          className="text-[200px] text-white leading-[0.9] mt-16"
        >
          VIDYUT
        </h1>

        <div
          ref={subtitleRef}
          className="text-2xl tracking-[12px] text-white mt-6"
        >
          NATIONAL LEVEL MULTIFEST
        </div>

        <div ref={dateRef} className="flex items-center mt-8 gap-4">
          <div className="w-[63px] h-[30px] bg-white flex cursor-pointer items-center transition-all hover:bg-[#DE6604] justify-center">
            <span className="font-bold text-[#0b0c12] text-2xl">MAR</span>
          </div>

          <div className="flex gap-2">
            {eventDates.map((day) => (
              <DateBox key={day} day={day} />
            ))}
          </div>

          <div className="flex items-center ml-6">
            <CiLocationOn className="w-5 h-5 text-white" />
            <span className="text-white text-sm ml-2">
              Amritapuri Campus, Kollam, Kerala
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 w-full h-[66px] bg-white">
        <div
          ref={statsRef}
          className="max-w-6xl mx-auto h-full flex justify-between items-center px-4 cursor-pointer"
        >
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};
