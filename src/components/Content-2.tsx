"use client"
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion for animation

const Content2 = () => {
  return (
    <div className="flex justify-center  p-16 gap-28 items-end">
      {/* Left Side */}
      <div className="flex flex-col relative -top-48 right-20 justify-between items-center gap-20">
        {/* For Images */}
        <div>
          <motion.div 
            initial={{ opacity: 0, y: 50 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ duration: 1.5 }}
            className=""
          >
            <Image
              src={"/images/home-img-2.jpg"}
              alt="Image"
              width={700}
              height={700}
              className="rounded-[36px] mx-20 mt-28 md:mt-10 md:relative md:left-10"
            />
          </motion.div>

          {/* 3 images in container with text */}
          <div>
            <motion.div 
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              transition={{ duration: 1.5, delay: 0.5 }}
              className="flex justify-center gap-8 relative left-20 -top-10 md:relative md:-top-20  items-center md:w-[50%] md:left-72  bg-white p-6 rounded-lg shadow-md"
            >
              {/* Image 1 */}
              <div className="w-[60%] md:w-[50%]">
                <Image
                  src="/images/girllogo.png"
                  alt="Image 1"
                  className="object-cover"
                  height={540}
                  width={540}
                />
              </div>

              
             
              <div className="flex flex-col">
                <h1 className="font-bold text-2xl">357+</h1>
                <p className="text-sm">Our expert team</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Text */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5, delay: 1 }}
          className="flex  flex-wrap   relative left-20 md:left-0 items-center justify-center gap-16"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-purple-600 text-6xl font-medium">23+</h2>
            <p className="text-lg">Years <br /> Of Experience</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-pink-600 text-6xl font-medium">79%</h2>
            <p className="text-lg">Year on <br /> year Growth</p>
          </div>
          <div className="flex flex-col gap-4">
            <h2 className="text-yellow-500 text-6xl font-medium">42+</h2>
            <p className="text-lg">Countries <br /> Of Operation</p>
          </div>
        </motion.div>

        {/* More options */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5, delay: 1.5 }}
          className="flex flex-col gap-10 relative left-20 md:left-0  md:items-start justify-between"
        >
          <h1 className="text-[72px] font-medium">More options</h1>
          <p>
            Lorem ipsum dolor sit amet, hendrerit omittant mel, es vidit <br /> animal
            iracundia. Ius te altera essent incorrupt. Id alien accu <br /> consetetur
            em es vidit animal iracundia.
          </p>
        </motion.div>
      </div>

      {/* Right Side */}
      <div className=" hidden md:flex md:flex-col  gap-16 relative  -top-[500px]">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5, delay: 2 }}
          className="font-serif text-[46px]"
        >
          We’re building <br /> business for your <br /> digital economy
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1.5, delay: 2.5 }}
          className="font-thin text-lg"
        >
          Lorem ipsum dolor sit amet, hendrerit omittant mel, <br /> es vidit
          animal iracundia. Ius te altera essent incorrupt.
          <br /> Id alien accu consetetur em es vidit animal iracundia.
          <br /> Lus te altera essent incorrupt. Veniam quis nostrud <br />
          ullamco laboris aliquip ex ea duis aute irure dolor kin
          <br /> reprehenderit in voluptate velit esse cillum.
        </motion.p>
      </div>
    </div>
  );
};

export default Content2;
