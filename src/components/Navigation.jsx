"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { useState } from "react";
import logo from "../../public/logo.png";

const items = [
  {
    name: "About",
    link: "about",
  },
  {
    name: "Projects",
    link: "projects",
  },
  {
    name: "Events",
    link: "events",
  },
  {
    name: "Board",
    link: "board",
  },
];

const Navigation = () => {
  const [selected, setSelected] = useState(0);
  const [isHovered, setIsHovered] = useState(0);
  return (
    <>
      <Navbar
        className="flex flex-col justify-between bg-asme-white opacity-[85%] m-0 p-0"
        collapseOnSelect
        expand="md"
        fixed="top"
      >
        <div className="flex flex-row w-full justify-between m-0">
          <Navbar.Brand>
            <Link
              href="/"
              className="no-underline m-0"
              onClick={() => setSelected("Logo")}
            >
              <div className="mt-1 mb-2 ml-2 flex justify-center items-center font-poppins text-white text-5xl">
                <img src={logo} className="w-10 mr-2" />
              </div>
            </Link>
          </Navbar.Brand>
          <div className="flex flex-row w-full justify-end ">
            <Navbar.Collapse className="w-full items-center md:justify-end justify-center">
              <Nav className="text-2xl font-poppins flex justify-evenly items-center">
                {items.map((item, index) => (
                  <MenuItem
                    text={item.name}
                    link={`/${item.link}`}
                    name={item.name}
                    key={index}
                    index={index}
                    onMouseOver={() => setIsHovered(item.name)}
                    onMouseOut={() => setIsHovered(0)}
                    selected={selected == item.name}
                    onClick={() => setSelected(item.name)}
                    Hovered={isHovered === item.name}
                  />
                ))}
              </Nav>
            </Navbar.Collapse>
            <Navbar.Toggle
              className="list-unstyled !text-transparent"
              aria-controls="basic-navbar-nav"
            >
              <FaBars className=" text-asme-blue-500 text-xl" />
            </Navbar.Toggle>
          </div>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
