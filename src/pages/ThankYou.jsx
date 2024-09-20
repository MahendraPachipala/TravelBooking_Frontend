import React from 'react';
import { Link } from 'react-router-dom';

const HotelThankYou = () => {
  return (
    <section className="flex items-center justify-center min-h-screen bg-[#f7f7f7]">
      <div className="text-center p-8 bg-white shadow-lg rounded-lg">
        <span className="text-6xl text-[#500042]"><i className='ri-checkbox-circle-line'></i></span>
        <h1 className='mt-4 mb-3 text-4xl font-semibold text-[#500042]'>Thank You</h1>
        <h3 className='mb-6 text-2xl'>Your Hotel Is Booked</h3>
        <Link to='/home'>
          <button className='bg-[#500042] text-white hover:bg-[#6e2c5c] font-bold py-3 px-6 text-xl rounded transition duration-200'>
            Back To Home
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HotelThankYou;
