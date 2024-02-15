'use client'
import { useState } from 'react'
import { FaLeaf, FaPlay } from 'react-icons/fa'
import { HeaderCard } from './HeaderCard'
import { Player } from '@lottiefiles/react-lottie-player'

export const Header = () => {

    const [activeSlide, setActiveSlide] = useState(0)

    const slides = [
        {
            id: 0,
            image: './assets/images/Image1.png',
            background: '',
            heading: 'Solar Power Energy',
            desc: 'We install solar inverters, water heaters and deal in the sales, installation and maintenance of different solar based technologies. We make your home and offices run on 24/7 power supply',
            cta: {
                link: '/about',
                label: 'Learn More'
            }
        },
        {
            id: 1,
            image: './assets/images/Image2.png',
            background: '',
            heading: 'Solar Power Energy',
            desc: 'We install solar inverters, water heaters and deal in the sales, installation and maintenance of different solar based technologies. We make your home and offices run on 24/7 power supply',
            cta: {
                link: '/about',
                label: 'Learn More'
            }
        },
        {
            id: 2,
            image: './assets/images/Image3.png',
            background: '',
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
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima at laudantium saepe illum explicabo! Perferendis velit impedit cumque repudiandae eos, explicabo voluptas in reiciendis earum recusandae, provident asperiores porro possimus.",
            icon: <Player className='h-[70pt] w-[70pt] p-0' src="./assets/lotties/Leaf3.json" loop autoplay />
        },

        {
            title: "Renewable",
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, officia velit nisi sapiente consectetur aliquam nam, itaque et minima, vero laborum autem veritatis tempore? Placeat nostrum eius totam quidem rem!",
            icon: <Player className='h-[70pt] w-[70pt] p-0' src="./assets/lotties/Sunlight.json" loop autoplay />
        },

        {
            title: "Sustainable",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia, temporibus cumque, ducimus consequuntur fuga excepturi omnis ipsam illum nihil blanditiis sapiente optio. Vel optio non qui totam deserunt, rem omnis.",
            icon: <Player className='h-[70pt] w-[70pt] p-0' src="./assets/lotties/Coin.json" loop autoplay />
        }
    ]
    
    const switchTab = (id) => {
        setActiveSlide(id)
    }
    
    return (
        <div className='relative'>
            <div className='w-full h-screen bg-black/80 text-orange-50 flex flex-col-reverse md:flex-row justify-around items-center bg-center bg-cover bg-blend-overlay' style={{ backgroundImage: "url('./assets/images/bg1.jpg')"}}>
                <div>
                    <div className='flex flex-row md:flex-col space-x-4 md:space-y-4 md:space-x-0'>
                        {
                            slides.map(slide => (
                                <button key={slide.id} onClick={() => switchTab(slide.id)} className={`${activeSlide == slide.id ? 'bg-gray-50' : 'bg-gray-200/30 border-gray-200/50'} hover:bg-gray-50 cursor-pointer transition w-[14pt] h-[5pt] md:w-[5pt] md:h-[14pt] rounded-full border-2 `}></button>
                            ))
                        }
                    </div>
                </div>
                
                <div className='w-full md:w-[80%] px-5 pt-10 mt-10 md:mt-0 md:pt-0'>
                    <div className='w-full md:w-1/2 mb-6'>
                        <h2 className='text-[40pt] pb-5 md:text-[80pt] font-extrabold leading-tight'>
                            { slides[activeSlide].heading} <img className='hidden md:inline ml-5 w-[150pt] h-[65pt] rounded-full grayscale hover:grayscale-0 cursor-pointer transition duration-300 hover:animate-pulse' src={slides[activeSlide].image} />
                        </h2>

                        <p className='text-sm md:text-lg text-gray-300 text-justify'>
                            { slides[activeSlide].desc }
                        </p>
                    </div>

                    <div className='w-full flex items-center space-x-3'>
                        <a href="/about" className='text-black bg-white px-8 py-3 md:py-5 md:px-10 rounded-2xl text-sm md:text-md font-bold hover:bg-transparent hoer:border-white border-2 hover:text-white transition duration-300'>
                            Learn More
                        </a>

                        <div className='flex relative items-center justify-center bg-white/20 rounded-full p-2 animate-pulse hover:bg-orange-600/30 hover:text-white transition hover:animate-bounce'>
                            <button className='text-black bg-white px-3 py-3 md:py-5 md:px-5 rounded-full text-sm md:text-md font-bold  transition duration-300 hover:bg-orange-600 hover:text-white flex justify-center items-center animate-pulse'>
                                <FaPlay />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full md:w-[70%] mx-auto '>
                <div className='w-full relative'>
                    <div className='w-full flex justify-around flex-col md:flex-row relative -top-[50pt] md:-top-[80pt] min-h-[100pt] md:space-x-8 space-y-8 md:space-y-0 px-6 py-5 md:py-0'>
                        {
                            headerCards.map(card => <HeaderCard key={card.title} title={card.title} desc={card.desc} icon={card.icon} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
