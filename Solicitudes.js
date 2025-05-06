const solicitudes = [
  {
    nombreSolicitante: "Carlos López Cruz",
    matricula: "2021001234",
    carrera: "Ingeniería en Computación",
    semestre: 6,
    grupo: "B",
    fecha: "15/05/2025",
    horaEntrada: "09:00 p.m.",
    horaSalida: "11:00 p.m.",
    equipoSolicitado: {
      pcSala: true,
      laptop: false,
      proyector: true
    }
  },
  {
    nombreSolicitante: "Laura Méndez Torres",
    matricula: "2021005678",
    carrera: "Diseño Gráfico",
    semestre: 4,
    grupo: "A",
    fecha: "16/05/2025",
    horaEntrada: "10:00 a.m.",
    horaSalida: "12:00 p.m.",
    equipoSolicitado: {
      pcSala: false,
      laptop: true,
      proyector: false
    }
  }, 
  {
    nombreSolicitante: "Juan Pérez Cruz",
    matricula: "2021005432",
    carrera: "Enfermería",
    semestre: 4,
    grupo: "C",
    fecha: "16/05/2025",
    horaEntrada: "11:00 a.m.",
    horaSalida: "12:00 p.m.",
    equipoSolicitado: {
      pcSala: false,
      laptop: true,
      proyector: false
    }
  }
];

function crearSolicitudHTML(s, index) {
  const id = `solicitud-${index}`;
  return `
    <div class="container" id="${id}">
      <div class="header">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuc9Aq8alOIs33kPxaNZTFH9VJ8gF3vIH7oA&s" alt="Logo UMar">
        <h1>Reservar Salas de Cómputo</h1>
        <h3>UNIVERSIDAD DEL MAR</h3>
        <div class="subtitulo">Solicitud recibida</div>
      </div>

      <div class="datos">
        <span><strong>Nombre del solicitante:</strong> ${s.nombreSolicitante}</span><br>
        <span><strong>Matrícula:</strong> ${s.matricula}</span><br>
        <div class="row">
          <span><strong>Carrera:</strong> ${s.carrera}</span>
          <span><strong>Semestre:</strong> ${s.semestre}</span>
        </div>
        <div class="row">
          <span><strong>Fecha:</strong> ${s.fecha}</span>
          <span><strong>Grupo:</strong> ${s.grupo}</span>
        </div>
        <div class="row">
          <span><strong>Hora de entrada:</strong> ${s.horaEntrada}</span>
          <span><strong>Hora de salida:</strong> ${s.horaSalida}</span>
        </div>
      </div>

      <div class="checkboxes">
        <label><input type="checkbox" disabled ${s.equipoSolicitado.pcSala ? "checked" : ""}> PC de la sala</label>
        <label><input type="checkbox" disabled ${s.equipoSolicitado.laptop ? "checked" : ""}> Laptop</label>
        <label><input type="checkbox" disabled ${s.equipoSolicitado.proyector ? "checked" : ""}> Proyector</label>
      </div>

      <div class="footer">
        <button onclick="registrarSolicitud('${id}')">REGISTRAR</button>
      </div>
    </div>
  `;
}

function showFloatingMessage(message) {
  const $message = $('<div class="floating-message">').text(message);
  $('body').append($message);
  
  // Mostrar el mensaje flotante con animación
  $message.fadeIn().delay(3000).fadeOut();
}

function registrarSolicitud(id) {
  showFloatingMessage("Registro exitoso. Solicite al alumno la confirmación");
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.remove();
  }
  actualizarMensajeVacio();
}

function actualizarMensajeVacio() {
  const solicitudesVisibles = document.querySelectorAll(".container");
  const mensaje = document.getElementById("mensaje-vacio");

  if (solicitudesVisibles.length === 0) {
    mensaje.style.display = "block";
  } else {
    mensaje.style.display = "none";
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const contenedor = document.getElementById("solicitudes-container");

  solicitudes.forEach((s, i) => {
    contenedor.innerHTML += crearSolicitudHTML(s, i);
  });

  actualizarMensajeVacio();
});
