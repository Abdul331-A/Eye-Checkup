import React from 'react'
import Servicebanner from '../componets/services/Servicebanner'
import AppoinmentForm from '../componets/appoinment/AppoinmentForm'

const Appoinment = () => {
    return (
        <div>
            <div className="px-6 sm:px-10 lg:px-40 py-10">
                <Servicebanner title={"Appoinment"} />
                <AppoinmentForm/>
            </div>

        </div>
    )
}

export default Appoinment