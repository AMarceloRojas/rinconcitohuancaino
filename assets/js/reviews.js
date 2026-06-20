/**
 * RESEÑAS - Sistema de comentarios con estrellas
 * Ahora con filtro por plato y selector en el formulario
 */

'use strict';

// =============================================
// RESEÑAS PRE-CARGADAS (asociadas a platos por id)
// =============================================
const presetReviews = [
  { name: "María González", stars: 5, text: "¡El mejor ají de gallina que he probado! El sabor es auténtico, justo como el que hacía mi abuela.", dish: "aji-gallina", date: "Hace 2 días" },
  { name: "Carlos Mendoza", stars: 5, text: "Ambiente familiar y comida espectacular. El lomo saltado estaba en su punto.", dish: "lomo-saltado", date: "Hace 5 días" },
  { name: "Andrea Salazar", stars: 4, text: "Muy rico el ceviche, fresco y bien sazonado. Solo le bajo una estrella porque tuvimos que esperar un poco para mesa.", dish: "ceviche-pescado", date: "Hace 1 semana" },
  { name: "Diego Ramírez", stars: 5, text: "Sabor peruano auténtico en Chile. La papa a la huancaína me transportó a Lima.", dish: "papa-huancaina", date: "Hace 1 semana" },
  { name: "Valentina Torres", stars: 5, text: "Los anticuchos son una delicia. El servicio rapidísimo.", dish: "anticucho-corazon", date: "Hace 2 semanas" },
  { name: "Joaquín Pérez", stars: 4, text: "Buenas porciones, precios justos. Recomiendo el lomo saltado.", dish: "lomo-saltado", date: "Hace 2 semanas" },
  { name: "Isidora Muñoz", stars: 5, text: "¡Increíble! La causa limeña es mi nueva obsesión.", dish: "causa-limena", date: "Hace 3 semanas" },
  { name: "Felipe Castillo", stars: 5, text: "Se nota el cariño con que preparan cada plato. El pisco sour está espectacular.", dish: "pisco-sour", date: "Hace 3 semanas" },
  { name: "Camila Rojas", stars: 5, text: "El chupe de camarones es un manjar. Volveré sin duda.", dish: "chupe-camarones", date: "Hace 1 mes" },
  { name: "Sebastián Vargas", stars: 4, text: "El tallarín saltado de carne está muy bueno. Buena cantidad.", dish: "tallarin-carne", date: "Hace 1 mes" },
  { name: "Francisca Herrera", stars: 5, text: "El ceviche mixto estaba fresquísimo, con harto marisco.", dish: "ceviche-mixto", date: "Hace 1 mes" },
  { name: "Matías Soto", stars: 5, text: "Pedí ají de gallina y me encantó. La porción generosa.", dish: "aji-gallina", date: "Hace 2 meses" },
  { name: "Paula Jiménez", stars: 5, text: "El suspiro limeño es perfecto, ni muy dulce ni poco. Excelente cierre.", dish: "suspiro-limeno", date: "Hace 2 meses" },
  { name: "Rodrigo Vega", stars: 4, text: "El pollo broaster está muy bueno y crocante, las papas también.", dish: "pollo-broaster", date: "Hace 2 meses" },
  { name: "Antonia López", stars: 5, text: "La jalea mixta es de otro nivel, perfecta para compartir.", dish: "jalea-mixta", date: "Hace 2 meses" }
];

// =============================================
// CONFIGURACIÓN
// =============================================
const REVIEWS_PER_PAGE = 6;
const BASE_REVIEW_COUNT = 476;
const STORAGE_KEY = 'rinconcito_reviews_v2';

let currentlyShown = REVIEWS_PER_PAGE;
let selectedStars = 0;
let currentFilter = 'all'; // 'all' o id de plato

// =============================================
// AUXILIARES
// =============================================
function generateStars(rating) {
  let html = '';
  for (let i = 1; i <= 5; i++) {
    html += i <= rating ? '★' : '<span class="star-empty">★</span>';
  }
  return html;
}

function escapeHTML(str) {
  const div = document.createElement('div');
  div.textContent = str;
  return div.innerHTML;
}

function getStoredReviews() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (e) {
    return [];
  }
}

function saveReview(review) {
  const reviews = getStoredReviews();
  reviews.unshift(review);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(reviews));
  } catch (e) {
    console.error('Error guardando reseña', e);
  }
}

function getAllReviews() {
  return [...getStoredReviews(), ...presetReviews];
}

function getFilteredReviews() {
  const all = getAllReviews();
  if (currentFilter === 'all') return all;
  return all.filter(r => r.dish === currentFilter);
}

// =============================================
// SELECT DE PLATOS (formulario + filtro)
// =============================================
function populateDishSelects() {
  // Esperar a que menu.js cargue
  if (!window.getAllDishes) {
    setTimeout(populateDishSelects, 100);
    return;
  }

  const dishes = window.getAllDishes();

  // Agrupar por categoría
  const grouped = {};
  dishes.forEach(d => {
    if (!grouped[d.category]) grouped[d.category] = [];
    grouped[d.category].push(d);
  });

  const optionsHTML = Object.keys(grouped).map(cat => `
    <optgroup label="${cat}">
      ${grouped[cat].map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
    </optgroup>
  `).join('');

  // Select del formulario
  const formSelect = document.getElementById('reviewDish');
  if (formSelect) {
    formSelect.innerHTML = `
      <option value="">— Reseña general del restaurante —</option>
      ${optionsHTML}
    `;
  }

  // Select del filtro
  const filterSelect = document.getElementById('filterDish');
  if (filterSelect) {
    filterSelect.innerHTML = `
      <option value="all">Todas las reseñas</option>
      ${optionsHTML}
    `;
  }
}

