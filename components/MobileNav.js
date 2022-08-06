import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
const MobileNav = () => {
  return (
    <>
      <nav className="mobile-nav">
        <div className="mobile-burguer">
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <div className="mobile-social"></div>
      </nav>
      <div className="mobile-menu hidden">
        <a>X</a>
        <a>La marca</a>
        <a>Productos</a>
        <a>¿Dónde comprar?</a>
        <a>Contáctanos</a>
      </div>
    </>
  );
};

export default MobileNav;
