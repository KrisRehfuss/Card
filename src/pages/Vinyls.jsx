import Image from "next/image";
import Casing from "../../public/Casing.png";
import Swirl from "../../public/Swirl.png";
import Mystery from "../../public/Mystery.png";
import Splatter from "../../public/Splatter.png";
import WhiteBlue from "../../public/WhiteBlue.png";

function Vinyls() {
  return (
    <div>
      <div className=" z-20 right-40 top-2 xl:mr-96 xl:ml-0 mb-[120em] ml-[10rem] relative mx-auto p-4 BoxFull">
        {/* Swirl */}
        <div className="Stack rounded-full  Smoother xl:ml-0 xl:mt-48 ">
          <Image
            className="Disk shadow-2xl  shadow-Splatter"
            src={Swirl}
            alt="#"
          />
        </div>

        {/* Splatter */}
        <div className=" Stack rounded-full  Smoother -z-10 mt-[24rem] xl:mt-0 xl:ml-36">
          <Image
            className="Disk shadow-2xl  xl:w-[400px] shadow-Purp"
            src={Splatter}
            alt="Prismatic Subversion Vinyl – Splatter"
          />
        </div>

        {/* WhiteBLue */}
        <div className="Stack rounded-full  Smoother -z-10 mt-[48rem] xl:mt-48 xl:ml-96">
          <Image
            className="Disk shadow-2xl  shadow-Pinq"
            src={WhiteBlue}
            alt="Prismatic Subversion Vinyl – WhiteBlue"
          />
        </div>

        {/* Mystery */}
        <div className=" Stack rounded-full  Smoother xl:mt-0 mt-[72rem] -z-20 xl:ml-[32rem]">
          <Image
            className="Disk shadow-xl shadow-Q"
            src={Mystery}
            alt="Prismatic Subversion Vinyl – Mystery"
          />
        </div>

        {/* Casing */}
        <div className="Stack Smoother  z-0 xl:mt-[30rem] mt-[100rem] ">
          <a href="https://open.spotify.com/track/4z2nNF1C276f8Egzu7kB86">
            <Image
              className="shadow-xl  Push shadow-Sub"
              src={Casing}
              alt="Prismatic Subversion Vinyl – Casing"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Vinyls;
