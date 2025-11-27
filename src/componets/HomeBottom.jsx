import React from 'react'

const HomeBottom = () => {
    return (
        <div className='px-40 pt-20 capitalize text-primary text-center'>
            <h2 className='text-3xl font-bold text-primary pb-5'>
                resource to keep you informed <br /> with our blog
            </h2>

            <div className="flex flex-wrap justify-center mt-10 mx-auto gap-10 pb-10">

                {/* Card 1 */}
                <div className='text-start w-56'>
                    <img
                        className="w-full h-60 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300"
                        src="https://images.unsplash.com/photo-1562619371-b67725b6fde2?q=80&w=600&h=900&auto=format&fit=crop"
                        alt="image"
                    />
                    <p className="mt-2 text-gray-500">sdfs</p>
                    <h4 className="font-semibold leading-snug">
                        how do inherited retinal diseases happen?
                    </h4>
                </div>

                {/* Card 2 */}
                <div className='text-start w-56'>
                    <img
                        className="w-full h-60 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300"
                        src="https://images.unsplash.com/photo-1562619371-b67725b6fde2?q=80&w=600&h=900&auto=format&fit=crop"
                        alt="image"
                    />
                    <p className="mt-2 text-gray-500">sdfs</p>
                    <h4 className="font-semibold leading-snug">
                        protect your eyes from dust and disease
                    </h4>
                </div>

                {/* Card 3 */}
                <div className='text-start w-56'>
                    <img
                        className="w-full h-60 object-cover rounded-lg hover:-translate-y-1 transition-all duration-300"
                        src="https://images.unsplash.com/photo-1562619371-b67725b6fde2?q=80&w=600&h=900&auto=format&fit=crop"
                        alt="image"
                    />
                    <p className="mt-2 text-gray-500">sdfs</p>
                    <h4 className="font-semibold leading-snug">
                        we're ready to enhance your vision
                    </h4>
                </div>

            </div>
        </div>

    )
}

export default HomeBottom