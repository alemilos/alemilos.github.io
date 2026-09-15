/**
 * Alessandro Milos Portfolio - Main JavaScript
 */

document.addEventListener("DOMContentLoaded", () => {
  initLanguageSwitch();
  initSmoothScroll();
  initActiveNavSpy();
  initClipboardActions();
  initImageFallbacks();
  initViewportVideoAutoplay();
  initMobileMenu();
});

/**
 * Multi-Language Translations Dictionary (EN / IT)
 */
const translations = {
  en: {
    "nav.services": "Services",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.works": "Selected works",
    "nav.contact": "Contact",
    "nav.cta": "See my work",

    "profile.name": "I’m Alessandro Milos",
    "profile.role": "Fullstack Developer based in Rome, Italy.",
    "profile.status": "Available for opportunities",

    "hero.headline":
      "Passionate creating great experiences for Digital Product & Real-Time Web Apps",
    "hero.talkBtn": "Talk with me",
    "hero.worksBtn": "See my work",

    "section.experience": "Working experience",
    "exp.raxar.role": "Middle Frontend & Fullstack Developer",
    "exp.raxar.date": "2024 - 2026",
    "exp.falco.role": "Junior Frontend Developer",
    "exp.falco.date": "2023 - 2024",

    "section.education": "Education",
    "edu.sapienza.role": "Informatica (Computer Science)",
    "edu.sapienza.company": "La Sapienza, Università di Roma",
    "edu.plinio.role": "Diploma di Maturità Scientifica",
    "edu.plinio.company": "Liceo Scientifico Statale Plinio Seniore",

    "section.services": "What i do",
    "services.1.title": "Full-Stack Web Development",
    "services.1.desc":
      "Crafting responsive, high-performance web applications with end-to-end architectural ownership across the entire frontend lifecycle, state management, and scalable backends with Node.js, Express, and MongoDB.",
    "services.2.title": "Real-Time Systems",
    "services.2.desc":
      "Architecting low-latency dashboards for live telemetry and data streaming with WebSockets, MQTT, and Socket.io.",
    "services.3.title": "Desktop & Electron Applications",
    "services.3.desc":
      "Building local-first cross-platform desktop products (like WizRead) with Electron and SQLite, integrated with Redis, Firebase, and Google Cloud synchronization.",
    "services.4.title": "Mobile Applications (React Native)",
    "services.4.desc":
      "Building cross-platform mobile applications for iOS and Android with React Native and Expo, delivering fluid native performance, intuitive UI, and robust backend integrations.",

    "section.works": "Selected works",
    "works.1.badge": "1,000+ Registered Users • 3,000+ Downloads",
    "works.1.title": "WizRead — Full-Stack Desktop Reading & Study Workspace",
    "works.1.desc":
      "A high-productivity cross-platform desktop application designed for deep reading and knowledge management. Built with a local-first SQLite architecture in Electron and React, synchronized with cloud backends using Redis caching, MongoDB, Firebase, and Google Cloud infrastructure.",
    "works.1.btn": "Visit wizread.io ↗",

    "works.2.badge": "Real-Time RF Spectrum Monitoring & Drone Defense",
    "works.2.title": "Real-Time Anti-Drone RF Spectrum Monitoring & Defense Web App",
    "works.2.desc":
      "Real-time RF spectrum monitoring and control web application dedicated to drone detection and tracking. Engineered the full frontend using React, Vite, and Tailwind CSS, building a high-performance dashboard for complex signal analysis. Integrated live waterfall spectrograms, per-band RF spectrum charts, ultra-low-latency threat alerts, and RF countermeasure (jamming) controls via WebSocket & MQTT, paired with offline-capable Leaflet tactical maps for drone positioning and signal direction.",

    "works.3.badge": "Airspace Surveillance & Real-Time ADS-B Tracking",
    "works.3.title": "ADS-B Airspace Surveillance & Real-Time Tracking Platform",
    "works.3.desc":
      "High-performance Web Application engineered for airspace surveillance and real-time aircraft and drone tracking via ADS-B receivers. Built with React, Zustand, and Node.js/Express, delivering low-latency streaming of telemetry and diagnostic data over MQTT via WebSockets. Features an interactive GIS mapping engine (Leaflet) with dynamic target rendering (heading, altitude, speed), offline tile caching, advanced telemetry dashboards, and a bidirectional control panel for field hardware configuration and remote management.",

    "section.skills": "Technical arsenal",
    "skills.languages": "Languages & Core",
    "skills.frontend": "Frontend Ecosystem",
    "skills.backend": "Backend, Desktop & Cloud",
    "skills.realtime": "Real-Time, Protocols & DevOps",
    "skills.ai": "AI Tooling & LLM Engineering",

    "footer.name": "I’m Alessandro Milos",
    "footer.role": "Fullstack Developer based in Rome, Italy.",
    "footer.services": "Services",
    "footer.works": "Case studies",
    "footer.experience": "About me",
    "footer.contact": "Contact me",
    "footer.cta": "Talk with me",
    "footer.copyright":
      "© 2026 Alessandro Milos. Built with performance and precision.",
  },
  it: {
    "nav.services": "Servizi",
    "nav.experience": "Esperienze",
    "nav.education": "Formazione",
    "nav.works": "Progetti",
    "nav.contact": "Contatti",
    "nav.cta": "I miei progetti",

    "profile.name": "Sono Alessandro Milos",
    "profile.role": "Fullstack Developer con base a Roma, Italia.",
    "profile.status": "Disponibile per nuove opportunità",

    "hero.headline":
      "Sviluppo esperienze web ad alte prestazioni per Prodotti Digitali & Sistemi Real-Time",
    "hero.talkBtn": "Contattami",
    "hero.worksBtn": "I miei progetti",

    "section.experience": "Esperienza lavorativa",
    "exp.raxar.role": "Middle Frontend & Fullstack Developer",
    "exp.raxar.date": "2024 - 2026",
    "exp.falco.role": "Junior Frontend Developer",
    "exp.falco.date": "2023 - 2024",

    "section.education": "Formazione",
    "edu.sapienza.role": "Informatica (Laurea Triennale)",
    "edu.sapienza.company": "La Sapienza, Università di Roma",
    "edu.plinio.role": "Diploma di Maturità Scientifica",
    "edu.plinio.company": "Liceo Scientifico Statale Plinio Seniore",

    "section.services": "Cosa faccio",
    "services.1.title": "Sviluppo Web Full-Stack",
    "services.1.desc":
      "Progettazione di applicazioni web responsive e ad alte prestazioni, con gestione completa del ciclo di vita frontend, state management avanzato e backend scalabili con Node.js, Express e MongoDB.",
    "services.2.title": "Sistemi Real-Time",
    "services.2.desc":
      "Architettura di dashboard a bassissima latenza per telemetria e flussi di dati live con WebSockets, MQTT e Socket.io.",
    "services.3.title": "Applicazioni Desktop & Electron",
    "services.3.desc":
      "Sviluppo di applicazioni desktop multipiattaforma local-first (come WizRead) in Electron e SQLite, integrate con sincronizzazione cloud tramite Redis, Firebase e Google Cloud.",
    "services.4.title": "Applicazioni Mobile (React Native)",
    "services.4.desc":
      "Sviluppo di applicazioni mobile multipiattaforma per iOS e Android con React Native ed Expo, offrendo performance native, UI intuitive e solide integrazioni con API e backend.",

    "section.works": "Progetti in evidenza",
    "works.1.badge": "1.000+ Utenti Registrati • 3.000+ Download",
    "works.1.title": "WizRead — Workspace Desktop per Lettura & Studio",
    "works.1.desc":
      "Applicazione desktop cross-platform ad alta produttività per lettura approfondita e studio. Architettura local-first basata su SQLite in Electron e React, sincronizzata con backend cloud tramite cache Redis, MongoDB, Firebase e Google Cloud.",
    "works.1.btn": "Visita wizread.io ↗",

    "works.2.badge": "Monitoraggio Spettro RF & Difesa Anti-Drone",
    "works.2.title":
      "Web App di Monitoraggio Spettro RF e Difesa Anti-Drone",
    "works.2.desc":
      "Web application di monitoraggio e controllo dello spettro radio (RF) dedicata al rilevamento e tracciamento in tempo reale di droni. Sviluppo dell'intero frontend con React, Vite e Tailwind CSS, realizzando una dashboard ad alte prestazioni per la gestione di segnali complessi. Integrazione di spettrogrammi live a cascata (waterfall), grafici dello spettro RF per ogni banda, gestione a bassissima latenza di alert di minaccia e controlli per contromisure RF (jamming) via WebSocket e MQTT, oltre a mappe tattiche Leaflet con supporto offline per visualizzare posizione e direzione del segnale.",

    "works.3.badge": "Sorveglianza Spazio Aereo & Tracciamento ADS-B",
    "works.3.title":
      "ADS-B Airspace Surveillance Platform",
    "works.3.desc":
      "Progettazione e sviluppo dell'intera Web Application ad alte prestazioni per la sorveglianza dello spazio aereo e il tracciamento in tempo reale di velivoli e droni tramite ricevitori ADS-B. Realizzata con React, Zustand e Node.js/Express, gestisce lo streaming a bassa latenza di dati telemetrici e diagnostici via MQTT over WebSockets. Include un motore cartografico GIS interattivo (Leaflet) con rendering dinamico dei target (rotta, quota, velocità) e supporto a tile offline, affiancato da dashboard di telemetria avanzata e da un pannello di controllo bidirezionale per la configurazione e il comando remoto dell'hardware sul campo.",

    "section.skills": "Competenze tecniche",
    "skills.languages": "Linguaggi & Core",
    "skills.frontend": "Ecosistema Frontend",
    "skills.backend": "Backend, Desktop & Cloud",
    "skills.realtime": "Real-Time, Protocolli & DevOps",
    "skills.ai": "Strumenti AI & LLM Engineering",

    "footer.name": "Sono Alessandro Milos",
    "footer.role": "Fullstack Developer con base a Roma, Italia.",
    "footer.services": "Servizi",
    "footer.works": "Progetti",
    "footer.experience": "Chi sono",
    "footer.contact": "Scrivimi",
    "footer.cta": "Parliamo",
    "footer.copyright":
      "© 2026 Alessandro Milos. Sviluppato con precisione e performance.",
  },
};

