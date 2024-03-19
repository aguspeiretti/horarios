import "./nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="links">
        <ul>
          <Link to={"/"}>
            <li>Marketing</li>{" "}
          </Link>
          <Link to={"/comercial"}>
            <li>Comercial</li>
          </Link>
          <Link to={"/coordinacion"}>
            <li>Coordinación</li>
          </Link>
          <Link to={"/gestion"}>
            <li>Gestión</li>
          </Link>
          <Link to={"/recursos-humanos"}>
            <li>Recursos humanos</li>
          </Link>
          <Link to={"/contable"}>
            <li>Contable</li>
          </Link>

        </ul>
      </div>
    </div>
  );
};

export default Nav;
