import projectImage1 from "../images/project_img_1.jpg";
import calculator1 from "../images/calculator_1.png";
import drumPad from "../images/drumpad.png";
import portfolio from "../images/personal_portfolio.png";

const Projects = () => {
    return (
        <div className='projects' id='projects'>
            <h1>PROJECTS</h1>
            <div className='projects-grid'>
                <div className='project-item'>
                    <img src={projectImage1} alt='projectImage1' />
                    <div className='overlay'>
                        <div className='title'>
                        <p>Eccomerce Store</p>
                        <a href="https://github.com/KianMouton/mern-store" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github fa-2xl"></i>
                        </a>
                        </div>
                        <div className='stack'>
                            <p>React</p>
                            <p>NodeJS</p>
                            <p>Mongoose</p>
                            <p>MongoDB</p>
                        </div>
                    </div>
                </div>
                <div className='project-item'>
                    <img src={calculator1} alt='calculator1' />
                    <div className='overlay'>
                        <div className='title'>
                        <p>Calculator App</p>
                        <a href="https://github.com/KianMouton/react-calculator" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github fa-2xl"></i>
                        </a>
                        <a href='https://kianmouton.github.io/react-calculator/' target="_blank" rel="noopener noreferrer">
                            <i className='fa-solid fa-arrow-up-right-from-square' />
                        </a>
                        </div>
                        <div className='stack'>
                            <p>React</p>
                            <p>JavaScript</p>
                            <p>CSS</p>
                        </div>
                    </div>
                </div>
                <div className='project-item'>
                    <img src={drumPad} alt='drumPad' />
                    <div className='overlay'>
                        <div className='title'>
                        <p>Drum Pad App</p>
                        <a href="https://github.com/KianMouton/react-Drum-Pad" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github fa-2xl"></i>
                        </a>
                        <a href='https://kianmouton.github.io/react-Drum-Pad/' target="_blank" rel="noopener noreferrer">
                            <i className='fa-solid fa-arrow-up-right-from-square' />
                        </a>
                        </div>
                        <div className='stack'>
                            <p>React</p>
                            <p>JavaScript</p>
                            <p>CSS</p>
                        </div>
                    </div>
                </div>
                <div className='project-item'>
                    <img src={portfolio} alt='portfolio' />
                    <div className='overlay'>
                        <div className='title'>
                        <p>This Website</p>
                        <a href="https://github.com/KianMouton/personal-portfolio" target="_blank" rel="noopener noreferrer">
                            <i className="fa-brands fa-github fa-2xl"></i>
                        </a>
                        </div>
                        <div className='stack'>
                            <p>React</p>
                            <p>JavaScript</p>
                            <p>CSS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='github-btn'>
            <a href='https://github.com/KianMouton' target="_blank" rel="noopener noreferrer">
                <p>See more Projects</p>
            </a>
            </div>
        </div>
    );
}

export default Projects;