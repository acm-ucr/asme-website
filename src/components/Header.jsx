import header from "../../public/header.webp";
import Image from "next/image";
import { motion } from "framer-motion";

const Header = ({ title }) => {
  return (
    <div className="w-full flex relative">
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.7 }}
        className="w-full"
      >
        <Image src={header} className="object-cover w-full" alt="header" />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "tween", ease: "easeInOut", duration: 0.7 }}
        className="absolute bg-asme-transparentBlue w-2/3 my-4 p-4 bottom-0 flex items-center"
      >
        <p className="text-xl md:text-3xl text-white font-poppins font-bold">
          {title}
        </p>
      </motion.div>
    </div>
  );
};

export default Header;
