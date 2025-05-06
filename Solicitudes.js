// datos.js
const solicitudReserva = {
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
};

window.addEventListener('DOMContentLoaded', () => {
  // Rellenar datos
  document.getElementById("nombre").textContent = solicitudReserva.nombreSolicitante;
  document.getElementById("matricula").textContent = solicitudReserva.matricula;
  document.getElementById("carrera").textContent = solicitudReserva.carrera;
  document.getElementById("semestre").textContent = solicitudReserva.semestre;
  document.getElementById("grupo").textContent = solicitudReserva.grupo;
  document.getElementById("fecha").textContent = solicitudReserva.fecha;
  document.getElementById("horaEntrada").textContent = solicitudReserva.horaEntrada;
  document.getElementById("horaSalida").textContent = solicitudReserva.horaSalida;

  document.getElementById("pcSala").checked = solicitudReserva.equipoSolicitado.pcSala;
  document.getElementById("laptop").checked = solicitudReserva.equipoSolicitado.laptop;
  document.getElementById("proyector").checked = solicitudReserva.equipoSolicitado.proyector;

  // Agregar evento al botón REGISTRAR
  const boton = document.querySelector('.footer button');
  boton.addEventListener('click', () => {
    alert("Registro exitoso. Solicite al alumno la confirmación");
  });
});
