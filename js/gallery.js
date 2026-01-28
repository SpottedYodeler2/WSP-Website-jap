const images = [
  "./assets/images/highlights/H11.png",
  "./assets/images/highlights/H22.png",
  "./assets/images/highlights/H33.png"
];

let currentIndex = 0;
let intervalId = null;
// Cache the DOM element once so we don't search for it every click
const galleryImage = document.getElementById("gallery-image");

// 1. PRELOADER FUNCTION: Downloads all images silently in the background
function preloadImages() {
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
    });
}

function showImage(index) {
  if (galleryImage) {
    galleryImage.src = images[index];
  }
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function startAutoSlide() {
  // Prevent multiple intervals running at once
  if (intervalId) clearInterval(intervalId);
  intervalId = setInterval(nextImage, 5000);
}

function stopAutoSlide() {
  if (intervalId) clearInterval(intervalId);
}

// 2. IMMEDIATE EXECUTION: Start preloading right away
preloadImages();

// 3. FASTER EVENT LISTENER: Use DOMContentLoaded (fires sooner than window.onload)
document.addEventListener('DOMContentLoaded', () => {
  // Initialize controls
  startAutoSlide();

  // Add hover listeners
  if (galleryImage) {
    galleryImage.addEventListener("mouseenter", stopAutoSlide);
    galleryImage.addEventListener("mouseleave", startAutoSlide);
  }
});

function historyCarousel() {
  return {
    activeSlide: 0,
    lightboxOpen: false,
    lightboxImage: null,

    slides: [
      {
        year: '2022',
        title: 'Early Stages of WSP',
        description: `Credo Intl. launched an initiative to energize the wellness industry through youth engagement.

The Student Spa Sauna Association established branches offering free tent saunas as part of the Student Startup Lab.`,
        layoutType: 'featured', // New layout type
        images: [
          './assets/images/2022/2022-1.png',
          './assets/images/2022/2022-2.png',
          './assets/images/2022/2022-3.png',
        ]
      },
      {
        year: '2023',
        title: 'YUME PRO Tournament',
        description: `The first YUME PRO 2023 Student Pitch Koshien was held at the Imperial Hotel.

Five trend-based awards were presented-including the Virtual Entrepreneur Award and the Omotenashi (Hospitality) Entrepreneur Award - as students competed for the Grand Prize.`,
        images: [
          './assets/images/2023/2023-1.png',
          './assets/images/2023/2023-2.png',
          './assets/images/2023/2023-3.png',
        ]
      },
      {
        year: '2024',
        title: 'YUME PRO Tournament',
        description: `The second YUME PRO 2024 Student Pitch Koshien was held at the Imperial Hotel.`,
        images: [
          './assets/images/2024/2024-1.png',
          './assets/images/2024/2024-2.png',
          './assets/images/2024/2024-4.png',
        ]
      },
      {
        year: '2025',
        title: 'World Student Pitch',
        description: `Aiming to become the world's top student pitch competition, Preliminary rounds will be held in 15 locations across Asia in 2025 as students compete for over 10M Yen in prizes!`,
        images: [
          './assets/images/2025/2025-1.jpeg',
          './assets/images/2025/2025-2.jpeg',
          './assets/images/2025/2025-3.png',
        ]
      }

    ],

    next() {
      this.activeSlide = (this.activeSlide + 1) % this.slides.length;
    },

    prev() {
      this.activeSlide = (this.activeSlide - 1 + this.slides.length) % this.slides.length;
    },

    openLightbox(img) {
      this.lightboxImage = img;
      this.lightboxOpen = true;
    }
  }
}


