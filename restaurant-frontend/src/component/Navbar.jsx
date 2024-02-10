import React, { useEffect, useState } from 'react';
import { IonIcon } from '@ionic/react';
import { closeOutline } from 'ionicons/icons';
import { Link, useNavigate } from 'react-router-dom';
import { scroller } from 'react-scroll';


export default function Navbar() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
    const [isActive, setIsActive] = useState(false);
    const [ActiveHeader,setActiveHeader] = useState(false)
    const [topActive,setTopActive] = useState(true)




    useEffect(() => {
      let prevScrollPos = window.scrollY;
      
      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        if(currentScrollPos === 0 ){
          setTopActive(true)
        }
        else if (prevScrollPos > currentScrollPos) {
          setActiveHeader(true); 
          setTopActive(false)
          // Scroll up
        } else {
          setActiveHeader(false);
          setTopActive(false)
          // Scroll down
        }
        
        prevScrollPos = currentScrollPos;
      };
      
      window.addEventListener('scroll', handleScroll);
      
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);


  
    const toggleNavbar = () => {
      setIsActive(!isActive);
    };
    const closeNavbar = () => {
        setIsActive(false);
    };


    const scrollToAbout = () => {
      scroller.scrollTo('about', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    }
  
  return (
    <header className={`header ${topActive ? ''  : !ActiveHeader ? 'active hide': 'active'}`} data-header>
      <div className="container">
        <Link to={"/"} className="logo">
          <img src="../assets/images/logo.svg" width="160" height="50" alt="Grilli - Home" />
        </Link>

         <nav className={`navbar ${isActive ? 'active' : ''}`} data-navbar>
         <button className="close-btn" aria-label="close menu" data-nav-toggler onClick={closeNavbar}>
            <IonIcon icon={closeOutline} aria-hidden="true" />
          </button>

          <a href="#" className="logo">
            <img src="./assets/images/logo.svg" width="160" height="50" alt="Grilli - Home" />
          </a>

          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to={"/"} className="navbar-link hover-underline" onClick={scrollToTop}>
                <div className="separator"></div>
                <span className="span" >Home</span>
              </Link>
            </li>

            <li className="navbar-item">
              <Link to={"/service" } onClick={(e) => {

              }} className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Menus</span>
              </Link>
            </li>

            <li className="navbar-item">
              <Link to={"/features"} onClick={scrollToTop} className="navbar-link hover-underline" >
                <div className="separator"></div>
                <span className="span">About Us</span>
              </Link>
            </li>

           

            <li className="navbar-item">
              <Link to={"/s"} onClick={scrollToTop} className="navbar-link hover-underline">
                <div className="separator"></div>
                <span className="span">Special Dish</span>
              </Link>
            </li>
          </ul>

          <div className="text-center">
            <p className="headline-1 navbar-title">Visit Us</p>
            <address className="body-4">
              Restaurant St, Delicious City, <br />
              London 9578, UK
            </address>
            <p className="body-4 navbar-text">Open: 9.30 am - 2.30pm</p>
            <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">booking@grilli.com</a>
            <div className="separator"></div>
            <p className="contact-label">Booking Request</p>
            <a href="tel:+88123123456" className="body-1 contact-number hover-underline">
              +88-123-123456
            </a>
          </div>
        </nav>

        <Link to={"/reservation" }className="btn btn-secondary">
          <span className="text text-1">Find A Table</span>
          <span className="text text-2" aria-hidden="true">Find A Table</span>
        </Link>

        <button className={`nav-open-btn ${isActive ? 'active' : ''}`} aria-label="open menu" onClick={toggleNavbar}>
          <span className="line line-1"></span>
          <span className="line line-2"></span>
          <span className="line line-3"></span>
        </button>

        <div className={`overlay ${isActive ? 'active' : ''}`} data-nav-toggler data-overlay></div>
      </div>
    </header>
  );
}
