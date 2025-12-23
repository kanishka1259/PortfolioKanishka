// ================= MOBILE NAV =================
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });
}

// ================= SECTION ANIMATIONS =================
let lastScrollY = window.scrollY;
const heroSection = document.getElementById("hero");

// sections: About + Skills
const textSections = document.querySelectorAll(".text-section");

// observer to animate text sections
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      const inner = entry.target.querySelector(".section-inner");
      if (!inner) return;

      if (entry.isIntersecting && entry.intersectionRatio > 0.4) {
        // coming into view -> slide in from left
        inner.classList.add("enter");
        inner.classList.remove("exit");
      } else {
        // leaving view while scrolling down -> slide out to left
        const scrollingDown = window.scrollY > lastScrollY;
        if (scrollingDown) {
          inner.classList.remove("enter");
          inner.classList.add("exit");
        }
      }
    });
  },
  { threshold: [0.2, 0.5] }
);

textSections.forEach((sec) => observer.observe(sec));

// hero disappear / re-appear like Wix
window.addEventListener("scroll", () => {
  const scrollingDown = window.scrollY > lastScrollY;

  if (scrollingDown && window.scrollY > window.innerHeight * 0.25) {
    heroSection.classList.add("hero-exit");
  } else if (!scrollingDown && window.scrollY < window.innerHeight * 0.25) {
    heroSection.classList.remove("hero-exit");
  }

  lastScrollY = window.scrollY;
});

// ================= BUTTERFLIES =================
const butterflyLayer = document.getElementById("butterflyLayer");

if (butterflyLayer) {
  const BUTTERFLY_COUNT = 18;

  for (let i = 0; i < BUTTERFLY_COUNT; i++) {
    const b = document.createElement("span");
    b.classList.add("butterfly");
    b.textContent = "🦋";

    b.style.left = Math.random()*100 + "vw";

    const dur = 10 + Math.random()*10;   // random speed
    const delay = Math.random()*-20;     // random start time

    b.style.animationDuration = dur + "s";
    b.style.animationDelay = delay + "s";

    // random end X + random rotation
    b.style.setProperty("--endX", (Math.random()*200 - 100) + "vw");
    b.style.setProperty("--angle", (Math.random()*90 - 45) + "deg");

    butterflyLayer.appendChild(b);
  }
}
