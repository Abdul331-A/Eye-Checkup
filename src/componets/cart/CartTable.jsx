// Mock Data
import React, { useState } from 'react'
import CartItems from './CartItems';
import { initialProducts, items } from '../../assets/assets';

const CartTable = () => {
    const [products, setProducts] = useState(initialProducts);

    const handleUpdateQuantity = (id, change) => {
        setProducts(prev =>
            prev.map(item =>
                item.id === id
                    ? { ...item, quantity: Math.max(1, item.quantity + change) }
                    : item
            )
        );
    };

    const handleRemove = (id) => {
        setProducts(prev => prev.filter(item => item.id !== id));
    };

    return (
        <div className="min-h-screen p-8 flex justify-center items-start">
            <div className="w-full max-w-4xl bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">

                {/* Table Header */}
                <div className="flex bg-primary text-[#f6f6f6] py-4 px-4 text-sm ">
                    <div className="w-1/2">Product</div>
                    <div className="w-1/4 text-center">Quantity</div>
                    <div className="w-1/4 text-right pr-12">Price</div>
                </div>

                {/* Table Body */}
                <div className="divide-y divide-gray-50">
                    {products.length > 0 ? (
                        products.map(product => (
                            <CartItems
                                key={product.id}
                                item={product}
                                onUpdateQuantity={handleUpdateQuantity}
                                onRemove={handleRemove}
                            />
                        ))
                    ) : (
                        <div className="p-8 text-center text-gray-500">
                            Your cart is currently empty.
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default CartTable;
