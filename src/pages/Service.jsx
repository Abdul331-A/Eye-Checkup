import React from 'react'
import Servicebanner from '../componets/services/Servicebanner'
// import { servicesList } from '../assets/assets'
import ServiceCard from '../componets/services/ServiceCard'
import { FaEye } from 'react-icons/fa';
import EmergencyAlert from '../componets/EmergencyAlert';
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
    const title = "services";
    return (
        <>
            <div className='px-28 py-16'>
                <Servicebanner title={title} />
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
            <EmergencyAlert/>

        </>
    )
}

export default Service