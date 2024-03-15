import Reloj from "../../components/reloj/Reloj";
import "./marketing.css";

const Marketing = () => {
  const paises = [
    {
      nombre: "Argentina",
      area: "Marketing",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 8.9,
      horaIngreso: 8,
      horaSalida: 17,
    },
    {
      nombre: "España",
      area: "Marketing",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 8.65,
      horaIngreso: 10,
      horaSalida: 19,
    },

    {
      nombre: "Chile",
      area: "Marketing",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 10.3,
      horaIngreso: 10,
      horaSalida: 20.3,
    },
    {
      nombre: "Mexico",
      area: "Marketing",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 8.9,
      horaIngreso: 7,
      horaSalida: 16,
    },
  ];
  return (
    <>
      <div>
        <h2 className="titulo">Marketing</h2>
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
            area={pais.area}
          />
        ))}
        {/* {paises.map((pais) => (
          <Barra24
            key={pais.nombre}
            pais={pais.nombre}
            zonaHoraria={pais.zonaHoraria}
          />
        ))} */}
      </div>
    </>
  );
};

export default Marketing;
