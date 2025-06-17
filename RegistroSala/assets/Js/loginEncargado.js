document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const usuario = document.getElementById('usuario').value.trim();
        const contraseña = document.getElementById('contraseña').value.trim();

        const encargado = encargados.find(e =>
            e.usuario === usuario && e.contraseña === contraseña
        );

        if (encargado) {
            localStorage.setItem('nombreUsuario', encargado.nombre);
            window.location.href = "Bienvenido.html";
        } else {
            errorMessage.style.display = 'block';
        }
    });
});
