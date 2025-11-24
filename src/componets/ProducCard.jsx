import React, { useState } from 'react'

const ProducCard = ({ product }) => {
    const [count, setCount] = useState(0);
    return (
        <div className="border border-gray-300 rounded-md p-3 w-56 bg-white">
            <div className="group cursor-pointer flex items-center justify-center">
                <img className="group-hover:scale-105 transition w-36" src={product.image} alt={product.name} />
            </div>

            <p className="text-gray-500 text-sm">{product.category}</p>
            <p className="font-semibold text-lg truncate">{product.name}</p>

            <div className="flex items-center gap-1 text-yellow-400 text-sm">
                {"⭐".repeat(Math.floor(product.rating))}
                <span className="text-gray-600">({product.rating})</span>
            </div>

            <div className="flex justify-between items-center mt-2">
                <p className="text-primary font-bold">
                    ${product.offerPrice} <span className="line-through text-gray-500">${product.price}</span>
                </p>

                {count === 0 ? (
                    <button className="border border-primary px-3 py-1 rounded-md text-primary"
                        onClick={() => setCount(1)}>
                        Add
                    </button>
                ) : (
                    <div className="flex items-center gap-2 bg-primary/20 px-2 py-1 rounded-md">
                        <button onClick={() => setCount(prev => Math.max(prev - 1, 0))}>-</button>
                        <span>{count}</span>
                        <button onClick={() => setCount(prev => prev + 1)}>+</button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProducCard