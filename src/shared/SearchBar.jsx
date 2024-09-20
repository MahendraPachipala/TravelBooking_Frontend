import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { BASE_URL } from '../utils/config'

const SearchBar = () => {
   const locationRef = useRef('')
   const navigate = useNavigate()

   const searchHandler = async () => {
      const location = locationRef.current.value

      if (location === '') {
         return alert('All fields are required!')
      }

      const res = await fetch(`${BASE_URL}/tours/search/getTourBySearch?city=${location}`)
      
      if (!res.ok) alert('Something went wrong')

      const result = await res.json()

      navigate(`/tours/search?city=${location}`, { state: result.data })
   }

   return (
      <div className="m-4 flex">
         <div className="bg-white shadow-lg rounded-full px-4 md:px-6 lg:px-8 w-full md:w-max lg:w-auto border-2 border-[#a70885]">
            {/* Form */}
            <form className="flex flex-wrap items-center gap-4 lg:gap-6">
               
               {/* Location Input */}
               <div className="flex items-center gap-3 border-b md:border-none md:border-r border-gray-300 w-full md:w-auto py-2">
                  <span className="text-[#a70885] text-2xl md:text-3xl">
                     <i className="ri-map-pin-line"></i>
                  </span>
                  <div className="w-full">
                     <h6 className="text-sm md:text-base font-medium mb-0">Location</h6>
                     <input
                        type="text"
                        placeholder="Where are you going?"
                        ref={locationRef}
                        className="w-full border-none focus:outline-none text-gray-700 text-xs md:text-sm font-medium"
                     />
                  </div>
               </div>

               {/* Search Button */}
               <button
                  className="flex items-center justify-center bg-[#a70885] rounded-[10px_5px_10px_5px] text-white text-sm md:text-lg font-medium py-1 px-3 md:py-2 md:px-5 shadow-md hover:bg-[#900368] transition-all"
                  type="submit"
                  onClick={searchHandler}
               >
                  <i className="ri-search-line text-xl"></i>
               </button>
            </form>
         </div>
      </div>
   )
}

export default SearchBar
