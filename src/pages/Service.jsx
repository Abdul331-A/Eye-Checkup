import React from 'react'
import Servicebanner from '../componets/services/Servicebanner'
import { servicesList } from '../assets/assets'
import ServiceCard from '../componets/services/ServiceCard'

const Service = () => {
    return (
        <>
            <div className='px-28 py-16'>
                <Servicebanner />
            </div>
            <div className="container mx-auto p-4 px-52">
                <h1 className="text-3xl font-semibold text-center mb-8">Services</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {servicesList.map(service => (
                        <ServiceCard
                            key={service.id}
                            imageSrc={service.imageSrc}
                            title={service.title}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default Service