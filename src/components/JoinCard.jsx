import React from "react";
import { FaEnvelope, FaLink, FaFacebook, FaInstagram } from "react-icons/fa6";

const JoinCard = () => {
  return (
    <div className="flex flex-wrap justify-center">
      <div
        className="flex flex-col bg-asme-blue-600"
        style={{ margin: "30px", width: "230px", height: "230px" }}
      >
        <div
          className="card bg-transparent rounded-none text-center w-full"
          style={{ border: "none" }}
        >
          <FaEnvelope
            size={50}
            className="inline-flex card-img-top text-white"
            style={{ marginTop: "15%", marginBottom: "5%" }}
          />
          <div className="class-body">
            <h5 className="text-light font-poppins font-semibold">email</h5>
          </div>
          <a
            href="mailto:ucr.asme@gmail.com"
            style={{ color: "white", marginBottom: "10%" }}
          >
            <button
              className=" bg-asme-blue-600 border pt-1 pb-1 pl-4 pr-4 outline-white hover:bg-white hover:text-asme-blue-600 font-poppins font-semibold"
              style={{ margin: "5%", width: "40%" }}
            >
              Join
            </button>
          </a>
        </div>
      </div>
      <div
        className="flex flex-col bg-asme-blue-500"
        style={{ margin: "30px", width: "230px", height: "230px" }}
      >
        <div
          className="card bg-transparent rounded-none text-center w-full"
          style={{ border: "none" }}
        >
          <FaLink
            size={50}
            className="inline-flex card-img-top text-white"
            style={{ marginTop: "15%", marginBottom: "5%" }}
          />
          <div className="class-body">
            <h5 className="text-light font-poppins font-semibold">
              highlander link
            </h5>
          </div>
          <a
            href="https://highlanderlink.ucr.edu/organization/asme"
            style={{ color: "white", marginBottom: "10%" }}
          >
            <button
              className="bg-asme-blue-500 border pt-1 pb-1 pl-4 pr-4 outline-white hover:bg-white hover:text-asme-blue-500 font-poppins font-semibold"
              style={{ margin: "5%", width: "40%" }}
            >
              Join
            </button>
          </a>
        </div>
      </div>

      <div
        className="flex flex-col bg-asme-blue-400"
        style={{ margin: "30px", width: "230px", height: "230px" }}
      >
        <div
          className="card bg-transparent rounded-none text-center w-full"
          style={{ border: "none" }}
        >
          <FaFacebook
            size={50}
            className="inline-flex card-img-top text-white"
            style={{ marginTop: "15%", marginBottom: "5%" }}
          />
          <div className="class-body">
            <h5 className="text-light font-poppins font-semibold">facebook</h5>
          </div>
          <a
            href="https://www.facebook.com/groups/1694944664070229/"
            style={{ color: "white", marginBottom: "10%" }}
          >
            <button
              className="bg-asme-blue-400 border pt-1 pb-1 pl-4 pr-4 outline-white hover:bg-white hover:text-asme-blue-400 font-poppins font-semibold"
              style={{ margin: "5%", width: "40%" }}
            >
              Join
            </button>
          </a>
        </div>
      </div>

      <div
        className="flex flex-col bg-asme-blue-200"
        style={{ margin: "30px", width: "230px", height: "230px" }}
      >
        <div
          className="card bg-transparent rounded-none text-center w-full"
          style={{ border: "none" }}
        >
          <FaInstagram
            size={50}
            className="inline-flex card-img-top text-white"
            style={{ marginTop: "15%", marginBottom: "5%" }}
          />
          <div className="class-body">
            <h5 className="text-light font-poppins font-semibold">instagram</h5>
          </div>
          <a
            href="https://www.instagram.com/ucr.asme/"
            style={{ color: "white", marginBottom: "10%" }}
          >
            <button
              className="bg-asme-blue-200 border pt-1 pb-1 pl-4 pr-4 outline-white hover:bg-white hover:text-asme-blue-200 font-poppins font-semibold"
              style={{ margin: "5%", width: "40%" }}
            >
              Join
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default JoinCard;
