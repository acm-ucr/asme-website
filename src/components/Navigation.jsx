"use client";
import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import { FaBars } from "react-icons/fa";
import MenuItem from "./MenuItem";
import { useState } from "react";
import logo from "../../public/logo.png";
import Image from "next/image";
import { items } from "@/data/navigation";

const Navigation = () => {
  const [selected, setSelected] = useState(0);
  const [isHovered, setIsHovered] = useState(0);
  return (
    <>
      <Navbar
        className="flex flex-col justify-between bg-asme-white opacity-[85%] m-0 p-0 min-h-[64px] w-screen"
        collapseOnSelect
        expand="md"
        fixed="top"
      >
        <div className="flex flex-row w-full justify-between m-0 items-center">
          <Navbar.Brand className="m-0 p-0 flex items-center">
            <Link
              href="/"
              className="no-underline m-0 flex items-center p-0"
              onClick={() => setSelected("Logo")}
            >
              <Image src={logo} className="m-0 p-0 w-48" alt="logo" />
            </Link>
          </Navbar.Brand>
          <Navbar.Collapse className="items-center md:justify-end justify-center">
            <Nav className="font-poppins flex justify-evenly items-center pr-2">
              {items.map((item, index) => (
                <MenuItem
                  text={item.name}
                  link={item.link}
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
          </Navbar.Collapse>{" "}
          <Navbar.Toggle
            className="list-unstyled !text-transparent border-0"
            aria-controls="basic-navbar-nav"
          >
            <FaBars className=" text-asme-blue-500 text-xl" />
          </Navbar.Toggle>
        </div>
      </Navbar>
    </>
  );
};

export default Navigation;
