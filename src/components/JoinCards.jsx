import React from "react";
import { FaEnvelope, FaLink, FaFacebook, FaInstagram } from "react-icons/fa6";
import JoinCard from "./JoinCard";
import { Row, Col } from "react-bootstrap";
const joinList = [
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
const JoinCards = () => {
  return (
    <Row className="w-4/5">
      {joinList.map((join, index) => (
        <Col xs={6} md={3} className="p-3" key={index}>
          <JoinCard
            text={join.text}
            icon={join.icon}
            link={join.link}
            bgColor={join.bgColor}
          />
        </Col>
      ))}
    </Row>
  );
};

export default JoinCards;
