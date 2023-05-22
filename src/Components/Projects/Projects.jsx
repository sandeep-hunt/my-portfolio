import React from 'react'
import './Projects.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { Autoplay ,EffectFade, Pagination } from "swiper";
import project1 from '../../img/projects/1.png';
import project2 from '../../img/projects/2.png';
import project3 from '../../img/projects/3.png';

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span className='projects-header-tag'>Some Things I've Built</span>
          <h2 className='projects-header-title'>Projects</h2>
        </div>
        <div className="projects-content">
          <Swiper
            spaceBetween={30}
            effect={"fade"}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Autoplay, EffectFade, Pagination]}
          >
            <SwiperSlide className='slider-wrapper'>
              <div className="slider-left">
                <h2 className='slider-left-title'>Sugar Cosmetics</h2>
                <p className='slider-left-desc'>SUGAR Cosmetics entered the Indian cosmetics market in 2015 and is a cruelty-free makeup brand that is high on style and higher on performance. The brand is inspired by and targeted toward bold, independent women who refuse to be stereotyped into roles. Manufactured in state-of-the-art facilities across Germany, Italy, India, the USA, and South Korea the brand ships its bestselling products across Lips, Eyes, Face, and Nail categories across the world.</p>
                <span className='slider-tech'>Context API, ReactJS, CSS, Firebase, MongoDB, Rest, ExpresJS, NodeJS</span>
              </div>
              <div className="slider-right">
                <img src={project1} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className='slider-wrapper'>
              <div className="slider-left">
                <h2 className='slider-left-title'>Pharm Eassy</h2>
                <p className='slider-left-desc'>PharmEasy is a consumer healthcare super app. PharmEasy is a consumer healthcare “super app” that provides consumers with on-demand, home delivered access to a wide range of prescription, OTC pharmaceutical, other consumer healthcare products, comprehensive diagnostic test services, and teleconsultations thereby serving their healthcare needs.</p>
                <span className='slider-tech'>ReactJS, CSS, Redux, Rest</span>
              </div>
              <div className="slider-right">
                <img src={project2} alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className='slider-wrapper'>
              <div className="slider-left">
                <h2 className='slider-left-title'>Tata 1Mg</h2>
                <p className='slider-left-desc'>1mg.com brings to you an online platform, which can be accessed for all your health needs. We are trying to make healthcare a hassle-free experience for you. Get your allopathic, ayurvedic, homeopathic medicines, vitamins & nutrition supplements and other health-related products delivered at home. Lab tests? That too in the comfort of your home. Doctor consult? Yes, we got that covered too.</p>
                <span className='slider-tech'>HTML, CSS, JavaScript, Rest</span>
              </div>
              <div className="slider-right">
                <img src={project3} alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Projects