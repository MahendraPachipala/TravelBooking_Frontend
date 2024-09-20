import React from 'react'
import ServiceCard from './ServiceCard'
import { Col } from 'reactstrap'
import weatherImg from '../assets/images/weather.png'
import guideImg from '../assets/images/guide.png'
import customizationImg from '../assets/images/customization.png'

const servicesData = [
   {
      imgUrl: weatherImg,
      title: `Calculate Weather`,
      desc: `Delivering Accurate Weather Information, Anytime, Anywhere.`,
   },
   {
      imgUrl: guideImg,
      title: `Best Tour Guide`,
      desc: `Your journey, our expertise. Unveil the best of every destination with our dedicated tour guides, ensuring every step is a story and every moment, memorable.`,
   },
   {
      imgUrl: customizationImg,
      title: 'Customization',
      desc: `Tailoring experiences to your preferences. Our commitment to customization ensures every detail reflects your unique desires, creating moments that are exclusively yours.`,
   },
]

const ServiceList = () => {
   return <>
      {
         servicesData.map((item, index) => (
            <Col lg='3' md='6' sm='12' className='mb-4' key={index}>
               <ServiceCard item={item} />
            </Col>))
      }
   </>

}

export default ServiceList