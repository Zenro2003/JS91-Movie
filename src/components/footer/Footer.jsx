import React from 'react';

import './footer.scss'

import { Link } from 'react-router-dom';

import bg from '../../assets/footer-bg.jpg';
import logo from '../../assets/tmovie.png';

const Footer = () => {
  return (
    <div className="footer" style={{ backgroundImage: `url(${bg})` }}>
      <div className="footer__content container">
        <div className="footer__content__logo">
          <div className="logo">
            <img src={logo} alt="" />
            <Link to="/">tMovies</Link>
          </div>
        </div>
        <div className="footer__content__menus">
          <div className="footer__content__menu">
              <Link to="/">Home</Link>
              <Link to="/">Contact us</Link>
              <Link to="/">Term of services</Link>
              <Link to="/">About us</Link>
          </div>
          <div className="footer__content__menu">
              <Link to="/">Live</Link>
              <Link to="/">FAQ</Link>
              <Link to="/">Prenium</Link>
              <Link to="/">Pravacy policy</Link>
          </div>
          <div className="footer__content__menu">
              <Link to="/">Yoo must watch</Link>
              <Link to="/">Recent release</Link>
              <Link to="/">Top IMDB</Link>
          </div>
        </div>
        <div className="footer__content__map">
          {/* Google Maps iframe */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.497872789132!2d106.69061257480482!3d10.773128089375424!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f3c0189fa2b%3A0x6e75dc36d4dba07d!2sGalaxy%20Nguy%E1%BB%85n%20Du!5e0!3m2!1svi!2s!4v1706970173350!5m2!1svi!2s"
            width="600"
            height="450"
            className="google-map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Footer;