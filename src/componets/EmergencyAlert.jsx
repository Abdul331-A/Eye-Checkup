import React from 'react'

const EmergencyAlert = () => {
    return (
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
    )
}

export default EmergencyAlert