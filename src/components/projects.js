import React, { useState } from 'react';
import projectImage1 from "../images/project_img_1.jpg";
import projectImage2 from "../images/project_img_2.jpg";
import projectImage3 from "../images/project_img_3.jpg";
import projectImage4 from "../images/project_img_4.jpg";
import { gsap } from 'gsap';

const Projects = () => {
    const images = [projectImage1, projectImage2, projectImage3, projectImage4];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNextImage = () => {
        const imgElement = document.querySelector('.project-img');

        gsap.to(imgElement, { 
            duration: 0.2,  
            filter: 'blur(3px)', 
            onComplete: () => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
                imgElement.src = images[currentIndex]; 
                
                gsap.to(imgElement, { 
                    duration: 0.2, 
                    filter: 'blur(0px)' 
                });
            }
        });
    };

    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className='projects-container'>
                <div className='project'>
                    <h2>E-commerce Store</h2>
                    <div className='img-wrapper'>
                        <img className='project-img' src={images[currentIndex]} alt={`project img ${currentIndex + 1}`} />
                    </div>
                    <button className='img-btn' onClick={handleNextImage}>Next Image</button>
                    <p>A responsive e-commerce store built with Mongo, Express, React and Node.js</p>
                </div>
            </div>
        </div>
    );
}

export default Projects;