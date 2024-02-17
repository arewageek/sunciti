import React from 'react'

export const MoreOnMainoneCard = ({ title, content, icon }) => {
    return (
        <div className='w-full lg:w-1/3 p-3 group'>
            <div className='pl-5 pb-5 bg-white shadow-lg flex justify-end'>
                <div className='w-[90%] border-t-4 border-t-green-600'>
                    <div className='w-full flex justify-between'>
                        <div className='text-lg lg:text-2xl font-[900] w-1/2 relative bottom-0 flex flex-col justify-end'>
                            <h1>
                                { title }
                            </h1>   
                        </div>

                        <div className='w-[60pt] lg:w-[90pt] h-[60pt] lg:h-[90pt] bg-green-600 flex items-center justify-center text-5xl lg:text-7xl text-green-400 group-hover:bg-green-400 group-hover:text-green-600 transition'>
                            { icon }
                        </div>
                    </div>

                    <div className='text-sm pr-5 lg:pr-10 py-5 flex flex-col space-y-3'>
                        <p>
                            { content }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
