import Image from "next/image";
import BannerImage from "../../public/Abstract2.jpg";
import Casing from "../../public/Casing.png";

function Banner() {
  return (
    <div className='BoxFull shadow-2xl  '>
      <div className="relative -z-10 top-0 w-full lg:h-80 h-60 Clear">
        <Image
          src={Casing}
          className="border-Redd"
          layout="fill"
          objectFit="cover"
          alt="#"
        />
      </div>
    </div>
  );
}

export default Banner;
