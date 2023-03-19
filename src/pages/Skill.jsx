import Image from "next/image";

function Skill({ name, logo }) {
  return (
    <div className="flex text-xs items-center  p-2 mb-2 rounded-xl grow Pull shadow-md md:w-auto md:h-auto h-fit w-fit  shadow-Pinq">
      <Image src={logo} className="w-4" alt="#" />
        <div className="ml-1 ">{name}</div>
    </div>
  );
}

export default Skill;
