import React, { useContext } from 'react'
import '../styles/tour-details.css'
// import tourData from '../assets/data/tours'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import FlightBooking from '../components/Booking/FlightBooking'

import useFetch from '../hooks/useFetch'
import { BASE_URL } from '../utils/config'
import { AuthContext } from '../context/AuthContext'

const FlightDetails = () => {
   const { id } = useParams()
   const { user } = useContext(AuthContext)

   // fetch data from database
   const { data: flight, loading, error } = useFetch(`${BASE_URL}/flights/${id}`)


   return (
      <section>
         <Container> 
            {loading && <h4 className='text-center pt-5'>LOADING.........</h4>}
            {error && <h4 className='text-center pt-5'>{error}</h4>}
            {
               !loading && !error &&
               <Row>
                  <Col lg='4'>
                     <FlightBooking flight={flight}/>
                  </Col>
               </Row>
            }
         </Container>
      </section>

   )
}

export default FlightDetails;