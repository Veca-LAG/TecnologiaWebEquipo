$(document).ready(function () {
    function cargarReservas() {
        const reservas = JSON.parse(localStorage.getItem('reservasConfirmadas')) || [];
        const $tbody = $('#tablaReservas tbody');
        $tbody.empty();

        reservas.sort((a, b) => {
            const fechaA = new Date(`${a.fecha} ${a.entrada}`);
            const fechaB = new Date(`${b.fecha} ${b.entrada}`);
            return fechaB - fechaA;
        });

        if (reservas.length === 0) {
            $tbody.append('<tr><td colspan="13" style="text-align: center;">No hay reservas confirmadas</td></tr>');
            return;
        }

        reservas.forEach(reserva => {
            const $tr = $('<tr>');

            $tr.append(`<td>${reserva.matricula}</td>`);
            $tr.append(`<td>${reserva.nombre}</td>`);
            $tr.append(`<td>${reserva.carrera}</td>`);
            $tr.append(`<td>${reserva.semestre}</td>`);
            $tr.append(`<td>Sala ${reserva.sala}</td>`);
            $tr.append(`<td>${reserva.fecha}</td>`);
            $tr.append(`<td>${reserva.entrada}</td>`);
            $tr.append(`<td>${reserva.salida}</td>`);
            $tr.append(`<td>${Array.isArray(reserva.equipos) ? reserva.equipos.join(', ') : (reserva.equipos || 'Ninguno')}</td>`);
            $tr.append(`<td>${reserva.observaciones || 'Sin observaciones'}</td>`);
            $tr.append(`<td>${reserva.horaRealEntrada || 'No registrada'}</td>`);
            $tr.append(`<td>${reserva.horaRealSalida || 'No registrada'}</td>`);

            let estadoClass = '';
            switch (reserva.estado) {
                case 'Reservado':
                    estadoClass = 'text-warning';
                    break;
                case 'En uso':
                    estadoClass = 'text-primary';
                    break;
                case 'Finalizado':
                    estadoClass = 'text-success';
                    break;
                default:
                    estadoClass = 'text-secondary';
            }

            $tr.append(`<td class="${estadoClass}">${reserva.estado || 'Desconocido'}</td>`);

            $tbody.append($tr);
        });
    }

    // Botón volver
    $('#volverBtn').on('click', () => {
        window.location.href = 'Bienvenido.html';
    });

    // Cargar al inicio y actualizar cada 5 segundos
    cargarReservas();
    setInterval(cargarReservas, 5000);
});
