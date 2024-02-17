'use client'

import { useRef } from "react"
import styles from './styles/services-slider.module.css'

export const ServicesSlider = () => {
    const sliderRef = useRef(null)
    const servicesRef = useRef(null)
    
    return (
        <div className='w-full py-5 px-2'>
            <div className="inline">
                <div className="w-[500vw] overflow-x-hidden font-roboto flex space-x-5">
                    <div className={styles.stroked}>
                        <span>RENEWABLE ENERGY</span>
                        <span>RENEWABLE ENERGY</span>
                        <span>RENEWABLE ENERGY</span>
                        <span>RENEWABLE ENERGY</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
