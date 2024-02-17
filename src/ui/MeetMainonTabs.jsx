'use client'

import { useState, useEffect } from 'react'

export const MeetMainonTabs = () => {

    const [tab, setTab] = useState('about')
    const activeTabClass = "px-6 py-3 bg-green-600 shadow text-white hover:bg-green-100 hover:text-green-600 border-2 border-green-600 transition "
    const inactiveTabClass = "px-6 py-3 bg-white shadow text-green-600 hover:bg-green-100 hover:text-green-600 border-2 border-white hover:border-green-600 transition"
    
    return (
        <>
            <div className="w-full flex flex-wrap py-3">
                <div className="p-1">
                <button onClick={() => setTab('about')} className={`${tab == 'about' ? activeTabClass : inactiveTabClass} transition duration-300`}>
                    Why Choose Us?
                </button>
                </div>

                <div className="p-1">
                <button onClick={() => setTab('vision')} className={`${tab == 'vision' ? activeTabClass : inactiveTabClass} transition duration-300`}>
                    Our Vision
                </button>
                </div>

                <div className="p-1">
                <button onClick={() => setTab('mision')} className={`${tab == 'mision' ? activeTabClass : inactiveTabClass} transition duration-300`}>
                    Our Mission
                </button>
                </div>
            </div>

            <div className={`${tab === 'about' ? 'block' : 'hidden'}`}>
                <p className="leading-normal text-gray-600/90 text-justify py-5 lg:pr-10">
                    We Provide clean, dependable, environmentally friendly, and cost-effective electrical energy to people all over the world in order to save our planet for future generations.
                </p>

                <ul className="list-inside pl-[25pt] flex flex-col space-y-4 font-[450]">
                    <li className="my-2 text-gray-600/90 flex items-center space-x-4">
                    <div>
                        <div className="p-1 rounded-full border-2 border-green-500 animate-ping">
                        <div className="h-[6px] w-[6px] rounded-full bg-green-500"></div>
                        </div>
                    </div>
                    <div>
                        Ground Mounting System
                    </div>
                    </li>

                    <li className="my-2 text-gray-600/90 flex items-center space-x-4">
                    <div>
                        <div className="p-1 rounded-full border-2 border-green-500 animate-ping">
                        <div className="h-[6px] w-[6px] rounded-full bg-green-500"></div>
                        </div>
                    </div>
                    <div>
                        Flat Roof Mounting System
                    </div>
                    </li>

                    <li className="my-2 text-gray-600/90 flex items-center space-x-4">
                    <div>
                        <div className="p-1 rounded-full border-2 border-green-500 animate-ping">
                        <div className="h-[6px] w-[6px] rounded-full bg-green-500"></div>
                        </div>
                    </div>
                    <div>
                        Solar Carport
                    </div>
                    </li>
                </ul>
            </div>


            <div className={`${tab === 'vision' ? 'block' : 'hidden'}`}>
                <p className="leading-normal text-gray-600/90 text-justify py-5 lg:pr-10">
                    We envision a time when solar powered technologies and solutions are available limitlessly across all of Africa, helping Africans truly harness the power in it's surrounding not just dependent on solar alone, but from all other forms of renewable energy sources
                </p>

                
            </div>


            <div className={`${tab === 'mision' ? 'block' : 'hidden'}`}>
                <p className="leading-normal text-gray-600/90 text-justify py-5 lg:pr-10">
                    We aim to saturate the renewable energy space with high definition and standard solar and renewable energy solutions. 
                </p>
                <p className="leading-normal text-gray-600/90 text-justify lg:pr-10">
                    We plan to simplify the process of living and assist businesses as well as individuals truely harness energy from a source that's sustainable, renewable, and helps to heal the works
                </p>
            </div>
        </>
    )
}
