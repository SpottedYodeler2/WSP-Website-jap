// UPCOMING EVENT COMPONENT GENERATOR
function createEventCard(event) {
    const template = document.getElementById("eventCardTemplate");
    const card = template.content.cloneNode(true);

    card.querySelector(".event-image").src = event.image;
    card.querySelector(".event-date").textContent = event.date;
    card.querySelector(".event-title").textContent = event.title;
    card.querySelector(".event-description").textContent = event.description;

    card.querySelector(".register-link").href = event.register;

    // Prize
    if (event.prize) {
        const prize = `
            <div class="flex items-center px-8 py-2 rounded-xl bg-amber-50 dark:bg-gray-800 border border-amber-200 dark:border-amber-700/50 shadow-sm">
                <span class="text-2xl mr-3">🏆</span>
                <div class="flex flex-col">
                    <span class="text-xs font-bold text-amber-600 dark:text-amber-400 uppercase tracking-wider">Grand Prize</span>
                    <span class="text-xl font-extrabold text-gray-900 dark:text-white">${event.prize}</span>
                </div>
            </div>`;
        card.querySelector(".prize-container").innerHTML = prize;
    }

    // Judges
    card.querySelector(".judges-grid").innerHTML = event.judges
        .map(j => `
            <div class="flex flex-col items-center">
                <img src="${j.image}" class="w-24 h-24 rounded-full object-cover mb-2">
                <p class="font-semibold text-text-light dark:text-text-dark text-center">${j.name}</p>
                <p class="text-sm text-subtext-light dark:text-subtext-dark text-center">${j.role}</p>
            </div>
        `)
        .join("");

    // Sponsors
    card.querySelector(".sponsors-list").innerHTML = event.sponsors
        .map(s => `
        <img 
            src="${s}" 
            alt="Sponsor" 
            class="h-20 w-auto object-contain bg-white rounded-md p-2 shadow-sm" 
        />
    `)
    .join("");

    return card;
}

// EVENT DATA
const eventsData = [
    {
        image: "./assets/images/highlights/Right-Highlight.jpg",
        date: "Tokyo, Japan",
        title: "学生ピッチ甲子園2026全国大会",
        description: "世界トップクラスの学生スタートアップチームが優勝をかけて競い合います。ピッチ、審査、ネットワーキングが一体となったエキサイティングなイベント。栄冠を手にするのは誰だ！？",
        register: "",
        prize: "賞金￥10,000,000 ",

        judges: [
            { image: "./assets/images/events/WSP2026Finals/Judges/Judge-Sil1.png", name: "", role: "" },
            { image: "./assets/images/events/WSP2026Finals/Judges/Judge-Sil2.png", name: "", role: "" },
            { image: "./assets/images/events/WSP2026Finals/Judges/Judge-Sil3.png", name: "", role: "" },
        ],

        sponsors: [
            "./assets/images/events/WSP2026Finals/CREDO.png",
            "./assets/images/events/WSP2026Finals/ANSPA.jpeg",
            "./assets/images/events/WSP2026Finals/BILLBOARDLIVE.jpeg",
            "./assets/images/events/WSP2026Finals/SAMU.jpeg",

        ]
    },

    // Populate by copying above section

];


// RENDER CARDS
const carousel = document.getElementById("upcomingCarousel");
eventsData.forEach(event => carousel.appendChild(createEventCard(event)));

let index = 0;
const totalSlides = eventsData.length;

// HIDE CONTROLS IF ONLY ONE EVENT
const prevBtn = document.getElementById("prevEvent");
const nextBtn = document.getElementById("nextEvent");

if (totalSlides <= 1) {
    prevBtn.style.display = "none";
    nextBtn.style.display = "none";
}

// UPDATE CAROUSEL POSITION
function updateCarousel() {
    const offset = -index * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// BUTTON LOGIC
prevBtn.addEventListener("click", () => {
    index = (index - 1 + totalSlides) % totalSlides;
    updateCarousel();
});

nextBtn.addEventListener("click", () => {
    index = (index + 1) % totalSlides;
    updateCarousel();
});




// PAST EVENT COMPONENT GENERATOR ------------------------------------------
const pastEventsData = [
    {
        image: "./assets/images/events/pastEvents2/1-jp.jpg",
        date: "2月21日(土)開催",
        title: "北陸・東海予選",
        description: "STATION Ai (名古屋)",
        link: ""
    },
    {
        image: "./assets/images/events/pastEvents2/2.png",
        date: "3月7日(土)開催",
        title: "中国・四国予選",
        description: "イノベーション・ハブ・ひろしま (広島)",
        link: ""
    },
    {
        image: "./assets/images/events/pastEvents2/3.jpg",
        date: "3月開催",
        title: "関西予選",
        description: "近畿大学KINCUBA Basecamp (東大阪)",
        link: ""
    },
    {
        image: "./assets/images/events/pastEvents2/4.jpg",
        date: "3月17日(火)開催",
        title: "九州予選",
        description: "GROWTH1 (福岡)",
        link: ""
    },
    {
        image: "./assets/images/events/pastEvents2/5.jpg",
        date: "3月18日（水）開催",
        title: "関東予選",
        description: "Tokyo Innovation Base (東京)",
        link: ""
    },
    {
        image: "./assets/images/events/pastEvents2/6.jpg",
        date: "３月２２日（日）開催",
        title: "北海道・東北予選",
        description: "enspace (仙台)",
        link: ""
    }

];

const createPastEventCard = (event) => {
    return `
    <div class="flex flex-col h-full p-8 bg-card-light dark:bg-card-dark rounded-xl shadow-custom-light dark:shadow-custom-dark transition-transform hover:scale-[1.02]">
        
        <img 
            src="${event.image}" 
            alt="${event.title}" 
            class="w-full h-56 object-cover rounded-lg mb-5"
        >
        
        <p class="text-subtext-light dark:text-subtext-dark text-lg">
            ${event.date}
        </p>
        
        <h4 class="text-2xl font-bold text-text-light dark:text-text-dark mt-1 mb-2">
            ${event.title}
        </h4>
        
        <p class="text-subtext-light dark:text-subtext-dark text-lg mb-6 flex-grow">
            ${event.description}
        </p>

        <a href="${event.link}" class="text-blue-500 hover:text-blue-600 font-semibold inline-flex items-center mt-auto group transition-colors">
            詳細 
            <span class="ml-2 transform group-hover:translate-x-1 transition-transform">-></span>
        </a>
    </div>
  `;
};

const renderPastEvents = () => {
    // Target the specific 'past-events' ID
    const container = document.getElementById('past-events-container');

    if (container) {
        container.innerHTML = pastEventsData.map(event => createPastEventCard(event)).join('');
    }
};

document.addEventListener('DOMContentLoaded', renderPastEvents);