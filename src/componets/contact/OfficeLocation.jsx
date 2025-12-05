import React from 'react'
import { offices } from '../../assets/assets'

const OfficeLocation = () => {

    return (
        <div className="container mx-36 px-20 lg:px-20 py-16 border-t-2 border-gray-500">
            {/* Left Title + Description */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                <div>
                    <h2 className="text-2xl text-teal-700">
                        Come and visit one of our offices <br /> around the world
                    </h2>
                    <p className="text-gray-600 mt-4">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit ut
                        aliquid perferendis sit amet turbus venenatis iusto.
                    </p>
                </div>

                {/* Right Office List */}
                <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-12">
                    {offices.map((office, index) => (
                        <div key={index}>
                            <h3 className="text-teal-700 ">{office.city}</h3>
                            <p className="text-gray-600">{office.address1}</p>
                            <p className="text-gray-600">{office.address2}</p>
                            <p className="text-gray-600">{office.phone}</p>
                            <p className="text-gray-600">{office.email}</p>

                            <button className="text-teal-600 mt-2 hover:underline">
                                See Map
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default OfficeLocation