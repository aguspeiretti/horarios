/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Reloj from "../../components/reloj/Reloj";
import RelojChile from "../../components/relojChile/RelojChile";
import RelojEspaña from "../../components/relojEspaña/RelojEspaña";
import RelojMejico from "../../components/relojMejico/RelojMejico";
import "./Contable.css";

const Contable = ({vpn}) => {
  const paises = [
    {
      nombre: "Argentina",
      area: "Contable",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9,
      horaIngreso: 8,
      horaSalida: 17,
    },

    {
      nombre: "España",
      area: "Contable",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 8.15,
      horaIngreso: 10,
      horaSalida: 18.75,
    },
  ];
  const españa = [
    {
      nombre: "España",
      area: "Contable",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 8.3,
      horaIngreso: 10,
      horaSalida: 18.75,
    },
    {
      nombre: "Argentina",
      area: "Contable",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9.2,
      horaIngreso: 8,
      horaSalida: 17,
    },

   
  ];
  const mexico = [
    {
      nombre: "Mexico",
      area: "Contable",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 9,
      horaIngreso: 8,
      horaSalida: 17,
    },
    {
      nombre: "Argentina",
      area: "Contable",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9,
      horaIngreso: 8,
      horaSalida: 17,
    },

    {
      nombre: "España",
      area: "Contable",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 8.15,
      horaIngreso: 10,
      horaSalida: 18.75,
    },
  ];
  return (
    <>
      <div>
        <h2 className="titulo">Contable</h2>
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
      {paises.map((pais) => (
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

export default Contable;
