import Reloj from "./components/reloj/Reloj";
import "./App.css";
const App = () => {
  const paises = [
    {
      nombre: "Argentina",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 8,
    },
    { nombre: "Chile", zonaHoraria: "Chile/Continental", jornadaLaboral: 8 },
    { nombre: "Uruguay", zonaHoraria: "America/Montevideo", jornadaLaboral: 8 },
    { nombre: "Mexico", zonaHoraria: "America/Mexico_City", jornadaLaboral: 8 },
    { nombre: "Colombia", zonaHoraria: "America/Bogota", jornadaLaboral: 8 },
    { nombre: "España", zonaHoraria: "Europe/Madrid", jornadaLaboral: 8 },
    { nombre: "Ecuador", zonaHoraria: "America/Guayaquil", jornadaLaboral: 8 },
  ];

  return (
    <div className="ContenedorDePaises">
      {paises.map((pais) => (
        <Reloj
          key={pais.nombre}
          pais={pais.nombre}
          zonaHoraria={pais.zonaHoraria}
          jornadaLaboral={pais.jornadaLaboral}
        />
      ))}
    </div>
  );
};

export default App;
