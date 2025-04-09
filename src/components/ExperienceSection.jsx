import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const CardImage = () => (
  <img
    src="/images/card-bg.png"
    alt="Event card"
    className="h-[600px] flex-shrink-0 object-cover"
  />
);

export const ExperienceSection = () => {
  const heroRef = useRef(null);
  const heroTextRef = useRef(null);
  const heroDescRef = useRef(null);
  const logoRef = useRef(null);
  const gridSectionRef = useRef(null);
  const womenImgRef = useRef(null);
  const youthImgRef = useRef(null);
  const logoWatermarkRef = useRef(null);
  const singerImgRef = useRef(null);
  const showImgRef = useRef(null);
  const vidyutBlockRef = useRef(null);
  const throwbackTextRef = useRef(null);
  const vidyutTextRef = useRef(null);
  const arrowRef = useRef(null);
  const techTextRef = useRef(null);
  const ctaSectionRef = useRef(null);
  const festTextRef = useRef(null);
  const buttonRef = useRef(null);
  const cardsContainerRef = useRef(null);
  
  useEffect(() => {
    const heroTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: "top bottom",
        end: "bottom top",
        toggleActions: "play none none reverse"
      }
    });
    
    heroTimeline
      .from(heroTextRef.current, {
        y: 100,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      })
      .from(logoRef.current, {
        scale: 0,
        opacity: 0,
        duration: 1.2,
        ease: "elastic.out(1, 0.3)"
      }, "-=0.7")
      .from(heroDescRef.current, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.5");
    
    const gridTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: gridSectionRef.current,
        start: "top 80%",
        end: "bottom top",
        toggleActions: "play none none reverse"
      }
    });
    
    gridTimeline
      .from([womenImgRef.current, youthImgRef.current], {
        scale: 0.9,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      })
      .from(logoWatermarkRef.current, {
        opacity: 0,
        rotation: -180,
        duration: 1,
        ease: "power1.out"
      }, "-=0.4")
      .from([singerImgRef.current, showImgRef.current], {
        scale: 0.9,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.8")
      .from(vidyutBlockRef.current, {
        backgroundColor: "rgba(255,255,255,0)",
        duration: 0.6
      }, "-=0.4")
      .from(vidyutTextRef.current, {
        x: -50,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)"
      }, "-=0.4")
      .from(throwbackTextRef.current, {
        opacity: 0,
        rotation: -110,
        duration: 0.6,
        ease: "power1.out"
      }, "-=0.4")
      .from(arrowRef.current, {
        x: -20,
        opacity: 0,
        duration: 0.5,
        ease: "power1.out"
      }, "-=0.2")
      .from(techTextRef.current, {
        x: 50,
        opacity: 0,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");
    
    const ctaTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: ctaSectionRef.current,
        start: "top 70%",
        end: "bottom top", 
        toggleActions: "play none none reverse"
      }
    });
    
    ctaTimeline
      .from(festTextRef.current, {
        y: 80,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .from(buttonRef.current, {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        ease: "back.out(1.5)"
      }, "-=0.3")
      .from(cardsContainerRef.current.children, {
        x: 100,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: "power2.out"
      }, "-=0.4");
      
    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div className="flex flex-col w-ful text-white">
      <section ref={heroRef} className="w-full h-screen relative flex items-center justify-evenly">
        <div className="w-1/3 pt-24 pl-20 relative flex flex-col justify-center items-center">
          <img
            ref={logoRef}
            className="absolute h-[30rem] opacity-10"
            alt="Logo watermark"
            src="/images/logo.png"
          />
          <h1 ref={heroTextRef} className="text-7xl font-light leading-tight relative z-10">
            When India's brilliant young minds come together, be in their focus
          </h1>
        </div>

        <div className="w-[53%] pt-30 pr-20 pl-10 flex flex-col justify-center items-center">
          <p ref={heroDescRef} className="text-2xl font-light leading-relaxed">
            Started in 2012, Vidyut is a national level inter-collegiate multi-fest,
            organized by the students of Amrita Vishwa Vidyapeetham. Through various
            competitions, hands-on trainings, workshops, discussions, symposia and
            cultural events, Vidyut facilitates a forum for young minds, inspiring
            them to contribute creatively to integrate knowledge and talent. Vidyut
            aims to turn the world into a better, inclusive and harmonious place for
            all living beings and nature, because the future depends on this
            integration. Saving our planet starts with the willingness to do
            something to change the world, even if just in a tiny way. There is a
            power in numbers, but it needs a few of us to step up to take the lead
            and that is what we plan to do, step up. Vidyut 2020 aims to offer a
            strategic way to help the ailing World, and thus the theme 'HEAL THE
            WORLD'
          </p>
        </div>
      </section>

      <section ref={gridSectionRef} className="w-full h-screen flex">
        <div className="w-1/2 grid grid-cols-2 grid-rows-2">
          <div className="col-span-1 row-span-2">
            <img
              ref={womenImgRef}
              className="w-full h-full object-cover"
              alt="Women"
              src="/images/women.png"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              ref={youthImgRef}
              className="w-full h-full object-cover"
              alt="Youth"
              src="/images/youth.png"
            />
          </div>
          <div ref={vidyutBlockRef} className="col-span-1 flex h-full w-full items-center justify-center row-span-1 relative bg-white">
            <div ref={throwbackTextRef} className="-rotate-90 absolute -left-1/3 top-1/2 -translate-y-[150%] text-nowrap w-full text-black font-light text-5xl">
              A Throwback to
            </div>
            <p ref={vidyutTextRef} className="text-8xl p-0 font-semibold text-black">
              VID<br />YUT<br />23K
            </p>
            <img
              ref={arrowRef}
              className="absolute right-[7.5%] bottom-[5%] w-15 h-15"
              alt="Arrow"
              src="/images/arrow.svg"
            />
          </div>
        </div>

        <div className="w-1/2 grid grid-cols-2 grid-rows-2">
          <div className="col-span-1 row-span-1">
            <img
              ref={singerImgRef}
              className="w-full h-full object-cover"
              alt="Singer"
              src="/images/singer.png"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              ref={showImgRef}
              className="w-full h-full object-cover"
              alt="Show"
              src="/images/show.png"
            />
          </div>
          <div className="col-span-1 row-span-1 flex pr-20 bg-transparent h-full w-full items-center justify-center relative">
            <img
              ref={logoWatermarkRef}
              className="absolute h-[20rem]"
              alt="Logo watermark"
              src="/images/logo.png"
            />
          </div>
          <div className="col-span-1 h-full w-full row-span-1 flex items-center justify-center">
            <p ref={techTextRef} className="text-6xl w-[75%] font-light leading-tight">
              WHERE TECH, CULTURE &amp; ADVENTURE COLLIDE!
            </p>
          </div>
        </div>
      </section>

      <section ref={ctaSectionRef} className="w-full h-screen flex gap-x-52 items-center justify-center">
        <div className="w-1/3 pl-20 flex flex-col justify-center">
          <h2 ref={festTextRef} className="text-8xl font-light leading-tight">
            ONE FEST.<br />UNLIMITED<br />EXPERIENCES.
          </h2>
          <button ref={buttonRef} className="border border-white p-7 mt-16 text-4xl font-light w-fit">
            JOIN THE MOVEMENT
          </button>
        </div>

        <div ref={cardsContainerRef} className="w-2/3 flex gap-7 pr-10 overflow-x-auto items-center" id="no-scrollbar">
          <CardImage />
          <CardImage />
          <CardImage />
        </div>
      </section>
    </div>
  );
};
