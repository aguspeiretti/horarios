/* eslint-disable react/prop-types */
// Reloj.js
import { useState, useEffect } from "react";
import moment from "moment-timezone";
import "./reloj.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-regular-svg-icons";

const Reloj = ({
  pais,
  zonaHoraria,
  jornadaLaboral,
  horaIngreso,
  horaSalida,
}) => {
  const [horaActual, setHoraActual] = useState("");
  const [progresoJornada, setProgresoJornada] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const hora = moment().tz(zonaHoraria);
      const horaFormateada = hora.format("HH:mm:ss");
      setHoraActual(horaFormateada);

      const inicioJornada = hora
        .clone()
        .startOf("day")
        .set("hours", horaIngreso)
        .set("minutes", 0);
      const finJornada = inicioJornada
        .clone()
        .set("hours", horaSalida)
        .set("minutes", 0);

      const duracionTotalJornada = finJornada.diff(inicioJornada, "minutes");

      let nuevoProgreso =
        (hora.diff(inicioJornada, "minutes") / duracionTotalJornada) * 100;

      if (nuevoProgreso < 0) {
        nuevoProgreso = 0;
      } else if (nuevoProgreso > 100) {
        nuevoProgreso = 100;
      }

      setProgresoJornada(nuevoProgreso);
    }, 1000);

    return () => clearInterval(interval);
  }, [zonaHoraria, horaIngreso, horaSalida]);

  const barraStyle = {
    width: `${progresoJornada}%`,
    backgroundColor:
      progresoJornada > 30
        ? "#7d20af"
        : progresoJornada > 0
        ? "#e67e22"
        : "#e74c3c",
  };

  return (
    <>
      <div className="reloj">
        <div className="infoContainer">
          <div className="nombreyhora">
            <h2>{pais}</h2>
            <p>
              <FontAwesomeIcon icon={faClock} />
              {horaActual}
            </p>
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
        <div className="contenedorBarra">
          <div id={`contenedor-${pais}`} className="contenedor-total">
            <div
              className="barra-progreso"
              id={`barra-${pais}`}
              style={barraStyle}
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Reloj;
