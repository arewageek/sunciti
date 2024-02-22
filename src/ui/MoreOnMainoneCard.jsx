import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

export const MoreOnMainoneCard = ({ title, content, icon, points }) => {
    return (
        <div className='w-full h-full lg:w-1/3 p-3 group'>
            <div className='pl-5 pb-5 h-full bg-white shadow-lg flex justify-end'>
                <div className='w-[90%] h-full border-t-4 border-t-green-600 group-hover:border-t-green-400 transition duration-300'>
                    <div className='w-full flex justify-between'>
                        <div className='text-lg lg:text-2xl font-[900] w-1/2 relative bottom-0 flex flex-col justify-end'>
                            <h1>
                                { title }
                            </h1>   
                        </div>

                        <div className='w-[60pt] lg:w-[90pt] h-[60pt] lg:h-[90pt] bg-green-600 flex items-center justify-center text-5xl lg:text-7xl text-green-400 group-hover:bg-green-400 group-hover:text-green-600 transition duration-300'>
                            { icon }
                        </div>
                    </div>

                    <div className='text-sm pr-5 lg:pr-10 py-5 flex flex-col space-y-3'>
                        <p>
                            { content }
                        </p>

                        <ul className='ml-5'>
                            { points.map(point => (
                                <li key={ point } className="my-2 text-gray-600/90 flex items-center space-x-4">
                                    <div>
                                        <div className="p-0.5 rounded-full border-2 border-green-500">
                                        <div className="h-[6px] w-[6px] rounded-full bg-green-500"></div>
                                        </div>
                                    </div>
                                    <div>
                                        { point }
                                    </div>
                                </li>
                            )) }

                        </ul>

                        <div className='py-3 w-full p-2'>
                            <div className='w-fit'>
                                <a href="#" className='flex space-x-2 hover:space-x-4 px-7 py-4 bg-green-600 hover:bg-green-200 text-green-200 hover:text-green-600 border-2 border-green-600 transition-all duration-500 shadow'>
                                    <div>
                                        Learn More
                                    </div>

                                    <div>
                                        <FaArrowRight />
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
