import React from 'react'
import { assets } from '../../assets/assets'

const Servicebanner = ({ title }) => {

    return (
        <div className="relative h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] w-full flex items-center rounded-md overflow-hidden">

            {/* Background Image */}
            <div
                className="
      absolute inset-0 
      bg-contain md:bg-cover 
      bg-no-repeat 
      bg-right md:bg-center
      bg-[#f6f6f6]
    "
                style={{ backgroundImage: `url(${assets.horizontalMan})` }}
            ></div>

            {/* Overlay (Opacity) */}
            <div className="absolute inset-0 bg-white/40"></div>
            {/* You can change to bg-black/30, bg-white/20 etc */}

            {/* TEXT */}
            <h2
                className="
      relative z-10 
      text-primary font-extrabold tracking-tight px-6
      text-3xl sm:text-4xl md:text-5xl lg:text-6xl
    "
            >
                {title}
            </h2>
        </div>


    )
}


export default Servicebanner