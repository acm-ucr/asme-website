import Image from "next/image";
import ASME1 from "../../../public/images/ASME1.png";
import ASME2 from "../../../public/images/ASME2.png";
import Title from "../projects/Title";
import { motion } from "framer-motion";

const AboutSection = () => {
  return (
    <>
      <Title title="What is ASME?" />
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.7,
          delay: 0,
        }}
        className="text-sm md:text-lg w-3/4"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.7,
          delay: 0.3,
        }}
        className="text-sm md:text-lg w-3/4 mt-4"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.7,
          delay: 0.6,
        }}
        className="flex flex-col md:flex-row w-full justify-center gap-4 p-8"
      >
        <Image src={ASME1} className="w-full md:w-1/2" />
        <Image src={ASME2} className="w-full md:w-1/2" />
      </motion.div>
      <Title title="How To Join" />
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.7,
          delay: 0,
        }}
        className="text-sm md:text-lg w-3/4"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          type: "tween",
          ease: "easeInOut",
          duration: 0.7,
          delay: 0.3,
        }}
        className="text-sm md:text-lg w-3/4 mt-4"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </motion.p>
    </>
  );
};

export default AboutSection;
