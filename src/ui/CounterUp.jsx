"use client";
import CountUp from "react-countup";

export const CounterUp = ({ content }) => {
  const cols = content.length;

  return (
    <div className="w-[80%] lg:w-full flex justify-around items-center flex-col lg:flex-row space-y-7 lg:space-y-0 py-10 mx-auto">
      {content.map((content, index) => {
        return (
          <div
            key={index}
            className={`w-full flex flex-col justiy-center items-center lg:w-1/${cols}`}
          >
            <p className="font-bold text-md font-mono">{content.label}</p>
            <CountUp
              start={0}
              end={content.number}
              delay={1}
              duration={10}
              suffix={content.suffix && content.suffix}
            >
              {({ countUpRef }) => (
                <div className="text-[80px] lg:text-[60px] lg:py-3 font-bold font-exo2">
                  <span ref={countUpRef} />
                </div>
              )}
            </CountUp>
          </div>
        );
      })}
    </div>
  );
};
