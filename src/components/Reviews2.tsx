"use client"
import { useState } from "react"
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

export default function Component() {
  const [currentReview, setCurrentReview] = useState(0)

  const reviews = [
    {
      name: "David Schultz",
      role: "Project manager",
      content: "Lorem ipsum dolor sit amet, hendrerit omittant mel, es vidit animal iracundia. Ius te altera essent incorrupt. Id alien accu consetetur em es vidit animal iracundia. Lus te altera essent incorrupt. Veniam quis nostrud exercitation ullamco laboris aliquip ex ea duis aute irure!"
    },
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {
      name: "Michael Chen",
      role: "Lead Developer",
      content: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo."
    }
  ]

  const nextReview = () => {
    setCurrentReview((prev) => (prev + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <div className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-[50px]   mb-12">
          Our happy clients say<br/> about us
        </h2>
        
        <div className="flex flex-col md:flex-row gap-12">
          <div className="w-full md:w-1/2">
            <img
              src="/images/reviews.jpg"
              alt="Happy clients"
              className="w-full rounded-3xl shadow-lg mb-8"
            />
            <h3 className="text-[36px] font-medium relative  md:top-20 ">
              More than 1,300+ agencies using <br/>TheGem software
            </h3>
           
          </div>
          
          <div className="w-full md:w-1/2 flex flex-col justify-center">
          <div className="flex flex-col ">  
            <h3 className="text-2xl font-semibold mb-2">
              {reviews[currentReview].name}
            </h3>
            <p className="text-gray-500 mb-6">{reviews[currentReview].role}</p>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">
              {reviews[currentReview].content}
            </p>
            
            <div className="flex gap-4">
              <button
                onClick={prevReview}
                className="p-2 rounded-full border hover:bg-gray-50"
                aria-label="Previous review"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={nextReview}
                className="p-2 rounded-full border hover:bg-gray-50"
                aria-label="Next review"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
              
            </div>
            
            </div>
            <div className="flex  gap-16 mt-10 md:mt-[240px] ">
              <div className="text-center">
                <div className="text-4xl font-medium mr-12 mb-2">4.9</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-gray-500 mr-8">Trustpilot</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-medium mr-12 mb-2">5.0</div>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <div className="text-gray-500 mr-8">Capterra</div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}