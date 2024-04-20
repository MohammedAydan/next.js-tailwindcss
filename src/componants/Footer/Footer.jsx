import Link from "next/link";
import { Logo, PrimmaryBtn } from "../Header/componants";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaLinkedin,
  FaTwitterSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import FooterLink from "./FooterLink/FooterLink";

const Footer = () => {
  return (
    <footer className=" bg-slate-900">
      <div className="container mx-auto flex flex-col-reverse md:flex-row text-white px-5 py-10 justify-between space-y-8 md:space-y-0">
        <div className="flex flex-col items-center justify-between space-y-12 md:space-y-5 md:items-start">
          <div className="text-center mt-6">
            Copyright &copy; 2023 All Rights Reserved
          </div>
          <div>
            <Logo Mode="dark" />
          </div>
          <div className="flex flex-row space-x-2">
            <FaFacebookSquare className=" text-3xl" />
            <FaInstagramSquare className=" text-3xl" />
            <FaYoutubeSquare className=" text-3xl" />
            <FaLinkedin className=" text-3xl" />
            <FaTwitterSquare className=" text-3xl" />
          </div>
        </div>
        <div className="flex justify-around space-x-32">
          <div className="flex flex-col space-y-2">
            <FooterLink Location="#" Text="Home" />
            <FooterLink Location="#" Text="About" />
            <FooterLink Location="#" Text="Contact" />
          </div>
          <div className="flex flex-col space-y-2">
            <FooterLink Location="#" Text="Imprint" />
            <FooterLink Location="#" Text="Privacy" />
            <FooterLink Location="#" Text="Credits" />
          </div>
        </div>

        <div className="flex flex-col space-y-3 justify-between">
          <form>
            <div className="flex mt-6 md:mt-0 px-3 space-x-3">
              <input
                type="text"
                placeholder="Subscribe to News"
                className="flex-1 px-4 rounded-full"
              />
              <PrimmaryBtn
                Location="#"
                Text="Go"
                className="hover:bg-slate-500 "
              />
            </div>
          </form>

          <div className="hidden md:block">
            Copyright &copy; 2023 All Rights Reserved
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
