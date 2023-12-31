import Image from "next/image";
import bot from "../../../public/battlebots/IMG_0707.webp";
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
          Hello, we are Highlander Combat Robotics! We are a Battle Bots style
          club where 2 robots go head to head in an arena trying to tear each
          other to shreds. In our club members are split up into sub teams where
          they design, prototype, build, and test a fully working robot. We are
          a very new project on campus (founded in 2022) and are looking to grow
          our club with your help. If you are interested please join our discord
          to get more info or try to attend one of our meetings!
        </motion.p>
        <motion.div
          className="w-fit my-4"
          initial={{ opacity: 0, x: -30 }}
          whileHover={{ scale: 1.1 }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            type: "spring",
          }}
        >
          <Link
            href="/projects"
            className="font-poppins border-2 border-asme-blue-600 px-3 py-1 text-base md:text-xl w-fit text-asme-blue-600 no-underline"
          >
            More
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsTab;
