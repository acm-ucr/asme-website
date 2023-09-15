"use client";
import Header from "@/components/Header";
import Board from "@/components/board/Board";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { boards } from "@/data/boards";

const board = () => {
  return (
    <>
      <Header title="Board" />
      <Row className="w-10/12 flex items-center justify-start">
        {boards.map((board, index) => (
          <Col key={index} xs={12} sm={4} lg={3}>
            <Board
              image={board.image}
              position={board.position}
              name={board.name}
            />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default board;
