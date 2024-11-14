import logo from "../assets/react.svg";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";



const handleLinkClick =(event) =>{

  event.preventDefault();
  window.open(event.target.href, "_blank","noopener,noreferrer");
}

const Navbar = () => {
  return (
    <>
      <nav className=" mb-20 flex justify-between items-center py-6 px-4 z-12">
        <div className="flex-shrink-0 items-center">
          
        </div>
        <div className="flex space-x-4 items-center justify-between text-2xl ">
          <a rel ="noopener noreferrer" href="https://www.linkedin.com/in/kantinan-paritvisut-835019302/" target="_blank">
             <FaLinkedin className="text-white hover:text-gray-400" />
          </a>
          <a rel ="noopener noreferrer" href="https://github.com/kantinanpew " target="_blank"> 
            <FaGithub className="text-white hover:text-gray-400" />
          </a>
          <a rel ="noopener noreferrer"href = "https://www.instagram.com/kantinanpew/" target="_blank">
            
            <FaInstagram className="text-white hover:text-gray-400"  />
          </a>
          <a rel ="noopener noreferrer" href="https://www.facebook.com/kantinan.paritvisut/" target="_blank">
            <FaFacebook className="text-white hover:text-gray-400" />
          </a>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
