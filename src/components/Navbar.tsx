import logo from "../assets/react.svg";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className=" mb-20 flex justify-between items-center py-6 px-4 z-12">
        <div className="flex-shrink-0 items-center">
          <img className="mx-2 w-10" src={logo} alt="logo" />
        </div>
        <div className="flex space-x-4 items-center justify-between text-2xl ">
          <a 
          href="https://www.linkedin.com/in/kantinan-paritvisut-835019302/">
             <FaLinkedin className="text-white hover:text-gray-400" />
          </a>
          <a href="https://github.com/kantinanpew"> 
            <FaGithub className="text-white hover:text-gray-400" />
          </a>
          <a href = "https://www.instagram.com/kantinanpew/">
            <FaInstagram className="text-white hover:text-gray-400" />
          </a>
          <a href="https://www.facebook.com/kantinan.paritvisut/">
            <FaFacebook className="text-white hover:text-gray-400" />
          </a>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
