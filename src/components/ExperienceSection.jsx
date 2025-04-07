import React from "react";

const CardImage = () => (
  <img
    src="/images/card-bg.png"
    alt="Event card"
    className="h-[600px] flex-shrink-0 object-cover"
  />
);

export const ExperienceSection = () => {
  return (
    <div className="flex flex-col w-ful text-white">
      <section className="w-full h-screen relative flex items-center justify-evenly">
        <div className="w-1/3 pt-24 pl-20 relative flex flex-col justify-center items-center">
          <img
            className="absolute h-[30rem] opacity-10"
            alt="Logo watermark"
            src="/images/logo.png"
          />
          <h1 className="text-7xl font-light leading-tight relative z-10">
            When India's brilliant young minds come together, be in their focus
          </h1>
        </div>

        <div className="w-[53%] pt-30 pr-20 pl-10 flex flex-col justify-center items-center">
          <p className="text-2xl font-light leading-relaxed">
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

      <section className="w-full h-screen flex">
        <div className="w-1/2 grid grid-cols-2 grid-rows-2">
          <div className="col-span-1 row-span-2">
            <img
              className="w-full h-full object-cover"
              alt="Women"
              src="/images/women.png"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              className="w-full h-full object-cover"
              alt="Youth"
              src="/images/youth.png"
            />
          </div>
          <div className="col-span-1 flex h-full w-full items-center justify-center row-span-1 relative">
            <img
              className="absolute h-[20rem]"
              alt="Logo watermark"
              src="/images/logo.png"
            />
          </div>
        </div>

        <div className="w-1/2 grid grid-cols-2 grid-rows-2">
          <div className="col-span-1 row-span-1">
            <img
              className="w-full h-full object-cover"
              alt="Singer"
              src="/images/singer.png"
            />
          </div>
          <div className="col-span-1 row-span-1">
            <img
              className="w-full h-full object-cover"
              alt="Show"
              src="/images/show.png"
            />
          </div>
          <div className="col-span-1 row-span-1 flex pr-20 bg-white h-full w-full items-center justify-center relative">
            <div className="-rotate-90 absolute -left-1/3 top-1/2 -translate-y-[150%] text-nowrap w-full text-black font-light text-6xl">
              A Throwback to
            </div>
            <p className="text-9xl pl-20 font-semibold text-black">
              VID<br />YUT<br />23K
            </p>
            <img
              className="absolute right-[7.5%] bottom-[5%] w-15 h-15"
              alt="Arrow"
              src="/images/arrow.svg"
            />
          </div>
          <div className="col-span-1 h-full w-full row-span-1 flex items-center justify-center">
            <p className="text-6xl w-[75%] font-light leading-tight">
              WHERE TECH, CULTURE &amp; ADVENTURE COLLIDE!
            </p>
          </div>
        </div>
      </section>

      <section className="w-full h-screen flex gap-x-52 items-center justify-center">
        <div className="w-1/3 pl-20 flex flex-col justify-center">
          <h2 className="text-8xl font-light leading-tight">
            ONE FEST.<br />UNLIMITED<br />EXPERIENCES.
          </h2>
          <button className="border border-white p-7 mt-16 text-4xl font-light w-fit">
            JOIN THE MOVEMENT
          </button>
        </div>

        <div className="w-2/3 flex gap-7 pr-10 overflow-x-auto items-center" id="no-scrollbar">
          <CardImage />
          <CardImage />
          <CardImage />
        </div>
      </section>
    </div>
  );
};
