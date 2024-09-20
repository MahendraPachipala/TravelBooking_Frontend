import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import heroImg from '../assets/images/hero-img01.jpg';
import heroImg02 from '../assets/images/hero-img02.jpg';
import worldImg from '../assets/images/world.png';
import experienceImg from '../assets/images/experience.png';
import Subtitle from './../shared/subtitle';
import FeaturedTourList from '../components/Featured-tours/FeaturedTourList';
import MasonryImagesGallery from '../components/Image-gallery/MasonryImagesGallery';

const Home = () => {
   return (
      <>
         {/* ========== HERO SECTION ========== */}
         <section className="bg-[#500042] text-white">
            <Container>
               <Row>
                  <Col lg='6'>
                     <div className="pt-14">
                        <div className="flex items-center space-x-2">
                           <Subtitle subtitle={'Know Before You Go'} background='pink' only />
                           <img src={worldImg} alt="World map highlighting travel destinations" className="w-12" />
                        </div>
                        <h1 className="text-4xl font-semibold mt-4 mb-8 text-white">
                           Traveling opens the door to creating <span className='text-[#F1C40F] underline'>memories</span>
                        </h1>
                        <p className="text-base text-[#E0E0E0] leading-6">
                           Traveling crafts lasting memories, turning each moment into a cherished story. Explore new places, embrace diverse cultures,
                           and create your own unforgettable adventures. Pack your bags, and let the journey unfold,
                           as every destination holds a special memory for you to discover.
                        </p>
                     </div>
                  </Col>
                  <Col lg='2'>
                     <div className="pt-8">
                        <img src={heroImg} alt="Scenic travel destination image" className="w-full h-[350px] rounded-xl border border-secondary object-cover" />
                     </div>
                  </Col>
                  <Col lg='2'>
                     <div className="pt-10">
                        <img src="https://static.wixstatic.com/media/e04b44_904cf70ac18d4aecae1817283cbd1a92~mv2.jpg/v1/fill/w_640,h_760,al_bl,q_85,usm_0.66_1.00_0.01,enc_auto/e04b44_904cf70ac18d4aecae1817283cbd1a92~mv2.jpg" alt="Travel highlight video" controls className="w-full h-[350px] rounded-xl border border-secondary object-cover" />
                     </div>
                  </Col>
                  <Col lg='2'>
                     <div className="pt-12">
                        <img src={heroImg02} alt="Another travel destination image" className="w-full h-[350px] rounded-xl border border-secondary object-cover" />
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>

         {/* ========== FEATURED TOUR SECTION START ========== */}
         <section className="bg-[#500042] text-white">
            <Container>
               <Row>
                  <Col lg='12' className='mb-5'>
                     <Subtitle subtitle={'Explore'} />
                     <h2 className='text-2xl font-medium text-[#F1C40F] underline'>Our featured tours</h2>
                  </Col>
                  <FeaturedTourList />
               </Row>
            </Container>
         </section>
         {/* ========== FEATURED TOUR SECTION END =========== */}

         {/* ========== EXPERIENCE SECTION START ============ */}
         <section className="bg-[#500042] text-[#5D0E41]">
            <Container>
               <Row>
                  <Col lg='6'>
                     <div className="pt-4">
                        <Subtitle subtitle={'Experience'} />
                        <h2 className="text-2xl font-medium mt-4 text-[#F1C40F] underline">With our all experience <br /> we will serve you</h2>
                        <p className="text-xl text-white mt-4">With our wealth of experience, we are dedicated to providing you exceptional service.</p>
                     </div>
                     <div className="flex items-center gap-5 mt-6">
                        <div className="flex flex-col items-center">
                           <span className="w-16 h-16 bg-primary text-white flex items-center justify-center text-xl font-semibold rounded-t-lg">12k+</span>
                           <h5 className="text-sm mt-2 text-white">Successful trips</h5>
                        </div>
                        <div className="flex flex-col items-center">
                           <span className="w-16 h-16 bg-primary text-white flex items-center justify-center text-xl font-semibold rounded-t-lg">2k+</span>
                           <h5 className="text-sm mt-2 text-white">Regular clients</h5>
                        </div>
                        <div className="flex flex-col items-center">
                           <span className="w-16 h-16 bg-primary text-white flex items-center justify-center text-xl font-semibold rounded-t-lg">15</span>
                           <h5 className="text-sm mt-2 text-white">Years of experience</h5>
                        </div>
                     </div>
                  </Col>
                  <Col lg='6'>
                     <div className="mt-8">
                        <img src={experienceImg} alt="Experience in travel industry" className="w-[90%]" />
                     </div>
                  </Col>
               </Row>
            </Container>
         </section>
         {/* ========== EXPERIENCE SECTION END ============== */}

         {/* ========== GALLERY SECTION START ============== */}
         <section className="bg-[#500042] text-[#5D0E41]">
            <Container>
               <Row>
                  <Col lg='12'>
                     <Subtitle subtitle={'Gallery'} />
                     <h2 className="text-2xl mt-2 mb-10 text-[#F1C40F] underline">Visit our customers' tour gallery</h2>
                  </Col>
                  <Col lg='12'>
                     <MasonryImagesGallery />
                  </Col>
               </Row>
            </Container>
         </section>
         {/* ========== GALLERY SECTION END ================ */}

        
      </>
   );
}

export default Home;
