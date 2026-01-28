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
        title: 'YUME PRO黎明期',
        description: `Credo Intl.は若者の参加を通じてウェルネス産業を活性化させる事業を開始しました。

        学生スパサウナ協会は学生スタートアップラボの一環として無料テントサウナを提供する支部を設立しました。
`,
        layoutType: 'featured', // New layout type
        images: [
          './assets/images/2022/2022-1.png',
          './assets/images/2022/2022-2.png',
          './assets/images/2022/2022-3.png',
        ]
      },
      {
        year: '2023',
        title: '第一回学生ピッチ甲子園',
        description: `第1回「YUME PRO 2023 学生ピッチ甲子園」は、帝国ホテルにて開催されました。

バーチャル起業家賞やおもてなし起業家賞を含む、トレンドに基づいた5つの賞が設けられ、学生たちはグランプリを目指して競い合いました。`,
        images: [
          './assets/images/2023/2023-1.png',
          './assets/images/2023/2023-2.png',
          './assets/images/2023/2023-3.png',
        ]
      },
      {
        year: '2024',
        title: '第２回学生ピッチ甲子園',
        description: `第2回学生ピッチ甲子園が帝国ホテルにて開催されました。`,
        images: [
          './assets/images/2024/2024-1.png',
          './assets/images/2024/2024-2.png',
          './assets/images/2024/2024-4.png',
        ]
      },
      {
        year: '2025',
        title: '↑第３回学生ピッチ甲子園',
        description: `第３回学生ピッチ甲子園はIVS2025会場内ロームシアターで開催`,
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


