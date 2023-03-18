import React from 'react'
import Image from "next/image";
import Synth from '../../public/City.jpg'
import OpenAI from '../../public/openai.png'
import AnimePic from '../../public/AnimePic.jpg'
import { BsThreeDotsVertical } from "react-icons/bs";
import Quote from '../../public/Quote.png'
import SkillTree from './SkillTree';

function Card() {
  return (
    // Card Start
    <div className="FlexCenterCol text-black Shadow BoxFull p-4 pb-8 rounded-2xl mb-12 mr-24 lg:w-[900px] lg:h-[680px] CardGradient">
      {/* Banner */}
      <Image
        className="w-full h-2/6 rounded-t-lg"
        src={Synth}
        alt="#"
        style={{ objectFit: "cover", width: "100%", height: "30%" }}
      />

      {/* Info */}
      <div className="flex items-center pl-12 my-2 mb-2 mr-2 w-full h-fit ">
        {/* Picture */}
        <Image
          src={AnimePic}
          className="w-32 h-32 -mt-24 hover:shadow-2xl hover:shadow-CityBlu transform hover:scale-110 Smoother shadow-md shadow-coal rounded-full border-white border-4"
          alt="OpenAI"
        />

        {/* Name Box */}
        <div className="flex w-full Line flex-col leading-5 text-2xl font-light mt-2 p-2 mx-2">
          <h1 className="">Daniel Orick</h1>
          <p className="text-base font-extralight"> Quantum Entangler</p>
        </div>

        {/* Buttons */}
        <div className="flex mr- ml-16 h-full w-fit items-center gap-x-3 px-4 text-base">
          <button className="Buttons py-2">Donate for meh</button>
          <button className="Buttons py-2">Hire Me</button>
          <button className="Buttons py-3 ">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>

      {/* Card  */}
      <div className="BoxFull mb-4 flex p-4 rounded-lg  bg-LB/60">
        {/* Tabs */}
        <div className="place-self-center Smoother gap-x-2 font-normal text-gray-600  -rotate-90 -ml-32 flex w-fit h-fit">
          <div className="Tabs "> Contact</div>
          <div className="Tabs">Blog</div>
          <div className="Tabs">Project</div>
          <div className="Tabs">Info</div>
        </div>

        {/* Text Section */}
        <div className="border-l-2 border-gray-400 p-4 -ml-28 BoxFull">
          {/* Quote */}
          <div className="">
            <Image
              className="w-full h-fit -mt-6 rounded-2xl"
              src={Quote}
              alt="#"
              style={{ objectFit: "cover", width: "100%", height: "30%" }}
            />
          </div>

          {/* Text */}
          <div className="my-4">
            <h2 className="text-xs font-semibold mb-2">About Me </h2>
            <p className="px-1 text-xs font-mont tracking-wide font-thin">
              Hey everyone, it&apos;s great to meet you all! My name is Daniel Orick,
              and I&apos;m a quantum entangler hailing from the heart of the Midwest.
              I&apos;ve always been fascinated by the mysteries of the universe, and
              I&apos;ve dedicated my life to unraveling some of its deepest secrets
              through the study of quantum physics. You might think that being a
              quantum entangler is anything but normal, but for me, it&apos;s just
              another day in the lab. I&apos;m constantly pushing the boundaries of
              what&apos;s possible with entangled particles, developing new
              techniques for creating and manipulating them, and exploring the
              many strange and wonderful phenomena that arise from quantum
              entanglement.
            </p>
            <h2 className="text-xs font-semibold mt-4 mb-2">My Skills </h2>
            <SkillTree />
                     
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card