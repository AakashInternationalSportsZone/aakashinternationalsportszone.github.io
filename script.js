const businessLinks = {
  sportsZoneMap: "https://share.google/VcJcKNXp2H9oSktqt",
  turfMap: "https://share.google/3zUQXMhPCFayfD2BH",
  phoneDisplay: "+91 93043 37781",
  phoneRaw: "+919304337781",
  whatsapp: "https://wa.me/919304337781",
  instagram: "https://www.instagram.com/aakash_internationalsportszone/",
  facebook: "https://www.facebook.com/AakashkarateIndia/",
};

const stats = [
  { value: "4.6★", label: "Sports Zone Rating" },
  { value: "4.8★", label: "Turf Arena Rating" },
  { value: "52+", label: "Sports Zone Reviews" },
  { value: "13+", label: "Turf Arena Reviews" },
];

const programs = [
  {
    title: "Karate",
    tag: "Martial Arts",
    icon: "🛡️",
    desc: "Structured martial arts training focused on discipline, self-confidence, technique and growth.",
  },
  {
    title: "Gymnastics",
    tag: "Movement",
    icon: "🏆",
    desc: "Flexibility, body control, balance and foundational athletic movement for young learners.",
  },
  {
    title: "Fitness & Weight Loss",
    tag: "Transformation",
    icon: "🏋️",
    desc: "Guided sessions designed to improve stamina, mobility, strength and consistency.",
  },
  {
    title: "Turf Activities",
    tag: "Arena",
    icon: "👥",
    desc: "Energetic sports sessions, group activities and open-play style training at the turf arena.",
  },
  {
    title: "Yoga & Zumba",
    tag: "Wellness",
    icon: "⭐",
    desc: "Fun, active and refreshing sessions for flexibility, rhythm, energy and overall wellness.",
  },
  {
    title: "Cricket / Kabaddi / Badminton",
    tag: "Sports",
    icon: "🏅",
    desc: "Sport-specific activity options for students who want game-based learning and performance.",
  },
];

const features = [
  "Family-friendly environment",
  "Multiple sports and training options",
  "Suitable for kids, teens and adults",
  "Discipline + fitness + sports under one brand",
  "Evening-friendly training access",
  "Two active locations in Rajeev Nagar, Patna",
];

const schedule = [
  { day: "Mon", note: "Regular Training" },
  { day: "Tue", note: "Karate / Fitness" },
  { day: "Wed", note: "Gymnastics / Activity" },
  { day: "Thu", note: "Karate / Turf Sessions" },
  { day: "Fri", note: "Fitness / Sports Drills" },
  { day: "Sat", note: "High Activity Day" },
  { day: "Sun", note: "Special / Flexible Sessions" },
];

const gallery = [
  { title: "Karate Training", desc: "Discipline-focused martial arts sessions" },
  { title: "Turf Arena Sessions", desc: "High-energy sports activity environment" },
  { title: "Fitness Workouts", desc: "Conditioning and transformation-based training" },
  { title: "Kids Activity Batches", desc: "Fun movement, flexibility and coordination" },
  { title: "Group Sports Drills", desc: "Team energy and skill development" },
  { title: "Weekend Special Sessions", desc: "Events, activities and community engagement" },
];

const achievements = [
  "Discipline-first sports culture",
  "Trusted by students and families",
  "Multiple activity categories under one academy",
  "Balanced focus on fitness, sport and personal growth",
  "Strong local presence in Rajeev Nagar, Patna",
  "Structured environment with modern academy-style branding",
];

const testimonials = [
  {
    name: "suchika shree",
    text: "Very nice institution, very good environment for martial act, my kids like it.",
  },
  {
    name: "Lone Wolf Gaming",
    text: "And the best thing is we can do gymnastics also...",
  },
  {
    name: "sudhir gupta",
    text: "Outstanding Teacher is very good And he also give time to all students.",
  },
];

const faqs = [
  {
    q: "Who can join?",
    a: "The academy appears suitable for kids, teens and adults depending on the activity or training program.",
  },
  {
    q: "Do you offer trial or enquiry support?",
    a: "Yes — the website includes direct WhatsApp, call and trial booking style actions for quick enquiry.",
  },
  {
    q: "Is this only karate?",
    a: "No. It is presented as a multi-sport and fitness setup with martial arts, movement, turf and activity-based training.",
  },
  {
    q: "Do both locations matter?",
    a: "Yes. One represents the main sports zone setup and the other highlights the Turf Arena experience.",
  },
];

