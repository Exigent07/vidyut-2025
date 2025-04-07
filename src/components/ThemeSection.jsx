import React from "react";

export const ThemeSection = () => {
  return (
    <div className="w-full h-screen relative flex items-center justify-around overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-l from-[#0b0c11] to-[#0b0c12] z-0" />
      <div className="absolute inset-0 bg-[#0b0c12] z-0" />

      <div className="absolute w-[20vw] h-[20vh] -left-[10vw] top-0 bg-[#f88d11] rounded-full blur-[12vw] z-0" />
      <div className="absolute w-[30vw] h-[25vh] left-[5vw] top-[45vh] bg-[#0433b2] rounded-full blur-[12vw] z-0" />
      <div className="absolute w-[40vw] h-[25vh] left-[50vw] top-[60vh] bg-[#f4ff92] blur-[12vw] z-0" />
      <div className="absolute w-[20vw] h-[15vh] left-[65vw] top-[5vh] bg-[#00bff3] rounded-full blur-[12vw] z-0" />

      <div className="relative z-10 flex flex-col md:flex-row items-center justify-center w-full h-full gap-20 mx-auto">
        <div className="flex flex-col flex-1 max-w-5xl">
          <div className="text-white text-xl md:text-3xl font-light font-sans mb-2">
            OUR THEME
          </div>
          <div className="text-white text-4xl max-w-xl md:text-8xl font-light font-sans leading-tight mb-6">
            HEAL THE WORLD
          </div>
          <p className="text-white text-lg md:text-2xl font-light w-full font-sans leading-relaxed">
            In spite of the economic and technological progress, humanity is badly in need of healing, and young minds, who are the future of the world, are better poised to offer solutions to heal humanity. Vidyut, where the youth converge every year, provides an open forum for the exchange of ideas to make the world a better place, where every living being can enjoy coexistence in peaceful harmony. This holistic future needs the convergence of thinking in science, technology, humanities, arts, management etc. The confluence of every thought stream, for a better world...
          </p>
        </div>

        <div className="flex-1 max-w-md md:max-w-lg">
          <img
            src="/images/heart.png"
            alt="Visual of hands holding heart"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
