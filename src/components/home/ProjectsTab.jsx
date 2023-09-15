import Image from "next/image";
import bot from "../../../public/images/battleBot.png";
import { motion } from "framer-motion";
import Link from "next/link";

const ProjectsTab = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center w-2/3 items-center mt-8 md:mt-0">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          type: "spring",
        }}
      >
        <Image src={bot} className="w-60 h-52" alt="bot" />
      </motion.div>
      <div className="flex flex-col md:w-3/5 md:ml-8">
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "spring",
          }}
          className="text-2xl flex-wrap font-poppins font-bold text-asme-blue-500 mt-5 md:mt-0"
        >
          BattleBots
        </motion.p>
        <motion.p
          initial={{ opacity: 0, x: -30 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "spring",
            delay: 0.3,
          }}
          className="text-asme-blue-500 text-xl"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore
        </motion.p>
        <Link
          href="/projects"
          className="font-poppins border-2 border-asme-blue-600 px-3 py-1 text-base md:text-xl w-fit text-asme-blue-600 no-underline"
        >
          More
        </Link>
      </div>
    </div>
  );
};

export default ProjectsTab;