const parentTrust = [
  "Safe, structured and growth-oriented environment",
  "Focus on confidence, discipline and active lifestyle",
  "Supports both beginners and regular learners",
  "Suitable for children, teens and general fitness seekers",
];

const trainers = [
  {
    name: "Lead Coach",
    role: "Karate & Discipline Training",
    desc: "Focused on technique, confidence, discipline and student development.",
  },
  {
    name: "Fitness Coach",
    role: "Weight Loss & Conditioning",
    desc: "Supports stamina, consistency, body movement and training progression.",
  },
  {
    name: "Sports Mentor",
    role: "Turf & Activity Sessions",
    desc: "Guides sport-based participation, engagement and athletic confidence.",
  },
];

const membershipCards = [
  {
    title: "Starter",
    subtitle: "Beginner-friendly",
    points: ["Basic activity access", "Structured coaching feel", "Good for first-time joiners"],
  },
  {
    title: "Active",
    subtitle: "Most balanced option",
    points: ["Regular participation", "Fitness + activity rhythm", "Ideal for consistency"],
  },
  {
    title: "Performance",
    subtitle: "Growth-focused",
    points: ["Higher training intent", "Skill + discipline emphasis", "For serious learners"],
  },
];

const heroInfo = [
  ["📍", "Rajeev Nagar, Patna", "Two activity locations in the same area"],
  ["🕒", "Open till 11 PM", "Flexible evening-friendly access"],
  ["👥", "Kids to Adults", "Multi-age training environment"],
  ["⭐", "Strong Local Reviews", "Trusted by families and students"],
];

const filters = ["All", "Martial Arts", "Movement", "Transformation", "Arena", "Wellness", "Sports"];
let currentFilter = "All";

// Elements
const statsGrid = document.getElementById("statsGrid");
const heroInfoGrid = document.getElementById("heroInfoGrid");
const featuresGrid = document.getElementById("featuresGrid");
const filterButtons = document.getElementById("filterButtons");
const programsGrid = document.getElementById("programsGrid");
const scheduleGrid = document.getElementById("scheduleGrid");
const membershipGrid = document.getElementById("membershipGrid");
const trainersGrid = document.getElementById("trainersGrid");
const galleryGrid = document.getElementById("galleryGrid");
const miniFeatureGrid = document.getElementById("miniFeatureGrid");
const achievementsGrid = document.getElementById("achievementsGrid");
const parentTrustGrid = document.getElementById("parentTrustGrid");
const testimonialsGrid = document.getElementById("testimonialsGrid");
const faqGrid = document.getElementById("faqGrid");

function renderStats() {
  statsGrid.innerHTML = stats
    .map(
      (item) => `
      <div class="stat-card">
        <div class="stat-value">${item.value}</div>
        <div class="stat-label">${item.label}</div>
      </div>
    `
    )
    .join("");
}

function renderHeroInfo() {
  heroInfoGrid.innerHTML = heroInfo
    .map(
      ([icon, title, sub]) => `
      <div class="glass-card info-box">
        <div class="info-box-icon">${icon}</div>
        <h3>${title}</h3>
        <p class="small-muted">${sub}</p>
      </div>
    `
    )
    .join("");
}

function renderFeatures() {
  featuresGrid.innerHTML = features
    .map((item) => `<div class="feature-item">✔ ${item}</div>`)
    .join("");
}

function renderFilters() {
  filterButtons.innerHTML = filters
    .map(
      (item) => `
      <button class="filter-btn ${currentFilter === item ? "active" : ""}" onclick="setFilter('${item}')">
        ${item}
      </button>
    `
    )
    .join("");
}

function renderPrograms() {
  const filtered = currentFilter === "All" ? programs : programs.filter((p) => p.tag === currentFilter);

  programsGrid.innerHTML = filtered
    .map(
      (item) => `
      <div class="program-card">
        <div class="program-icon">${item.icon}</div>
        <div class="program-tag">${item.tag}</div>
        <h3>${item.title}</h3>
        <p class="section-text">${item.desc}</p>
      </div>
    `
    )
    .join("");
}

function setFilter(filter) {
  currentFilter = filter;
  renderFilters();
  renderPrograms();
}

window.setFilter = setFilter;

function renderSchedule() {
  scheduleGrid.innerHTML = schedule
    .map(
      (item) => `
      <div class="list-card">
        <strong>${item.day}</strong>
        <div class="small-muted">${item.note}</div>
      </div>
    `
    )
    .join("");
}

