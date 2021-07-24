import React, { useState, useRef, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { links, social } from './dataNav';
import './NewNav.css'

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 50);
    });
  }, []);
  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (showLinks) {
      linksContainerRef.current.style.height = ${linksHeight}px;
    } else {
      linksContainerRef.current.style.height = '0px';
    }
  }, [showLinks]);
  return (
    <nav className={scroll ? "bg-colored" : "bg-none"}> 
      <div className='nav-center'>
        <div className='nav-header'>
          <a href="#home">I AM HA</a>
          <button className='nav-toggle' onClick={toggleLinks}>
            <FaBars />
          </button>
        </div>
        <div className='links-container' ref={linksContainerRef}>
          <ul className='links' ref={linksRef}>
            {links.map((link) => {
              const { id, url, text } = link;
              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>
        <ul className='social-icons'>
          {social.map((socialIcon) => {
            const { id, url, icon } = socialIcon;
            return (
              <li key={id}>
                <div className="circles-social">
                    <a href={url}>{icon}</a>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
      //     <Nav.Link className="social-links" href="https://github.com/iamha1" target="_blank" title="GitHub Profile" rel="noreferrer">
      //    <div className="social-circles">
      //     <i className="fab fa-github"></i>
      //    </div> 
      //    </Nav.Link>
      //   </section>
      //   <section>
      //     <Nav.Link className="social-links" href="https://www.linkedin.com/in/iamha/" target="_blank" title="LinkedIn Profile" rel="noreferrer">
      //    <div className="social-circles">
      //      <i className="fab fa-linkedin-in"></i></div>
      //     </Nav.Link>
      //   </section>
      // <section>
      // <Nav.Link className="social-links" href="https://drive.google.com/file/d/1svKy1VrDPFOp0hJMeY7zbv8zulGc6GWX/view?usp=sharing" target="_blank" title="Resume" rel="noreferrer">
      //     <div className="social-circles"> 
      //       <i className="far fa-id-badge"></i>
      //       </div> 
      //     </Nav.Link>
      // </section>
      
     
