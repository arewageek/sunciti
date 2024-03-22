import React from "react";

export const Partners = () => {
  const partners = [
    { logo: "", name: "Client 1" },
    { logo: "", name: "Client 2" },
    { logo: "", name: "Client 3" },
    { logo: "", name: "Client 4" },
    { logo: "", name: "Client 5" },
    { logo: "", name: "Client 6" },
    { logo: "", name: "Client 7" },
    { logo: "", name: "Client 8" },
  ];

  return (
    <div className="w-full lg:w-[80%] mx-auto px-2 lg:px-10">
      <div className="my-10 px-5 lg:px-10">
        <div className="w-full lg:w-4/5 mx-auto  flex flex-col space-y-3">
          <div className="flex items-center space-x-2">
            <p className="w-[20pt] border-b-2 border-b-gray-500"></p>
            <p className="font-mono text-sm tracking-wider">Our Partners</p>
          </div>
          <h2 className="text-2xl lg:text-[48px] font-semibold font-poppins leading-snug">
            Meet Our Top Clients
          </h2>

          <div className="w-full lg:space-x-0 space-y-5 lg:space-y-0 flex flex-col lg:flex-row text-center lg:text-left px-3 pt-10 flex-wrap">
            {partners.map((text, index) => {
              return (
                <div key={index} className="w-full lg:w-1/4 px-2 py-5 mx-auto">
                  <div className="group bg-transparent w-[200px] h-[200px] m-auto before:bg-gray-800 before:w-[210px] before:h-[280px] relative before:absolute before:top-0 before:translate-x-[-200%] lg:hover:before:translate-x-0 before:transition before:duration-500 overflow-hidden">
                    <img
                      src={partners.logo}
                      alt={partners.name}
                      className="w-full h-full relative top-0"
                    />
                    <div className="font-semibold text-[10pt] mb-2 absolute bottom-0 text-center w-full lg:group-hover:text-gray-50 transition">
                      <h6>{text.name}</h6>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
