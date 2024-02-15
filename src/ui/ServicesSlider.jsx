'use client'

import { useRef } from "react"

export const ServicesSlider = () => {
    const sliderRef = useRef(null)
    const servicesRef = useRef(null)
    
    return (
        <div className='w-full py-5 px-2'>
            <div ref={sliderRef}>
                <div ref={servicesRef}>

                </div>
            </div>
        </div>
    )
}
