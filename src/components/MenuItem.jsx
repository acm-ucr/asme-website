import Nav from "react-bootstrap/Nav";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
const MenuItem = ({
  index,
  text,
  selected,
  hovered,
  onClick,
  link,
  onMouseOver,
  onMouseOut,
}) => {
  const [hover, setHover] = useState(false);
  const router = useRouter();

  return (
    <Nav.Link as={Link} href={link} eventKey={index} className="">
      <div
        className="w-fit relative mx-2.5"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        onClick={onClick}
      >
        <p
          className={`${
            hover || router.asPath === link ? "opacity-70" : "opacity-100"
          }   mb-0 text-asme-blue-500 text-lg ${
            selected ? "font-bold" : "font-normal"
          } p-0`}
        >
          {text}
        </p>
        {selected && (
          <motion.div
            className="absolute bg-asme-blue-500 h-[2.5px] w-full"
            layoutId="underline"
          />
        )}
      </div>
    </Nav.Link>
  );
};

export default MenuItem;
