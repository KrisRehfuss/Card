import Head from "next/head";
import { AiOutlineStar } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Nav from "./Nav";
// import Axis from "./Axis";
import Banner from "./Banner";
import Header from "./Header";
import Top from "./Top";
import SearchBar from "./SearchBar";
import Skills from "./Skills";
import Footer from "./Footer";
import JS from "../../public/JS.png";
import TS from "../../public/TS.png";
import Tailwind from "../../public/tail.png";
import Git from "../../public/git.png";
import React from "../../public/react.png";
import OpenAI from "../../public/openai.png";
import Next from "../../public/next-js.svg";
import sun from "../../public/sun.png";
import SubV from "../../public/SubV.jpg";
import Subversion from "../../public/Subversion.jpg";
import Vinyls from "./Vinyls";

import Video from "./Video";

export default function Home() {
  return (
    <>
      <Head>
        <title>Prismatic</title>
        <meta name="description" content="Prismatic Band PA" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="../../public/Subversion.jpg" />
      </Head>

      <main>
        <Nav />
        <Banner />

        {/* Wrapper Start */}
        <div className="overflow-hidden FlexCenterCol mt-4 font-pop BoxFull">
          <div className=" md:max-w-5xl FlexCenterCol px-12 pb-24 lg:p-2 xl:mr-24  w-full h-fit min-h-fit lg:w-6/12">
            {/* Header */}
            <Header styleh1="Header1" styleh2="Header2" />

            {/* Caption */}
            <p className=" p-4 lg:text-xl lg:px-12 leading-7 text-base text-gray-400 font-semibold text-center"></p>

            {/* Section */}
            <div className="BoxFull mb-6">
              {/* Personal Works*/}
              <Vinyls />

              {/* <h1 className="CaptionBlock text-Redd"> Recent Compositions</h1> */}
            </div>
          </div>
          <Footer />
          {/* <SearchBar /> */}
        </div>
      </main>
    </>
  );
}
