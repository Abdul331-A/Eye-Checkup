import React from 'react'
import { assets } from '../assets/assets'
import { BsOpticalAudio } from 'react-icons/bs'
import { MdHealthAndSafety } from 'react-icons/md'

// Define custom theme colors/values if not in tailwind.config.js
// Assuming 'primary' is a color like indigo-600 or a custom value.
// I'll use a placeholder variable for text-primary for clarity.

const BUTTON_BG_COLOR_CLASS = 'bg-indigo-600';


const MainBanner = () => {
    return (
        
        <div className='bg-[#D7E7E5] w-full capitalize py-10 px-4 sm:py-16 sm:px-8 md:py-20 md:px-12 flex flex-col md:flex-row gap-10 md:gap-14'>
            
           
            <div className='w-full md:w-1/2'>
               
                <h1 className={`text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-normal lg:leading-16 text-primary`}>
                    eye checkup & <br />holistic health center
                </h1>
                
                
                <p className='mt-4 text-sm sm:text-base w-full md:w-[90%] lg:w-[70%] text-gray-700'>
                    its is long Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima repudiandae sapiente iusto voluptatem, dicta praesentium magni?
                </p>
                
               
                <button className={`group px-8 py-2.5 bg-primary rounded-sm text-white cursor-pointer active:scale-95 transition duration-300 hover:bg-indigo-700 mt-8 md:mt-12`}>
                    <p className="relative h-6 overflow-hidden">
                        <span className="block transition-transform duration-300 group-hover:-translate-y-full">shop now</span>
                        <span className="absolute w-full top-full left-1/2 -translate-x-1/2 block transition-transform duration-300 group-hover:translate-y-full">shop now</span>
                    </p>
                </button>
                
                
                <div className="flex flex-col text-slate-800 mt-8">
                    <h2 className='text-base sm:text-lg mb-4'>10k+ exclusive Clients</h2>
                    <div className="flex items-center -space-x-3">
                        
                        
                      
                        <div className="relative group flex flex-col items-center">
                            <p className="absolute -top-6 opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 px-2 py-1 text-xs sm:text-sm font-medium bg-white rounded shadow-md whitespace-nowrap">Michael</p>
                            <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=200" alt="Michael"
                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white hover:-translate-y-1 transition hover:scale-110 object-cover" />
                        </div>
                        
                        {/* Client 2 */}
                        <div className="relative group flex flex-col items-center">
                            <p className="absolute -top-6 opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 px-2 py-1 text-xs sm:text-sm font-medium bg-white rounded shadow-md whitespace-nowrap">James</p>
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200" alt="James"
                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white hover:-translate-y-1 transition hover:scale-110 object-cover" />
                        </div>
                        
                        {/* Client 3 */}
                        <div className="relative group flex flex-col items-center">
                            <p className="absolute -top-6 opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 px-2 py-1 text-xs sm:text-sm font-medium bg-white rounded shadow-md whitespace-nowrap">Emily</p>
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&h=200&auto=format&fit=crop"
                                alt="Emily" className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white hover:-translate-y-1 transition hover:scale-110 object-cover" />
                        </div>
                        
                        {/* Client 4 */}
                        <div className="relative group flex flex-col items-center">
                            <p className="absolute -top-6 opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 px-2 py-1 text-xs sm:text-sm font-medium bg-white rounded shadow-md whitespace-nowrap">John</p>
                            <img src="https://randomuser.me/api/portraits/men/75.jpg" alt="John"
                                className="w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white hover:-translate-y-1 transition hover:scale-110 object-cover" />
                        </div>
                        
                        {/* More Clients Badge */}
                        <div className="relative group flex flex-col items-center">
                            <p className="absolute -top-6 opacity-0 scale-90 group-hover:scale-100 group-hover:opacity-100 transition duration-300 px-2 py-1 text-xs sm:text-sm font-medium bg-white rounded shadow-md whitespace-nowrap">More Clients</p>
                            <div
                                className={`w-12 h-12 sm:w-16 sm:h-16 rounded-full border-4 border-white bg-primary flex items-center justify-center text-white text-xs font-bold hover:-translate-y-1 transition hover:scale-110`}>
                                99+
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            
            <div className="w-full md:w-1/2 flex gap-3 sm:gap-4 p-0 md:p-0">

                
                <div className="relative flex-1 basis-1/2 min-h-[300px] sm:min-h-[400px] rounded-lg overflow-hidden bg-gray-200">
                    <img
                        src={assets.checkLady}
                        alt="Person covering eyes"
                        // Ensure image covers the full space
                        className="w-full h-full object-cover block"
                    />
                    
                    <div className={`absolute top-1/2 left-3 sm:left-5 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 text-primary py-2 rounded-lg font-bold text-xs sm:text-sm shadow-md flex items-center gap-2`}>
                        {/* Icon Container */}
                        <span className="w-8 h-8 rounded-full bg-[#D7E7E5] flex items-center justify-center text-xs sm:text-xl ">
                            <BsOpticalAudio className="text-primary" />
                        </span>
                        Proof of quality
                    </div>
                </div>

                {/* Right Stacked Column Container (Small images) */}
                <div className="flex flex-col flex-1 gap-3 sm:gap-4">

                    {/* Top-Right Item: Child Girl */}
                    <div className="relative flex-1 rounded-lg overflow-hidden bg-gray-200 aspect-4/3 sm:aspect-square md:aspect-auto">
                        <img
                            src={assets.childGirl}
                            alt="Child getting eye exam"
                            className="w-full h-full object-cover block"
                        />
                    </div>

                    {/* Bottom-Right Item: Boy Check */}
                    <div className="relative flex-1 rounded-lg overflow-hidden bg-gray-200 aspect-4/3 sm:aspect-square md:aspect-auto">
                        <img
                            src={assets.boyCheck}
                            alt="Woman getting eye exam"
                            className="w-full h-full object-cover block"
                        />
                        {/* Overlay Bubble 2 (Safe and secure) */}
                        <div className="absolute bottom-3 sm:bottom-5 text-primary left-1/2 transform -translate-x-1/2 bg-white/90 backdrop-blur-sm px-3 sm:px-4 py-2 rounded-lg font-bold text-xs sm:text-sm shadow-md flex items-center gap-2">
                            {/* Icon Container */}
                            <span className={`w-8 h-8 rounded-full bg-[#D7E7E5] flex items-center justify-center text-xs sm:text-xl`}>
                                <MdHealthAndSafety className="text-primary" />
                            </span>
                            Safe and secure
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MainBanner