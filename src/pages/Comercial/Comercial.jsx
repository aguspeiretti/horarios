/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import Reloj from "../../components/reloj/Reloj";
import RelojChile from "../../components/relojChile/RelojChile";
import RelojEspaña from "../../components/relojEspaña/RelojEspaña";
import RelojMejico from "../../components/relojMejico/RelojMejico";
import "./Comercial.css";

const Comercial = ({vpn}) => {
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
  const españa = [
    {
      nombre: "España",
      area: "Comercial",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.65,
      horaIngreso: 10,
      horaSalida: 21.45,
    },
    {
      nombre: "Argentina",
      area: "Comercial",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 10.4,
      horaIngreso: 10,
      horaSalida: 20.5,
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
      jornadaLaboral: 11,
      horaIngreso: 10,
      horaSalida: 17,
    },
  ];
  const chile = [
    {
      nombre: "Chile",
      area: "Comercial",
      zonaHoraria: "Chile/Continental",
      jornadaLaboral: 10.4,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
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
      nombre: "Mexico",
      area: "Comercial",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 10,
      horaIngreso: 10,
      horaSalida: 17,
    },
  ];
  const mexico= [
    {
      nombre: "Mexico",
      area: "Comercial",
      zonaHoraria: "America/Mexico_City",
      jornadaLaboral: 10.8,
      horaIngreso: 10,
      horaSalida: 17,
    },
    {
      nombre: "Argentina",
      area: "Comercial",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 10.6,
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
      jornadaLaboral: 10.6,
      horaIngreso: 10,
      horaSalida: 20.5,
    },
 


  ];
  return (
    <>
      <div>
        <h2 className="titulo">Comercial</h2>
      </div>
      <div>
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
      </div>
    </>
  );
};

export default Comercial;
