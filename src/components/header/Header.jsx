import logo from "../../assets/SiteLogo.svg";
import { Link, NavLink } from "react-router-dom";
import shape from "../../assets/shape.svg";
import "./Header.css";

function Header() {
  return (
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
        <a href="#" className="header__btn">
          <img
            className="header__btn__icon"
            src={shape}
            alt="shopping"
            width="16"
            height="16"
          />
        </a>
        <hr className="hr__bg" />
      </div>
    </header>
  );
}

export default Header;
