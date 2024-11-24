"use client"
import React from "react";
import { IoCubeOutline } from "react-icons/io5";
import { FaRegStar } from "react-icons/fa";
import { IoMdTime } from "react-icons/io";
import { Button } from "./ui/button";
import { motion } from "framer-motion"; // Import motion from framer-motion

const Content = () => {

  // Variants for animation
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 60, damping: 20 } }, // smoother motion
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.4,  // Increase stagger time for more smoothness
      }
    }
  };

  return (
    <div className="flex flex-col md:flex-row justify-center gap-10 items-start md:items-center bg-[#363fbe] h-auto md:h-[800px] w-full px-4 py-8">
      {/* Left side with text animation */}
      <motion.div
        className="flex flex-col gap-6 md:gap-10 relative md:-top-16  md:text-left"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        <motion.h1
          className="font-semibold text-white md:text-start text-center text-[30px] md:text-[58px]"
          variants={textVariant} // Apply animation to the title
        >
          Advanced <br /> software that <br /> belongs
        </motion.h1>
        <motion.p
          className="text-white  text-sm md:text-base"
          variants={textVariant} // Apply animation to the paragraph
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit.<br />
          repudiandae reprehenderit vero consequuntur sed  <br />
          et sequi porro quibusdam! et sequi porro quibusdam!
        </motion.p>
      </motion.div>

      {/* Right side with icon and text animations */}
      <motion.div
        className="flex flex-col items-center md:items-start justify-between relative md:top-18 space-y-8 md:space-y-16"
        variants={containerVariant}
        initial="hidden"
        animate="visible"
      >
        {/* Icon/Text Block 1 */}
        <motion.div
          className="flex justify-between items-center  space-x-4"
          variants={textVariant} // Apply animation to each icon/text block
        >
          <div className="bg-white p-5 rounded-xl">
            <IoMdTime />
          </div>
          <div className="text-left">
            <h1 className="text-white font-medium text-[16px] md:text-[18px]">Strategy & Business</h1>
            <p className="text-white font-light text-[12px] md:text-[14px]">Veniam quis nostrud ullamco exercitation <br /> laboris aliquip ex ea duis aute irure dolor.</p>
          </div>
        </motion.div>

        {/* Icon/Text Block 2 */}
        <motion.div
          className="flex justify-between items-center  space-x-4"
          variants={textVariant}
        >
          <div className="bg-white p-5 rounded-xl">
            <IoCubeOutline />
          </div>
          <div className="text-left">
            <h1 className="text-white font-medium text-[16px] md:text-[18px]">Product Development</h1>
            <p className="text-white font-light text-[12px] md:text-[14px]">Veniam quis nostrud ullamco exercitation <br /> laboris aliquip ex ea duis aute irure dolor.</p>
          </div>
        </motion.div>

        {/* Icon/Text Block 3 */}
        <motion.div
          className="flex justify-between items-center  space-x-4"
          variants={textVariant}
        >
          <div className="bg-white p-5 rounded-xl">
            <FaRegStar />
          </div>
          <div className="text-left">
            <h1 className="text-white font-medium text-[16px] md:text-[18px]">Futures Research</h1>
            <p className="text-white font-light text-[12px] md:text-[14px]">Veniam quis nostrud ullamco exercitation <br /> laboris aliquip ex ea duis aute irure dolor.</p>
          </div>
        </motion.div>

        {/* Button */}
        <motion.div
          variants={textVariant}
        >
          <Button className="bg-blue-500 relative right-14 text-white px-8 py-6 rounded-2xl text-[14px] md:text-[16px] font-semibold hover:bg-pink-500">
            See how it works
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Content;
