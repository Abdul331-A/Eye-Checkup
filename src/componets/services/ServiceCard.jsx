import React from 'react'
import { servicesList } from '../../assets/assets'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ServiceCard = ({ imageSrc, title, description }) => {
    return (
        <div className="max-w-sm rounded-lg shadow-lg overflow-hidden transform transition duration-500 hover:scale-105 bg-white capitalize">
            {/* Image Container with specific aspect ratio for the icon appearance */}
            <div className="relative h-40 flex items-center justify-center p-6 border-b-primary border-b-4">
                <img className="max-h-full max-w-full object-contain" src={imageSrc} alt={title} />
               <div className='w-10 h-12 bg-primary absolute bottom-0 left-10 rounded-t-full'>
                   {/* <span><i className="fa-solid fa-eye"></i></span> */}
               </div>
            </div>

            {/* Card Content */}
            <div className="p-6 bg-[#eafffb]">
                <h5 className="text-xl font-medium mb-2 text-primary">{title}</h5>
                <p className="text-gray-600 mb-4">{description}</p>
                {/* The design has an implicit action, so a link or button can go here */}
                <p className='text-primary '>more details</p>
            </div>
        </div>
    );
};


export default ServiceCard