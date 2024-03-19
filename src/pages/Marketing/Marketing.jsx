/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Reloj from "../../components/reloj/Reloj";
import RelojChile from "../../components/relojChile/RelojChile";
import RelojEspaña from "../../components/relojEspaña/RelojEspaña";
import RelojMejico from "../../components/relojMejico/RelojMejico";
import "./marketing.css";

const Marketing = ({vpn}) => {
console.log(vpn);
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
  const españa = [
    {
      nombre: "España",
      area: "Marketing",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 8.31,
      horaIngreso: 10,
      horaSalida: 19,
    },
    {
      nombre: "Argentina",
      area: "Marketing",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9.1,
      horaIngreso: 8,
      horaSalida: 17,
    },
    {
      nombre: "Chile",
      area: "Marketing",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 10.8,
      horaIngreso: 10,
      horaSalida: 20.3,
    },
    {
      nombre: "Mexico",
      area: "Marketing",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 9.2,
      horaIngreso: 7,
      horaSalida: 16,
    },
  ];
  const chile = [
    {
      nombre: "Chile",
      area: "Marketing",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 10.3,
      horaIngreso: 10,
      horaSalida: 20.3,
    },
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
      nombre: "Mexico",
      area: "Marketing",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 8.9,
      horaIngreso: 7,
      horaSalida: 16,
    },
  ];
  const mejico = [
    {
      nombre: "Mexico",
      area: "Marketing",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 8.9,
      horaIngreso: 7,
      horaSalida: 16,
    },
    {
      nombre: "Argentina",
      area: "Marketing",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9,
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
      jornadaLaboral: 10.6,
      horaIngreso: 10,
      horaSalida: 20.3,
    },


 
 
  ];
  return (
    <>
      <div>
        <h2 className="titulo">Marketing</h2>
      </div>
    {vpn === "Argentina" ?   (
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
    ) : vpn === "Chile" ? (
      <div>
      {chile.map((pais) => (
          <RelojChile
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
    ) : vpn === "Spain" ? (
      <div>
      {españa.map((pais) => (
          <RelojEspaña
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
    ) : vpn === "Mexico" ? (
      <div>
      {mejico.map((pais) => (
          <RelojMejico
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
    ) : null }
    </>
  );
};

export default Marketing;
