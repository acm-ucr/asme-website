import Image from "next/image";
import ASME1 from "../../../public/images/ASME1.webp";
import ASME2 from "../../../public/images/ASME2.webp";
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
        ASME seeks to develop well-rounded engineers at UC Riverside that are
        experienced and ready for the real world. We are an organization that
        robots (among other things) out of a love for engineering and because we
        understand the need for competent engineers worldwide. Through the
        various projects we are involved in, we can gain invaluable engineering
        experience before moving into the workforce. skills.
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
        They say, &#34;It&#39;s not about what you know, but who you know.&#34;
        We have a growing network of talented students/engineers. Through our
        professional development, outreach, volunteering events, and workshops,
        this is your chance to meet experienced engineers, and other students,
        and to learn marketable
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
        They say, &#34;It&#39;s not about what you know, but who you know.&#34;
        We have a growing network of talented students/engineers. Through our
        professional development, outreach, volunteering events, and workshops,
        this is your chance to meet experienced engineers, and other students,
        and to learn marketable
      </motion.p>
    </>
  );
};

export default AboutSection;
