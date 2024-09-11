import projectImage1 from "../images/project_img_1.jpg";

const Projects = () => {
    return (
        <div className='projects'>
            <h1>Projects</h1>
            <div className='projects-container'>
                <div className='project'>
                    <h2>Eccomerce Store</h2>
                    <img src={projectImage1} alt='project img 1' />
                    <p>A responsive e-commerce store built with Mongo, Express, React and Node.js</p>
                </div>
            </div>
        </div>
    )
}

export default Projects;