import React, { useState } from 'react'
import Servicebanner from '../componets/services/Servicebanner'
import FilterDropDown from '../componets/Shop/FilterDropDown'
import SpecsCard from '../componets/Shop/SpecsCard'
import { specsData } from '../assets/assets'
import { Pagination } from 'antd'
import "./pagination.css";

const Shop = () => {
  const itemPerPage = 4; //how many cards to show per pages

  const [currentPage, setcurrentPage] = useState(1);

  //slice product accroding to the page
  const stratIndex = (currentPage - 1) * itemPerPage;
  const visibleProduct = specsData.slice(stratIndex, stratIndex + itemPerPage)

  return (
    <>
      <div className="px-6 sm:px-10 lg:px-40 py-10">
        <Servicebanner title={"Shop"} />
      </div>

      {/* Filter Section */}
      <div className="container mx-auto px-4 md:px-10 lg:px-44 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

        {/* Left Filters */}
        <div className="flex flex-wrap gap-3">
          <span className="bg-[#e9f2f1] px-4 py-2 rounded-2xl text-primary text-sm">
            <FilterDropDown label={"Selected Categories"} />
          </span>

          <span className="bg-[#e9f2f1] px-4 py-2 rounded-2xl text-primary text-sm">
            <FilterDropDown label={"Men's"} />
          </span>
        </div>

        {/* Sort By */}
        <div className="text-primary">
          <FilterDropDown
            label={<span className="text-sm">Sort by <strong>Newest</strong></span>}
          />
        </div>
      </div>

      {/* Product Grid */}
      <div className="px-6 sm:px-10 lg:px-40 pt-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-6">
          {specsData.map((specs) => (
            <SpecsCard key={specs.id} specs={specs} />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center w-full my-10">
        <Pagination
          className="custom-pagination"
          current={currentPage}
          total={specsData.length}
          pageSize={itemPerPage}
          onChange={(page) => setcurrentPage(page)}
        />
      </div>

      {/* Help Section */}
      <div className="bg-[#f6f6f6] px-6 sm:px-10 lg:px-52 py-10 md:py-16 rounded-sm 
            mx-4 sm:mx-10 lg:mx-28 
            flex flex-col md:flex-row items-center md:items-start justify-between 
            gap-6 text-center md:text-left mb-10">

        {/* Text */}
        <div>
          <h2 className="text-primary text-2xl md:text-3xl font-bold pb-2">
            need help? talk to <br /> our expert
          </h2>
          <p className="text-primary text-sm md:text-base">
            talk to our expert or browse through more help.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto justify-center md:justify-end">

          {/* Primary */}
          <button
            className="inline-flex items-center justify-center w-full sm:w-auto h-10 px-4 border border-black rounded-sm hover:bg-black hover:text-white text-sm font-medium"
            type="button"
          >
            contact us
          </button>

          {/* Secondary */}
          <button
            className="inline-flex items-center justify-center w-full sm:w-auto h-10 px-4 border border-black rounded-sm hover:bg-black hover:text-white text-sm font-medium"
            type="button"
          >
            +1 (230) 369-155-23
          </button>
        </div>
      </div>

    </>
  )
}

export default Shop