import { FaEnvelope, FaLink, FaFacebook, FaInstagram } from "react-icons/fa6";
export const joinList = [
  {
    text: "email",
    icon: <FaEnvelope size={50} className="text-white" />,
    link: "",
    bgColor: "bg-asme-blue-600",
  },
  {
    text: "highlander link",
    icon: <FaLink size={50} className="text-white" />,
    link: "",
    bgColor: "bg-asme-blue-500",
  },
  {
    text: "facebook",
    icon: <FaFacebook size={50} className="text-white" />,
    link: "",
    bgColor: "bg-asme-blue-400",
  },
  {
    text: "instagram",
    icon: <FaInstagram size={50} className="text-white" />,
    link: "",
    bgColor: "bg-asme-blue-300",
  },
];
export const HOVER_CLASS_MAPPING = {
  "bg-asme-blue-600": "hover:!text-asme-blue-600",
  "bg-asme-blue-500": "hover:!text-asme-blue-500",
  "bg-asme-blue-400": "hover:!text-asme-blue-400",
  "bg-asme-blue-300": "hover:!text-asme-blue-300",
};
