import { DatePicker, Space } from 'antd';
import React from 'react'






const onChange = (date, dateString) => {
    console.log(date, dateString);
};


const AppoinmentBooking = () => {

    return (
        <div>
            <div className="max-w-4xl mx-auto p-6 md:p-10 capitalize">
                {/* Title */}
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-6">
                    difjgvdifgvndfgv
                </h2>

                {/* Form */}
                <form className="space-y-6">
                    {/* Name + Mobile */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm text-primary mb-1">Name</label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full bg-[#e9f2f1] p-3 rounded-sm outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-primary mb-1">email</label>
                            <input
                                type="text"
                                placeholder="Your email"
                                className="w-full bg-[#e9f2f1] p-3 rounded-sm outline-none"
                            />
                        </div>
                    </div>

                    {/* phone no + appoinment date */}
                    <div className="grid grid-cols-1 gap-6">
                        <div>
                            <label className="block text-sm text-primary mb-1">phone no.</label>
                            <input
                                type="email"
                                placeholder="enter Your phone number"
                                className="w-full bg-[#e9f2f1] p-3 rounded-sm outline-none"
                            />
                        </div>

                        <div>
                            <label className="block text-sm text-primary mb-1">appoinment date</label>
                                <DatePicker  className="custom-date w-full"
                                    format={{
                                        format: 'YYYY-MM-DD',
                                        type: 'mask',
                                        
                                    }}
                                    onChange={onChange}
                                />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-sm"
                    >
                        Book To Appoinment
                        <span>➜</span>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AppoinmentBooking