/* eslint-disable react/prop-types */
import Comercial from "../pages/Comercial/Comercial";
import Contable from "../pages/Contable/Contable";
import Coordinacion from "../pages/Coordinacion/Coordinacion";
import Marketing from "../pages/Marketing/Marketing";
import { Routes, Route } from "react-router-dom";
import Rrhh from "../pages/Recursos_humanos/Rrhh";
import banner from "../assets/banner-02.png";
import Nav from "../components/nav/Nav";
import "./home.css";
import Gestion from "../pages/Gestion/Gestion";


const Home = ( {vpn} ) => {

  return (
    <>
      
        <div className="contenedor-principal">
          <div className="contenedor-banner">
            <img src={banner} alt="banner" />
          </div>

          <div className="contenedor-paises">
            <div className="contenedor-nav">
              <Nav />
            </div>
            <Routes>
              <Route path="/" element={<Marketing vpn={vpn} />}  />
              <Route path="/administracion" element={<Contable vpn={vpn}  />} />
              <Route path="/recursos-humanos" element={<Rrhh vpn={vpn}  />} />
              <Route path="/ventas" element={<Comercial vpn={vpn}  />} />
              <Route path="/gestion" element={<Gestion vpn={vpn} />} />
              <Route path="/coordinacion" element={<Coordinacion vpn={vpn}  />} />
            </Routes>
          </div>
        </div>
    
    </>
  );
};

export default Home;
