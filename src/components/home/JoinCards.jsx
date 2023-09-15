"use client"
import { motion } from "framer-motion";
import { joinList } from "@/data/joinCards";
import JoinCard from "./JoinCard";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
const JoinCards = () => {
  return (
    <Row className="w-[95%] lg:w-4/5 relative z-10">
      {joinList.map((join, index) => (
        <Col xs={6} md={3} className="mb-4 lg:p-3" key={index}>
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + index * 0.3 }}
          >
            <JoinCard
              text={join.text}
              icon={join.icon}
              link={join.link}
              hover={join.hover}
              color={join.color}
            />
          </motion.span>
        </Col>
      ))}
    </Row>
  );
};

export default JoinCards;
