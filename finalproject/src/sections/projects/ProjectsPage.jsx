import React from "react";
// import Card from "../../components/Card";
import "./projectspage.css";
import { Swiper, SwiperSlide } from "swiper/react";
import Project from "./Project";

const ProjectsPage = () => {
    const projects = [
        {
          title: 'Projected Project',
          description: 'I created this simple online store built using React utilizing the FakeStoreAPI to fetch product data examples to simulate the full functionality. The project demonstrates the use of React Hooks, state management, conditional rendering, and dynamic data fetching.',
          technologies: ['React', 'FakeStoreAPI'],
          image: '../../assets/images/midtermpic.png',
          imageSmall1: "path/to/image",
          ImageSmall2: "path/to/image",
          repoLink: "https://github.com/HernandezA1007/INF655-MidtermProject",
          // Add other links if needed
        },
        // Add more projects here
        {
            title: 'Project 2',
            description: 'This Project...',
            technologies: ['Nodejs', 'MongoDB', '...'],
            image: 'path/to/image2',
            repoLink: "https://github.com/HernandezA1007/INF653-ToDoListAssignment",

        }
    ];

    const featuredProject = projects[0];


    return (
        <section id="projects" className="projects">
          <h1>Projects</h1>
          <div className="featured-project">
            <Project project={featuredProject} />
          </div>
          <h2>Other Projects</h2>
          <div className="projects-container">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
            >
              {projects.slice(1).map((project, index) => (
                <SwiperSlide key={index}>
                  <Project project={project} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
      );
};

export default ProjectsPage;