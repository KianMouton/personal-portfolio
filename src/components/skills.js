
const Skills = () => {
    return (
        <div className='skills-component'>
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
                    <p>Netlify</p>
                    <p>Webpack</p>
                    <p>VS Code</p>
                </div>
            </div>
            </div>
    )
}

export default Skills;