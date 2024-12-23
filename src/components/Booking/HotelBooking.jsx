import React, { useState, useContext } from 'react';
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { BASE_URL } from '../../utils/config';

const HotelBooking = ({ tour, avgRating }) => {
   const { price, reviews, title } = tour;
   const navigate = useNavigate();

   const { user } = useContext(AuthContext);

   const [booking, setBooking] = useState({
      userId: user?._id,
      userEmail: user?.email,
      HotelName: title,
      fullName: '',
      phone: '',
      guestSize: 1,
      bookAt: '',
      bill: 0,
   });

   const handleChange = (e) => {
      setBooking((prev) => ({ ...prev, [e.target.id]: e.target.value }));
   };

   const serviceFee = 10;
   const totalAmount = Number(price) * Number(booking.guestSize) + serviceFee;

   const handleClick = async (e) => {
      e.preventDefault();

      try {
         if (!user) {
            return alert('Please sign in');
         }

         const updatedBooking = { ...booking, bill: totalAmount };
         setBooking(updatedBooking);

         const res = await fetch(`${BASE_URL}/hotelbooking`, {
            method: 'post',
            headers: {
               'content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(updatedBooking),
         });

         const result = await res.json();

         if (!res.ok) {
            return alert(result.message);
         }
         navigate('/hotelthank-you');
      } catch (error) {
         alert(error.message);
      }
   };

   return (
      <div className='booking'>
         <div className='booking__top d-flex align-items-center justify-content-between'>
            <h3>${price} <span>/per person</span></h3>
            <span className='tour__rating d-flex align-items-center'>
               <i className='ri-star-fill' style={{ color: 'var(--secondary-color)' }}></i>
               {avgRating === 0 ? null : avgRating} ({reviews?.length})
            </span>
         </div>

         {/* BOOKING FORM */}
         <div className='booking__form'>
            <h5>Information</h5>
            <Form className='booking__info-form' onSubmit={handleClick}>
               <FormGroup>
                  <input type='text' placeholder='Full Name' id='fullName' required onChange={handleChange} />
               </FormGroup>
               <FormGroup>
                  <input type='tel' placeholder='Phone' id='phone' required onChange={handleChange} />
               </FormGroup>
               <FormGroup className='d-flex align-items-center gap-3'>
                  <input type='date' placeholder='' id='bookAt' required onChange={handleChange} />
                  <input type='number' placeholder='Guest' id='guestSize' required min='1' onChange={handleChange} />
               </FormGroup>
            </Form>
         </div>

         {/* BOOKING BOTTOM */}
         <div className='booking__bottom'>
            <ListGroup>
               <ListGroupItem className='border-0 px-0'>
                  <h5 className='d-flex align-items-center gap-1'>${price} <i className='ri-close-line'></i> {booking.guestSize} person(s)</h5>
                  <span>${price * booking.guestSize}</span>
               </ListGroupItem>
               <ListGroupItem className='border-0 px-0'>
                  <h5>Service charge</h5>
                  <span>${serviceFee}</span>
               </ListGroupItem>
               <ListGroupItem className='border-0 px-0 total'>
                  <h5>Total</h5>
                  <span>${totalAmount}</span>
               </ListGroupItem>
            </ListGroup>

            <Button className='btn bg-[#500042] w-100 mt-4' onClick={handleClick}>
               Book Now
            </Button>
         </div>
      </div>
   );
};

export default HotelBooking;
