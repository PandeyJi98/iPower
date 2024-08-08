import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faFacebook, faLinkedin, faTwitter, faInstagram, faPinterest } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <>
      {/* Contact Footer */}
      <div className="contact-footer py-4">
        <div className="container">
          <div className="row text-center text-md-start">
            <div className="col-12 col-md-6 mb-3 mb-md-0">
              <h6 className="contact-heading"><b>Looking to Get Fit?</b></h6>
              <p className="contact-text">iPower is here to help you achieve your fitness goals with our tailored solutions and expert guidance.</p>
            </div>
            <div className="col-12 col-md-6 d-flex justify-content-center align-items-center">
              <NavLink to="/contactUs">
                <button className="btn btn-primary btn-lg">Get a Quote</button>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="footer bg-dark text-white">
        <div className="container py-5">
          <div className="row text-center text-md-start">
            <div className="col-12 col-lg-6 mb-4 mb-lg-0">
              <h6 className="footer-heading text-warning text-center">Contact Details</h6>
              <ul className="list-unstyled mt-3">
                <li className="pb-2"><i className="fas fa-map-marker-alt"></i>Gudgaon 48-Sector Arial Mall</li>
                <li className="pb-2"><i className="fas fa-phone"></i> +91-9811490414</li>
                {/* <li>
                  <h6 className="text-warning">Open Hours:</h6>
                  <p>Mon-Sat: 9:30am - 6pm<br />Sunday: CLOSED</p>
                </li> */}
              </ul>
            </div>
            <div className="col-12 col-lg-6 mb-4 mb-lg-0 ">
              <div className='footerCard'>
              <h4 className="footer-heading text-warning text-center">Follow Us</h4>
              <ul className="list-unstyled footer-ul-content">
              <li className="social-icon px-3"><a target='_blank' className='socialContainer containerFour' rel="noopener noreferrer" href="/"><FontAwesomeIcon icon={faWhatsapp} size="2x" className=" socialSvg instagramSvg" /></a></li>
                <li className="social-icon px-3"><a target='_blank' className='socialContainer containerThree' rel="noopener noreferrer" href="/"><FontAwesomeIcon icon={faFacebook} className="socialSvg instagramSvg" size="2x" /></a></li>
                <li className="social-icon px-3"><a target='_blank' className='socialContainer containerOne' rel="noopener noreferrer" href="/"><FontAwesomeIcon icon={faLinkedin} size="2x" className="socialSvg instagramSvg" /></a></li>
                <li className="social-icon px-3"><a target='_blank' className='socialContainer containerTwo' rel="noopener noreferrer" href="/"><FontAwesomeIcon icon={faTwitter} size="2x" className="socialSvg instagramSvg" /></a></li>
                <li className="social-icon px-3"><a target='_blank' className='socialContainer containerOne' rel="noopener noreferrer" href="/"><FontAwesomeIcon icon={faInstagram} size="2x" className="socialSvg instagramSvg" /></a></li>
                <li className="social-icon px-3"><a target='_blank' className='socialContainer containerfive' rel="noopener noreferrer" href="/"><FontAwesomeIcon icon={faPinterest} size="2x" className="socialSvg instagramSvg" /></a></li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* href="https://www.instagram.com/hminnovancellp/ */}
      {/* Copyright */}
      <div className="footer-bottom bg-blueviolet text-white py-3">
        <div className="container text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} iPower | <a className="text-white" href="#">Terms & Conditions</a></p>
        </div>
      </div>
            


    </>
  );
};

export default Footer;
