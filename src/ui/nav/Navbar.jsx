'use client'
import { useEffect, useState } from 'react'
import { AiOutlineMenu } from 'react-icons/ai'
import { FaCartArrowDown, FaPhoneAlt, FaRocket } from 'react-icons/fa'

export const Navbar = () => {

    const [ headerSticky, setHeaderSticky ] = useState(false)

    const makeSticky = () => {
        if(window.scrollY >= 400){
            setHeaderSticky(true)
        }
        else{
            setHeaderSticky(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', makeSticky)

        return () => {
            window.addEventListener('scroll', makeSticky)
        }
    }, [])

    const menu = [
        {
            name: 'Home',
            path: '/'
        },
        {
            name: 'About Us',
            path: '/about'
        },
        {
            name: 'Contact',
            path: '/contact'
        },
        {
            name: 'Our Services',
            path: '/services'
        },
        {
            name: 'FAQs',
            path: 'faqs'
        }
    ]
    
    return (
        <div className={`z-[99999999] backdrop-blur-md w-full px-5 lg:px-10 py-5 min-h-[40pt] shadow-2xl text-gray-800 transition fixed top-0 ${headerSticky ? 'bg-white text-gray-50' : 'bg-transparent text-white'}`}>
            <div className='w-full flex justify-between items-center'>
                <div className='w-full font-bold text-2xl'>
                    MainOne Energy
                </div>

                <div className='w-full hidden lg:flex justify-between'>
                    <div className='flex space-x-4 text-sm font-[450] items-center'>
                        {
                            menu.map(nav => {
                                return (
                                    <a key={nav.path} href={nav.path} className='relative after:w-[0%] hover:after:w-[100%] after:h-[3px] after:absolute hover:after:bg-orange-600 hover:text-orange-600/90 transition after:rounded-xl hover:after:duration-500 after:scale-x-0 hover:after:scale-x-100 after:-bottom-2'>
                                        <div className=''>
                                            { nav.name }
                                        </div>
                                    </a>
                                )
                            })
                        }
                    </div>

                    <div className='flex space-x-4 justify-end text-sm font-[450]'>
                        <a href="/cart" className='flex justify-center items-center text-lg hover:text-orange-600 transition'>
                            <div className=''>
                                <FaCartArrowDown />
                            </div>
                        </a>

                        <a href="/quote" className='bg-orange-600 text-orange-50 text-sm font-bold px-5 py-3 hover:text-orange-600 hover:bg-orange-50 border-2 border-orange-600 shadow-lg flex justify-around items-center space-x-3'>
                            <div className=''>
                                Request Quote
                            </div>

                            <div className='animate-pulse'>
                                <FaRocket />
                            </div>
                        </a>
                    </div>
                </div>

                <div className='lg:hidden'>
                    <button className='bg-accent-100 text-accent-200 shadow-lg flex justify-center items-center px-4 py-2 rounded-lg border-2 border-transparent hover:bg-accent-100/50 transition hover:border-accent-100 hover:text-accent-100'>
                        <AiOutlineMenu />
                    </button>
                </div>
            </div>
        </div>
    )
}
