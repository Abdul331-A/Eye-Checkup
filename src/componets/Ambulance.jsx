import React from 'react'
import { assets } from '../assets/assets'
import { MdOutlinePhoneInTalk } from 'react-icons/md'
import { BsOpticalAudio } from 'react-icons/bs'
import FacillityList from './FacillityList'

const Ambulance = () => {
    return (
        <div className=''>
            <div className="bg-[#f6f6f6] w-full capitalize flex px-20 py-14 gap-10">
                <img src={assets.ambulance} alt="" className='h-80' />
                <div>
                    <h2 className='text-3xl font-bold text-primary pb-5'>need a doctor? call for an <br />emergency service</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere cumque id enim aspernatur vel. Soluta commodi blanditiis officia? Consectetur
                        autem labore </p>
                    <div className="pt-5 flex gap-4">
                        <span className="w-14 h-14 rounded-full bg-[#D7E7E5] flex items-center justify-center text-xs sm:text-xl ">
                            <MdOutlinePhoneInTalk className="text-primary text-3xl" />
                        </span>
                        <div>
                        <p className='pb-1.5'>call emergency</p>
                        <p className='text-primary'>+1(230)-456-155-23</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ambulance