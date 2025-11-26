import React from 'react'
import { assets, specialDoctors } from '../assets/assets'
import DoctorsCard from './DoctorsCard'

const EmergencyContact = () => {
    return (
        <>
            <div className='bg-[#255A53] capitalize text-white text-center w-full h-[300px] pt-7 relative'>
                <h2 className='tracking-wider font-bold text-xl leading-8'>need a doctor for check-up?<br />call for an emergency service!</h2>
                <p className='pt-10'>call: +1(230)-456-155-23</p>
                <div className="flex items-start gap-10 mt-10">

                    {/* Appointment Card */}
                    <div className="bg-[#F6F6F6] capitalize w-[350px] p-6 rounded-xl shadow-md absolute left-[200px]">
                        <h2 className="text-2xl text-primary font-bold mb-4 text-center">Get Appointment</h2>

                        <form className="space-y-4">
                            <div className="flex flex-col text-start">
                                <label className="text-sm text-primary mb-1">Name</label>
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-dull bg-[#e1eae9]"
                                />
                            </div>

                            <div className="flex flex-col text-start">
                                <label className="text-sm text-primary mb-1">Email</label>
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-dull bg-[#e1eae9]"
                                />
                            </div>

                            <div className="flex flex-col text-start">
                                <label className="text-sm text-primary mb-1">Phone</label>
                                <input
                                    type="text"
                                    placeholder="Your phone number"
                                    className="rounded-md px-3 py-2 focus:outline-none focus:ring-1 focus:ring-primary-dull bg-[#e1eae9]"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-primary text-white py-2 mt-3 rounded-md hover:bg-primary-dull transition"
                            >
                                Book Appointment
                            </button>
                        </form>
                    </div>

                    {/* Image */}
                    <div className='absolute left-[700px] capitalize'>
                        <img src={assets.surgeryPic} alt="" className="w-[300px] rounded-md" />
                    </div>
                </div>
            </div>
            <div className="mx-48 mt-80 mb-12">
                <h2 className="text-3xl font-bold text-primary text-center leading-tight mb-8 capitalize">
                    the most qualified, skillful & <br /> professional doctors
                </h2>

                <div
                    className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-10 
        "
                >
                    {specialDoctors.map((doctor, index) => (
                        <DoctorsCard key={index} doctor={doctor} />
                    ))}
                </div>
            </div>

        </>
    )
}

export default EmergencyContact