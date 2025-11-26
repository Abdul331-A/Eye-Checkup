import React from 'react'

const DoctorsCard = ({ doctor }) => {
    return (
        <div className="rounded-xl hover:-translate-y-1 transition duration-300 p-3 w-full max-w-[260px] mx-auto">

            <img className="rounded-xl w-full h-52 object-cover" src={doctor.images} alt="" />

            <h3 className="text-base text-primary font-medium mt-3 ">
                {doctor.name}
            </h3>

            <p className="text-xs text-primary font-medium mt-1">
                {doctor.department}
            </p>
        </div>

    )
}

export default DoctorsCard