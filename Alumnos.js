// Base de datos de alumnos
const alumnos = [
    {
      matricula: "2022120122",
      nombre: "Mane Isabela",
      carrera: "Licenciatura en informática",
      semestre: 6
    },
    {
      matricula: "2020100100",
      nombre: "Pepito Rodríguez Cruz",
      carrera: "Ingeniería forestal",
      semestre: 10
    }
    // Puedes agregar más alumnos aquí
];

// Función para buscar alumno por matrícula
function buscarAlumnoPorMatricula(matricula) {
    return alumnos.find(alumno => alumno.matricula === matricula);
}

// Configurar autocompletado cuando el documento esté listo
$(document).ready(function() {
    // Autocompletar datos al ingresar matrícula
    $("#matricula").on('input', function() {
        const matricula = $(this).val().trim();
        const alumno = buscarAlumnoPorMatricula(matricula);
        
        if (alumno) {
            $("#datos-alumno").html(`
                <p><strong>Nombre:</strong> ${alumno.nombre}</p>
                <p><strong>Carrera:</strong> ${alumno.carrera}</p>
                <p><strong>Semestre:</strong> ${alumno.semestre}</p>
            `);
        } else {
            $("#datos-alumno").html(matricula ? 
                "Matrícula no encontrada" : 
                "Ingrese su matrícula para autocompletar");
        }
    });
});