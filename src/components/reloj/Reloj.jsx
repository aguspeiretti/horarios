// Reloj.js
import { useState, useEffect } from "react";
import moment from "moment-timezone";
import "./reloj.css";

const Reloj = ({ pais, zonaHoraria, jornadaLaboral }) => {
  const [horaActual, setHoraActual] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      const hora = moment().tz(zonaHoraria);
      const horaFormateada = hora.format("HH:mm:ss");
      setHoraActual(horaFormateada);

      const inicioJornada = hora.clone().startOf("day").add(9, "hours"); // Suponiendo que la jornada comienza a las 9:00 AM
      const finJornada = inicioJornada.clone().add(jornadaLaboral, "hours");

      // Calcula el progreso de la jornada
      const progresoJornada =
        (hora.diff(inicioJornada, "minutes") / (jornadaLaboral * 60)) * 100;
      const barraProgreso = document.getElementById(`barra-${pais}`);
      if (barraProgreso) {
        barraProgreso.style.width = `${progresoJornada}%`;
        const contenedorTotal = document.getElementById(`contenedor-${pais}`);
        if (contenedorTotal) {
          // Ajusta el color del contenedor total
          contenedorTotal.style.backgroundColor = "#dcdcdc"; // Gris o el color que prefieras
        }

        // Cambia el color de la barra de progreso según el tiempo restante
        const tiempoRestante = finJornada.diff(hora, "minutes");
        if (tiempoRestante > 30) {
          barraProgreso.style.backgroundColor = "#3498db"; // Color normal cuando queda más de 30 minutos
        } else if (tiempoRestante > 0) {
          // Cambia a otro color cuando queda menos de 30 minutos
          barraProgreso.style.backgroundColor = "#e67e22"; // Puedes ajustar el color según tus preferencias
        } else {
          barraProgreso.style.backgroundColor = "#e74c3c"; // Cambia a rojo cuando la jornada ha finalizado
        }
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [zonaHoraria, jornadaLaboral, pais]);

  return (
    <div className="reloj">
      <h2>{pais}</h2>
      <p>{horaActual}</p>
      <p>Inicio de Jornada: 09:00 AM</p>
      <p>
        Fin de Jornada:{" "}
        {moment()
          .tz(zonaHoraria)
          .startOf("day")
          .add(9 + jornadaLaboral, "hours")
          .format("hh:mm A")}
      </p>
      <div id={`contenedor-${pais}`} className="contenedor-total">
        <div
          className="barra-progreso"
          id={`barra-${pais}`}
          style={{ width: "0%" }}
        ></div>
      </div>
    </div>
  );
};

export default Reloj;
