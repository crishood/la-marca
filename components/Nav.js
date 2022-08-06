import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
const Nav = () => {
  return (
    <nav className="nav">
      <div className="container nav-container">
        <div className="nav-logo-container">
          <span className="logo">MEN&apos;S WEAR</span>
        </div>
        <div className="nav-menu">
          <div className="nav-menu-option">
            <a>La marca</a>
          </div>
          <div className="nav-menu-option">
            <a>Productos</a>
          </div>
          <div className="nav-menu-option">
            <a>¿Dónde comprar?</a>
          </div>
          <div className="nav-menu-option">
            <a>Contáctanos</a>
          </div>
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
