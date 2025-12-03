import React from 'react'

const SpecsCard = () => {
  const product = {
    name: "Eco Tyne Cry",
    details: "Budapest White 51 18 145",
    originalPrice: 120,
    salePrice: 100,
    // Placeholder image URL - replace with your actual image path/URL
    imageUrl: "placeholder-glasses.png",
    sales:"sale"
  };
  return (
    <div className="w-[230px] mx-auto overflow-hidden bg-white rounded-lg shadow-md">

      <div className="relative p-2">
        <span className="absolute top-0 left-0 mt-2 ml-2 text-[10px] font-semibold uppercase tracking-wide text-yellow-400 px-2 py-0.5 rounded-full">
          {product.sales}
        </span>

        <img
          className="w-full h-32 object-contain mt-6"
          src={product.imageUrl}
          alt={product.name}
        />
      </div>

      <div className="px-3 py-2 text-center">
        <div className="font-medium text-lg mb-1 text-primary-dull">{product.name}</div>
        <p className="text-black text-xs">{product.details}</p>
      </div>

      <div className="px-3 pt-2 pb-3 text-center">
        <span className="text-xs line-through text-orange-300 mr-1">
          ${product.originalPrice}
        </span>
        <span className="text-md font-medium text-primary-dull">
          ${product.salePrice}
        </span>
      </div>

    </div>
  )
}

export default SpecsCard