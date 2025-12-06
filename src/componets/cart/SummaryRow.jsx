import React from 'react'



const SummaryRow = ({ label, value, isBold = false, isDiscount = false }) => {
    return (
        <div className={`flex justify-between items-center w-full mb-3 ${isBold ? 'font-bold text-teal-900' : 'text-teal-700'}`}>
            <span className="text-sm">{label}</span>
            <span className={`text-sm ${isBold ? 'text-lg' : ''}`}>
                {value}
            </span>
        </div>
    )
}

export default SummaryRow