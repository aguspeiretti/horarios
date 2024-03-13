import Reloj from "../../components/reloj/Reloj";
import "./Comercial.css";

const Comercial = () => {
  const paises = [
    {
      nombre: "Argentina",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 10,
      horaIngreso: 10,
      horaSalida: 20.3,
    },
    {
      nombre: "Mexico",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 9,
      horaIngreso: 7,
      horaSalida: 16,
    },
    {
      nombre: "España",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.75,
      horaIngreso: 10,
      horaSalida: 20.45,
    },
    {
      nombre: "Chile",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 10.5,
      horaIngreso: 10,
      horaSalida: 20.3,
    },
  ];
  return (
    <>
      <div>
        <h2 className="titulo">Comercial</h2>
      </div>
      <div>
        {paises.map((pais) => (
          <Reloj
            key={pais.nombre}
            pais={pais.nombre}
            zonaHoraria={pais.zonaHoraria}
            jornadaLaboral={pais.jornadaLaboral}
            horaIngreso={pais.horaIngreso}
            horaSalida={pais.horaSalida}
          />
        ))}
      </div>
    </>
  );
};

export default Comercial;