/**
 * Language Switcher Initialization
 */
function initLanguageSwitch() {
  const langButtons = document.querySelectorAll(".lang-btn");
  if (!langButtons.length) return;

  function applyLanguage(lang) {
    if (!translations[lang]) return;

    // Update html lang attribute
    document.documentElement.lang = lang;

    // Update active button state
    langButtons.forEach((btn) => {
      const isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", isActive ? "true" : "false");
    });

    // Update text content for elements with data-i18n
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      if (translations[lang][key]) {
        el.textContent = translations[lang][key];
      }
    });

    // Save language preference in localStorage
    try {
      localStorage.setItem("portfolio_language", lang);
    } catch (e) {
      // Storage unavailable or disabled
    }
  }

  langButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const selectedLang = btn.getAttribute("data-lang");
      applyLanguage(selectedLang);
    });
  });

  // Determine initial language: localStorage -> browser language -> default 'en'
  let initialLang = "en";
  try {
    const saved = localStorage.getItem("portfolio_language");
    if (saved && (saved === "en" || saved === "it")) {
      initialLang = saved;
    } else if (
      navigator.language &&
      navigator.language.toLowerCase().startsWith("it")
    ) {
      initialLang = "it";
    }
  } catch (e) {
    // Default fallback
  }

  applyLanguage(initialLang);
}

