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
import sun from "../../public/sun.png";
import Card from "./Card";

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
          <div className="lg:mr-24 md:max-w-5xl FlexCenterCol px-12 pb-24 lg:p-2  w-full h-fit min-h-fit lg:w-6/12">
            {/* Header */}
            <Header styleh1="Header1" styleh2="Header2" />

            {/* Caption */}
            <p className=" p-4 lg:text-xl lg:px-12 leading-7 text-base text-gray-400 font-semibold text-center"></p>

            {/* Section */}
            <div className="BoxFull mx-auto mb-6">
            {/* Card */}
              <Card />

            </div>
          </div>
          {/* <Footer /> */}
          {/* <SearchBar /> */}
        </div>
      </main>
    </>
  );
}
