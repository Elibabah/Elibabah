import React from "react";
import "./Projects.css";
import Carousel from 'react-bootstrap/Carousel'



function Projects() {

  return (
    <div className="Projects">
      
      <header className="header">This is some of my work</header>

      <aside1 className="aside1"></aside1>
      
      <main className="main">
      
        <Carousel fade>
          
          <Carousel.Item >
            <img
            className="d-block w-100"
            src="https://penrose.law/wp-content/uploads/Code.jpg"
            alt="First slide"
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://concepto.de/wp-content/uploads/2015/03/software-1-e1550080087611-800x400.jpg"
            alt="Second slide"
            />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
        
          <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://cdn.euroinnova.edu.es/img/subidasEditor/alba-1624881248.webp"
            alt="Third slide"
            />
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        
        </Carousel>

      </main>

      <aside2 className="aside2"></aside2>

    </div>
  );
}

export default Projects;

