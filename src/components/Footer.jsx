import logo from "../../public/logo-white.svg";
import Image from "next/image";
import { footer } from "@/data/footer";

const Footer = () => {
  return (
    <>
      <div className="w-full flex bg-gradient-to-b from-asme-blue-600 to-[#2E5678] h-60 relative">
        <Image
          alt="logo"
          src={logo}
          className=" w-1/3 lg:w-1/6 absolute bottom-0"
        />
        <div className="flex flex-row h-1/2 absolute right-4 lg:right-8 bottom-4">
          <div className="flex flex-col h-full justify-end items-end">
            <p className="text-white m-0 text-base md:text-xl">contact us</p>
            <p className="text-white m-0 text-base md:text-xl">
              900 University Ave,
            </p>
            <p className="text-white m-0 text-base md:text-xl">
              Riverside, CA 92521
            </p>
          </div>
          <div className="bg-white h-full w-1 lg:w-1.5 mx-3"></div>
          <div className="flex flex-col">
            {footer.map(({ href, icon }, index) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                key={index}
                className="hover:scale-110 transition-transform duration-300"
              >
                {icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
