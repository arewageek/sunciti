'use client'
import { useEffect, useState } from 'react'
import { FaLeaf, FaPlay } from 'react-icons/fa'
import { HeaderCard } from './HeaderCard'
import { Player } from '@lottiefiles/react-lottie-player'

export const Header = () => {

    const [activeSlide, setActiveSlide] = useState(0)

    const slides = [
        {
            id: 0,
            image: './assets/images/Image1.png',
            background: './assets/images/bg1.jpg',
            heading: 'Solar Power Energy',
            desc: 'We install solar inverters, water heaters and deal in the sales, installation and maintenance of different solar based technologies. We make your home and offices run on 24/7 power supply',
            cta: {
                link: '/about',
                label: 'Request Quote'
            }
        },
        {
            id: 1,
            image: './assets/images/Image2.png',
            background: './assets/images/solar-bg-3.jpg',
            heading: 'Shop Solar Gadgets',
            desc: 'On our online store, you find a wide range of solar equipments and tools to enable you level up and optimize your energy bills. We deliver across all 36 states of Nigeria and offer free shipping within Abuja',
            cta: {
                link: '/shop',
                label: 'Explore Store'
            }
        },
        {
            id: 2,
            image: './assets/images/Image3.png',
            background: './assets/images/solar-bg-4.jpg',
            heading: 'Electrical Wiring',
            desc: 'We design and implement electrical designs/wiring for all types of building plans and structural plans. We work for both small and large scale structures and deliver in as short a time as possible',
            cta: {
                link: '/about',
                label: 'Learn More'
            }
        }
    ]

    const headerCards = [
        {
            title: "Ecology",
            desc: "We are committed to contributng to the wide adoption of ecological energy sources with a clear goal of decreasing the effect of carbon and other harmful gases that are being released into the atmosphere especially during energy generation.",
            icon: <Player className='h-[70pt] w-[70pt] p-0' src="./assets/lotties/Leaf3.json" loop autoplay />
        },

        {
            title: "Renewable",
            desc: "We invest into reneable energy sources for their availability and ease of accessibility. We are building a system where businesses and homes can depend and run a hundred percent on solar or other reneable energy sources.",
            icon: <Player className='h-[70pt] w-[70pt] p-0' src="./assets/lotties/Sunlight.json" loop autoplay />
        },

        {
            title: "Sustainable",
            desc: "For a system to be generally accepted by a large group of people such as an entire nation, it has to be sustainable. From our previous and continuous researches, we have picked the most sustainable and scalable energy souces for you.",
            icon: <Player className='h-[70pt] w-[70pt] p-0' src="./assets/lotties/Coin.json" loop autoplay />
        }
    ]
    
    const switchTab = (id) => {
        setActiveSlide(id)
    }

    const autoSwitchTab = () => {
        setActiveSlide((initial => (initial + 1) % slides.length))
    }

    useEffect(() => {

        const intervalId = setInterval(autoSwitchTab, 5000)
        
        return () => clearInterval(intervalId)
        
    }, [])
    
    return (
        <div className='relative'>
            <div className='w-full min-h-screen bg-black/80 text-orange-50 flex flex-col-reverse lg:flex-row justify-around items-center bg-center bg-cover bg-blend-overlay py-[100pt]' style={{ backgroundImage: `url('${slides[activeSlide].background}')`}}>
                <div>
                    <div className='flex flex-row lg:flex-col space-x-4 lg:space-y-4 lg:space-x-0'>
                        {
                            slides.map(slide => (
                                <button key={slide.id} onClick={() => switchTab(slide.id)} className={`${activeSlide == slide.id ? 'bg-gray-50' : 'bg-gray-200/30 border-gray-200/50'} hover:bg-gray-50 cursor-pointer transition w-[14pt] h-[5pt] lg:w-[5pt] lg:h-[14pt] rounded-full border-2 `}></button>
                            ))
                        }
                    </div>
                </div>
                
                <div className='w-full lg:w-[80%] px-5 pt-10 mt-10 lg:mt-0 lg:pt-0'>
                    <div className='w-full md:w-2/3 lg:w-2/3 mb-6'>
                        <h2 className='text-[40pt] pb-5 md:text-[60pt] lg:text-[80pt] font-extrabold leading-tight'>
                            { slides[activeSlide].heading} <img className='hidden lg:inline ml-5 w-[150pt] h-[65pt] rounded-full grayscale hover:grayscale-0 cursor-pointer transition duration-300 hover:animate-pulse' src={slides[activeSlide].image} />
                        </h2>

                        <p className='text-sm lg:text-lg pr-4 text-gray-300 text-justify'>
                            { slides[activeSlide].desc }
                        </p>
                    </div>

                    <div className='w-full flex items-center space-x-3'>
                        <a href="/about" className='text-black bg-white px-8 py-3 lg:py-5 lg:px-10 rounded-2xl text-sm lg:text-md font-bold hover:bg-transparent hoer:border-white border-2 hover:text-white transition duration-300'>
                            Learn More
                        </a>

                        <div className='flex relative items-center justify-center bg-white/20 rounded-full p-2 animate-pulse hover:bg-orange-600/30 hover:text-white transition hover:animate-bounce'>
                            <button className='text-black bg-white px-3 py-3 lg:py-5 lg:px-5 rounded-full text-sm lg:text-md font-bold  transition duration-300 hover:bg-orange-600 hover:text-white flex justify-center items-center animate-pulse'>
                                <FaPlay />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full lg:w-[70%] mx-auto '>
                <div className='w-full relative'>
                    <div className='w-full flex justify-around flex-col lg:flex-row relative -top-[50pt] lg:-top-[80pt] min-h-[100pt] lg:space-x-8 space-y-8 lg:space-y-0 px-6 py-5 lg:py-0'>
                        {
                            headerCards.map(card => <HeaderCard key={card.title} title={card.title} desc={card.desc} icon={card.icon} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
