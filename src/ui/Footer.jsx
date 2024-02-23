import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillLinkedin, AiFillPhone, AiOutlineMail, AiTwotonePhone } from 'react-icons/ai'
import { FaLocationArrow } from 'react-icons/fa'

export const Footer = () => {
    const contactOptions = [
        {
            icon: <AiFillPhone />,
            label: "Phone Number",
            content: "(+234) 803-615-2300"
        },
        {
            icon: <AiOutlineMail />,
            label: "Send Us An Email",
            content: "hello@mainoneenergy.com"
        },
        {
            icon: <FaLocationArrow />,
            label: "Office Address",
            content: "Opp Jabi Garage, FCT"
        }
    ]

    const socials = [
        {
            icon: <AiFillFacebook />,
            url: ''
        },
        {
            icon: <AiFillInstagram />,
            url: ''
        },
        {
            icon: <AiFillLinkedin />,
            url: ''
        }
    ]
    
    const usefulLinks = [
        { label: "About Us", path: "#"},
        { label: "Project Gallery", path: "#"},
        { label: "Online Store", path: "#"},
        { label: "Our Services", path: "#"},
        { label: "Contact Us", path: "#"},
    ]
    
    const serviceLinks = [
        { label: "Our Services", path: '' },
        { label: "Office Service", path: '' },
        { label: "Industry Services", path: '' },
        { label: "Private Services", path: '' },
    ]
    
    return (
        <div className="w-full py-10 px-10 bg-gray-800 shadow-inner rounded-t-2xl text-gray-50">
            <div className="w-full md:w-[80%] px-4 mx-auto">
                <div className="my-5 flex flex-col md:flex-row space-y-5 md:space-y-0 lg:justify-around  lg:items-center font-exo2">
                    <div className="w-full md:w-1/4 lg:px-3 py-2">
                        <div className="text-3xl font-bold">
                            MainOne Logo
                        </div>
                    </div>

                    {
                        contactOptions.map((option, index) => (
                            <div key={index} className="w-full md:w-1/4 lg:px-3 py-2 flex lg:justify-center space-x-3 items-center">
                                <div>
                                    <div className="px-3 py-3 rounded-full bg-green-300 text-green-600 text-lg">
                                        { option.icon }
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <p className="text-green-200">
                                        { option.label }
                                    </p>
                                    <h3 className="font-bold text-xl">
                                        { option.content }
                                    </h3>
                                </div>
                            </div>
                        ))    
                    }
                    
                </div>


                <div className="mt-[50pt] flex flex-col md:flex-row space-y-5 md:space-y-0 justify-around">
                    <div className="w-full md:w-1/4 px-3 py-2">
                        <h2 className="font-bold text-2xl">
                            About Company
                        </h2>
                        <p className="mt-4">
                            Mainone Energy is a renewable energy consultant, manufacturer, and installer with vast expertise and experience in the industry ...
                        </p>
                        <div className="mt-4 flex space-x-1 flex-wrap">
                            {
                                socials.map((page, index) => (
                                    <a key={index} href={page.index} className="px-3 py-3 hover:text-green-400 text-2xl lg:text-3xl hover:shadow-xl shadow-md cursor-pointer transition">
                                        { page.icon }
                                    </a>
                                ))
                            }
                        </div>
                    </div>


                    <div className="w-full md:w-1/4 px-3 py-2">
                        <h2 className="font-bold text-2xl">
                            Useful Links
                        </h2>
                        <div className="flex flex-col space-y-2 my-4">
                            {
                                usefulLinks.map(link => <a href={link.path} className="hover:text-green-400 hover:font-[450]">{ link.label }</a>)
                            }
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 px-3 py-2">
                        <h2 className="font-bold text-2xl">
                            What We Do
                        </h2>
                        <div className="flex flex-col space-y-2 my-4">
                            {
                                serviceLinks.map(link => <a href={link.path} className="hover:text-green-400 hover:font-[450]">{ link.label }</a>)
                            }
                        </div>
                    </div>

                    <div className="w-full md:w-1/4 px-3 py-2">
                        <h2 className="font-bold text-2xl">
                            Photo Gallery
                        </h2>
                        <div className="flex flex-col my-4">
                            <div className="flex">
                                <div className="w-[70pt] h-[70pt] p-1">
                                    <div className="w-full h-full bg-gray-600 rounded-xl">
                                    </div>
                                </div>                                        

                                <div className="w-[70pt] h-[70pt] p-1">
                                    <div className="w-full h-full bg-gray-500 rounded-xl">
                                    </div>
                                </div>

                                <div className="w-[70pt] h-[70pt] p-1">
                                    <div className="w-full h-full bg-gray-600 rounded-xl">
                                    </div>
                                </div>                                    
                            </div>

                            <div className="flex">
                                <div className="w-[70pt] h-[70pt] p-1">
                                    <div className="w-full h-full bg-gray-500 rounded-xl">
                                    </div>
                                </div>                                            

                                <div className="w-[70pt] h-[70pt] p-1">
                                    <div className="w-full h-full bg-gray-600 rounded-xl">
                                    </div>
                                </div>    

                                <div className="w-[70pt] h-[70pt] p-1">
                                    <div className="w-full h-full bg-gray-500 rounded-xl">
                                    </div>
                                </div>                                
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
