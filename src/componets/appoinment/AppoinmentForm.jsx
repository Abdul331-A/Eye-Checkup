import React from 'react'
import ContactForm from '../contact/ContactForm'
import { assets } from '../../assets/assets'
import AppoinmentBooking from './AppoinmentBooking'

const AppoinmentForm = () => {
    return (
        <div className="container mx-auto px-6 lg:px-20 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* LEFT IMAGES */}
                <div className="relative flex justify-center">
                    <img
                        src={assets.lensCheck}
                        alt="optical"
                        className="w-64 sm:w-80 rounded-xl shadow-md"
                    />

                    <img
                        src={assets.medicalDevice}
                        alt="optical"
                        className="w-52 sm:w-72 rounded-xl shadow-md absolute top-16 left-24 sm:left-32"
                    />
                </div>

                {/* RIGHT FORM */}
                <div>
                    <AppoinmentBooking />
                </div>

            </div>
        </div>
    )
}

export default AppoinmentForm