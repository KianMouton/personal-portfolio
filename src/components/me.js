import { useEffect } from 'react';

const Me = () => {

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        });

        // The hidden class is applied to items that are observed
        const hiddenElements = document.querySelectorAll('.hidden');
        hiddenElements.forEach(element => {
            observer.observe(element);
        });

        // Cleanup function to disconnect the observer when the component unmounts
        return () => {
            hiddenElements.forEach(element => {
                observer.unobserve(element);
            });
        };
    }, []);

    return (
        <div className="me">
            <h1>Kian Mouton</h1>
            <p className='full-stack'>Full-Stack Software Engineer</p>
            <div className='description'>
            <p>Hello! I’m Kian, a passionate Full-Stack Software Engineer with a knack for building dynamic and responsive web applications.</p>
            <p>With a strong foundation in both front-end and back-end development, I thrive on turning complex problems into elegant solutions.</p>
            <p>I have experience working with a variety of technologies, including React, Node.js, Python and Mongo to name a few, and I am always eager to learn new tools and methodologies.</p>
            <p>My journey in software development began by taking a introductory computer science course online(CS50), and since then, I have been consistently improving my skills and learning new technologies.</p>
            <p>I believe in the power of collaboration and communication, and I enjoy working in teams to bring innovative ideas to life.</p>
            <p>When I’m not coding, you can find me in the gym, playing video games or learning some new Javascript framework.</p>
            <p>Feel free to explore my projects and reach out if you’d like to connect or collaborate!</p>
            </div>
            <p className='location'>Cape Town, South Africa</p>
        </div>
    )
}

export default Me;