function renderMembership() {
  membershipGrid.innerHTML = membershipCards
    .map(
      (item, i) => `
      <div class="member-card ${i === 1 ? "popular" : ""}">
        <div class="member-head">
          <div>
            <h3>${item.title}</h3>
            <p class="green-label">${item.subtitle}</p>
          </div>
          ${i === 1 ? `<span class="popular-badge">POPULAR</span>` : ""}
        </div>
        <div class="points-list">
          ${item.points.map((point) => `<div class="point">✔ ${point}</div>`).join("")}
        </div>
      </div>
    `
    )
    .join("");
}

function renderTrainers() {
  trainersGrid.innerHTML = trainers
    .map(
      (trainer) => `
      <div class="trainer-card">
        <div class="trainer-icon">👥</div>
        <h3>${trainer.name}</h3>
        <p class="green-label">${trainer.role}</p>
        <p class="section-text">${trainer.desc}</p>
      </div>
    `
    )
    .join("");
}

function renderGallery() {
  galleryGrid.innerHTML = gallery
    .map(
      (item) => `
      <div class="gallery-card">
        <div class="gallery-content">
          <div class="program-tag">Visual Section</div>
          <h3>${item.title}</h3>
          <p class="section-text">${item.desc}</p>
        </div>
      </div>
    `
    )
    .join("");
}

function renderMiniFeatures() {
  miniFeatureGrid.innerHTML = features
    .slice(0, 4)
    .map(
      (item) => `
      <div class="mini-card">
        <div class="green-label">✔</div>
        <p><strong>${item}</strong></p>
      </div>
    `
    )
    .join("");
}

function renderAchievements() {
  achievementsGrid.innerHTML = achievements
    .map((item) => `<div class="list-card">🏆 <span>${item}</span></div>`)
    .join("");
}

function renderParentTrust() {
  parentTrustGrid.innerHTML = parentTrust
    .map((item) => `<div class="list-card">🛡️ <span>${item}</span></div>`)
    .join("");
}

function renderTestimonials() {
  testimonialsGrid.innerHTML = testimonials
    .map(
      (item) => `
      <div class="testimonial-card">
        <div class="testimonial-quote">❝</div>
        <p class="section-text">${item.text}</p>
        <div><strong>${item.name}</strong></div>
      </div>
    `
    )
    .join("");
}

function renderFaqs() {
  faqGrid.innerHTML = faqs
    .map(
      (item) => `
      <details>
        <summary>${item.q}</summary>
        <p class="section-text">${item.a}</p>
      </details>
    `
    )
    .join("");
}

// Theme toggle
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  document.body.classList.toggle("dark");

  themeToggle.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});

// Mobile menu
const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");

mobileToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("hidden");
  mobileToggle.textContent = mobileMenu.classList.contains("hidden") ? "☰" : "✕";
});

document.querySelectorAll("#mobileMenu a").forEach((link) => {
  link.addEventListener("click", () => {
    mobileMenu.classList.add("hidden");
    mobileToggle.textContent = "☰";
  });
});

// Modal
const trialModal = document.getElementById("trialModal");
const openModal = document.getElementById("openModal");
const openModal2 = document.getElementById("openModal2");
const closeModal = document.getElementById("closeModal");

function showModal() {
  trialModal.classList.remove("hidden");
}

function hideModal() {
  trialModal.classList.add("hidden");
}

openModal.addEventListener("click", showModal);
openModal2.addEventListener("click", showModal);
closeModal.addEventListener("click", hideModal);

trialModal.addEventListener("click", (e) => {
  if (e.target === trialModal) hideModal();
});

// WhatsApp form
const whatsappForm = document.getElementById("whatsappForm");

whatsappForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const interest = document.getElementById("interest").value;
  const message = document.getElementById("message").value;

  const text = encodeURIComponent(
    `Hello Aakash International Sports Zone!\n\nName: ${name}\nPhone: ${phone}\nInterest: ${interest}\nMessage: ${message}`
  );

  window.open(`${businessLinks.whatsapp}?text=${text}`, "_blank");
});

// Scroll top
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 350) {
    scrollTopBtn.classList.remove("hidden");
  } else {
    scrollTopBtn.classList.add("hidden");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// Init
renderStats();
renderHeroInfo();
renderFeatures();
renderFilters();
renderPrograms();
renderSchedule();
renderMembership();
renderTrainers();
renderGallery();
renderMiniFeatures();
renderAchievements();
renderParentTrust();
renderTestimonials();
renderFaqs();