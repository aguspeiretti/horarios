import { useEffect, useState } from "react";
import "./App.css";
import Home from "./home/Home";
import Loader from "./components/loader/Loader";

const App = () => {
  const [vpn, setVpn] = useState("Colombia");
  console.log(vpn);

  useEffect(() => {
    const obtenerPaisPorIP = async () => {
      try {
        const respuesta = await fetch("https://ipapi.co/json/");
        const datos = await respuesta.json();
        return datos.country_name; // Devuelve el nombre del país
      } catch (error) {
        console.error("Error al obtener el país por IP:", error);
        return null;
      }
    };

    // Uso de la función
    obtenerPaisPorIP().then((pais) => {
      if (pais) {
        console.log("El país detectado es:", pais);
        setVpn(pais);
        // Aquí puedes hacer lo que necesites con el país detectado
      } else {
        console.log("No se pudo detectar el país.");
      }
    });
  }, []);

  return <>{vpn ? <Home vpn={vpn} /> : <Loader />}</>;
};

export default App;
