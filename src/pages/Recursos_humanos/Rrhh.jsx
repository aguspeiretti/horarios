import Reloj from "../../components/reloj/Reloj";

const Rrhh = () => {
  const paises = [
    {
      nombre: "Argentina",
      zonaHoraria: "America/Argentina/Buenos_Aires",
      jornadaLaboral: 9,
      horaIngreso: 8,
      horaSalida: 17,
    },
  ];
  return (
    <>
      <div>
        <h2 className="titulo">Recursos Humanos </h2>
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

export default Rrhh;
