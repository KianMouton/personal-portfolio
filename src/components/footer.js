
const Footer = () => {

    return (
        <footer>
            <div>
            <p>Send me a</p>
            <a className='email-link' href="mailto:kianton2004@gmail.com">Email</a>
            </div>
            <div>
            <p>Check out my profiles</p>
            <div className='footer-links'>
            <a href="https://github.com/KianMouton" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-github fa-2xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/kian-mouton-4797ba2b7/" target="_blank" rel="noopener noreferrer">
                <i className="fa-brands fa-linkedin fa-2xl"></i>
            </a>
            </div>
            </div>
        </footer>
    )
}

export default Footer;