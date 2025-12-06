import React from 'react';

const QuantitySelector = ({ quantity, onIncrease, onDecrease }) => {
  return (
    <div className="flex items-center border border-teal-500 rounded-md px-2 py-1 bg-white">
      <button 
        onClick={onDecrease} 
        className="text-teal-700 hover:text-teal-900 px-2 font-bold text-lg disabled:opacity-50"
        disabled={quantity <= 1}
      >
        -
      </button>
      
      <span className="mx-3 text-gray-700 font-medium w-4 text-center">
        {quantity}
      </span>
      
      <button 
        onClick={onIncrease} 
        className="text-teal-700 hover:text-teal-900 px-2 font-bold text-lg"
      >
        +
      </button>
    </div>
  );
};

export default QuantitySelector;