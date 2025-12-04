import React from 'react'

const SpecsCard = ({ specs }) => {

  // const product = {
  //   name: "Eco Tyne Cry",
  //   details: "Budapest White 51 18 145",
  //   originalPrice: 120,
  //   salePrice: 100,
  //   // Placeholder image URL - replace with your actual image path/URL
  //   imageUrl: "placeholder-glasses.png",
  //   sales:"sale"
  // };

  console.log(specs);

  return (
    <div className="group w-[230px] mx-auto overflow-hidden bg-white hover:bg-primary-light duration-300 rounded-lg shadow cursor-pointer relative">

      {/* Favourite Icon */}
      <button className="absolute top-2 right-2 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <i className="fa-regular fa-heart text-primary text-lg hover:text-red-500"></i>
      </button>

      {/* Image Section */}
      <div className="relative p-2 ">
        <span className="absolute top-0 left-0 mt-2 ml-2 text-[10px] font-semibold uppercase tracking-wide text-yellow-400 px-2 py-0.5 rounded-full">
          {specs.saleTag}
        </span>

        <img
          className="w-full h-32 object-contain mt-6 transition-transform duration-300 group-hover:scale-110 "
          src={specs.image}
          alt={specs.name}
        />
      </div>

      {/* Name + Description */}
      <div className="px-3 py-2 text-center">
        <div className="font-medium text-lg mb-1 text-primary-dull">{specs.name}</div>
        <p className="text-black text-xs">{specs.discription}</p>
      </div>

      {/* Price Section */}
      <div className="px-3 pt-2 pb-3 text-center">
        <span className="text-xs line-through text-orange-300 mr-1">
          ${specs.actualPrice}
        </span>
        <span className="text-md font-medium text-primary-dull">
          ${specs.offerPrice}
        </span>
      </div>

      {/* Cart Button (center on hover) */}
      <button className="
      absolute inset-0 m-auto h-9 w-24 
      rounded-sm bg-primary-dull text-white text-xs font-medium shadow 
      opacity-0 group-hover:opacity-100 group-hover:translate-y-0
      translate-y-4 duration-300
    ">
        ADD TO CART
      </button>

    </div>

  )
}

export default SpecsCard