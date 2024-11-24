"use client";
import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';
import { motion } from 'framer-motion';  // Import framer motion for animations

const Content3 = () => {
  return (
    <>
    <div className='w-full relative  md:mx-[100px] md:-top-[28px] md:-left-32 flex flex-col bg-[#fffafa] md:flex-row justify-center items-center'>
      {/* Left side */}
      <motion.div
        className='flex flex-col justify-between items-start'
        initial={{ opacity: 0, y: 50 }}  // Initial state - hidden and below
        animate={{ opacity: 1, y: 0 }}   // Final state - fully visible and in position
        transition={{ duration: 1 }}     // Smooth animation duration
      >
        <div className='w-[90%] mx-auto  h-[700px]'>
          <Image
            src={"/images/home-img-32.png"}
            alt="image"
            width={600}
            height={800}
            className='w-[707px] h-[810px]'
          />
        </div>
        <div >
          <motion.div
            initial={{ opacity: 0 }}      // Initial state for the button (hidden)
            animate={{ opacity: 1 }}      // Fade in the button
            transition={{ delay: 0.5, duration: 1 }} // Delay and duration
          >
            <Button className='bg-[#168afd] p-8 relative top-40 left-14 text-[19px] font-semibold rounded-2xl hover:bg-[#ff436b]'>
              View all options
            </Button>
          </motion.div>
        </div>
      </motion.div>

      {/* Right side */}
      <div className='flex flex-col justify-between items-center'>
        <motion.div
          className='relative top-10'
          initial={{ opacity: 0 }}          // Start with hidden
          animate={{ opacity: 1 }}          // Fade in to full visibility
          transition={{ duration: 1 }}      // Animation duration
        >
          <Image
            src={"/images/home-img-con3.png"}
            className='w-[607px] h-[529px] '
            alt="image"
            width={500}
            height={500}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}          // Start with hidden
          animate={{ opacity: 1 }}          // Fade in to full visibility
          transition={{ duration: 1, delay: 0.3 }} // Add a slight delay for the second image
        >
          <Image
            src={"/images/home-img-con34.png"}
            className='w-[607px] h-[529px] '
            alt="image"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
      
    </div>
    <div>
          <motion.div
            initial={{ opacity: 0 }}      // Initial state for the button (hidden)
            animate={{ opacity: 1 }}      // Fade in the button
            transition={{ delay: 0.5, duration: 1 }} // Delay and duration
          >
            <Button className='bg-[#168afd] md:hidden p-6  relative top-24 left-4 text-[19px] font-semibold rounded-2xl hover:bg-[#ff436b]'>
              View all options
            </Button>
          </motion.div>
        </div>
    </>
  );
};

export default Content3;
