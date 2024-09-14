
import projectImage1 from "../images/project_img_1.jpg";
import projectImage2 from "../images/project_img_2.jpg";
import projectImage3 from "../images/project_img_3.jpg";
import projectImage4 from "../images/project_img_4.jpg";
import calculator1 from "../images/calculator_1.png";
import calculator2 from "../images/calculator_2.png";
import drumPad from "../images/drumpad.png";
import { gsap } from 'gsap';

const Projects = () => {
    

    return (
        <div className='projects' id='projects'>
            <h1>Projects</h1>
            <div className='projects-grid'>
                <img src={projectImage1} alt='projectImage1'/>
                <img src={calculator1} alt='calculator1'/>
                <img src={drumPad} alt='drumPad'/>
            </div>
        </div>
    );
}

export default Projects;