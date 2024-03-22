import {
  FaArrowRight,
  FaClock,
  FaFacebookF,
  FaInstagram,
  FaLocationArrow,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";

export const Contactbox = () => {
  const contactOptions = [
    {
      icon: <FaPhoneAlt />,
      title: "Support Call line",
      link: "tel:2348036152300",
      label: "+234 803 615 2300",
    },
    {
      icon: <FaLocationArrow />,
      title: "Location",
      label: "Opposite Jabi Garage, Jabi, FCT Abuja",
    },
    {
      icon: <FaClock />,
      title: "Office Hours",
      label: "Mon - Fri: 8:00 am to 6:00 pm",
    },
  ];

  const socials = [
    {
      label: "facebook",
      link: "",
      icon: <FaFacebookF />,
    },
    {
      label: "twitter",
      link: "",
      icon: <FaTwitter />,
    },
    {
      label: "instagram",
      link: "",
      icon: <FaInstagram />,
    },
  ];

  return (
    <div className="w-full flex-wrap lg:flex-nowrap lg:w-2/3 mx-auto bg-white px-10 py-20 lg:px-20 lg:py-32 flex flex-col lg:flex-row space-y-7 lg:space-y-0 lg:space-x-8 shadow-lg">
      <div className="w-full lg:w-1/2">
        <h3 className="text-3xl font-bold font-poppins">Get In Touch</h3>
        <p className="text-gray-500 my-2">
          We take great pride in everything that we do, control over products
          allows us to ensure our customers receive the best quality service.
        </p>

        <form>
          <div className="w-full flex flex-col space-y-8 mt-5">
            <div className="w-full flex lg:space-x-8 lg:space-y-0 space-y-8 flex-wrap lg:flex-nowrap">
              <div className="w-full lg:w-1/2">
                <input
                  type="text"
                  className="border-[1px] border-gray-300 bg-transparent py-4 px-5 w-full"
                  placeholder="Name"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <input
                  type="email"
                  className="border-[1px] border-gray-300 bg-transparent py-4 px-5 w-full"
                  placeholder="Email"
                />
              </div>
            </div>

            <div className="w-full flex lg:space-x-8 lg:space-y-0 space-y-8 flex-wrap lg:flex-nowrap">
              <div className="w-full lg:w-1/2">
                <input
                  type="tel"
                  className="border-[1px] border-gray-300 bg-transparent py-4 px-5 w-full"
                  placeholder="Phone Number"
                />
              </div>

              <div className="w-full lg:w-1/2">
                <select className="border-[1px] border-gray-300 bg-transparent py-4 px-5 w-full">
                  <option value="">Select Your Service</option>
                  <option value="inverter">Inverter Installation</option>
                  <option value="wiring">Electrical Wiring</option>
                  <option value="streetlight">
                    Solar Street Light Installation
                  </option>
                </select>
              </div>
            </div>

            <div className="w-full flex lg:space-x-8 lg:space-y-0 space-y-8 flex-wrap lg:flex-nowrap">
              <textarea
                type="tel"
                className="border-[1px] border-gray-300 bg-transparent py-4 px-5 w-full h-[100pt]"
                placeholder="Additional Details"
              />
            </div>

            <div className="w-full pt-4">
              <button className="mx-auto w-full p-6 flex justify-between items-center bg-gray-800 text-gray-50 hover:text-white hover:bg-gray-600 transition relative before:bg-green-600 before:w-full before:h-full before:absolute before:left-0 overflow-hidden before:translate-x-[85%] hover:before:translate-x-0 before:duration-700 before:transition before:z-[0]">
                <span className="font-bold z-99 relative">Submit Request</span>
                <span className="z-99 relative">
                  <FaArrowRight />
                </span>
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="w-full lg:w-1/2 px-0 lg:px-10 py-4">
        <div className="rounded-lg bg-gray-800 px-4 lg:px-14 lg:py-10 py-5 text-gray-200">
          <h4 className="text-2xl font-bold font-exo2 text-white">
            Save your Money, <br />
            Save Environment
          </h4>
          <p className="font-bold text-sm gray-200 my-4">
            Solar power makes energy independence possible. If you have any
            questions or need help, feel free to contact with our team, or you
            can call us any time.
          </p>

          <div className="w-full py-5">
            <button className="w-fit px-6 py-5 flex space-x-10 justify-between items-center border-gray-200 border-2 bg-gray-800 text-gray-50 hover:text-white hover:bg-gray-600 transition relative before:bg-gray-800/50 before:w-full before:h-full before:absolute before:left-0 overflow-hidden before:translate-x-[105%] hover:before:translate-x-0 before:duration-700 before:transition before:z-[0]  after:w-full after:bg-gray-800/50 after:h-full after:absolute  after:right-0 after:translate-x-[-105%] hover:after:translate-x-0 after:duration-700 after:transition after:z-[1]">
              <span className="font-bold z-[99] relative">About Us</span>
              <span className="z-[99] relative">
                <FaArrowRight />
              </span>
            </button>
          </div>

          <div className="w-full flex flex-col px-2 mt-5 text-sm font-bold text-gray-50">
            {contactOptions.map((option) => {
              return (
                <div
                  key={option.title}
                  className="flex space-x-3 py-3 items-center"
                >
                  <span>{option.icon}</span>
                  <span>
                    {option.title}:{" "}
                    {option.link ? (
                      <a href={option.label}>{option.label}</a>
                    ) : (
                      option.label
                    )}
                  </span>
                </div>
              );
            })}

            <div className="w-full flex space-x-2 items-center mt-4">
              {socials.map((social) => (
                <a
                  href={social.link}
                  key={social.label}
                  className="p-2 text-gray-200 bg-transparent border-2 border-gray-200 hover:bg-gray-200 hover:text-black transition duration-300 rounded-lg"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
