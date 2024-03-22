"use client";
import { useState } from "react";
import { FaCheck, FaCheckCircle, FaCircle } from "react-icons/fa";

export const FAQ = () => {
  const faqPoints = [
    "Commercialization of ready to deploy renewable",
    "We have be keeping up the plant with trees.",
    "Energy department research will help eagles",
    "Help secure the climate and support its normal assets.",
  ];

  const faqs = [
    {
      question: "What are the benefits of installing solar panels?",
      answer:
        "Lower energy bills, Reduced carbon footprint, Energy independence, Increased property value",
    },
    {
      question:
        "What factors determine the efficiency of a solar energy system?",
      answer:
        "Location and amount of sunlight, Quality of solar panels and components, System design and installation, Maintenance and upkeep",
    },
    {
      question: "Do solar panels require maintenance?",
      answer:
        "Solar panels are relatively low maintenance, requiring occasional cleaning and inspection to ensure optimal performance.",
    },
    {
      question: "Can solar panels work during cloudy days or at night?",
      answer:
        "While solar panels generate less electricity on cloudy days, they can still produce some power. At night, solar panels do not generate electricity unless paired with battery storage or connected to the grid for net metering.",
    },
    {
      question: "What is a solar inverter, and why is it necessary?",
      answer:
        "A solar inverter converts the DC electricity produced by solar panels into usable AC electricity for your home or business.",
    },
    {
      question: "Do you offer off-grid solar solutions?",
      answer:
        "Yes, we offer off-grid solar solutions for locations without access to the utility grid, utilizing battery storage to store excess energy for use when sunlight is unavailable.",
    },
    {
      question: "Can solar panels power outdoor lighting?",
      answer:
        "Yes, solar streetlights harness solar energy to power LED lights, providing efficient and environmentally friendly outdoor lighting solutions.",
    },
  ];

  const [expandedFAQ, setExpandedFAQ] = useState(0);

  return (
    <div className="w-full py-[30pt] px-[20pt] scroll-m-28" id="faqs">
      <div className="flex md:w-[70%] mx-auto justify-between md:space-x-6 md:space-y-0 space-y-10 flex-col md:flex-row">
        <div className="w-full md:w-1/2">
          {/* main faq section */}

          <h4 className="font-bold text-sm text-green-600">
            You Have Our Attention
          </h4>
          <h1 className="font-bold text-3xl md:text-5xl">
            Have Any Questions?
          </h1>

          <ul className="flex flex-col space-y-2.5 my-10 list-none">
            {faqPoints.map((item, index) => (
              <li key={index}>
                <div className="flex font-[450s] space-x-3 text-md items-center">
                  <div className="w-[15pt] h-[15pt] px-1 py-1 text-sm justify-center items-center bg-green-600 rounded-full text-green-100 flex ">
                    <FaCheck />
                  </div>
                  <div>{item}</div>
                </div>
              </li>
            ))}
          </ul>

          <div className="w-full">
            <a
              href="#"
              className="px-5 py-4 rounded bg-green-600 hover:bg-green-700 hover:text-green-50 text-sm font-[450] transition duration-300 text-white"
            >
              VIEW MORE
            </a>
          </div>
        </div>

        <div className="w-full md:w-1/2 flex flex-col space-y-2">
          {faqs.map((faq, index) => (
            <div
              key={index}
              onClick={() => setExpandedFAQ(index)}
              className="w-full bg-white rounded-lg px-5 py-4 cursor-pointer transition duration-500"
            >
              <div className="flex justify-between items-center font-bold">
                <div>
                  <h3>{faq.question}</h3>
                </div>
                <div>
                  <div
                    className={`w-6 h-6 rounded-full shadow-inner ${
                      expandedFAQ == index ? "bg-green-600" : "bg-gray-50"
                    }`}
                  ></div>
                </div>
              </div>

              <div
                className={`${
                  expandedFAQ == index ? "faq-visible" : "faq-hidden"
                } leading-relaxed my-6`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
