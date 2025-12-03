import React from 'react'
import Servicebanner from '../componets/services/Servicebanner'
import FilterDropDown from '../componets/Shop/FilterDropDown'
import SpecsCard from '../componets/Shop/SpecsCard'

const Shop = () => {

  return (
    <>
      <div className='px-28 py-16'>
        <Servicebanner title={"Shop"} />
      </div>
      <div className="container mx-auto p-4 px-44 flex items-center justify-between">
        <div className="flex space-x-10">
          <span className='bg-[#e9f2f1] px-4 py-2 rounded-2xl text-primary text-sm'>
            <FilterDropDown label={"Selected Catagories"} />
          </span>
          <span className='bg-[#e9f2f1] px-4 py-2 rounded-2xl text-primary text-sm'>
            <FilterDropDown label={"Men's"} />
          </span>
        </div>
        <div className='text-primary'>
          <FilterDropDown
            label={<span className='text-sm'>Sort by <strong>Newest</strong></span>}
          />
        </div>
      </div>
      <div className="p-4">
        <SpecsCard/>
      </div>
    </>
  )
}

export default Shop