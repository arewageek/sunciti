"use client";
import { useState, useEffect } from "react";
import { FaArrowCircleRight, FaArrowLeft, FaArrowRight } from "react-icons/fa";

export const RequestQuote = () => {
  const [visibleTestimonial, setVisibleTestimonial] = useState(0);

  const testimonials = [
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis quia ratione, adipisci eos, magni ad temporibus autem quibusdam excepturi assumenda doloremque quasi, saepe labore et dolore amet ducimus soluta. Dolorum..",
      client: "Arewa Geek",
    },
    {
      quote:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem iste assumenda cumque beatae facere tempora cum, earum ratione a quia odit corporis. Tempora iure consequuntur veritatis nostrum vel sunt blanditiis.",
      client: "Austin Ameh",
    },
    {
      quote:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi accusantium dolorum repellat sed explicabo maxime animi soluta amet, reprehenderit assumenda, id deserunt labore rem, excepturi dignissimos eum expedita veniam nulla!",
      client: "Ameh Austin",
    },
  ];

  const nextTestimonial = () => {
    setVisibleTestimonial((initial) => initial + 1);
    console.log("next done");
  };

  const prevTestimonial = () => {
    setVisibleTestimonial((initial) => initial - 1);
    console.log("prev done");
  };

  return (
    <div className="w-full py-[30pt] md:px-[100pt] font-barlow">
      <div className="w-full bg-green-800 pt-[30pt] pb-10 md:pb-[30pt] md:px-[50pt] md:py-[40pt] text-white">
        <div className="w-full md:w-[80%] px-10 mx-auto flex justify-between items-center flex-col md:flex-row space-y-10 lg:space-y-0">
          <div className="w-full lg:w-3/5 md:px-10 py-5">
            <form action="#">
              <div className="w-full h-full bg-white text-gray-800 rounded-2xl px-5 md:px-[30pt] py-[50pt] flex flex-col space-y-3">
                <h2 className="font-bold text-2xl">Request a Free Quote</h2>
                <p className="text-sm text-gray-600">
                  We take great pride in everything that we do, control over
                  products allows us to ensure our customers receive the best
                  quality service.
                </p>

                <div className="flex space-y-8 flex-col">
                  <div className="w-full flex flex- md:flex-row space-y-8 md:space-y-0 justify-between">
                    <div className="w-full lg:w-1/2 md:pr-3">
                      <label
                        htmlFor="forwho"
                        className="font-bold pb-4 text-sm"
                      >
                        Who will be install system?
                      </label>

                      <select
                        type="text"
                        className="text-sm text-gray-800 font-[450] px-6 py-4 rounded border-gray-800/20 bg-white border-2 w-full"
                      >
                        <option value="local">Local Contractor</option>
                        <option value="foreign">Foreign Contractor</option>
                      </select>
                    </div>

                    <div className="w-full lg:w-1/2 md:pl-3">
                      <label
                        htmlFor="forwho"
                        className="font-bold pb-4 text-sm"
                      >
                        Monthly Electric Usage in KWh?
                      </label>

                      <input
                        type="text"
                        placeholder="(optional)"
                        className="text-sm text-gray-800 font-[450] px-6 py-4 rounded border-gray-800/20 bg-white border-2 w-full"
                      />
                    </div>
                  </div>

                  <div className="w-full flex flex- md:flex-row space-y-8 md:space-y-0 justify-between">
                    <div className="w-full lg:w-1/2 md:pr-3">
                      <label
                        htmlFor="forwho"
                        className="font-bold pb-4 text-sm"
                      >
                        Solar system type?
                      </label>

                      <select
                        type="text"
                        className="text-sm text-gray-800 font-[450] px-6 py-4 rounded border-gray-800/20 bg-white border-2 w-full"
                      >
                        <option
                          className="py-4 px-6 text-gray-800"
                          value="local"
                        >
                          Off Grid
                        </option>
                        <option
                          className="py-4 px-6 text-gray-800"
                          value="foreign"
                        >
                          On Grid
                        </option>
                      </select>
                    </div>

                    <div className="w-full lg:w-1/2 md:pl-3">
                      <label
                        htmlFor="forwho"
                        className="font-bold pb-4 text-sm"
                      >
                        Installation Place
                      </label>

                      <select
                        type="text"
                        className="text-sm text-gray-800 font-[450] px-6 py-4 rounded border-gray-800/20 bg-white border-2 w-full"
                      >
                        <option
                          className="py-4 px-6 text-gray-800"
                          value="local"
                        >
                          Huge Farm
                        </option>
                        <option
                          className="py-4 px-6 text-gray-800"
                          value="foreign"
                        >
                          Small Farm
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full flex flex- md:flex-row space-y-8 md:space-y-0 justify-between">
                    <div className="w-full lg:w-1/2 md:pr-3">
                      <label
                        htmlFor="forwho"
                        className="font-bold pb-4 text-sm"
                      >
                        Material of Roof? (optional)
                      </label>

                      <select
                        type="text"
                        className="text-sm text-gray-800 font-[450] px-6 py-4 rounded border-gray-800/20 bg-white border-2 w-full"
                      >
                        <option
                          className="py-4 px-6 text-gray-800"
                          value="local"
                        >
                          Comp Shingle
                        </option>
                        <option
                          className="py-4 px-6 text-gray-800"
                          value="foreign"
                        >
                          Roof Shingle
                        </option>
                      </select>
                    </div>

                    <div className="w-full lg:w-1/2 md:pl-3">
                      <label
                        htmlFor="forwho"
                        className="font-bold pb-4 text-sm"
                      >
                        Preferred Contact Method
                      </label>

                      <select
                        type="text"
                        className="text-sm text-gray-800 font-[450] px-6 py-4 rounded border-gray-800/20 bg-white border-2 w-full"
                      >
                        <option
                          className="py-4 px-6 text-gray-800"
                          value="local"
                        >
                          All
                        </option>
                        <option
                          className="py-4 px-6 text-gray-800"
                          value="foreign"
                        >
                          Email
                        </option>
                        <option
                          className="py-4 px-6 text-gray-800"
                          value="foreign"
                        >
                          Phone
                        </option>
                      </select>
                    </div>
                  </div>

                  <div className="w-full">
                    <button className="w-full rounded-xl py-4 px-5 flex justify-between space-x-5 font-bold text-lg uppercase bg-black border-2 border-black text-white hover:bg-transparent hover:text-black transition duration-300">
                      <div>Submit Request</div>
                      <div className="text-xl">
                        <FaArrowCircleRight />
                      </div>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full lg:w-2/5">
            <div className="w-full">
              <h3 className="font-bold text-2xl lg:text-[27pt] leading-tight lg:leading-normal font-barlow text-wrap">
                Discover Independence Through Using Power Of Smooth Solar
                Energy!
              </h3>
              <p className="text-md mt-7">
                We support our customers on their way to a more sustainable
                products across energy value chain.
              </p>

              <div className="my-5">
                <a
                  href="/contact"
                  className="px-6 py-5 w-fit flex justify-between items-center bg-green-200 text-green-900 text-md font-bold cursor-pointer border-2 border-green-200 hover:bg-green-700 hover:text-green-100 transition duration-300 space-x-3 group"
                >
                  <span>Get Pricing</span>
                  <span className="group-hover:pl-2 pl-0">
                    <FaArrowRight />
                  </span>
                </a>
              </div>
            </div>

            <div className="h-1 border-t-[1px] border-green-200 w-full my-10"></div>

            <div className="w-full px-5 lg:px-0 lg:pr-10 text-black ">
              <div className="w-full rounded-xl bg-green-400 p-5">
                <div className="text-[80pt] font-bold mx-auto flex justify-center items-center">
                  "
                </div>

                <div className="text-center px-2 text-sm leading-relaxed py-5 font-[450] -mt-20">
                  <p className="italic">
                    {testimonials[visibleTestimonial].quote}
                  </p>

                  <cite className="font-bold text-lg">
                    {testimonials[visibleTestimonial].client}
                  </cite>
                </div>

                <div className="w-fit mx-auto flex space-x-3">
                  <button
                    onClick={() => visibleTestimonial > 0 && prevTestimonial()}
                    className={`px-2 py-2 rounded-full bg-black text-green-100 ${
                      visibleTestimonial == 0 ? "opacity-40" : ""
                    }`}
                    disable={visibleTestimonial == 0 ? "disable" : ""}
                  >
                    <FaArrowLeft />
                  </button>

                  <button
                    onClick={() =>
                      visibleTestimonial < testimonials.length - 1 &&
                      nextTestimonial()
                    }
                    className={`px-2 py-2 rounded-full bg-black text-green-100 ${
                      visibleTestimonial == testimonials.length - 1
                        ? "opacity-40"
                        : ""
                    }`}
                    disable={
                      visibleTestimonial == testimonials.length - 1
                        ? "disable"
                        : ""
                    }
                  >
                    <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
