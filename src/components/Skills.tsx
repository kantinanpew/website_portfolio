import {RiReactjsLine} from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import python from "../assets/python.svg";

const Skills = () => {
  return (
    <div className = "boreder-b border-neutral-800 pb-24">
        <h1 className = "my-20 text-center text-4xl"> Skills</h1>
        <div className = "flex flex-wrap items-center justify-center gap-4">
            <div className = " rounded-2xl border-4 border-neutral-800 p-4 ">
                <RiReactjsLine className = "text-7xl text-cyan-400 "/>
            </div>
            <div className = " rounded-2xl border-4 border-neutral-800 p-4 ">
                <SiCplusplus className =" text-7xl text-blue-700" />
            </div>
            <div className = " rounded-2xl border-4 border-neutral-800 p-4 ">
                <img className = " rounded-2xl"src ={python} width={75} alt="about"  />
            </div>
            <div className = " rounded-2xl border-4 border-neutral-800 p-4 ">
                <FaHtml5 className =" text-7xl text-orange-500" />
            </div>
            <div className = " rounded-2xl border-4 border-neutral-800 p-4 ">
                <IoLogoCss3 className =" text-7xl text-blue-600" />
            </div>
            <div className = " rounded-2xl border-4 border-neutral-800 p-4 ">
                <IoLogoJavascript className =" text-7xl text-yellow-400"  />
            </div>


        </div>
    </div> 
  )
}

export default Skills
