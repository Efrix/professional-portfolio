// Validación simple en cliente. No hay backend conectado todavía:
// este script deja el formulario listo para enchufar un endpoint
// (mailto, Formspree, o tu propia API) cuando lo tengas.
document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  if (!form) return;

  const status = document.getElementById('form-status');

  const validators = {
    name: (v) => v.trim().length >= 2 || 'Escribe tu nombre completo.',
    email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Ese correo no parece válido.',
    message: (v) => v.trim().length >= 10 || 'Cuéntame un poco más (mínimo 10 caracteres).',
  };

  function showError(field, message) {
    const errorEl = form.querySelector(`.form-error[data-for="${field}"]`);
    if (errorEl) errorEl.textContent = message || '';
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    Object.entries(validators).forEach(([field, validate]) => {
      const input = form.elements[field];
      const result = validate(input.value);
      if (result !== true) {
        showError(field, result);
        isValid = false;
      } else {
        showError(field, '');
      }
    });

    if (!isValid) {
      status.textContent = '';
      return;
    }

    // Sin backend conectado aún: confirmamos visualmente y
    // dejamos el formulario listo para integrarse más adelante.
    status.textContent = '¡Listo! Por ahora este formulario no envía datos a ningún servidor — conéctalo a tu API o a mailto cuando quieras activarlo.';
    status.style.color = 'var(--term-green)';
  });
});
