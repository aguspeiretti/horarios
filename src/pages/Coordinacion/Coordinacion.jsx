/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Reloj from "../../components/reloj/Reloj";
import RelojChile from "../../components/relojChile/RelojChile";
import RelojEspaña from "../../components/relojEspaña/RelojEspaña";
import RelojMejico from "../../components/relojMejico/RelojMejico";

const Coordinacion = ({vpn}) => {
  const paises = [
    {
      nombre: "Argentina",
      area: "Coordinacion",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 8.8,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "España",
      area: "Coordinacion",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.12,
      horaIngreso: 10,
      horaSalida: 20,
    },
  ];
  const españa = [
    {
      nombre: "España",
      area: "Coordinacion",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.12,
      horaIngreso: 10,
      horaSalida: 20,
    },
    {
      nombre: "Argentina",
      area: "Coordinacion",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 8.8,
      horaIngreso: 10,
      horaSalida: 20.5,
    },

  ];
  const chile = [
    {
      nombre: "Chile",
      area: "Coordinacion",
      zonaHoraria: "Chile/continental",
      jornadaLaboral: 8.8,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "Argentina",
      area: "Coordinacion",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 8.8,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "España",
      area: "Coordinacion",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.12,
      horaIngreso: 10,
      horaSalida: 20,
    },
  ];
  const mexico = [
    {
      nombre: "Mexico",
      area: "Coordinacion",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 8.8,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "Argentina",
      area: "Coordinacion",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
    {
      nombre: "España",
      area: "Coordinacion",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.12,
      horaIngreso: 10,
      horaSalida: 20,
    },
  ];
  
  return (
    <>
      <div>
        <h2 className="titulo">Coordinacion</h2>
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
      {mexico.map((pais) => (
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

export default Coordinacion;
