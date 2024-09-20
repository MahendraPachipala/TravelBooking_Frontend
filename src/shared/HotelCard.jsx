import React from 'react';
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom';
import calculateAvgRating from '../utils/avgRating';

const HotelCard = ({ tour }) => {
   const { _id, title, city, photo, price, featured, reviews } = tour;
   const { totalRating, avgRating } = calculateAvgRating(reviews);

   return (
      <div className="bg-white border border-[#E0E0E0] rounded-lg shadow-lg overflow-hidden max-w-sm mx-auto">
         <Card className="bg-transparent border-0">
            <div className="relative">
               <img 
                  src={photo} 
                  alt="hotel-img" 
                  className="w-full h-48 object-cover rounded-t-lg" 
               />
               {featured && (
                  <span className="absolute top-2 left-2 bg-[#F1C40F] text-[#500042] text-xs font-semibold px-2 py-1 rounded-lg">
                     Featured
                  </span>
               )}
            </div>

            <CardBody className="p-3 bg-transparent">
               <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="text-[#500042] flex items-center gap-1">
                     <i className="ri-map-pin-line text-[#500042]"></i> {city}
                  </span>
                  <span className="text-[#500042] flex items-center gap-1">
                     <i className="ri-star-fill text-[#F1C40F]"></i> {avgRating === 0 ? 'Not rated' : avgRating}
                     {totalRating === 0 ? null : <span className="text-gray-500">({reviews.length})</span>}
                  </span>
               </div>

               <h5 className="text-lg font-semibold text-[#500042] mb-2">
                  <Link 
                     to={`/hotels/${_id}`} 
                     className="text-[#500042] hover:text-[#F1C40F] no-underline"
                  >
                     {title}
                  </Link>
               </h5>

               <div className="flex items-center justify-between mt-2">
                  <h5 className="text-md font-semibold text-[#500042]">
                     ${price} <span className="text-gray-600 text-xs">/ per night</span>
                  </h5>
                  <Link to={`/hotels/${_id}`}>
                     <button className="bg-[#500042] text-white px-3 py-1.5 rounded-lg font-semibold hover:bg-[#400032] text-sm">
                        Book Now
                     </button>
                  </Link>
               </div>
            </CardBody>
         </Card>
      </div>
   );
}

export default HotelCard;
