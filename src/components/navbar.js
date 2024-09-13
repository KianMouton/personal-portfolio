
const Navbar = () => {
  return (
    <div className="App">
      <nav className='navbar'>
        <div className='site-nav'>
        <p>Me</p>
        <p>Projects</p>
        <p>Contact me</p>
        </div>
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

export default Navbar;
