import React from 'react'
import SummaryRow from './SummaryRow'
import { ArrowRight, Truck } from 'lucide-react';


const Summary = () => {
    const subtotal = 150.00;
    const discount = 120.00;
    const total = 40.00;
    return (
        <div className="w-full max-w-sm flex flex-col gap-6">

            {/* --- THE MAIN CARD --- */}
            <div className="relative bg-[#eefcf7] rounded-2xl p-6 overflow-hidden">

                {/* Header */}
                <h2 className="text-xl font-bold text-teal-900 mb-6">Order Summary</h2>

                {/* Top Section */}
                <div className="mb-6">
                    <SummaryRow label="Subtotal" value={`$${subtotal.toFixed(2)}`} />
                    <SummaryRow label="Total Discount" value={`$${discount.toFixed(2)}`} />
                </div>

                {/* --- TICKET SEPARATOR EFFECT --- */}
                {/* This creates the dotted line and the semi-circle cutouts */}
                <div className="relative w-full h-4 mb-6 flex items-center">
                    {/* The Dotted Line */}
                    <div className="w-full border-b-2 border-dotted border-teal-200/60"></div>

                    {/* Left Cutout (White Circle) */}
                    <div className="absolute -left-8 w-6 h-6 bg-white rounded-full"></div>
                    {/* Right Cutout (White Circle) */}
                    <div className="absolute -right-8 w-6 h-6 bg-white rounded-full"></div>
                </div>

                {/* Bottom Section */}
                <div>
                    <SummaryRow label="Total" value={`$${total.toFixed(2)}`} isBold={true} />

                    <button className="w-full mt-4 bg-[#1f7c6e] hover:bg-[#16665a] text-white py-3 rounded-lg font-semibold text-sm transition-colors shadow-sm">
                        CHECKOUT
                    </button>
                </div>
            </div>

            {/* --- PROMO CODE SECTION --- */}
            <div className="relative">
                <input
                    type="text"
                    placeholder="Enter Promo Code"
                    className="w-full border border-teal-100 rounded-lg py-3 px-4 text-sm outline-none focus:border-teal-500 text-gray-600 placeholder-gray-400 bg-white shadow-sm"
                />
                <button className="absolute right-0 top-0 h-full w-14 bg-[#1f7c6e] hover:bg-[#16665a] rounded-r-lg flex items-center justify-center transition-colors">
                    <ArrowRight color="white" size={20} />
                </button>
            </div>

            {/* --- FREE DELIVERY FOOTER --- */}
            <div className="flex items-center gap-3 text-gray-500">
                <Truck size={20} className="text-teal-600" />
                <span className="text-sm font-medium">Free Delivery Over $120</span>
            </div>

        </div>
    )
}

export default Summary