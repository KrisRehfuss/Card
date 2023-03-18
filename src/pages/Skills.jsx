import Image from "next/image";

function Skills({ name, logo }) {
  return (
    <div className="text-xs px-2 mb-2 ClearDrop rounded-xl grow Pull shadow-md shadow-Pinq FlexCenter p-2">
      <Image src={logo} className="w-4" alt="#" />
        <div className="ml-1">{name}</div>
    </div>
  );
}

export default Skills;
