document.addEventListener("DOMContentLoaded", function () {
  const horaActual = document.getElementById("horaActual");
  const btnIniciar = document.getElementById("btnIniciar");
  const cerrar = document.getElementById("cerrarModal");
  const aceptar = document.getElementById("btnAceptar");
  const modal = document.getElementById("myModal");
  const mensaje = document.getElementById("mensajeBienvenida");

  // Mostrar hora actual en tiempo real
  function mostrarHoraActual() {
    const ahora = new Date();
    horaActual.innerText = ahora.toLocaleTimeString('es-ES', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit'
    });
  }
  mostrarHoraActual();
  setInterval(mostrarHoraActual, 1000);

  // Validar matrícula
  btnIniciar.addEventListener("click", function () {
    const input = document.getElementById("matricula").value.trim();
    const alumno = alumnos.find(a => a.matricula === input);

    if (!alumno) {
      alert("Matrícula inválida.");
      return;
    }

    const ahora = new Date();
    const horaEntrada = ahora.toLocaleTimeString('es-ES', { hour: '2-digit', minute: '2-digit' });

    let reservas = JSON.parse(localStorage.getItem('reservasConfirmadas')) || [];
    const reservasAlumno = reservas.filter(r =>
      r.matricula === input &&
      (!r.horaRealSalida) &&
      (r.estado === "undefined" || r.estado === "Reservado" || r.estado === "En uso")
    );

    if (reservasAlumno.length > 0) {
      const reserva = reservasAlumno[0];

      if (!reserva.horaRealEntrada) {
        reserva.horaRealEntrada = horaEntrada;
        reserva.estado = "En uso";
        mensaje.innerHTML = `Bienvenido ${alumno.nombre}<br>Hora de entrada: ${horaEntrada}<br>Sala: ${reserva.sala}`;
      } else {
        reserva.horaRealSalida = horaEntrada;
        reserva.estado = "Finalizado";
        mensaje.innerHTML = `Sesión finalizada ${alumno.nombre}<br>Hora de salida: ${horaEntrada}<br>¡Gracias por su visita!`;
      }

      localStorage.setItem("reservasConfirmadas", JSON.stringify(reservas));
    } else {
      mensaje.innerHTML = `Bienvenido ${alumno.nombre}<br>No tienes reservas activas.`;
    }

    modal.style.display = "block";
    localStorage.setItem("alumno", JSON.stringify(alumno));
  });

  cerrar.addEventListener("click", () => modal.style.display = "none");
  aceptar.addEventListener("click", () => modal.style.display = "none");
});
