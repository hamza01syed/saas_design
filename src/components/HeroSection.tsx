"use client"
import React from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Image from 'next/image'
import { motion } from 'framer-motion'

const HeroSection = () => {
  return (
    <div className='relative flex flex-col justify-center bg-[#fffafa] items-center px-4 md:px-8'>
        {/* Hero Heading Animation */}
        <motion.h1 
          className='font-medium leading-[50px] sm:leading-[80px] md:leading-[120px] text-[32px] sm:text-6xl md:text-[100px] text-center mt-16 md:mt-20' 
          initial={{ opacity: 0, y: 50 }} // Start from below and invisible
          animate={{ opacity: 1, y: 0 }}   // End at normal position with full opacity
          transition={{ duration: 1, ease: 'easeOut' }} // Add timing
        >
          Advanced software <br/> that
          belongs to all <br/>business
        </motion.h1>
        
        {/* Input and Button Animation */}
        <motion.div
          className='flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 sm:mt-16 w-full'
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
            <Input 
              type="email" 
              placeholder="Business Email Address" 
              className='w-full sm:w-[500px] h-12 sm:h-14 rounded-[25px] px-4'
            />
            <Button className='bg-[#363fbe] w-full md:w-[12%] px-6 py-6 sm:px-[30px] sm:py-[25px] text-[14px] sm:text-[16px] leading-[25px] rounded-[21px] hover:bg-pink-500 mt-4 sm:mt-0'>
              Get a Demo
            </Button>
        </motion.div>
        
        {/* Hero Image Animation */}
        <motion.div
          className='absolute top-0'
          initial={{ opacity: 0, y: -50 }}  // Start from above
          animate={{ opacity: 1, y: 0 }}    // End at normal position
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <Image 
            src="/images/hero.png" 
            alt="hero" 
            width={1200} 
            height={500} 
            className="object-cover w-full max-w-[1200px]" 
          />
        </motion.div>
        
        {/* Hero 2 Image (Fixed) */}
        <motion.div
          className='relative mt-10 md:mt-32 w-[90%] rounded-3xl top-6 md:top-20'
          initial={{ opacity: 0 }}  // Start with opacity 0
          animate={{ opacity: 1 }}   // Fade in
          transition={{ duration: 1, ease: 'easeIn' }}
        >
          <Image 
            src="/images/hero-2.png" 
            className="w-full h-auto object-cover max-w-[1485px]" 
            alt="hero-2" 
            width={1200} 
            height={800} 
          />
        </motion.div>
    </div>
  )
}

export default HeroSection
