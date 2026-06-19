'use strict';



/**
 * PRELOAD
 * 
 * loading will be end after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}



/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);



/**
 * HEADER & BACK TOP BTN
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
}

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * HERO SLIDER
 */

const heroSlider = document.querySelector("[data-hero-slider]");
const heroSliderItems = document.querySelectorAll("[data-hero-slider-item]");
const heroSliderPrevBtn = document.querySelector("[data-prev-btn]");
const heroSliderNextBtn = document.querySelector("[data-next-btn]");

let currentSlidePos = 0;
let lastActiveSliderItem = heroSliderItems[0];

const updateSliderPos = function () {
  lastActiveSliderItem.classList.remove("active");
  heroSliderItems[currentSlidePos].classList.add("active");
  lastActiveSliderItem = heroSliderItems[currentSlidePos];
}

const slideNext = function () {
  if (currentSlidePos >= heroSliderItems.length - 1) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  updateSliderPos();
}

heroSliderNextBtn.addEventListener("click", slideNext);

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = heroSliderItems.length - 1;
  } else {
    currentSlidePos--;
  }

  updateSliderPos();
}

heroSliderPrevBtn.addEventListener("click", slidePrev);

/**
 * auto slide
 */

let autoSlideInterval;

const autoSlide = function () {
  autoSlideInterval = setInterval(function () {
    slideNext();
  }, 7000);
}

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseover", function () {
  clearInterval(autoSlideInterval);
});

addEventOnElements([heroSliderNextBtn, heroSliderPrevBtn], "mouseout", autoSlide);

window.addEventListener("load", autoSlide);



/**
 * PARALLAX EFFECT
 */

const parallaxItems = document.querySelectorAll("[data-parallax-item]");

let x, y;

window.addEventListener("mousemove", function (event) {

  x = (event.clientX / window.innerWidth * 10) - 5;
  y = (event.clientY / window.innerHeight * 10) - 5;

  // reverse the number eg. 20 -> -20, -5 -> 5
  x = x - (x * 2);
  y = y - (y * 2);

  for (let i = 0, len = parallaxItems.length; i < len; i++) {
    x = x * Number(parallaxItems[i].dataset.parallaxSpeed);
    y = y * Number(parallaxItems[i].dataset.parallaxSpeed);
    parallaxItems[i].style.transform = `translate3d(${x}px, ${y}px, 0px)`;
  }

});
/**
 * RESEÑAS - Sistema de comentarios con estrellas
 * Guarda las reseñas nuevas en localStorage para que persistan
 */

'use strict';

// =============================================
// RESEÑAS PRE-CARGADAS (puedes editar estas)
// =============================================
const presetReviews = [
  { name: "María González", stars: 5, text: "¡El mejor ají de gallina que he probado! El sabor es auténtico, justo como el que hacía mi abuela. Volveré sin duda.", date: "Hace 2 días" },
  { name: "Carlos Mendoza", stars: 5, text: "Ambiente familiar y comida espectacular. El lomo saltado estaba en su punto. 100% recomendado.", date: "Hace 5 días" },
  { name: "Andrea Salazar", stars: 4, text: "Muy rico el ceviche, fresco y bien sazonado. Solo le bajo una estrella porque tuvimos que esperar un poco para mesa.", date: "Hace 1 semana" },
  { name: "Diego Ramírez", stars: 5, text: "Sabor peruano auténtico en Chile. La papa a la huancaína me transportó a Lima. Excelente atención del personal.", date: "Hace 1 semana" },
  { name: "Valentina Torres", stars: 5, text: "Fui con mi familia y todos quedamos encantados. Los anticuchos son una delicia. El servicio rapidísimo.", date: "Hace 2 semanas" },
  { name: "Joaquín Pérez", stars: 4, text: "Buenas porciones, precios justos y la comida deliciosa. El local es acogedor. Recomiendo el menú del día.", date: "Hace 2 semanas" },
  { name: "Isidora Muñoz", stars: 5, text: "¡Increíble! La causa limeña es mi nueva obsesión. Repetiré pronto con mis amigas. Lugar 100% recomendado.", date: "Hace 3 semanas" },
  { name: "Felipe Castillo", stars: 5, text: "Comida casera de calidad. Se nota el cariño con que preparan cada plato. El pisco sour está espectacular.", date: "Hace 3 semanas" },
  { name: "Camila Rojas", stars: 5, text: "Quedé enamorada de este lugar. El sabor, el ambiente, la atención... todo perfecto. Mi nuevo restaurante favorito.", date: "Hace 1 mes" },
  { name: "Sebastián Vargas", stars: 4, text: "Muy buena comida peruana. Los precios son razonables para la calidad que ofrecen. Volveré con mi pareja.", date: "Hace 1 mes" },
  { name: "Francisca Herrera", stars: 5, text: "El ceviche estaba fresquísimo y el lomo saltado bien jugoso. Mejor lugar para comer peruano en la zona.", date: "Hace 1 mes" },
  { name: "Matías Soto", stars: 5, text: "Recomendado al 1000%. La sazón es única. Pedí ají de gallina y me encantó. La porción generosa.", date: "Hace 2 meses" }
];

// =============================================
// CONFIGURACIÓN
// =============================================
const REVIEWS_PER_PAGE = 6;           // cuántas mostrar inicialmente y por click
const BASE_REVIEW_COUNT = 476;        // contador que se muestra (lo que pediste)
const STORAGE_KEY = 'rinconcito_reviews';

let currentlyShown = REVIEWS_PER_PAGE;
let selectedStars = 0;

// =============================================
// FUNCIONES AUXILIARES
// =============================================

