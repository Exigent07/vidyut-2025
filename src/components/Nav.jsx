import { useEffect, useRef } from "react";
import gsap from "gsap";

export const Nav = () => {
  const logoRef = useRef(null);
  const registerRef = useRef(null);
  const underlineRef = useRef(null);

  const topLine = useRef(null);
  const midLine = useRef(null);
  const bottomLine = useRef(null);

  const hamburgerTimeline = useRef(null);
  const logoTimeline = useRef(null);
  const registerTimeline = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

    tl.fromTo(
      [topLine.current, midLine.current, bottomLine.current],
      { x: -20, opacity: 0 },
      { x: 0, opacity: 1, duration: 0.6, stagger: 0.05 }
    )
      .fromTo(
        logoRef.current,
        { scale: 0.9, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8 },
        "-=0.4"
      )
      .fromTo(
        registerRef.current,
        { y: -10, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6 },
        "-=0.6"
      );
  }, []);

  useEffect(() => {
    hamburgerTimeline.current = gsap.timeline({ paused: true });

    hamburgerTimeline.current
      .to(topLine.current, {
        x: 3,
        scaleX: 1.1,
        backgroundColor: "#ffffffcc",
        duration: 0.25,
      }, 0)
      .to(midLine.current, {
        scaleX: 0.95,
        backgroundColor: "#ffffffcc",
        duration: 0.25,
      }, 0)
      .to(bottomLine.current, {
        x: -3,
        scaleX: 1.1,
        backgroundColor: "#ffffffcc",
        duration: 0.25,
      }, 0);
  }, []);

  const handleHamburgerEnter = () => hamburgerTimeline.current.play();
  const handleHamburgerLeave = () => hamburgerTimeline.current.reverse();

  useEffect(() => {
    logoTimeline.current = gsap.timeline({ paused: true });
    logoTimeline.current.to(logoRef.current, {
      scale: 1.05,
      filter: "drop-shadow(0 0 8px rgba(255,255,255,0.3))",
      duration: 0.35,
      ease: "power2.out",
    });
  }, []);

  const handleLogoEnter = () => logoTimeline.current.play();
  const handleLogoLeave = () => logoTimeline.current.reverse();

  useEffect(() => {
    registerTimeline.current = gsap.timeline({ paused: true });
    registerTimeline.current.to(underlineRef.current, {
      scaleX: 1,
      opacity: 1,
      transformOrigin: "center",
      ease: "power2.out",
      duration: 0.4,
    });
  }, []);

  const handleRegisterEnter = () => registerTimeline.current.play();
  const handleRegisterLeave = () => registerTimeline.current.reverse();

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-transparent px-3 sm:px-12 py-3">
      <div className="relative flex items-center justify-between max-w-[1440px] mx-auto h-[80px] sm:h-[100px]">
        <div
          className="flex flex-col justify-between h-5 w-6 cursor-pointer group"
          onMouseEnter={handleHamburgerEnter}
          onMouseLeave={handleHamburgerLeave}
        >
          <div ref={topLine} className="h-[2px] w-full bg-white rounded-sm"></div>
          <div ref={midLine} className="h-[2px] w-full bg-white rounded-sm"></div>
          <div ref={bottomLine} className="h-[2px] w-full bg-white rounded-sm"></div>
        </div>

        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <img
            ref={logoRef}
            src="/images/logo.png"
            alt="Logo"
            className="h-[60px] sm:h-[75px] object-contain cursor-pointer"
            onMouseEnter={handleLogoEnter}
            onMouseLeave={handleLogoLeave}
          />
        </div>

        <div
          ref={registerRef}
          className="relative text-white text-base sm:text-lg font-medium cursor-pointer"
          onMouseEnter={handleRegisterEnter}
          onMouseLeave={handleRegisterLeave}
        >
          <a href="/register" className="relative z-10">
            Register
          </a>
          <span
            ref={underlineRef}
            className="absolute left-0 bottom-0 h-[2px] bg-white w-full opacity-0 scale-x-0"
          />
        </div>
      </div>

      <div className="w-full max-w-[1440px] mx-auto mt-4">
        <div className="h-px bg-[#C6D53F] opacity-20 w-full" />
      </div>
    </nav>
  );
};
