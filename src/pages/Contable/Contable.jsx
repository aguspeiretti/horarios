import Reloj from "../../components/reloj/Reloj";
import "./Contable.css";

const Contable = () => {
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
  return (
    <>
      <div>
        <h2 className="titulo">Contable</h2>
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

export default Contable;
