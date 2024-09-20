import React, { useState, useRef, useEffect, useContext } from 'react'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import calculateAvgRating from '../utils/avgRating'
import avatar from '../assets/images/avatar.jpg'
import Booking from '../components/Booking/Booking'
import Weather from '../components/weather/weather'
import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/AuthContext'

const TourDetails = () => {
   const { id } = useParams()
   const reviewMsgRef = useRef('')
   const [tourRating, setTourRating] = useState(null)
   const { user } = useContext(AuthContext)

   // fetch data from database
   const { data: tour, loading, error } = useFetch(`${BASE_URL}/tours/${id}`)

   const { photo, title, desc, price, reviews, city, address, distance, maxGroupSize } = tour

   const { totalRating, avgRating } = calculateAvgRating(reviews)

   const options = { day: 'numeric', month: 'long', year: 'numeric' }

   const submitHandler = async e => {
      e.preventDefault()
      const reviewText = reviewMsgRef.current.value

      try {
         if (!user || user === undefined || user === null) {
            alert('Please sign in')
         }
         const reviewObj = {
            username: user?.username,
            reviewText,
            rating: tourRating
         }

         const res = await fetch(`${BASE_URL}/review/${id}`, {
            method: 'post',
            headers: {
               'content-type': 'application/json'
            },
            credentials: 'include',
            body: JSON.stringify(reviewObj)
         })

         const result = await res.json()
         if (!res.ok) {
            return alert(result.message)
         }
         alert(result.message)
      } catch (error) {
         alert(error.message)
      }
   }

   useEffect(() => {
      window.scrollTo(0, 0)
   }, [tour])

   return (
      <section className="bg-white mt-4">
         <Container>
            {loading && <h4 className='text-center pt-5 text-[#500042]'>Loading...</h4>}
            {error && <h4 className='text-center pt-5 text-[#500042]'>{error}</h4>}
            {
               !loading && !error &&
               <Row>
                  <Col lg='8'>
                     <div className="relative bg-white shadow-lg rounded-lg overflow-hidden">
                        <img className="w-full h-60 object-cover" src={photo} alt="Image" />

                        <div className="p-6">
                           <h2 className="text-2xl font-semibold mb-4 text-[#500042]">{title}</h2>
                           <div className="flex items-center gap-5 mb-4">
                              <span className="flex items-center gap-1 text-[#500042]">
                                 <i className='ri-star-fill' style={{ color: '#500042' }}></i> {avgRating === 0 ? null : avgRating}
                                 {avgRating === 0 ? 'Not rated' : <span>({reviews?.length})</span>}
                              </span>

                              <span className="text-gray-600"><i className='ri-map-pin-fill'></i> {address}</span>
                           </div>

                           <div className="flex flex-wrap gap-4 mb-4 text-gray-600">
                              <span><i className='ri-map-pin-2-line'></i> {city}</span>
                              <span><i className='ri-money-dollar-circle-line'></i> {price}/ per person</span>
                              <span><i className='ri-map-pin-time-line'></i> {distance} km</span>
                              <span><i className='ri-group-line'></i> {maxGroupSize} people</span>
                           </div>
                           <h5 className="text-lg font-semibold mb-2">Description</h5>
                           <p>{desc}</p>
                        </div>

                        {/* ============ TOUR REVIEWS SECTION START ============ */}
                        <div className="p-6 bg-gray-100">
                           <h4 className="text-lg font-semibold mb-4 text-[#500042]">Reviews ({reviews?.length} reviews)</h4>

                           <Form onSubmit={submitHandler}>
                              <div className="flex items-center gap-3 mb-4">
                                 <span onClick={() => setTourRating(1)} className="cursor-pointer text-[#500042]">1 <i className='ri-star-s-fill'></i></span>
                                 <span onClick={() => setTourRating(2)} className="cursor-pointer text-[#500042]">2 <i className='ri-star-s-fill'></i></span>
                                 <span onClick={() => setTourRating(3)} className="cursor-pointer text-[#500042]">3 <i className='ri-star-s-fill'></i></span>
                                 <span onClick={() => setTourRating(4)} className="cursor-pointer text-[#500042]">4 <i className='ri-star-s-fill'></i></span>
                                 <span onClick={() => setTourRating(5)} className="cursor-pointer text-[#500042]">5 <i className='ri-star-s-fill'></i></span>
                              </div>

                              <div className="flex gap-4 mb-4">
                                 <input type="text" ref={reviewMsgRef} placeholder='Share your thoughts' className="flex-1 border border-gray-300 p-2 rounded" required />
                                 <button className='bg-[#500042] text-white px-4 py-2 rounded hover:bg-[#4a0033]' type='submit'>
                                    Submit
                                 </button>
                              </div>
                           </Form>

                           <ListGroup className='space-y-4'>
                              {
                                 reviews?.map(review => (
                                    <div className="flex gap-4 items-center p-4 bg-white shadow rounded">
                                       <img className="w-12 h-12 rounded-full" src={avatar} alt="" />

                                       <div className="w-full">
                                          <div className="flex items-center justify-between mb-2">
                                             <div>
                                                <h5 className="text-lg font-semibold text-[#500042]">{review.username}</h5>
                                                <p className="text-gray-500">{new Date(review.createdAt).toLocaleDateString('en-US', options)}</p>
                                             </div>

                                             <span className='flex items-center text-[#500042]'>
                                                {review.rating}<i className='ri-star-s-fill'></i>
                                             </span>
                                          </div>

                                          <h6 className="text-gray-700">{review.reviewText}</h6>
                                       </div>
                                    </div>
                                 ))
                              }
                           </ListGroup>
                        </div>
                        {/* ============ TOUR REVIEWS SECTION END ============== */}
                     </div>
                  </Col>

                  <Col lg='4'>
                     <div className="sticky top-0">
                        <Booking tour={tour} avgRating={avgRating} />
                     </div>
                  </Col>
               </Row>
            }
         </Container>
         <div className="bg-gray-100 p-6 mt-8 rounded-lg">
            <h4 className="text-xl font-semibold mb-4 text-[#500042]">7 Days Weather Forecast for {city}</h4>
            <Weather city={city} />
         </div>
      </section>
   )
}

export default TourDetails
