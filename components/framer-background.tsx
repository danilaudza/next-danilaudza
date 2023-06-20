"use client"

import { motion } from "framer-motion"

const FramerBackground = () => {
  return (
    <div className="absolute -z-10 h-screen w-screen overflow-hidden ">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          rotate: [63, 63, 63],
        }}
        transition={{ repeat: Infinity, duration: 5, ease:"easeInOut"}}
        className="absolute top-96 h-[20px] w-[800px] rotate-[63deg] transform rounded-full bg-red-600/50 blur-[70px] dark:bg-indigo-600/50 lg:left-96"
      ></motion.div>
      <motion.div 
      animate={{
        rotate: [63, 80, 63],
      }}
      transition={{ repeat: Infinity, duration: 5, ease:"easeInOut"}}
      className="absolute top-96 h-[20px] w-[600px] rotate-[63deg] transform rounded-full bg-green-600/50 blur-[70px] dark:bg-blue-600/50 lg:left-72"></motion.div>
    </div>
  )
}

export default FramerBackground
