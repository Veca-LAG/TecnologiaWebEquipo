$(document).ready(function () {
  const $matriculaInput = $("#matricula");
  const $datosAlumno = $("#datos-alumno");
  const $formulario = $("#formularioReserva");

  function buscarAlumnoPorMatricula(matricula) {
    return alumnos.find(alumno => alumno.matricula === matricula);
  }

  $matriculaInput.on("input", function () {
    const matricula = $(this).val().trim();
    const alumno = buscarAlumnoPorMatricula(matricula);

    if (alumno) {
      $datosAlumno.html(`
        <p><strong>Nombre:</strong> ${alumno.nombre}</p>
        <p><strong>Carrera:</strong> ${alumno.carrera}</p>
        <p><strong>Semestre:</strong> ${alumno.semestre}</p>
      `);
    } else {
      $datosAlumno.text(
        matricula ? "Matrícula no encontrada" : "Ingrese su matrícula para autocompletar"
      );
    }
  });

  let reservaActual = null;

  $formulario.on("submit", function (e) {
    e.preventDefault();

    const matricula = $matriculaInput.val().trim();
    const alumno = buscarAlumnoPorMatricula(matricula);

    if (!alumno) {
      alert("Por favor ingrese una matrícula válida");
      return;
    }

    const equipos = $('input[type="checkbox"]:checked').map(function () {
      return $(this).val();
    }).get();

    const hoy = new Date();
    const fecha = hoy.toLocaleDateString("es-MX");

    reservaActual = {
      matricula: alumno.matricula,
      nombre: alumno.nombre,
      carrera: alumno.carrera,
      semestre: alumno.semestre,
      sala: $("#sala").val(),
      fecha: fecha,
      entrada: $("#hora-entrada").val(),
      salida: $("#hora-salida").val(),
      equipos: equipos,
      estado: "pendiente"
    };

    $("#modalConfirmacion").modal("show");
  });

  $("#confirmarReserva").on("click", function () {
    const reservasGuardadas = JSON.parse(localStorage.getItem("reservasConfirmadas")) || [];
    reservasGuardadas.push(reservaActual);
    localStorage.setItem("reservasConfirmadas", JSON.stringify(reservasGuardadas));

    $("#modalConfirmacion").modal("hide");
    window.location.href = "reporteFin.html";
  });

  $("#volverBtn").on("click", function () {
    window.location.href = "Bienvenido.html";
  });
});
