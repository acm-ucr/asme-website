import Image from "next/image";

const ProjectDescription = ({ name, description, picture1, picture2 }) => {
  return (
    <div className="flex flex-col relative">
      <p className="self-start w-fit shadow-[1rem_-0.5rem_0_0] shadow-asme-blue-400 bg-asme-blue-600 text-white text-lg font-poppins font-bold py-2 px-4 m-3">
        {name}
      </p>

      <p className="self-center lg:text-base text-sm w-10/12 md:w-2/3relative z-10 ">
        {description}
      </p>

      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center w-10/12 self-center gap-3 m-3">
        <Image className="w-10/12 md:w-1/2" src={picture1} alt="no image" />
        <Image className="w-10/12 md:w-1/2" src={picture2} alt="no image" />
      </div>

      <p className="z-0 m-0 p-0 whitespace-nowrap font-bold font-poppins text-asme-textShadow text-4xl lg:text-6xl origin-top-left -rotate-90 pt-2">
        {name.toUpperCase()}
      </p>

      <p className="z-0 m-0 p-0 whitespace-nowrap font-bold font-poppins text-asme-textShadow text-4xl lg:text-6xl pt-2 justify-end rotate-90 -translate-y-full absolute origin-top-right lg:top-[550px] top-80 right-0">
        {name.toUpperCase()}
      </p>
    </div>
  );
};

export default ProjectDescription;
