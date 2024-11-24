"use client"
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  // State type is 'number | null' to represent the active FAQ index or null
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Function type for 'toggleFAQ' is (index: number)
  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs: FAQItem[] = [
    { question: "How the affiliate program works?", answer: "Lorem ipsum dolor sit amet, hendrerit omittant mel, es vidit animal iracund." },
    { question: "How to create customer panel?", answer: "Lorem ipsum dolor sit amet, hendrerit omittant mel, es vidit animal iracundia." },
    { question: "How delete my account?", answer: "Id alien accus consetetur em es vidit animal iracundia. es vidit animal iracundia" },
    { question: "How to invite people with referral link?", answer: "Lus te altera essent incorrup. Lorem ipsum dolor sit amet." },
    { question: "Is iOS app available for the iPhone?", answer: "Lorem ipsum dolor sit amet, hendrerit omittant mel, es vidit animal." },
  ];

  return (
    <div className="bg-gradient-to-r mt-[80px] from-white flex flex-col md:flex-row justify-between to-pink-50 py-16 px-4 sm:px-12 md:px-20 lg:px-36 xl:px-48">
      {/* Left Section */}
      <div className="max-w-4xl flex flex-col mx-8 justify-between items-center text-center mb-12 md:mb-0 md:items-start">
        <h2 className="text-[36px] md:text-4xl font-medium text-gray-900 mb-4">
          Have any thought? <br />Look here.
        </h2>
        <p className="text-gray-500 mb-6 text-[16px] sm:text-[19px]">
          Lorem ipsum dolor sit amet, hendrerit <br /> omittant mel, es vidit animal iracundia <br /> lus te altera essent incorrup.
        </p>
        <button className="bg-[#ff436b] text-bold hover:bg-[#363fbe] text-[16px] sm:text-[19px] text-white px-6 sm:px-8 py-2 rounded-3xl font-medium">
          Go to FAQ
        </button>
      </div>

      {/* Right Section */}
      <div className="space-y-4 mt-8 md:mt-0 relative md:right-[200px] flex flex-col ">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={`border border-gray-200 rounded-lg p-4 transition-all duration-300 ${
              activeIndex === index ? "bg-white shadow-md" : "bg-gray-50"
            }`}
          >
            <div
              className="flex justify-between items-center cursor-pointer"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-gray-800 font-semibold text-[18px] sm:text-[20px]">{faq.question}</h3>
              <span className="text-pink-500 font-bold text-[20px]">{activeIndex === index ? "−" : "+"}</span>
            </div>
            {activeIndex === index && (
              <p className="mt-3 text-gray-600 text-[14px] sm:text-[16px]">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
