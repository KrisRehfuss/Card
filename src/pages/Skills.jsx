import Image from "next/image";

function Skills({ name, logo }) {
  return (
    <div className="flex text-xs items-center  p-2 mb-2 rounded-xl grow Pull shadow-md lg:w-auto lg:h-auto w-fit h-3/12  shadow-Pinq">
      <Image src={logo} className="w-4" alt="#" />
        <div className="ml-1 ">{name}</div>
    </div>
  );
}

export default Skills;
