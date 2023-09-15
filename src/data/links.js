import { FaEnvelope, FaLink, FaFacebook, FaInstagram } from "react-icons/fa6";
export const links = [
  {
    text: "instagram",
    icon: <FaInstagram />,
    link: "https://www.instagram.com/ucr.asme/",
    hover: "text-white hover:!text-asme-blue-400",
    color: "bg-asme-blue-300",
  },
  {
    text: "facebook",
    icon: <FaFacebook />,
    link: "https://www.facebook.com/groups/1694944664070229/",
    hover: "text-white hover:!text-asme-blue-400",
    color: "bg-asme-blue-400",
  },
  {
    text: "email",
    icon: <FaEnvelope />,
    link: "mailto:ucr.asme@gmail.com",
    hover: "text-white hover:!text-asme-blue-400",
    color: "bg-asme-blue-500",
  },
  {
    text: "highlander link",
    icon: <FaLink />,
    link: "https://highlanderlink.ucr.edu/organization/asme",
    hover: "text-white hover:!text-asme-blue-400",
    color: "bg-asme-blue-600",
  },
];
