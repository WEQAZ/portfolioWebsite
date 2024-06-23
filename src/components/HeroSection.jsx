import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-12">
        <div className="col-span-7 place-self-center text-center sm:text-left">
          <h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-bold">
            Hello, I'm Ice
          </h1>
          <p className="text-[#ADB7BE] text-lg lg:text-xl mb-6">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Amet eum
            quidem enim reprehenderit maxime, iure veniam suscipit! Sed quos,
          </p>
          <div>
            <button className="px-6 py-3 rounded-full mr-4 bg-white hover:bg-slate-200 text-black">
              Hire Me
            </button>
            <button className="px-6 py-3 mt-3 rounded-full bg-transparent hover:bg-state-800 text-white border border-white">
              Download CV
            </button>
          </div>
        </div>
        <div className="col-span-5 place-self-center mt-10 lg:mt-0">
          <div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/icePic.png"
              alt="ice Image"
              className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              width={300}
              height={300}
            ></Image>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