// =============================================
// RENDERIZAR RESEÑAS
// =============================================
function renderReviews(isNew = false) {
  const grid = document.getElementById('reviewsGrid');
  if (!grid) return;

  const filtered = getFilteredReviews();
  const toShow = filtered.slice(0, currentlyShown);

  if (toShow.length === 0) {
    grid.innerHTML = `
      <div class="no-reviews">
        Aún no hay reseñas para este plato. ¡Sé el primero en dejar una!
      </div>
    `;
  } else {
    grid.innerHTML = toShow.map((r, i) => {
      const isNewest = isNew && i === 0;
      const dishName = r.dish && window.getDishNameById ? window.getDishNameById(r.dish) : null;
      return `
        <article class="review-card ${isNewest ? 'new-review' : ''}">
          <div class="review-header">
            <div>
              <h3 class="review-author">${escapeHTML(r.name)}</h3>
              <span class="review-date">${escapeHTML(r.date)}</span>
            </div>
            <div class="review-stars" aria-label="${r.stars} de 5 estrellas">
              ${generateStars(r.stars)}
            </div>
          </div>
          ${dishName ? `<p class="review-dish-tag">📍 ${escapeHTML(dishName)}</p>` : ''}
          <p class="review-text">${escapeHTML(r.text)}</p>
        </article>
      `;
    }).join('');
  }

  // Contador total (siempre el global, no el filtrado)
  const countEl = document.getElementById('reviewCount');
  if (countEl) {
    const userCount = getStoredReviews().length;
    countEl.textContent = BASE_REVIEW_COUNT + userCount;
  }

  // Promedio
  const avgEl = document.getElementById('ratingAverage');
  if (avgEl) {
    const all = getAllReviews();
    if (all.length > 0) {
      const sum = all.reduce((a, r) => a + r.stars, 0);
      avgEl.textContent = (sum / all.length).toFixed(1);
    }
  }

  // Botón ver más
  const loadMoreBtn = document.getElementById('loadMoreReviews');
  if (loadMoreBtn) {
    loadMoreBtn.style.display = currentlyShown >= filtered.length ? 'none' : '';
  }

  // Mostrar info del filtro activo
  const filterInfo = document.getElementById('filterInfo');
  if (filterInfo) {
    if (currentFilter === 'all') {
      filterInfo.textContent = '';
    } else {
      const dishName = window.getDishNameById ? window.getDishNameById(currentFilter) : currentFilter;
      filterInfo.textContent = `Mostrando reseñas de: ${dishName} (${filtered.length})`;
    }
  }
}

// =============================================
// SELECTOR DE ESTRELLAS
// =============================================
function initStarSelector() {
  const sel = document.getElementById('starsSelector');
  if (!sel) return;
  const stars = sel.querySelectorAll('.star-option');

  stars.forEach(star => {
    star.addEventListener('click', () => {
      selectedStars = parseInt(star.dataset.star);
      updateStarDisplay(stars, selectedStars);
    });
    star.addEventListener('mouseenter', () => {
      updateStarDisplay(stars, parseInt(star.dataset.star));
    });
  });

  sel.addEventListener('mouseleave', () => updateStarDisplay(stars, selectedStars));
}

function updateStarDisplay(stars, value) {
  stars.forEach(s => {
    const v = parseInt(s.dataset.star);
    s.classList.toggle('active', v <= value);
  });
}

// =============================================
// FORMULARIO
// =============================================
function initReviewForm() {
  const form = document.getElementById('reviewForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('reviewName');
    const textInput = document.getElementById('reviewText');
    const dishInput = document.getElementById('reviewDish');

    const name = nameInput.value.trim();
    const text = textInput.value.trim();
    const dish = dishInput ? dishInput.value : '';

    if (!name || name.length < 2) {
      alert('Por favor ingresa tu nombre completo');
      nameInput.focus();
      return;
    }
    if (!text || text.length < 10) {
      alert('Por favor escribe una reseña con al menos 10 caracteres');
      textInput.focus();
      return;
    }
    if (selectedStars === 0) {
      alert('Por favor selecciona una calificación con estrellas');
      return;
    }

    const newReview = {
      name, stars: selectedStars, text, dish: dish || null, date: 'Recién'
    };

    saveReview(newReview);

    // Reset
    form.reset();
    selectedStars = 0;
    updateStarDisplay(document.querySelectorAll('#starsSelector .star-option'), 0);

    // Si dejó reseña de un plato y hay filtro activo distinto, cambiamos al filtro de ese plato
    if (dish && currentFilter !== 'all' && currentFilter !== dish) {
      currentFilter = dish;
      const filterSelect = document.getElementById('filterDish');
      if (filterSelect) filterSelect.value = dish;
    }

    currentlyShown = Math.max(currentlyShown, 1);
    renderReviews(true);

    setTimeout(() => {
      document.getElementById('reviewsGrid').scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 100);

    alert('¡Gracias por tu reseña! Ya está publicada.');
  });
}

// =============================================
// FILTRO POR PLATO
// =============================================
function initFilter() {
  const filterSelect = document.getElementById('filterDish');
  if (!filterSelect) return;

  filterSelect.addEventListener('change', () => {
    currentFilter = filterSelect.value;
    currentlyShown = REVIEWS_PER_PAGE;
    renderReviews();
  });
}

// =============================================
// VER MÁS
// =============================================
function initLoadMore() {
  const btn = document.getElementById('loadMoreReviews');
  if (!btn) return;
  btn.addEventListener('click', () => {
    currentlyShown += REVIEWS_PER_PAGE;
    renderReviews();
  });
}

// =============================================
// INIT
// =============================================
document.addEventListener('DOMContentLoaded', () => {
  populateDishSelects();
  renderReviews();
  initStarSelector();
  initReviewForm();
  initFilter();
  initLoadMore();
});