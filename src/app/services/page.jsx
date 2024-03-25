import { PagesHeader } from "@/ui/PagesHeader";
import { AiFillThunderbolt } from "react-icons/ai";
import {
  FaBolt,
  FaCartPlus,
  FaGraduationCap,
  FaHeadphonesAlt,
  FaLightbulb,
  FaPenAlt,
  FaSolarPanel,
  FaSuperpowers,
} from "react-icons/fa";

export default function Services() {
  const values = [
    {
      title: "Professional Team",
      desc: "We have the best team on the job ensuring you get nothing short of the best",
      image:
        "https://ecoblue.themerex.net/wp-content/uploads/2023/01/post26-copyright-890x664.jpg",
    },
    {
      title: "Expert Installation",
      desc: "Our team is deeply experienced in the scope of production and installation of solar components",
      image:
        "https://ecoblue.themerex.net/wp-content/uploads/2023/01/post27-copyright-890x664.jpg",
    },
    {
      title: "Regular Maintenance",
      desc: "We do not just install but also maintain the facility to ensure continuity",
      image:
        "https://ecoblue.themerex.net/wp-content/uploads/2023/01/post12-copyright-890x664.jpg",
    },
    {
      title: "Consultancy",
      desc: "We educate you on best practices to ensure it serves you for a very long period of time",
      image:
        "https://ecoblue.themerex.net/wp-content/uploads/2023/01/post12-copyright-890x664.jpg",
    },
    {
      title: "Sales of Equipments",
      desc: "We save you the hassle of having to search for quality as we bring them right to you",
      image:
        "https://ecoblue.themerex.net/wp-content/uploads/2023/01/post23-890x664.jpg",
    },
    {
      title: "Custom Production",
      desc: "We have deals with top producers to bring you custom made gadgets perfect for you",
      image:
        "https://ecoblue.themerex.net/wp-content/uploads/2023/01/post24-copyright-890x664.jpg",
    },
  ];

  const services = [
    {
      icon: <FaSolarPanel />,
      title: "Solar Inverter Installation",
      desc: "We install solar panels and inverter to provide your building with sufficient energy",
    },
    {
      icon: <FaHeadphonesAlt />,
      title: "Consultancy",
      desc: "We educate our clients on the best approach to optimizing and maintaining the gadgets",
    },
    {
      icon: <FaLightbulb />,
      title: "Solar Streetlight",
      desc: "We install and maintain solar streetlight systems for rural and urban communities",
    },
    {
      icon: <FaCartPlus />,
      title: "Sales and Shipping",
      desc: "We sell a variety of solar gadgets and handle the entire logistics process for you",
    },
    {
      icon: <FaGraduationCap />,
      title: "Youth Empowerment",
      desc: "We empower young people on solar installation basing mostly on practicals",
    },
    {
      icon: <AiFillThunderbolt />,
      title: "Electrical Wiring and Design",
      desc: "We design and implement electrical designs and wire buildings of all types",
    },
  ];
  return (
    <div>
      <PagesHeader title="Our Services" />

      <div className="my-10 ">
        <div className="text-center w-full px-10 lg:w-1/2 mx-auto text-black ">
          <p className="uppercase text-[12pt] font-bold">
            Why Our Clients Value Us
          </p>
          <h3 className="font-bold text-4xl lg:text-5xl font-exo2">
            The World's Best Solar Panels and Power Stations
          </h3>
        </div>
        <div className="w-full px-5 lg:w-3/5 mx-auto">
          <div className="w-full mt-10 px-0 flex flex-col lg:flex-row space-y-4 lg:space-y-0 flex-wrap text-black">
            {values.map((value, index) => (
              <div className="w-full lg:w-1/3 p-4" key={index}>
                <div className="overflow-hidden group cursor-pointer rounded-t-2xl">
                  <div className="overflow-hidden w-full">
                    <img
                      src={value.image}
                      className="w-full group-hover:scale-110 transition duration-300"
                    />
                  </div>
                  <div className="w-full text-2xl font-bold cursor-pointer transition duration-500 flex my-3 -translate-x-10 group-hover:translate-x-0">
                    <div className="mr-4 opacity-0 group-hover:opacity-100 transition duration-500">
                      0{index + 1}.
                    </div>
                    <div>{value.title}</div>
                  </div>

                  <div className="w-full my-3 translate-x-[-100%] group-hover:translate-x-0 border-b-2 border-b-black/50 transition duration-500"></div>
                  <div className="hidden group-hover:block transition duration-500 lg:block">
                    <p className="text-sm text-gray-700 opacity-0 group-hover:opacity-100 transition duration-500 translate-y-10 group-hover:translate-y-0">
                      {value.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="w-full bg-white px-6 py-10 lg:py-20 text-black ">
          <div className="w-full lg:w-2/3 mx-auto flex flex-col lg:flex-row space-x-3 justify-center">
            <div className="w-full lg:w-1/2 text-black">
              <span className="uppercase font-bold">Why Choose Us?</span>
              <h3 className="text-2xl lg:text-6xl font-[650] mt-2">
                Save Energy and Stay Fully Charged.
              </h3>
              <p className="text-lg my-10 text-gray-700">
                We provide you with an alternative energy source that's
                sustainable, reliable, efficient and yet save you a lot of money
              </p>
              <div className="my-10">
                <button className="px-6 py-3 bg-green-600 text-white before:h-[80pt] before:w-full relative before:absolute before:bg-gray-800 before:top-[-50%] before:left-[-10pt] before:-rotate-12 hover:z-0 overflow-hidden font-bold text-sm before:translate-x-[-120%] hover:before:translate-x-0 before:duration-1000 before:transition">
                  <span className="z-1 relative">MORE DETAILS</span>
                </button>
              </div>
            </div>

            <div className="w-full lg:w-1/2 px-4 lg:px-10 flex flex-col space-y-10">
              <div className="w-full flex space-x-5 items-center">
                <div className="text-3xl font-extrabold lg:text-6xl">100+</div>
                <div>
                  <h5 className="text-xl font-bold lg:text-3xl mb-4">
                    Happy Clients
                  </h5>
                  <p>
                    We value the satisfaction of our customers above every other
                    thing. We see to it that you get the best quality and aue
                    you desire
                  </p>
                </div>
              </div>

              <div className="w-full flex space-x-5 items-center">
                <div className="text-3xl font-extrabold lg:text-6xl">200+</div>
                <div>
                  <h5 className="text-xl font-bold lg:text-3xl mb-4">
                    Completed Projects
                  </h5>
                  <p>
                    Within the period of our existence, we have served our
                    clients on over 200 projects, giving them the best quality
                    for their service
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full px-10 py-10 lg:py-20 text-black">
          <div className="w-full lg:w-2/3 mx-auto">
            <div>
              <div className="font-bold text-sm flex items-center space-x-4">
                <div className="w-[50px] border-b-[1.7px] border-b-black"></div>
                <div>WHAT WE DO</div>
              </div>
              <h3 className="text-4xl lg:text-6xl font-bold">Our Solutions</h3>
            </div>

            <div className="flex w-full mt-10 flex-col lg:flex-row flex-wrap border-collapse space-x-0">
              {services.map((service) => (
                <div className="group w-full lg:w-1/3 border-[1.4px] border-gray-400 px-5 lg:px-10 py-10 before:bg-gray-700 before:w-full before:h-full relative before:absolute before:left-0 before:top-0 before:z-0 before:translate-x-[-100%] overflow-hidden hover:before:translate-x-[0%] before:transition before:duration-300">
                  <div className="z-3 relative">
                    <div className="text-6xl group-hover:text-white duration-500 transition">
                      {service.icon}
                    </div>
                    <div>
                      <h4 className="my-7 text-xl font-bold lg:text-2xl group-hover:text-white duration-500 transition">
                        {service.title}
                      </h4>
                      <p className="text-gray-700 group-hover:text-white duration-500 transition">
                        {service.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
