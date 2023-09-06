import React from "react";
import { joinList } from "@/data/joinCards";
import JoinCard from "./JoinCard";
import { Row, Col } from "react-bootstrap";
const JoinCards = () => {
  return (
    <Row className="w-[95%] lg:w-4/5 ">
      {joinList.map((join, index) => (
        <Col xs={6} md={3} className="mb-4 lg:p-3" key={index}>
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
