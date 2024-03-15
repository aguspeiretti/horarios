import "./App.css";
import Nav from "./components/nav/Nav";
import Comercial from "./pages/Comercial/Comercial";
import Contable from "./pages/Contable/Contable";
import Coordinacion from "./pages/Coordinacion/Coordinacion";
import Marketing from "./pages/Marketing/Marketing";
import { Routes, Route } from "react-router-dom";
import Rrhh from "./pages/Recursos_humanos/Rrhh";
import banner from "./assets/banner-02.png";
const App = () => {
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
            <Route path="/" element={<Marketing />} />
            <Route path="/contable" element={<Contable />} />
            <Route path="/recursos-humanos" element={<Rrhh />} />
            <Route path="/comercial" element={<Comercial />} />
            <Route path="/coordinacion" element={<Coordinacion />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default App;
