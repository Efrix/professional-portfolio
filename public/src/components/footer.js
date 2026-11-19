function mostrarFechaHora() {
  const fechaHora = new Date();
  const opciones = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  const fechaHoraFormateada = fechaHora.toLocaleDateString('es-ES', opciones);
  const target = document.getElementById('footer-date');
  if (target) {
    target.textContent = fechaHoraFormateada;
  }
}

mostrarFechaHora();
setInterval(mostrarFechaHora, 1000 * 30); // cada 30s basta para un reloj de footer

export { mostrarFechaHora };
