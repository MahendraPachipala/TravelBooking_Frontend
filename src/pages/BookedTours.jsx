import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BASE_URL } from '../utils/config';

const BookedTours = () => {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/booking`);
        const { data } = response;
        setBookingData(data.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="max-w-4xl mx-auto mt-8 p-8 bg-[#500042] rounded-lg shadow-xl">
      <h1 className="text-3xl text-white font-extrabold text-center border-b-4 border-[#D4A5B9] pb-3 mb-6">
        Tour Booking Details
      </h1>
      <ul className="space-y-6">
        {bookingData.map((booking) => (
          <li
            key={booking._id}
            className="p-6 bg-[#D4A5B9] rounded-lg shadow-lg transition-transform duration-300 transform hover:-translate-y-1 hover:shadow-xl"
          >
            <p className="mb-3">
              <span className="font-semibold text-lg text-[#3C1053]">Guest Name:</span>{' '}
              <span className="text-[#1C1C1C]">{booking.fullName}</span>
            </p>
            <p className="mb-3">
              <span className="font-semibold text-lg text-[#3C1053]">Tour Name:</span>{' '}
              <span className="text-[#1C1C1C]">{booking.tourName}</span>
            </p>
            <p className="mb-3">
              <span className="font-semibold text-lg text-[#3C1053]">Number of Guests:</span>{' '}
              <span className="text-[#1C1C1C]">{booking.guestSize}</span>
            </p>
            <p className="mb-3">
              <span className="font-semibold text-lg text-[#3C1053]">Booking Date:</span>{' '}
              <span className="text-[#1C1C1C]">{new Date(booking.bookAt).toLocaleDateString()}</span>
            </p>
            <p className="mb-3">
              <span className="font-semibold text-lg text-[#3C1053]">Contact Number:</span>{' '}
              <span className="text-[#1C1C1C]">{booking.phone}</span>
            </p>
            <p>
              <span className="font-semibold text-lg text-[#3C1053]">Total Amount:</span>{' '}
              <span className="text-[#3C1053]">${booking.bill}</span>
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookedTours;
