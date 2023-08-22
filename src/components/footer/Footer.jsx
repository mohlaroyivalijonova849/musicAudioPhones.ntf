import "./Footer.css";
import logo from "../../assets/SiteLogo.svg";
import { Link, NavLink } from "react-router-dom";
import facebookImg from "../../assets/facebook.svg";
import twiteerImg from "../../assets/twitter.svg";
import instagramImg from "../../assets/instagramm.svg";

function Footer() {
  return (
    <div>
      <header className="header">
        <div className="header__container container">
          <Link to={"/"} className="site-logo">
            <img src={logo} alt="" width="" height="" />
          </Link>
          <nav className="sitenav">
            <ul className="sitenav__list">
              <li className="sitenav__item">
                <NavLink to="/" className="sitenav__link">
                  Home
                </NavLink>
              </li>
              <li className="sitenav__item">
                <NavLink to="headphones" className="sitenav__link">
                  HEADPHONES
                </NavLink>
              </li>
              <li className="sitenav__item">
                <NavLink to="speakers" className="sitenav__link">
                  SPEAKERS
                </NavLink>
              </li>
              <li className="sitenav__item">
                <NavLink to="earphones" className="sitenav__link">
                  EARPHONES
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      <div className="footer__img container">
        <div className="footer__container ">
          <p className="footer__desc">
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
          <a className="reserved" href="">
            Copyright 2021. All Rights Reserved
          </a>
        </div>
        <div className="footer__link">
          <NavLink>
            <img className="footer__navlik" src={facebookImg} alt="" />
          </NavLink>
          <NavLink>
            <img className="footer__navlik" src={twiteerImg} alt="" />
          </NavLink>
          <NavLink>
            <img className="footer__navlik" src={instagramImg} alt="" />
          </NavLink>
        </div>
      </div>
    </div>
  );
}

export default Footer;
