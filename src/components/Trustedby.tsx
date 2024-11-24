"use client"
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function Trustedby() {
  const companies = [
    { name: "Google", logo: "/images/googlelogo.png" },
    { name: "Slack", logo: "/images/slacklogo.png" },
    { name: "Airtable", logo: "/images/airlogo.png" },
    { name: "PayPal", logo: "/images/paypallogo.png" },
    { name: "Dropbox", logo: "/images/dropboxlogo.png" },
  ]

  const text = "Trusted by nearly 5000+ customers & startups"
  
  // Define the animation for each character in the typewriter effect
  const textVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1, transition: { 
      delay: 0.1, 
      duration: 1, 
      staggerChildren: 0.1 
    }},
  }

  const charVariants = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
  }

  return (
    <div className="flex relative top-20 flex-col items-center justify-center py-20 bg-white shadow-lg rounded-3xl mx-6 sm:mx-12 md:mx-36">
      <motion.h2
        className="text-[28px] sm:text-[30px] p-4 md:text-[36px] font-medium mb-2 mt-4 text-center"
        variants={textVariants}
        initial="initial"
        animate="animate"
      >
        {text.split("").map((char, index) => (
          <motion.span
            key={index}
            variants={charVariants}
            className="inline-block"
          >
            {char}
          </motion.span>
        ))}
      </motion.h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        {companies.map((company) => (
          <Image
            key={company.name}
            src={company.logo}
            alt={company.name}
            width={500}
            height={500}
            className="h-32 sm:h-36 md:h-40 lg:h-48 w-auto"
          />
        ))}
      </div>
    </div>
  )
}
