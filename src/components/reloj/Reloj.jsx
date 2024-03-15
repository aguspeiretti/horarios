/* eslint-disable react/prop-types */
// Reloj.js
import { useState, useEffect } from "react";
import moment from "moment-timezone";
import "./reloj.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";
import Barra24Arg from "../barra24Argentina/Barra24Arg";

const Reloj = ({
  pais,
  zonaHoraria,
  jornadaLaboral,
  horaIngreso,
  horaSalida,
  area,
}) => {
  const [horaActual, setHoraActual] = useState("");
  const [progresoJornada, setProgresoJornada] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const horaActual = moment().tz(zonaHoraria);
      const inicioJornada = horaActual
        .clone()
        .startOf("day")
        .set("hours", horaIngreso)
        .set("minutes", 0);
      const finJornada = inicioJornada.clone().add(jornadaLaboral, "hours");

      const duracionTotalJornada = finJornada.diff(
        inicioJornada,
        "milliseconds"
      );
      const tiempoTranscurrido = horaActual.diff(inicioJornada, "milliseconds");

      let nuevoProgreso = (tiempoTranscurrido / duracionTotalJornada) * 100;

      if (nuevoProgreso < 0) {
        nuevoProgreso = 0;
      } else if (nuevoProgreso > 100) {
        nuevoProgreso = 100;
      }

      setHoraActual(horaActual.format("HH:mm:ss"));
      setProgresoJornada(nuevoProgreso);
    }, 100); // Intervalo más corto para una actualización más precisa

    return () => clearInterval(interval);
  }, [zonaHoraria, horaIngreso, horaSalida, jornadaLaboral]);

  const barraStyle = {
    width: `${progresoJornada}%`,
    backgroundColor:
      progresoJornada > 30
        ? "#643B9F"
        : progresoJornada > 0
        ? "#7d20af"
        : "#e74c3c",
  };

  // Generar los números del 0 al 24
  const ordenNumerosPorPais = {
    Argentina: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24,
    ],
    Chile: [
      0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
      21, 22, 23, 24,
    ],
    España: [
      4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
      24, 0, 1, 2, 3,
    ],
    Mexico: [
      22, 23, 24, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17,
      18, 19, 20, 21,
    ],
    // Añade más países y sus respectivos órdenes aquí si es necesario
  };

  // Obtener el orden de los números para el país actual
  const ordenNumeros = ordenNumerosPorPais[pais];

  // Generar los números en el orden específico del país
  const numerosRegla = ordenNumeros.map((numero) => (
    <div key={numero}>{numero}</div>
  ));

  return (
    <>
      <div className="reloj">
        <div className="infoContainer">
          <div className="nombreyhora">
            <div className="nombrePais">
              <h5>{pais}</h5>
              <div className="contenedor-reloj">
                <div className="svg-reloj">
                  <FontAwesomeIcon icon={faClock} style={{ color: "#fff" }} />
                </div>
              </div>
            </div>
            <div className="contenedor-reloj-superior">
              <div className="contenedor-segundero">{horaActual}</div>
            </div>
          </div>

          <div className="paisInfo">
            <p>Jornada</p>
            <p>
              {moment()
                .tz(zonaHoraria)
                .startOf("day")
                .set("hours", horaIngreso)
                .set("minutes", (horaIngreso % 1) * 60) // Tomar en cuenta los minutos
                .format("hh:mm A")}
            </p>
            <p>
              {moment()
                .tz(zonaHoraria)
                .startOf("day")
                .set("hours", Math.floor(horaIngreso))
                .set("minutes", Math.round((horaIngreso % 1) * 60))
                .add(jornadaLaboral, "hours")
                .format("hh:mm A")}
            </p>
          </div>
        </div>
        <div className="reductor">
          <div className="contenedorBarra">
            <Barra24Arg pais={pais} zonaHoraria={zonaHoraria} />
            <div className={`breack-${pais}-${area}`}></div>
            <div className="regla">{numerosRegla}</div>
            <div
              id={`contenedor2-${pais}-${area}`}
              className="contenedor-total"
            >
              <div
                className="barra-progreso"
                id={`barra-${pais}`}
                style={barraStyle}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reloj;
