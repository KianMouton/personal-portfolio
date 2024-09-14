import { useEffect } from 'react';

const Skills = () => {

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
        <div className='skills-component' id='skills'>
        <h1>Skills</h1>
            <div className='skills'>
                <div className='skill hidden'>
                    <i class="fa-brands fa-html5 fa-2xl"></i>
                    <p className='skill-type'>Front End</p>
                    <p>React</p>
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>Javascript</p>
                    <p>TailwindCSS</p>
                    <p>Bootstrap</p>
                    <p>JQuery</p>
                </div>
                <div className='skill hidden'>
                    <i class="fa-solid fa-code fa-2xl"></i>
                    <p className='skill-type'>Back End</p>
                    <p>NodeJS</p>
                    <p>ExpressJS</p>
                    <p>MongoDB</p>
                    <p>Mongoose</p>
                    <p>Restful APIs</p>
                    <p>Python</p>
                </div>
                <div className='skill hidden'>
                    <i class="fa-solid fa-toolbox fa-2xl"></i>
                    <p className='skill-type'>Other</p>
                    <p>Git</p>
                    <p>GitHub</p>
                    <p>Flask</p>
                    <p>Netlify</p>
                    <p>Webpack</p>
                    <p>VS Code</p>
                </div>
            </div>
            </div>
    )
}

export default Skills;