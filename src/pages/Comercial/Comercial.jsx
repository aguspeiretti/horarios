import Reloj from "../../components/reloj/Reloj";
import "./Comercial.css";

const Comercial = () => {
  const paises = [
    {
      nombre: "Argentina",
      area: "Comercial",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 10.4,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "España",
      area: "Comercial",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.65,
      horaIngreso: 10,
      horaSalida: 21.45,
    },

    {
      nombre: "Chile",
      area: "Comercial",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 10.4,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "Mexico",
      area: "Comercial",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 10,
      horaIngreso: 10,
      horaSalida: 17,
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
            area={pais.area}
          />
        ))}
      </div>
    </>
  );
};

export default Comercial;
