import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa'

const ContactInfo = () => {
  return (
    <div className="w-full space-y-6 text-primary">

      <h2 className="text-lg font-semibold">Get in touch with us today</h2>
      <p className="text-sm text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        commodo ligula.
      </p>

      <div className="space-y-2 text-sm">
        <p className="flex items-center gap-2">
          <FaPhoneAlt /> Monday–Friday: 09am–07pm
        </p>
        <p className='text-black pl-6 pb-5'>+1 988798977</p>

        <p className="flex items-center gap-2">
          <FaEnvelope /> Need help with your order?
        </p>
        <p className='text-black pl-6 pb-5'>info@domin.com</p>

        {/* <p className="flex items-center gap-2">
          <FaEnvelope /> info@domain.com
        </p> */}
      </div>

      <div>
        <p className="font-medium text-base">Follow us</p>
        <div className="flex gap-4 mt-2 text-primary text-lg">
          <FaFacebookF className="cursor-pointer hover:text-black" />
          <FaLinkedinIn className="cursor-pointer hover:text-black" />
          <FaInstagram className="cursor-pointer hover:text-black" />
        </div>
      </div>

    </div>
  )
}

export default ContactInfo