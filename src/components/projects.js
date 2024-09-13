import React, { useState } from 'react';
import projectImage1 from "../images/project_img_1.jpg";
import projectImage2 from "../images/project_img_2.jpg";
import projectImage3 from "../images/project_img_3.jpg";
import projectImage4 from "../images/project_img_4.jpg";
import calculator1 from "../images/calculator_1.png";
import calculator2 from "../images/calculator_2.png";
import drumPad from "../images/drumpad.png";
import { gsap } from 'gsap';

const Projects = () => {
    const Storeimages = [projectImage1, projectImage2, projectImage3, projectImage4];
    const CalImages = [calculator1, calculator2];
    const [StoreCurrentIndex, setStoreCurrentIndex] = useState(0);
    const [calCurrentIndex, setCalCurrentIndex] = useState(0);

    const handleNextStore = () => {
        const imgElement = document.querySelector('.project-img.store');

        gsap.to(imgElement, { 
            duration: 0.2,  
            filter: 'blur(3px)', 
            onComplete: () => {
               
                setStoreCurrentIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % Storeimages.length;
                    imgElement.src = Storeimages[newIndex]; 
                    return newIndex; 
                });

                gsap.to(imgElement, { 
                    duration: 0.2, 
                    filter: 'blur(0px)' 
                });
            }
        });
    };

    const handleNextCal = () => {
        const imgElement = document.querySelector('.project-img.cal');

        gsap.to(imgElement, { 
            duration: 0.2,  
            filter: 'blur(3px)', 
            onComplete: () => {
                
                setCalCurrentIndex((prevIndex) => {
                    const newIndex = (prevIndex + 1) % CalImages.length;
                    imgElement.src = CalImages[newIndex];
                    return newIndex; 
                });

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
                        <img className='project-img store' src={Storeimages[StoreCurrentIndex]} alt={`project img ${StoreCurrentIndex + 1}`} />
                    </div>
                    <button className='img-btn' onClick={handleNextStore}>Next Image</button>
                    <p>A responsive e-commerce store built with Mongo, Express, React, Node.js and using Yoco for payment processing</p>
                </div>
                <div className='project'>
                    <h2>Calculator App</h2>
                    <div className='img-wrapper'>
                        <img className='project-img cal' src={CalImages[calCurrentIndex]} alt={`project img ${calCurrentIndex + 1}`} />
                    </div>
                    <button className='img-btn' onClick={handleNextCal}>Next Image</button>
                    <p>A Calculator web App</p>
                </div>
                <div className='project'>
                    <h2>Drum Pad App</h2>
                    <div className='img-wrapper'>
                        <img className='project-img' src={drumPad} alt='project img 1' />
                    </div>
                    <p>A Drum pad built using React</p>
    
                </div>
            </div>
        </div>
    );
}

export default Projects;