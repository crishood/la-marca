import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link, animateScroll as scroll } from "react-scroll";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="container nav-container">
        <div className="nav-logo-container">
          <span className="logo">MEN&apos;S WEAR</span>
        </div>
        <div className="nav-menu">
          <Link
            activeClass="active"
            to="hero"
            spy={true}
            smooth={true}
            offset={0}
            duration={500}
          >
            <div className="nav-menu-option">
              <a>La marca</a>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="trademark"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <div className="nav-menu-option">
              <a>Productos</a>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="where"
            spy={true}
            smooth={true}
            offset={-120}
            duration={500}
          >
            <div className="nav-menu-option">
              <a>¿Dónde comprar?</a>
            </div>
          </Link>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-380}
            duration={500}
          >
            <div className="nav-menu-option">
              <a>Contáctanos</a>
            </div>
          </Link>
          <div className="nav-menu-socialMedia">
            <a>
              <FontAwesomeIcon icon={faFacebookF} size="xl" />
            </a>
            <a>
              <FontAwesomeIcon icon={faInstagram} size="xl" />
            </a>
            <a>
              <FontAwesomeIcon icon={faYoutube} size="xl" color="white" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
