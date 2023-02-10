import logo from "./images/logo.svg";
import hamburger from "./images/icon-hamburger.svg";
import closeMenu from "./images/icon-close-menu.svg";
import icon from './images/icon-ethereum.svg';
import "./Header.css";

const Header = ({ navIsOpen, toggleNav, closeNav }) => {
  return (
    <header className="header">
      <div className="header-container">
        <img src={logo} alt="" className="logo" />
        <button
          className="menu-btn"
        >
          <img
            alt=""
            className="menu-btn-icon"
          />
        </button>
        <nav >
          <ul className="nav-links">
            <li>
              <a href="/"  className="nav-link">
                About
              </a>
            </li>
            <li>
              <a href="/"  className="nav-link">
                Discover
              </a>
            </li>
            <li>
              <a href="/" className="nav-link">
                Get Tokens
              </a>
            </li>
            <li>
            <img src={icon}alt="ETH" className="icon"/><a href="/" className="nav-link">
                Connect Wallet
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;