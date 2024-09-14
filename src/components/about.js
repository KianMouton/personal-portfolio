
const About = () => {

    const scrollToElement = (event) => {
        event.preventDefault(); 

        const targetId = event.currentTarget.getAttribute('href').substring(1); 
        const targetElement = document.getElementById(targetId); 

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', 
                block: 'start' 
            });
        }
    };

    return (
        <div className='about-page'>
            <div className='about'>
                <p>Hi my name is</p>
                <h1>Kian Mouton</h1>
                <p>and I am a Full-Stack Developer</p>
            </div>
            <nav className='nav'>
                <a href='#me' onClick={scrollToElement}><button>about</button></a>
                <a href='#skills' onClick={scrollToElement}><button>skills</button></a>
                <a href='#projects' onClick={scrollToElement}><button>projects</button></a>
                <div className='links'>
                <a href="https://github.com/KianMouton" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-github fa-2xl"></i>
                </a>
                <a href="https://www.linkedin.com/in/kian-mouton-4797ba2b7/" target="_blank" rel="noopener noreferrer">
                    <i className="fa-brands fa-linkedin fa-2xl"></i>
                </a>
                </div>
            </nav>
        </div>
    )
}

export default About;