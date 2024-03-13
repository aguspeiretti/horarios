import Reloj from "../../components/reloj/Reloj";

const Coordinacion = () => {
  const paises = [
    {
      nombre: "Argentina",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9,
      horaIngreso: 10,
      horaSalida: 19,
    },

    {
      nombre: "España",
      zonaHoraria: "Europe/Madrid",
      jornadaLaboral: 10.25,
      horaIngreso: 10,
      horaSalida: 20.15,
    },
  ];
  return (
    <>
      <div>
        <h2 className="titulo">Coordinacion</h2>
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

export default Coordinacion;
