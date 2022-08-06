import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { Link } from "react-scroll";
const MobileNav = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <>
      <nav className="mobile-nav">
        <div className="mobile-burguer" onClick={handleToggle}>
          <FontAwesomeIcon icon={faBars} size="2x" />
        </div>
        <div className="mobile-social"></div>
      </nav>
      <div className={isActive ? "mobile-menu" : "mobile-menu hidden"}>
        <a onClick={handleToggle}>X</a>
        <a href="#hero" onClick={handleToggle}>
          La marca
        </a>
        <a href="#trademark" onClick={handleToggle}>
          Productos
        </a>
        <a href="#where" onClick={handleToggle}>
          ¿Dónde comprar?
        </a>
        <a href="#contact" onClick={handleToggle}>
          Contáctanos
        </a>
      </div>
    </>
  );
};

export default MobileNav;
