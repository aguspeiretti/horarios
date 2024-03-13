import "./nav.css";
import logo from "../../assets/logo.gif";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} alt="" />
      </div>
      <div className="links">
        <ul>
          <Link to={"/"}>
            <li>Marketing</li>{" "}
          </Link>
          <Link to={"/contable"}>
            <li>Contable</li>
          </Link>
          <Link to={"/recursos-humanos"}>
            <li>Recursos humanos</li>
          </Link>
          <Link to={"/comercial"}>
            <li>Comercial</li>
          </Link>
          <Link to={"/coordinacion"}>
            <li>Coordinacion</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Nav;