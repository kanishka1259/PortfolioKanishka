// ========== MOBILE NAV (same pattern) ==========
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ========== CERT DATA ========== //

const certsData = {
  "nptel-ml": {
    title: "Introduction to Machine Learning",
    issuer: "NPTEL · IIT Madras",
    date: "Score: 65%",
    tags: ["Machine Learning", "Supervised Learning", "Evaluation"],
    description:
      "Covered core machine learning topics including regression, classification, model evaluation and regularisation with a strong mathematical foundation.",
    notes:
      "Helped me formalise my understanding of ML algorithms learned through projects and self-study.",
    viewLink: "certs/NPTEL Intro to ML certification.pdf",
    preview: "certs/NPTEL_ML.jpg",
  },

  "nptel-dl": {
    title: "Deep Learning",
    issuer: "NPTEL · IIT Ropar",
    date: "Score: 75%",
    tags: ["Deep Learning", "Neural Networks", "CNN", "Regularisation"],
    description:
      "Introduced deep learning architectures, training techniques, regularisation and applications such as image tasks.",
    notes:
      "Gave me a solid base for working with CNN models in vision projects like gender classification and digits recognition.",
    viewLink: "certs/Deep Learning - IIT Ropar.pdf",
    preview: "certs/Deep Learning - IIT Ropar_page-0001.jpg",
  },

  "udemy-web": {
    title: "The Web Developer Bootcamp",
    issuer: "Udemy",
    date: "2025",
    tags: ["HTML", "CSS", "JavaScript", "Web Basics"],
    description:
      "Comprehensive introduction to front-end web development, covering HTML, CSS and JavaScript fundamentals.",
    notes:
      "Strengthened my ability to build responsive and clean web interfaces, used in projects like Sitrezhuthu.",
    viewLink: "certs/The web developer bootcamp 2025.pdf",
    preview: "certs/The web developer bootcamp 2025_page-0001.jpg",
  },

  "udemy-java": {
    title: "Java 17 Masterclass: Start Coding in 2024",
    issuer: "Udemy",
    date: "2024",
    tags: ["Java", "OOP", "Core Programming"],
    description:
      "Focused on core Java programming, object-oriented concepts and practical exercises.",
    notes:
      "Supports my CS coursework and general programming foundations.",
    viewLink: "certs/Udemy java certification.pdf",
    preview: "certs/Udemy java certification.jpg",
  },

  rags: {
    title: "From RAGs to Riches Workshop",
    issuer: "Workshop",
    date: "2024",
    tags: ["RAG", "LLM", "Information Retrieval"],
    description:
      "Workshop on Retrieval-Augmented Generation (RAG), covering retrieval pipelines, context injection and LLM reasoning.",
    notes:
      "Directly relates to my Chain-of-Thought LLM for Geospatial Analysis project.",
    viewLink: "certs/Anokha_Riches_to_Rags_Workshop.jpg",
    preview: "certs/Anokha_Riches_to_Rags_Workshop.jpg",
  },
};

// ========== DOM REFERENCES ========== //

const certItems = document.querySelectorAll(".cert-item");
const certTitleEl = document.getElementById("cert-title");
const certIssuerEl = document.getElementById("cert-issuer").querySelector("span");
const certDateEl = document.getElementById("cert-date").querySelector("span");
const certTagsEl = document.getElementById("cert-tags");
const certDescEl = document.getElementById("cert-description");
const certNotesEl = document.getElementById("cert-notes");
const certViewLinkEl = document.getElementById("cert-view-link");
const certPreviewEl = document.getElementById("cert-preview");

// ========== LOAD FUNCTION ========== //

function loadCert(key) {
  const c = certsData[key];
  if (!c) return;

  certTitleEl.textContent = c.title;
  certIssuerEl.textContent = c.issuer;
  certDateEl.textContent = c.date;
  certDescEl.textContent = c.description;
  certNotesEl.textContent = c.notes;
  certViewLinkEl.href = c.viewLink || "#";

  // tags
  certTagsEl.innerHTML = "";
  c.tags.forEach((t) => {
    const span = document.createElement("span");
    span.textContent = t;
    certTagsEl.appendChild(span);
  });

  // preview image
  if (c.preview) {
    certPreviewEl.src = c.preview;
    certPreviewEl.alt = c.title + " certificate preview";
  }
}

// ========== CLICK HANDLERS ========== //

certItems.forEach((item) => {
  item.addEventListener("click", () => {
    certItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
    const key = item.dataset.key;
    loadCert(key);
  });
});

// initial load
loadCert("ml-foundations");
