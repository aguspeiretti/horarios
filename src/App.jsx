import { useEffect, useState } from "react";
import "./App.css";
import Home from "./home/Home";

const App = () => {
  const [pais, setPais] = useState("");
  console.log(pais);

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
        setPais(pais);
        // Aquí puedes hacer lo que necesites con el país detectado
      } else {
        console.log("No se pudo detectar el país.");
      }
    });
  }, []);

  return <>{pais ? <Home pais={pais} /> : "Cargando..."}</>;
};

export default App;
