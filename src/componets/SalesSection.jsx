import React, { useState } from 'react'
import { assets, womenProducts } from '../assets/assets';
import ProducCard from './ProducCard';


const SalesSection = () => {

    const [active, setActive] = useState("sunglasses");

    return (
        <div className='p-20 px-44 capitalize'>
            <div>


                <div className='flex justify-between'>
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary  leading-tight pb-6">women's <br /> eyeglasses</h2>
                    <div className="flex capitalize h-16">
                        {/* Sunglasses Button */}
                        <button
                            onClick={() => setActive("sunglasses")}
                            aria-pressed={active === "sunglasses"}
                            className={`border-2 border-primary border-r-0 p-1 rounded-l-md px-3 transition-colors duration-75 ease-linear
          ${active === "sunglasses"
                                    ? "bg-primary text-white shadow-md"
                                    : "text-primary hover:bg-primary hover:text-white"
                                }`}
                        >
                            sunglasses
                        </button>

                        {/* Eyeglasses Button */}
                        <button
                            onClick={() => setActive("eyeglasses")}
                            aria-pressed={active === "eyeglasses"}
                            className={`border-2 border-primary p-1 rounded-r-md px-3 transition-colors duration-75 ease-linear
          ${active === "eyeglasses"
                                    ? "bg-primary text-white shadow-md"
                                    : "text-primary hover:bg-primary hover:text-white"
                                }`}
                        >
                            eyeglasses
                        </button>
                    </div>
                </div>

                <div className='flex gap-9'>
                    <div className='flex'>
                        <div className='w-52 bg-[#D7E7E5]  text-center text-primary font-bold capitalize rounded-2xl shadow'>
                            <h3 className='py-12'>view all women's <br />collection</h3>
                            <img src={assets.specLady} className='rounded-2xl' alt="" />
                        </div>
                    </div>

                    <div className='grid grid-cols-3 gap-5 py-6'>
                        {womenProducts.map((product) => (
                            <ProducCard key={product.id} product={product} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SalesSection