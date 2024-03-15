import Reloj from "../../components/reloj/Reloj";

const Coordinacion = () => {
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
            area={pais.area}
          />
        ))}
      </div>
    </>
  );
};

export default Coordinacion;
