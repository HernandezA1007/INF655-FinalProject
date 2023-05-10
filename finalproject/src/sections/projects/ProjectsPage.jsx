import React from "react";
import "./projectspage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import Project from "./Project";
import data from "./data";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper/core";
// SwiperCore.use([Autoplay, Pagination, Navigation]);


const ProjectsPage = () => {

    const featuredProject = data[0];

    return (
      <section id="projects" className="projects">
        <h1>Featured Project</h1>
        <div className="featured-project">
          <Project project={featuredProject} />
        </div>
        
        <h2>Other Projects</h2>
        <div className="projects-container">
          {/* <Swiper
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
          >
            {data.slice(1).map((project) => (
                <SwiperSlide key={project.id}>
                <Project project={project} />
              </SwiperSlide>
          ))}
        </Swiper> */}
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          navigation
          // breakpoints={{
          //   601: { slidesPerView: 2 },
          //   1025: { slidesPerView: 3 },
          // }}
          pagination={{ clickable: true }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          loop={true}
        >
          {data.slice(1).map((project) => (
            <SwiperSlide key={project.id}>
              <Project project={project} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default ProjectsPage;