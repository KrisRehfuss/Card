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
import Skills from "./Skill";
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

        {/* Wrapper Start */}
        <div className=" overflow-hidden FlexCenterCol mt-4 mb-24 font-pop BoxFull">
            {/* Header */}

            <div className="relative mb-24 lg:h-auto my-4 h-[980px] min-h-fit lg:w-7/12 w-full FlexCenter mt-4   ">
            {/* Card */}
              <Card />

            </div>
          {/* <Footer /> */}
        </div>
      </main>
    </>
  );
}
