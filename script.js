let currentLang = navigator.language.startsWith('ar') ? 'ar' : 'en';

function applyLang() {
  document.querySelectorAll('[data-ar]').forEach(el => {
    el.innerText = el.dataset[currentLang];
  });
}

function setLang(lang) {
  currentLang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  applyLang();
}

// ================= Lightbox =================
let lightboxImages = [];
let currentIndex = 0;

function openLightbox(images) {
  lightboxImages = images;
  currentIndex = 0;
  showLightbox();
}

function showLightbox() {
  let lb = document.getElementById('lightbox');
  lb.style.display = 'flex';
  lb.querySelector('img').src = lightboxImages[currentIndex];
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}

function nextImage() {
  currentIndex = (currentIndex + 1) % lightboxImages.length;
  showLightbox();
}

function prevImage() {
  currentIndex = (currentIndex - 1 + lightboxImages.length) % lightboxImages.length;
  showLightbox();
}

// ===========================================
applyLang();
