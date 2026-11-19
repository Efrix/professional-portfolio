// Carga el footer compartido en cualquier página que tenga #footer-container.
// `rutaComponentes` es la ruta a src/components/ relativa a la PÁGINA que llama
// (se usa solo para el fetch del HTML). El import del JS es relativo a este
// mismo archivo (./footer.js), porque load-footer.js ya vive en src/components/.
function cargarFooter(rutaComponentes) {
  fetch(`${rutaComponentes}footer.html`)
    .then((res) => res.text())
    .then((data) => {
      const contenedor = document.getElementById('footer-container');
      if (!contenedor) return;
      contenedor.innerHTML = data;
      return import('./footer.js');
    })
    .then((module) => {
      if (module) module.mostrarFechaHora();
    })
    .catch((err) => console.error('No se pudo cargar el footer:', err));
}

export { cargarFooter };
