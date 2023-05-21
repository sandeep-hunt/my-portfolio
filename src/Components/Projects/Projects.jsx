import React from 'react'
import './Projects.css'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import { EffectFade, Pagination } from "swiper";

const Projects = () => {
  return (
    <div className="projects">
      <div className="projects-container">
        <div className="projects-header">
          <span>Somme Things I've Built</span>
          <h2>Projects</h2>
        </div>
        <div className="projects-content">
          <Swiper
          pagination={true}
          modules={[EffectFade,Pagination]}
          effect={"fade"}
          loop={true}
          autoplay={{
            delay: 2500,
          }}
          >
            <SwiperSlide className='projects-slider'>
              <div className="projects-slider_img">
                <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759872/kuldar-kalvik-799168-unsplash.webp" alt="" />
              </div>
            </SwiperSlide>
            <SwiperSlide className='projects-slider'>
              <div className="projects-slider_img">
                <img src="https://res.cloudinary.com/muhammederdem/image/upload/q_60/v1535759871/jason-leung-798979-unsplash.webp" alt="" />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  )
}

export default Projects