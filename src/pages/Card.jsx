import React from 'react'
import Image from "next/image";
import Synth from '../../public/City.jpg'
// import OpenAI from '../../public/openai.png'
// import AnimePic from '../../public/AnimePic.jpg'
import AVI from '../../public/AVI.jpg'
import { BsThreeDotsVertical } from "react-icons/bs";
// import Quote from '../../public/Quote.png'
import SkillTree from './SkillTree';

function Card() {
  return (
    // Card Start
    <div className="MainCard">
      {/* Banner */}
      <Image
        className="w-full  rounded-t-lg"
        src={Synth}
        alt="#"
        style={{ objectFit: "cover", width: "100%", height: "30%" }}
      />

      {/* Info */}
      <div className="lg:flex-row flex flex-col items-center lg:pl-12 my-2 mb-2 mr-2 w-full h-fit ">
        {/* AVI Picture */}
        <Image
          src={AVI}
          className="w-32 h-32 -mt-24 hover:shadow-2xl hover:shadow-CityBlu  active:border-Teel transform hover:scale-110 active:scale-95 active:shadow-md Smooth shadow-lg shadow-coal rounded-full border-IceBlue border-4"
          alt="OpenAI"
        />

        {/* Name Box */}
        <div className=" lg:text-left text-center flex w-full Line flex-col leading-5 text-xl lg:text-2xl font-normal mt-2 p-2 mx-2">
          <h1 className="">
            Daniel <span className="">Biscuit</span>{" "}
          </h1>
          <p className="lg:text-base   lg:font-extralight text-xs font-light">
            Quantum Entangler
          </p>
        </div>

        {/* Buttons */}
        <div className=" flex justify-between p-2 lg:ml-16 h-full w-full items-center  text-xs lg:text-base">
          <button className="Buttons py-2">Hire Me</button>
          <button className="Buttons mr-4 py-2">Hire Me Again</button>
          <button className="Buttons  mr-4 py-3 ">
            <BsThreeDotsVertical />
          </button>
        </div>
      </div>

      {/* Card  */}
      <div className=" lg:h-full lg:w-full h-4/6 p-4 mb-4 flex rounded-lg  bg-LB/60">
        {/* Tabs */}
        <div className="flex w-fit h-fit justify-evenly place-self-center Smoother gap-x-2 font-normal text-gray-600  -rotate-90 -ml-32">
          <div className="Tabs "> Contact</div>
          <div className="Tabs">Blog</div>
          <div className="Tabs">Project</div>
          <div className="Tabs">Info</div>
        </div>

        {/* Text Section */}
        <div className="border-l-2 flex flex-col items-center justify-start lg:justify-evenly border-gray-400 px-3 lg:px-4 -ml-28 BoxFull">
          {/* About Me */}
          <div className="my-4">
            <h2 className="text-base font-semibold mb-2">About Me </h2>
            <p className="text-xs lg:text-sm leading-5 lg:leading-6 font-normal">
              Hey everyone, it&apos;s great to meet you all! My name is Daniel
              Biscuit, and I&apos;m a quantum entangler hailing from the heart
              of the Midwest. I&apos;ve always been fascinated by the mysteries
              of the universe, and I&apos;ve dedicated my life to unraveling
              some of its deepest secrets through the study of quantum physics.
            </p>
          </div>

          {/* My Skills */}
          <div className="BoxFit mt-12 place-self-end px-1 ">
            <h2 className="text-sm font-semibold mt-4 mb-3">My Skills </h2>

            <SkillTree />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card