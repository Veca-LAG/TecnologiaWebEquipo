document.addEventListener('DOMContentLoaded', function () {
  const sidebar = document.getElementById('sidebar');
  const toggleBtn = document.getElementById('menu-toggle');
  const nombreUsuarioDiv = document.getElementById('nombre-usuario');

  // Mostrar/ocultar menú
  toggleBtn.addEventListener('click', function () {
    sidebar.classList.toggle('show');
  });

  // Ocultar al hacer clic fuera
  window.addEventListener('click', function (e) {
    if (!sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
      sidebar.classList.remove('show');
    }
  });

  // Mostrar nombre de usuario
  const nombre = localStorage.getItem('nombreUsuario');
  if (nombreUsuarioDiv) {
    nombreUsuarioDiv.textContent = nombre ? `Bienvenido ${nombre}` : 'Bienvenido usuario';
  }

  // Acciones del menú
  document.getElementById('salir')?.addEventListener('click', function (e) {
    e.preventDefault();
    localStorage.removeItem('nombreUsuario');
    window.location.href = 'index.html';
  });

  document.getElementById('Reporte')?.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'reporteFin.html';
  });

  document.getElementById('verificar')?.addEventListener('click', function (e) {
    e.preventDefault();
    window.location.href = 'Solicitudes.html';
  });
});
