import React from 'react'
import { assets } from '../assets/assets'
import { Flex, Progress } from 'antd'

const FacilitySection = () => {
    return (
        <div className="bg-[#F6F6F6] py-10 px-6 md:px-20 lg:px-36">
            <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-28">

                {/* IMAGE SECTION */}
                <div className="relative w-fit mx-auto lg:mx-0">
                    <img
                        src={assets.checkSpecs}
                        alt=""
                        className="w-[260px] md:w-[320px] lg:w-[250px] rounded-md"
                    />

                    <img
                        src={assets.checkingLady}
                        alt=""
                        className="absolute top-8 -right-10 w-[150px] md:w-[180px] lg:w-[200px] rounded-md"
                    />
                </div>

                {/* TEXT SECTION */}
                <div className="w-full lg:w-[600px]">
                    <button className="group capitalize px-6 bg-[#E9F2F1] shadow py-2 mb-4 rounded-sm text-primary cursor-pointer active:scale-95 transition duration-300 hover:bg-primary-dull flex items-center gap-2 w-max">
                        <img src={assets.greenEye} alt="" className="h-4" />
                        about us
                    </button>

                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-primary leading-tight pb-4">
                        expert eye checkup for <br />children and adults
                    </h1>

                    <p className="text-gray-600">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis quasi cum odio et quaerat illo vel iusto in vero delectus laborum dolorem perspiciatis, magnam corrupti neque possimus unde suscipit tempora?
                    </p>

                    <div className="py-8">
                        <Flex gap="small" vertical>
                            <div>
                                <p className="text-primary">Lorem ta aliquam?</p>
                                <Progress percent={30} strokeColor="#1F7B6F" className="mt-0" />
                            </div>
                            <div>
                                <p className="text-primary ">Lorem ta aliquam?</p>
                                <Progress percent={50} strokeColor="#1F7B6F" className="mt-0" />
                            </div>
                            <div>
                                <p className="text-primary ">Lorem ta aliquam?</p>
                                <Progress percent={50} strokeColor="#1F7B6F" className="mt-0" />
                            </div>
                        </Flex>
                    </div>
                </div>

            </div>
        </div>


    )
}

export default FacilitySection