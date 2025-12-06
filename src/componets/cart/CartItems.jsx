import React from 'react'
import QuantitySelector from './QuantitySelector'
import { Trash2 } from 'lucide-react'

const CartItems = ({ item, onUpdateQuantity, onRemove }) => {
  return (
     <div className="flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 transition-colors">
      
      {/* Column 1: Product Info (50% width) */}
      <div className="flex items-center w-1/2 gap-4">
        <div className="bg-white p-2 border border-gray-200 rounded-lg">
          {/* Replace src with item.image in real app */}
          <img 
            src="https://via.placeholder.com/80x40" 
            alt="Glasses" 
            className="w-20 h-auto object-contain" 
          />
        </div>
        <div>
          <h3 className="text-teal-700 font-bold text-sm md:text-base">
            {item.name}
          </h3>
          <p className="text-gray-500 text-xs md:text-sm mt-1">
            {item.variant}
          </p>
        </div>
      </div>

      {/* Column 2: Quantity (25% width) */}
      <div className="flex justify-center w-1/4">
        <QuantitySelector 
          quantity={item.quantity}
          onIncrease={() => onUpdateQuantity(item.id, 1)}
          onDecrease={() => onUpdateQuantity(item.id, -1)}
        />
      </div>

      {/* Column 3: Price & Actions (25% width) */}
      <div className="flex items-center justify-end w-1/4 gap-6 pr-4">
        <div className="text-right">
          <span className="block text-red-300 line-through text-xs font-medium">
            ${item.originalPrice}
          </span>
          <span className="block text-teal-700 font-bold text-lg">
            ${item.price}
          </span>
        </div>
        
        <button 
          onClick={() => onRemove(item.id)}
          className="text-teal-200 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
        >
          <Trash2 size={20} />
        </button>
      </div>

    </div>
  )
}

export default CartItems