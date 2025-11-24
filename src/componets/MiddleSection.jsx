import React from 'react'
import { BsFillOpticalAudioFill, BsOpticalAudio } from 'react-icons/bs'
import { FaUserDoctor } from 'react-icons/fa6'
import { TbArrowBearRight, TbArrowBigRight, TbBat } from 'react-icons/tb'
import { assets } from '../assets/assets'

const MiddleSection = () => {
    return (
        <div className='capitalize m-30'>
            <div className="mb-30 px-4">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-primary text-center tracking-tight">
                    benefits with eye checkup
                </h1>

                <p className="text-center py-4 text-gray-600">
                    Lorem ipsum dolor sit amet consectet
                </p>

                <div className="flex justify-center">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1100px]">

                        {/* Card 1 */}
                        <div className="bg-[#E9F2F1] p-7 text-center flex flex-col items-center rounded-md shadow-sm">
                            <BsFillOpticalAudioFill className="w-20 h-20 text-primary mx-auto" />

                            <h3 className="text-xl font-bold text-primary py-4">Qualified Doctors</h3>

                            <p className="text-center max-w-[260px] text-sm sm:text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur delectus laudantium possimus odit.
                            </p>

                            <button className="group px-8 py-2.5 bg-primary rounded-sm text-white cursor-pointer active:scale-95 transition duration-300 hover:bg-primary-dull mt-8 flex items-center gap-2">
                                Find Doctors
                                <TbArrowBigRight className="text-white group-hover:translate-x-1 transition" />
                            </button>
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#E9F2F1] p-7 text-center flex flex-col items-center rounded-md shadow-sm">
                            <BsFillOpticalAudioFill className="w-20 h-20 text-primary mx-auto" />

                            <h3 className="text-xl font-bold text-primary py-4">Qualified Doctors</h3>

                            <p className="max-w-[260px] text-center text-sm sm:text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur delectus laudantium possimus odit.
                            </p>

                            <button className="group px-8 py-2.5 bg-primary rounded-sm text-white cursor-pointer active:scale-95 transition duration-300 hover:bg-primary-dull mt-8 flex items-center gap-2">
                                Find Doctors
                                <TbArrowBigRight className="text-white group-hover:translate-x-1 transition" />
                            </button>
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#E9F2F1] p-7 text-center flex flex-col items-center rounded-md shadow-sm">
                            <BsFillOpticalAudioFill className="w-20 h-20 text-primary mx-auto" />

                            <h3 className="text-xl font-bold text-primary py-4">Qualified Doctors</h3>

                            <p className="max-w-[260px] text-center text-sm sm:text-base">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur delectus laudantium possimus odit.
                            </p>

                            <button className="group px-8 py-2.5 bg-primary rounded-sm text-white cursor-pointer active:scale-95 transition duration-300 hover:bg-primary-dull mt-8 flex items-center gap-2">
                                Find Doctors
                                <TbArrowBigRight className="text-white group-hover:translate-x-1 transition" />
                            </button>
                        </div>

                    </div>
                </div>
            </div>


            <div className="grid w-full grid-cols-1 lg:grid-cols-2 gap-6 relative">

                {/* Left Image + Overlay Card */}
                <div className="relative">
                    <img
                        src={assets.ladyDoctor}
                        alt="Lady Doctor"
                        className="w-full h-[350px] sm:h-[420px] md:h-[480px] object-cover rounded-lg"
                    />

                    {/* Floating Card */}
                    <div className="
      bg-black text-white rounded-lg shadow-lg 
      flex flex-col items-center justify-center text-center
      w-40 h-[150px] sm:w-[200px] sm:h-[170px] md:w-[220px] md:h-[190px] 
      space-y-3
      absolute right-4 bottom-4 sm:right-6 sm:bottom-6 md:right-10 md:bottom-10
    ">
                        <span className="material-symbols-outlined text-4xl sm:text-5xl md:text-6xl [font-variation-settings:'FILL'_0,'wght'_400,'GRAD'_0,'opsz'_24']">
                            eye_tracking
                        </span>

                        <h3 className="text-[12px] sm:text-sm md:text-base font-light px-2">
                            dolor sit amet consectetur
                        </h3>

                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light">
                            1990
                        </h2>
                    </div>
                </div>

                {/* Right Content */}
                <div className="capitalize p-3 sm:p-5 flex flex-col justify-center">

                    <button className="group capitalize px-6 bg-[#E9F2F1] shadow py-2 rounded-sm text-primary cursor-pointer active:scale-95 transition duration-300 hover:bg-primary-dull flex items-center gap-2 w-max">
                        <img src={assets.greenEye} alt="" className="h-4" />
                        about us
                    </button>

                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-primary tracking-tight leading-snug py-4">
                        the great place of eye checkup hospital
                    </h1>

                    <p className="text-sm sm:text-base text-gray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quod, eos cupiditate sunt repellat aut sapiente laboriosam.
                    </p>

                    {/* Feature Box Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 py-6">

                        <div className="flex items-center">
                            <span className="w-9 h-9 rounded-full bg-[#D7E7E5] flex items-center justify-center text-xl">
                                <BsOpticalAudio className="text-primary" />
                            </span>
                            <h3 className="text-primary font-bold pl-3">
                                specialized <br /> range
                            </h3>
                        </div>

                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quod, eos.
                        </p>

                        <div className="flex items-center">
                            <span className="w-9 h-9 rounded-full bg-[#D7E7E5] flex items-center justify-center text-xl">
                                <BsOpticalAudio className="text-primary" />
                            </span>
                            <h3 className="text-primary font-bold pl-3">
                                pediatric <br /> ophthalmology
                            </h3>
                        </div>

                        <p className="text-gray-600 text-sm">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore quod, eos cupiditate sunt repellat aut sapiente laboriosam.
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MiddleSection