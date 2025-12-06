import React from 'react'
import Servicebanner from '../componets/services/Servicebanner'
import CartTable from '../componets/cart/CartTable';
import Summary from '../componets/cart/Summary';
import EmergencyAlert from '../componets/EmergencyAlert';

const Cart = () => {

    return (
        <div className="flex flex-col min-h-screen">

            {/* Main Content Wrapper */}
            <div className="grow px-4 sm:px-6 lg:px-8 py-6 md:py-10 max-w-7xl mx-auto w-full">

                <Servicebanner title={"cart"} />

                <div className="bg-white mt-6 md:mt-10">

                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">

                        {/* Left Side: Table */}
                        {/* 'overflow-x-auto' ensures the table scrolls horizontally on small phones instead of breaking layout */}
                        <div className="flex-1 w-full overflow-x-auto">
                            <CartTable />
                        </div>

                        {/* Right Side: Summary */}
                        {/* lg:w-96 sets fixed width on desktop. lg:sticky keeps it in view while scrolling */}
                        <div className="w-full lg:w-96 shrink-0 lg:sticky lg:top-4">
                            <Summary />
                        </div>

                    </div>
                </div>
            </div>

            <EmergencyAlert />
        </div>
    )
}

export default Cart