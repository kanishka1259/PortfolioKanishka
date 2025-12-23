// ========== MOBILE NAV ========== //
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ========== PROJECT DATA ========== //

const projectsData = {
  gender: {
    title: "Gender Classification (CNN)",
    tagline: "Computer Vision · Deep Learning · TensorFlow",
    tags: ["Python", "CNN", "TensorFlow", "Image Classification"],
    description:
      "Developed a Convolutional Neural Network (CNN) model to classify gender from facial images.",
    extra:
      "Implemented image preprocessing, feature extraction and model evaluation techniques in Python and TensorFlow, gaining hands-on understanding of CNN architectures and performance tuning.",
    video: "videos/gender-classification.mp4",
    codeLink: "https://github.com/kanishka1259/Gender-Classification-using-CNN",
    reportLink: "#",
  },

  seismic: {
    title: "Seismic Event Detection using Time-Series Data",
    tagline: "Time-Series ML · Deep Learning · NASA InSight & Apollo",
    tags: ["Python", "Time-Series", "Signal Processing", "Deep Learning"],
    description:
      "Designed a deep learning model to detect and classify moonquakes and marsquakes using NASA InSight and Apollo seismic datasets.",
    extra:
      "Applied time-series analysis, signal processing and feature extraction techniques for accurate event prediction, focusing on early detection of seismic activity using AI-driven insights.",
    video: "videos/seismic.mp4",
    codeLink: "https://github.com/kanishka1259/SeismicEventDetection",
    reportLink: "#",
  },

  "cot-geo": {
    title: "Chain-of-Thought LLM for Geospatial Analysis",
    tagline: "LLM · RAG · Geospatial Reasoning",
    tags: ["LLM", "RAG", "Geospatial Data", "Reasoning Pipelines"],
    description:
      "Built an LLM-based system capable of performing step-by-step geospatial reasoning from natural language queries.",
    extra:
      "Integrated natural language queries with geospatial datasets to analyse environmental risks and climate patterns, exploring RAG (Retrieval-Augmented Generation) and reasoning pipelines to enhance contextual understanding.",
    video: "videos/cot-geospatial.mp4",
    codeLink: "https://github.com/Uhashini/LLM4GeoProcessing-BAH2025",
    reportLink: "#",
  },

  sitrezhuthu: {
    title: "Sitrezhuthu – Personal Portfolio Generator",
    tagline: "Web · Front-End · UI/UX",
    tags: ["HTML", "CSS", "JavaScript", "Responsive Design"],
    description:
      "Developed a customizable portfolio generator to help users create aesthetic, minimal personal websites.",
    extra:
      "Built using HTML, CSS and JavaScript with dynamic templates and responsive layouts, focusing on user experience design, content modularity and clean UI/UX principles.",
    video: "videos/sitrezhuthu.mp4",
    codeLink: "#",
    reportLink: "#",
  },

  digits: {
    title: "Recognizing Handwritten Digits (K-Means)",
    tagline: "Unsupervised Learning · Clustering",
    tags: ["Python", "K-Means", "Unsupervised Learning"],
    description:
      "Implemented K-Means clustering to group handwritten digit images into 10 clusters.",
    extra:
      "Demonstrated unsupervised learning, feature extraction and evaluation of clustering quality on image data.",
    video: "videos/digits.mp4",
    codeLink: "https://github.com/kanishka1259/Recognizing-handwritten-digits",
    reportLink: "#",
  },

  "mini-c": {
    title: "Mini Projects in C – 2048 Game & Calendar Generator",
    tagline: "C Programming · Logic & Structures",
    tags: ["C", "Game Logic", "Modular Code"],
    description:
      "Developed the classic 2048 game and a Calendar generator in C.",
    extra:
      "Showcased strong understanding of loops, arrays, modular program structure and general logic building.",
    video: "videos/mini-c.mp4",
    codeLink: "https://github.com/kanishka1259/Mini-C-projects",
    reportLink: "#",
  },

  "ui-designs": {
    title: "Simple UI Designs – Alarm Clock & Calculator",
    tagline: "UI Design · Event-Driven Behaviour",
    tags: ["UI Design", "Prototyping", "Usability"],
    description:
      "Designed intuitive user interfaces for an Alarm Clock and a Calculator.",
    extra:
      "Focused on clean layout, usability and basic event-driven functionality for simple interactive tools.",
    video: "videos/ui-designs.mp4",
    codeLink: "https://github.com/kanishka1259/UID-projects",
    reportLink: "#",
  },
};


// ========== DOM ELEMENTS ========== //

const projectItems = document.querySelectorAll(".project-item");

const titleEl = document.getElementById("project-title");
const taglineEl = document.getElementById("project-tagline");
const tagsEl = document.getElementById("project-tags");
const descEl = document.getElementById("project-description");
const extraEl = document.getElementById("project-extra");
const codeLinkEl = document.getElementById("project-code-link");
const reportLinkEl = document.getElementById("project-report-link");
const videoEl = document.getElementById("project-video");
const videoSourceEl = document.getElementById("project-video-source");

// helper to render a project
function loadProject(key) {
  const p = projectsData[key];
  if (!p) return;

  titleEl.textContent = p.title;
  taglineEl.textContent = p.tagline;
  descEl.textContent = p.description;
  extraEl.textContent = p.extra;

  // tags
  tagsEl.innerHTML = "";
  p.tags.forEach((t) => {
    const span = document.createElement("span");
    span.textContent = t;
    tagsEl.appendChild(span);
  });

  // links
  codeLinkEl.href = p.codeLink || "#";
  reportLinkEl.href = p.reportLink || "#";

  // video
  if (videoSourceEl) {
    videoSourceEl.src = p.video;
    videoEl.load();
    // optional autoplay:
    // videoEl.play().catch(() => {});
  }
}

// click events
projectItems.forEach((item) => {
  item.addEventListener("click", () => {
    projectItems.forEach((i) => i.classList.remove("active"));
    item.classList.add("active");
    const key = item.dataset.key;
    loadProject(key);
  });
});

// load default project
loadProject("fire");
