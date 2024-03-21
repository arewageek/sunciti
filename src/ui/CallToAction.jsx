import React from "react";
import { AiFillRocket, AiOutlineBank } from "react-icons/ai";
import { Call2ActionsCard } from "./Call2ActionsCard";
import {
  FaBuilding,
  FaCloudSun,
  FaHardHat,
  FaHeadphonesAlt,
  FaIndustry,
  FaRocket,
  FaSolarPanel,
  FaSun,
} from "react-icons/fa";
import { CgAbstract, CgSupport } from "react-icons/cg";

export const CallToAction = () => {
  const call2actionCards = [
    {
      icon: <AiOutlineBank />,
      note: "Save money & increase value of your home by solar panels.",
    },
    {
      icon: <FaSolarPanel />,
      note: "The sun provides us with free energy, place solar panels on roof.",
    },
    {
      note: "The sun provides us with free energy, place solar panels on roof.",
      icon: <FaBuilding />,
    },
    {
      note: "Our sales engineers have experience & can design any system.",
      icon: <FaHardHat />,
    },
    {
      note: "We must go above our customer expectations during interaction.",
      icon: <FaHeadphonesAlt />,
    },
    {
      note: "Solar cell, solar module manufacturing facilities are considerable",
      icon: <FaCloudSun />,
    },
    {
      note: "Solar value chain has become necessary to support PV market’s.",
      icon: <CgAbstract />,
    },
  ];

  return (
    <div className="w-full py-[30pt] md:px-[100pt]">
      <div className="w-full bg-gray-800 pt-[30pt] md:pb-[30pt] md:px-[50pt] md:py-[40pt]">
        <div className="w-full md:w-[80%] px-10 mx-auto flex justify-between flex-col md:flex-row space-y-10 lg:space-y-0">
          <div className="w-full lg:w-1/2">
            <p className="text-[#fff700] font-[450] text-sm md:text-lg">
              Sustainable, Reliable & Affordable Energy!
            </p>
          </div>
          <div className="w-full lg:w-1/2">
            <h3 className="font-bold text-white text-2xl lg:text-3xl leading-tight lg:leading-relaxed font-barlow text-wrap">
              Providing Value To Our Clients <br className="hidden md:block" />
              Through Ongoing Product Updates <br className="hidden md:block" />
              And Everlasting Innovation.
            </h3>
          </div>
        </div>

        <div className="w-full lg:w-[80%] mx-auto rounded-t-3xl md:rounded-xl flex flex-col space-y-3 md:space-y-0 md:flex-row flex-wrap bg-gray-50 my-10 px-5 py-10">
          {call2actionCards.map((card, index) => (
            <Call2ActionsCard key={index} icon={card.icon} note={card.note} />
          ))}
        </div>

        <div className="py-5 pt-[50pt] w-[80%] mx-auto flex flex-col lg:flex-row md:justify-around md:items-center my-5 space-y-5 md:space-y-0">
          <div className="w-full lg:w-1/2 md:mx-4 text-white text-xl font-bold">
            If you have any questions or need help, feel free to contact with
            our team using the livechat or request for a free quotation to be
            sent to you via WhatsApp or email
          </div>

          <div>
            <a
              href=""
              className="px-8 py-3.5 rounded border-2 border-white-100 hover:bg-white hover:text-gray-600 text-sm text-white font-bold group flex justify-between items-center"
            >
              <div>REQUEST A FREE QUOTE</div>
              <div className="pl-4">
                <div className="group-hover:animate-pulse text-xl">
                  <FaRocket />
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
