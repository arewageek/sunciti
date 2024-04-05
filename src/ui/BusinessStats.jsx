import React from "react";

export const BusinessStats = () => {
  return (
    <div className="w-full my-3 px-5">
      <div className="w-full md:w-[70%] mx-auto flex flex-col lg:flex-row justify-between md:space-x-5 space-y-5 md:space-y-0">
        <div className="w-full md:w-[40%] md:px-4 py-2">
          <div className="font-barlow">
            <h4 className="font-bold uppercase text-green-600 text-sm">
              Commercial, Residential & Industrial Solar Systems!
            </h4>
            <h1 className="text-2xl md:text-3xl font-bold">
              Most Reliable and Sustainable Energy Plant in North Central
              Nigeria.
            </h1>
          </div>
        </div>

        <div className="w-full md:w-[55%] md:px-4 py-2 font-barlow ">
          <div className="text-lg">
            <p className="font-bold mb-4">
              Today, our company is one of the most solar farms and installers
              in the West Africa. With our wealth of experience and
              understanding, we have gained the trust of many key dealers and
              contractors of solar equipments.
            </p>
            <p className="font-light mt-4">
              While improving the yield and performance of solar energy
              products, our experience enables us to provide in-depth material
              sourcing, financing and supply chain expertise for every step.
            </p>
          </div>

          <div className="w-full lg:w-[90%] flex justify-between flex-wrap">
            <div className="w-full md:w-1/2 px-2 py-2">
              <div className="w-full h-full px-5 py-5 flex flex-col space-y-0 rounded-3xl shadow bg-gray-">
                <h4 className="font-bold text-md text-green-500 -mb-5">
                  Market Value
                </h4>
                <h1 className="font-[450] text-[80px]">
                  $200
                  <span className="text-[45pt]">K</span>
                </h1>
                <p>
                  With a vision to help create a world where clean energy is
                  powered by individuals, ingenuity independence.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-2 py-2">
              <div className="w-full h-full px-5 py-5 flex flex-col space-y-0 rounded-3xl shadow bg-gray-">
                <h4 className="font-bold text-md text-green-500 -mb-5">
                  Annual Industry Growth
                </h4>
                <h1 className="font-[450] text-[80px]">
                  8<span className="text-[45pt]">%</span>
                </h1>
                <p>
                  With the weather condition and availability of sunlight in
                  Nigeria, there's been a rapid growth in the adoption of power
                  technologies.
                </p>
              </div>
            </div>

            <div className="w-full md:w-1/2 px-2 py-2">
              <div className="w-full h-full px-5 py-5 flex flex-col space-y-0 rounded-3xl shadow bg-gray-">
                <h4 className="font-bold text-md text-green-500 -mb-5">
                  Industry Experience
                </h4>
                <h1 className="font-[450] text-[80px]">
                  20
                  <span className="text-3xl">+ </span>
                  <span className="text-[45pt]">Yrs </span>
                </h1>
                <p>
                  The team behind this great establishment have a gained over
                  two decades of experienced in this industry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
