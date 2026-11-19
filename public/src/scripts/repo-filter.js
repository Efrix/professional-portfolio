// Filtro simple de repo-cards por categoría (data-lang)
document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.filter-btn');
  const cards = document.querySelectorAll('.repo-card');

  buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
      const filter = btn.dataset.filter;

      buttons.forEach((b) => {
        b.classList.remove('is-active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('is-active');
      btn.setAttribute('aria-selected', 'true');

      cards.forEach((card) => {
        const matches = filter === 'all' || card.dataset.lang === filter;
        card.classList.toggle('is-hidden', !matches);
      });
    });
  });
});
