let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');
let current = 0;
let slideInterval;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    dots[i].classList.remove('active');
    if (i === index) {
      slide.classList.add('active');
      dots[i].classList.add('active');
    }
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide(current);
}

function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Arrow controls
document.querySelector('.next').addEventListener('click', () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});
document.querySelector('.prev').addEventListener('click', () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});

// Dot controls
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    current = index;
    showSlide(current);
    stopAutoSlide();
    startAutoSlide();
  });
});

// Initialize
showSlide(current);
startAutoSlide()

// Hamburger toggle
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links ul');
const overlay = document.createElement('div');
overlay.classList.add('menu-overlay');
document.body.appendChild(overlay);

// Toggle menu
toggle.addEventListener('click', (e) => {
  e.stopPropagation();
  navLinks.classList.toggle('active');
  overlay.style.display = navLinks.classList.contains('active') ? 'block' : 'none';
});

// Close when clicking outside or on overlay
overlay.addEventListener('click', () => {
  navLinks.classList.remove('active');
  overlay.style.display = 'none';
});

/* CHANGED: Close menu + overlay when a nav link is clicked */
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    overlay.style.display = 'none';
  });
});