/**
 * Smooth scrolling for navigation anchors
 */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const targetId = this.getAttribute("href");
      if (targetId === "#") return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition =
          elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    });
  });
}

/**
 * Active navigation spy on scroll
 */
function initActiveNavSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  function updateActiveLink() {
    let current = "";
    const scrollPosition = window.pageYOffset + 120;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      if (
        scrollPosition >= sectionTop &&
        scrollPosition < sectionTop + sectionHeight
      ) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${current}`) {
        link.classList.add("active");
      }
    });
  }

  window.addEventListener("scroll", updateActiveLink, { passive: true });
  updateActiveLink();
}

/**
 * Copy to clipboard with toast notification
 */
function initClipboardActions() {
  const copyButtons = document.querySelectorAll("[data-copy]");
  const toast = document.getElementById("toast-notification");
  const toastMessage = document.getElementById("toast-message");

  copyButtons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const textToCopy = btn.getAttribute("data-copy");

      if (navigator.clipboard) {
        navigator.clipboard
          .writeText(textToCopy)
          .then(() => {
            showToast(`Copied to clipboard: ${textToCopy}`);
          })
          .catch(() => {
            fallbackCopy(textToCopy);
          });
      } else {
        fallbackCopy(textToCopy);
      }
    });
  });

  function fallbackCopy(text) {
    const tempInput = document.createElement("input");
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    showToast(`Copied to clipboard: ${text}`);
  }

  function showToast(message) {
    if (!toast) return;
    if (toastMessage) toastMessage.textContent = message;
    toast.classList.add("show");
    setTimeout(() => {
      toast.classList.remove("show");
    }, 3200);
  }
}

/**
 * Handle asset images if added by user; maintain clean beige placeholder background if not present
 */
function initImageFallbacks() {
  const projectMedia = document.querySelectorAll(
    ".work-media-container img, .work-media-container video, .profile-avatar-container img",
  );

  projectMedia.forEach((media) => {
    media.addEventListener("error", function () {
      // Hide broken media tag so the container background remains clean and seamless
      this.style.display = "none";
      if (this.parentElement) {
        this.parentElement.classList.add("is-empty");
      }
    });
  });
}

/**
 * Mobile menu toggle handling
 */
function initMobileMenu() {
  const mobileToggle = document.getElementById("mobile-nav-toggle");
  const navMenu = document.querySelector(".nav-menu");

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener("click", () => {
      const isOpen = navMenu.style.display === "flex";
      navMenu.style.display = isOpen ? "none" : "flex";
      if (!isOpen) {
        navMenu.style.position = "absolute";
        navMenu.style.top = "var(--header-height)";
        navMenu.style.left = "0";
        navMenu.style.width = "100%";
        navMenu.style.backgroundColor = "var(--bg-main)";
        navMenu.style.flexDirection = "column";
        navMenu.style.padding = "24px";
        navMenu.style.boxShadow = "var(--shadow-md)";
      }
    });
  }
}

/**
 * Auto-play project videos only when they enter the user's viewport,
 * and pause them when scrolled out of view to optimize performance.
 */
function initViewportVideoAutoplay() {
  const projectVideos = document.querySelectorAll(".work-media-container video");
  if (!projectVideos.length) return;

  if (!("IntersectionObserver" in window)) {
    // Fallback for browsers without IntersectionObserver
    projectVideos.forEach((video) => {
      video.play().catch(() => {});
    });
    return;
  }

  const observerOptions = {
    root: null,
    rootMargin: "0px 0px -5% 0px",
    threshold: 0.25,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const video = entry.target;
      if (entry.isIntersecting) {
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay prevented or awaiting user interaction
          });
        }
      } else {
        video.pause();
      }
    });
  }, observerOptions);

  projectVideos.forEach((video) => {
    observer.observe(video);
  });
}

