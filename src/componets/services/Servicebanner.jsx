import React from 'react'
import { assets } from '../../assets/assets'

const Servicebanner = ({title}) => {
    
    return (
        <div
            className="h-[350px] w-full bg-cover bg-center bg-no-repeat flex items-center  rounded-sm"
            style={{ backgroundImage: `url(${assets.horizontalMan})` }}
        >
            <h2 className="text-5xl font-extrabold text-primary tracking-tight px-10">
                {title}
            </h2>
        </div>

    )
}


export default Servicebanner