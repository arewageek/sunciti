import { CallToAction } from "@/ui/CallToAction";
import { CounterUp } from "@/ui/CounterUp";
import { PagesHeader } from "@/ui/PagesHeader";
import { Partners } from "@/ui/Partners";

const AboutUs = () => {
  const aboutSection = [
    {
      title: "About Us",
      content:
        "We Provide clean, dependable, environmentally friendly, and cost-effective electrical energy to people all over the world in order to save our planet for future generations.",
    },
    {
      title: "Our Vision",
      content:
        "We envision a time when solar powered technologies and solutions are available limitlessly across all of Africa, helping Africans truly harness the power in it's surrounding not just dependent on solar alone, but from all other forms of renewable energy sources",
    },
    {
      title: "Our Mission",
      content:
        "We aim to saturate the renewable energy space with high definition and standard solar and renewable energy solutions. We plan to simplify the process of living and assist businesses as well as individuals truely harness energy from a source that's sustainable, renewable, and helps to heal the works",
    },
  ];

  return (
    <div className="">
      <PagesHeader
        title="About Us"
        image="./assets/images/solar-technicians.jpg"
      />

      <div className="w-full lg:w-[80%] mx-auto px-2 lg:px-10">
        <div className="mt-[100pt] mb-10 px-5 lg:px-10">
          <div className="w-full lg:w-4/5 flex flex-col space-y-3 text-gray-800">
            <div className="flex items-center space-x-2">
              <p className="w-[20pt] border-b-2 border-b-gray-500"></p>
              <p className="font-mono text-sm tracking-wider">
                Main Initiative
              </p>
            </div>
            <h2 className="text-2xl lg:text-[48px] font-semibold font-poppins leading-snug">
              Our goal is to change the modern world and create sustainable &
              nature friendly energy solutions for future generations.
            </h2>

            <div className="w-full">
              <div className="w-full my-10 lg:space-x-4 space-y-5 lg:space-y-0 flex flex-col lg:flex-row text-justify lg:text-left justify-between px-3 pt-10">
                {aboutSection.map((text, index) => {
                  return (
                    <div key={index} className="w-full lg:w-1/3 px-5 p-5">
                      <h3 className="font-semibold text-2xl mb-2 text-gray-800">
                        {text.title}
                      </h3>
                      <p className="text-gray-700">{text.content}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="w-full flex justify-center items-center">
              <CounterUp
                content={[
                  { label: "Clients", number: 90, suffix: "+" },
                  { label: "Installations", number: 5, suffix: "K+" },
                  { label: "Years Experience", number: 12, suffix: "+" },
                  { label: "Team", number: 50, suffix: "+" },
                ]}
              />
            </div>
          </div>
        </div>
      </div>

      <CallToAction />

      <Partners />
    </div>
  );
};

export default AboutUs;
