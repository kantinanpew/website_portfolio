import {RiReactjsLine} from "react-icons/ri"
import { IoLogoJavascript } from "react-icons/io5";
import { IoLogoCss3 } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { SiCplusplus } from "react-icons/si";
import python from "../assets/python.svg";
import {motion} from "framer-motion";

const iconVariants = (duration) =>({
    initial: {y:-10},
    animate:{
        y:[10,-10],
        transition:{
                duration: duration,
                ease: "linear",
                repeat:Infinity,
                repeatType:"reverse"
                
            }
    },
   

})
const Skills = () => {
  return (
    <div className = "boreder-b border-neutral-800 pb-24">
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial={{opacity:0,y:-100}}
        transition={{duration:1.5}}
        className = "my-20 text-center text-4xl"> Skills
        </motion.h1>
        <motion.div 
        whileInView={{opacity:1,x:0}}
        initial={{opacity:0 ,x:-100}}
        transition={{duration: 1.5}}
        
        className = "flex flex-wrap items-center justify-center gap-4">
            <motion.div
            variants ={iconVariants(2.5)}
            initial= "initial"
            animate = "animate"
            
            className = " rounded-2xl border-4 border-neutral-800 p-4 ">
                <RiReactjsLine className = "text-7xl text-cyan-400 "/>
            </motion.div>
            <motion.div 
            variants ={iconVariants(3)}
            initial= "initial"
            animate = "animate"
            
            className = " rounded-2xl border-4 border-neutral-800 p-4 ">
                <SiCplusplus className =" text-7xl text-blue-700" />
            </motion.div>
            <motion.div 
            variants ={iconVariants(5)}
            initial= "initial"
            animate = "animate"
            
            className = " rounded-2xl border-4 border-neutral-800 p-4 ">
                <img className = " rounded-2xl"src ={python} width={75} alt="about"  />
            </motion.div>
            <motion.div 
            variants ={iconVariants(2)}
            initial= "initial"
            animate = "animate"
            
            className = " rounded-2xl border-4 border-neutral-800 p-4 ">
                <FaHtml5 className =" text-7xl text-orange-500" />
            </motion.div>
            <motion.div
            variants ={iconVariants(6)}
            initial= "initial"
            animate = "animate"
            

            className = " rounded-2xl border-4 border-neutral-800 p-4 ">
                <IoLogoCss3 className =" text-7xl text-blue-600" />
            </motion.div>
            <motion.div 
            variants ={iconVariants(4)}
            initial= "initial"
            animate = "animate"
            
            className = " rounded-2xl border-4 border-neutral-800 p-4 ">
                <IoLogoJavascript className =" text-7xl text-yellow-400"  />
            </motion.div>


        </motion.div>
    </div> 
  )
}

export default Skills
