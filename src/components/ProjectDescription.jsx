import Image from "next/image";
import image1 from "../../public/battlebots/IMG_9908.png";
import image2 from "../../public/battlebots/IMG_7813.png";
import logo from "../../public/battlebots/Logo2022.png";

const ProjectDescription = () => {
  return (
    <div className="flex flex-col relative">
      <Image className="w-1/2 md:w-1/5 self-center" src={logo} alt="logo" />
      <p className="self-center w-fit shadow-[1rem_-0.5rem_0_0] shadow-asme-blue-400 bg-asme-blue-600 text-white text-lg font-poppins font-bold py-2 px-4 m-6">
        Battlebots
      </p>

      <p className="self-center ltext-sm md:text-lg w-10/12 md:w-2/3 relative z-10 ">
        Hello, we are Highlander Combat Robotics! We are a Battle Bots style
        club where 2 robots go head to head in an arena trying to tear each
        other to shreds. In our club members are split up into sub teams where
        they design, prototype, build, and test a fully working robot. We are a
        very new project on campus (founded in 2022) and are looking to grow our
        club with your help. If you are interested please join our discord to
        get more info or try to attend one of our meetings!
      </p>

      <div className="relative z-10 flex flex-col md:flex-row justify-center items-center w-10/12 self-center gap-3 m-3">
        <Image className="w-10/12 md:w-1/2" src={image1} alt="no image" />
        <Image className="w-10/12 md:w-1/2" src={image2} alt="no image" />
      </div>

      <p className="z-0 m-0 p-0 whitespace-nowrap font-bold font-poppins text-asme-textShadow text-4xl lg:text-6xl origin-top-left -rotate-90 pt-2">
        BATTLEBOTS
      </p>

      <p className="z-0 m-0 p-0 whitespace-nowrap font-bold font-poppins text-asme-textShadow text-4xl lg:text-6xl pt-2 justify-end rotate-90 -translate-y-full absolute origin-top-right lg:top-[550px] top-80 right-0">
        BATTLEBOTS
      </p>
    </div>
  );
};

export default ProjectDescription;
