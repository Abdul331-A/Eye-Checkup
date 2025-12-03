import React from 'react'
import Servicebanner from '../componets/services/Servicebanner'
// import { servicesList } from '../assets/assets'
import ServiceCard from '../componets/services/ServiceCard'
import { FaEye } from 'react-icons/fa';
// import { servicesList } from '../assets/assets';

export const servicesList = [
    { id: 1, title: 'Surgical Procedures', description: 'Description for surgical procedures.', imageSrc: '/images/icon-surgical.png', icon: <FaEye className='text-primary' /> },
    { id: 2, title: 'Vision Correction', description: 'Description for vision correction.', imageSrc: '/images/icon-vision.png', icon: <FaEye className='text-primary' /> },
    { id: 3, title: 'Lenses & Transitions', description: 'Description for lenses & transitions.', imageSrc: '/images/icon-lenses.png', icon: <FaEye className='text-primary' /> },
    { id: 4, title: 'Laser Eye Surgery', description: 'Description for laser eye surgery.', imageSrc: '/images/icon-laser.png', icon: <FaEye className='text-primary' /> },
    { id: 5, title: 'Glaucoma & Cornea', description: 'Description for glaucoma & cornea.', imageSrc: '/images/icon-glaucoma.png', icon: <FaEye className='text-primary' /> },
    { id: 6, title: 'Dry Eye Surgery', description: 'Description for dry eye surgery.', imageSrc: '/images/icon-dryeye.png', icon: <FaEye className='text-primary' /> },
];

const Service = () => {
    const title= "services";
    return (
        <>
            <div className='px-28 py-16'>
                <Servicebanner title={title}/>
            </div>
            <div className="container mx-auto p-4 px-52">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {servicesList.map(service => (
                        <ServiceCard
                            key={service.id}
                            imageSrc={service.imageSrc}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>

            </div>
            <div className="bg-[#f6f6f6] flex flex-col md:flex-row px-6 md:px-20 lg:px-52 justify-between mx-5 md:mx-20 lg:mx-28 rounded-sm my-10 md:my-14 py-10 md:py-20 capitalize gap-6 md:gap-0 text-center md:text-left">
                <div>
                    <h2 className="text-primary text-2xl md:text-3xl font-bold pb-2">
                        need help? talk to <br /> our expert
                    </h2>
                    <p className="text-primary text-sm md:text-base">
                        talk to our expert or browse through more help.
                    </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 items-center sm:items-stretch justify-center md:justify-end w-full sm:w-auto">
                    {/* Primary action */}
                    <button
                        className="inline-flex items-center justify-center w-full sm:w-auto h-10 px-4 md:px-3 border border-black rounded-sm hover:bg-black hover:text-white text-sm font-medium cursor-pointer"
                        type="button"
                    >
                        contact us
                    </button>

                    {/* Phone/secondary action */}
                    <button
                        className="inline-flex items-center justify-center w-full sm:w-auto h-10 px-4 md:px-3 border border-black rounded-sm hover:bg-black hover:text-white text-sm font-medium cursor-pointer"
                        type="button"
                    >
                        +1 (230) 369-155-23
                    </button>
                </div>
            </div>

        </>
    )
}

export default Service