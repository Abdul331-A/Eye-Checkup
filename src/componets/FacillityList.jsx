import React from 'react'
import { assets } from '../assets/assets'

const FacillityList = () => {
    return (
        <div className="grid grid-cols-2 md:grid-cols-4 w-full">
            <img className="h-80 w-full object-cover hover:-translate-y-1 transition-all duration-300" src={assets.optometry} />
            <img className="h-80 w-full object-cover hover:-translate-y-1 transition-all duration-300" src={assets.optometry} />
            <img className="h-80 w-full object-cover hover:-translate-y-1 transition-all duration-300" src={assets.testingDr} />
            <img className="h-80 w-full object-cover hover:-translate-y-1 transition-all duration-300" src={assets.optometry} />
        </div>


    )
}

export default FacillityList