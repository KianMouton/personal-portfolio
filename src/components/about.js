
const About = () => {

    const scrollToElement = (event) => {
        event.preventDefault(); // Prevent the default anchor click behavior

        const targetId = event.currentTarget.getAttribute('href').substring(1); // Get the target ID from href
        const targetElement = document.getElementById(targetId); // Find the target element

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth', // Enables smooth scrolling
                block: 'start' // Aligns the top of the element to the top of the viewport
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
            <div className='nav'>
                <a href='#me' onClick={scrollToElement}><p>about</p></a>
                <a href='#skills' onClick={scrollToElement}><p>skills</p></a>
                <a href='#projects' onClick={scrollToElement}><p>projects</p></a>
            </div>
        </div>
    )
}

export default About;