// Genera el HTML de estrellas (llenas y vacías)
function generateStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += '★';
    } else {
      html += '<span class="star-empty">★</span>';
    }
  }
  return html;
}

// Escapa HTML para evitar XSS (importante porque guardamos texto del usuario)
function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

// Obtiene reseñas guardadas del navegador del usuario
function getStoredReviews() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
}

// Guarda reseñas en el navegador
function saveReview(review) {
  const reviews = getStoredReviews();
  reviews.unshift(review); // agregar al inicio
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  } catch (e) {
    console.error('No se pudo guardar la reseña', e);
  }
}

// Combina reseñas nuevas (del usuario) + reseñas predeterminadas
function getAllReviews() {
  const userReviews = getStoredReviews();
  return [...userReviews, ...presetReviews];
}

// =============================================
// RENDERIZAR RESEÑAS EN LA PÁGINA
// =============================================
function renderReviews(isNew = false) {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;

  const allReviews = getAllReviews();
  const reviewsToShow = allReviews.slice(0, currentlyShown);

  grid.innerHTML = reviewsToShow.map((review, index) => {
    const isNewest = isNew && index === 0;
    return `
      <article class="review-card ${isNewest ? 'new-review' : ''}">
        <div class="review-header">
          <div>
            <h3 class="review-author">${escapeHTML(review.name)}</h3>
            <span class="review-date">${escapeHTML(review.date)}</span>
          </div>
          <div class="review-stars" aria-label="${review.stars} de 5 estrellas">
            ${generateStars(review.stars)}
          </div>
        </div>
        <p class="review-text">${escapeHTML(review.text)}</p>
      </article>
    `;
  }).join('');

  // Actualizar contador total
  const countEl = document.getElementById('reviewCount');
  if (countEl) {
    const userReviewsCount = getStoredReviews().length;
    countEl.textContent = BASE_REVIEW_COUNT + userReviewsCount;
  }

  // Calcular promedio (solo si hay reseñas)
  const avgEl = document.getElementById('ratingAverage');
  if (avgEl && allReviews.length > 0) {
    const sum = allReviews.reduce((acc, r) => acc + r.stars, 0);
    const avg = (sum / allReviews.length).toFixed(1);
    avgEl.textContent = avg;
  }

  // Mostrar/ocultar botón "Ver más"
  const loadMoreBtn = document.getElementById('loadMoreReviews');
  if (loadMoreBtn) {
    if (currentlyShown >= allReviews.length) {
      loadMoreBtn.style.display = 'none';
    } else {
      loadMoreBtn.style.display = '';
    }
  }
}

// =============================================
// MANEJO DE ESTRELLAS EN EL FORMULARIO
// =============================================
function initStarSelector() {
  const starsSelector = document.getElementById('starsSelector');
  if (!starsSelector) return;

  const stars = starsSelector.querySelectorAll('.star-option');

  stars.forEach(star => {
    // Click: selecciona la calificación
    star.addEventListener('click', () => {
      selectedStars = parseInt(star.dataset.star);
      updateStarDisplay(stars, selectedStars);
    });

    // Hover: previsualiza
    star.addEventListener('mouseenter', () => {
      const hoverValue = parseInt(star.dataset.star);
      updateStarDisplay(stars, hoverValue);
    });
  });

  // Al salir del area, vuelve a la seleccion real
  starsSelector.addEventListener('mouseleave', () => {
    updateStarDisplay(stars, selectedStars);
  });
}

function updateStarDisplay(stars, value) {
  stars.forEach(s => {
    const sValue = parseInt(s.dataset.star);
    if (sValue <= value) {
      s.classList.add('active');
    } else {
      s.classList.remove('active');
    }
  });
}

// =============================================
// MANEJO DEL FORMULARIO
// =============================================
function initReviewForm() {
  const form = document.getElementById('reviewForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('reviewName');
    const textInput = document.getElementById('reviewText');

    const name = nameInput.value.trim();
    const text = textInput.value.trim();

    // Validaciones
    if (!name || name.length < 2) {
      alert('Por favor, ingresa tu nombre completo');
      nameInput.focus();
      return;
    }

    if (!text || text.length < 10) {
      alert('Por favor, escribe una reseña con al menos 10 caracteres');
      textInput.focus();
      return;
    }

    if (selectedStars === 0) {
      alert('Por favor, selecciona una calificación con estrellas');
      return;
    }

    // Crear nueva reseña
    const newReview = {
      name: name,
      stars: selectedStars,
      text: text,
      date: 'Recién'
    };

    // Guardar
    saveReview(newReview);

    // Reiniciar formulario
    form.reset();
    selectedStars = 0;
    const stars = document.querySelectorAll('#starsSelector .star-option');
    updateStarDisplay(stars, 0);

    // Re-renderizar (mostrando la nueva arriba)
    currentlyShown = Math.max(currentlyShown, 1);
    renderReviews(true);

    // Scroll hacia las reseñas
    setTimeout(() => {
      document.getElementById('reviewsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    // Mensaje de éxito
    alert('¡Gracias por tu reseña! Ya está publicada.');
  });
}

// =============================================
// BOTÓN "VER MÁS RESEÑAS"
// =============================================
function initLoadMore() {
  const loadMoreBtn = document.getElementById('loadMoreReviews');
  if (!loadMoreBtn) return;

  loadMoreBtn.addEventListener('click', () => {
    currentlyShown += REVIEWS_PER_PAGE;
    renderReviews();
  });
}

// =============================================
// INICIALIZACIÓN
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  renderReviews();
  initStarSelector();
  initReviewForm();
  initLoadMore();
});