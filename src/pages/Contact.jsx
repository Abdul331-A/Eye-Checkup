import React from 'react'
import Servicebanner from '../componets/services/Servicebanner'
import ContactForm from '../componets/contact/ContactForm'
import ContactInfo from '../componets/contact/ContactInfo'
import OfficeLocation from '../componets/contact/OfficeLocation'

const Contact = () => {
  return (
    <div>
      <div className="px-6 sm:px-10 lg:px-40 py-10">
        <Servicebanner title={"Contact"} />
      </div>
      <div className='flex px-48 mb-2'>
        <div>
          <ContactForm head={"Let's Start"}/>
        </div>
        <div className='py-32 '>
          <ContactInfo/>
        </div>
      </div>
      <div>
        <OfficeLocation/>
      </div>

    </div>
  )
}


export default Contact