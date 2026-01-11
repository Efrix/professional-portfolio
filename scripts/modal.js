// ==========================
// Datos de los proyectos
// ==========================
const projectsData = {
  aurora: {
    title: "Aurora",
    problem: "Ayudar a las personas a identificar y comprender mejor sus emociones mediante una interfaz visual.",
    learning: [
      "Estructuración de interfaces con HTML semántico",
      "Manejo de estados simples con JavaScript",
      "Diseño centrado en el usuario"
    ],
    tech: "HTML, CSS, JavaScript",
    link: "https://github.com/efren/aurora"
  },

  "landing-page": {
    title: "Landing Page",
    problem: "Crear una página clara para presentar un producto o servicio.",
    learning: [
      "Uso de Flexbox y Grid",
      "Buenas prácticas de diseño responsive"
    ],
    tech: "HTML, CSS",
    link: "https://github.com/efren/landing-page"
  },

  "crud-php": {
    title: "CRUD en PHP",
    problem: "Gestionar datos de usuarios de forma sencilla.",
    learning: [
      "Operaciones CRUD",
      "Conexión a base de datos",
      "Validación básica de formularios"
    ],
    tech: "PHP, MySQL, HTML, CSS",
    link: "https://github.com/efren/crud-php"
  },

  "js-app": {
    title: "Aplicación JavaScript",
    problem: "Resolver una necesidad concreta usando lógica en el navegador.",
    learning: [
      "Manipulación del DOM",
      "Eventos y estados"
    ],
    tech: "JavaScript, HTML, CSS",
    link: "https://github.com/efren/js-app"
  }
};

// ==========================
// Referencias al DOM
// ==========================
const projectCards = document.querySelectorAll(".project-card");
const modal = document.getElementById("modal");
const closeModalBtn = document.querySelector(".close-modal");

const modalTitle = document.getElementById("modal-title");
const modalProblem = document.getElementById("modal-problem");
const modalLearning = document.getElementById("modal-learning");
const modalTech = document.getElementById("modal-tech");
const modalLink = document.getElementById("modal-link");

// ==========================
// Abrir modal
// ==========================
function openModal(projectKey) {
  const project = projectsData[projectKey];
  if (!project) return;

  modalTitle.textContent = project.title;
  modalProblem.textContent = project.problem;
  modalTech.textContent = project.tech;
  modalLink.href = project.link;

  // Limpiar lista
  modalLearning.innerHTML = "";
  project.learning.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    modalLearning.appendChild(li);
  });

  modal.classList.remove("hidden");
}

// ==========================
// Cerrar modal
// ==========================
function closeModal() {
  modal.classList.add("hidden");
}

// ==========================
// Eventos
// ==========================
projectCards.forEach(card => {
  card.addEventListener("click", () => {
    const projectKey = card.dataset.project;
    openModal(projectKey);
  });
});

closeModalBtn.addEventListener("click", closeModal);

// Click fuera del contenido
modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Tecla ESC
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});