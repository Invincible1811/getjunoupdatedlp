(() => {
  "use strict";

  // Scroll-based nav background
  function setupNav() {
    const nav = document.querySelector(".nav");
    if (!nav) return;
    const onScroll = () => nav.classList.toggle("scrolled", window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  // Scroll-triggered reveal
  function setupReveal() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  }

  // Stagger children inside grids
  function setupStagger() {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const children = entry.target.children;
            Array.from(children).forEach((child, i) => {
              child.style.opacity = "0";
              child.style.transform = "translateY(24px)";
              child.style.transition = `opacity .5s cubic-bezier(.16,1,.3,1) ${i * 0.08}s, transform .5s cubic-bezier(.16,1,.3,1) ${i * 0.08}s`;
              requestAnimationFrame(() => {
                child.style.opacity = "1";
                child.style.transform = "translateY(0)";
              });
            });
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".about__points, .bento, .team__grid, .quotes__grid").forEach((grid) => {
      observer.observe(grid);
    });
  }

  // Smooth scroll for [data-scroll] buttons
  function setupSmoothScroll() {
    document.addEventListener("click", (e) => {
      const el = e.target.closest("[data-scroll]");
      if (!el) return;
      const selector = el.getAttribute("data-scroll");
      if (!selector) return;
      const target = document.querySelector(selector);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  }

  // Active nav link highlighting
  function setupActiveNav() {
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll(".nav__menu a[href^='#']");

    const onScroll = () => {
      const scrollY = window.scrollY + 120;
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        links.forEach((link) => {
          link.classList.toggle(
            "active",
            link.getAttribute("href") === `#${id}` &&
              scrollY >= top &&
              scrollY < top + height
          );
        });
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  // Waitlist form validation feedback
  function setupForm() {
    const form = document.querySelector(".form");
    if (!form) return;

    const msg = form.querySelector(".form__msg");
    const submitBtn = form.querySelector('button[type="submit"]');
    if (!submitBtn) return;

    submitBtn.addEventListener("click", () => {
      const fullName = form.querySelector("#fullName");
      const email = form.querySelector("#email");

      if (fullName && !fullName.value.trim()) {
        fullName.focus();
        if (msg) {
          msg.textContent = "Please enter your name.";
          msg.style.color = "#E55555";
        }
        return;
      }
      if (email && !email.value.trim()) {
        email.focus();
        if (msg) {
          msg.textContent = "Please enter your email.";
          msg.style.color = "#E55555";
        }
        return;
      }

      submitBtn.textContent = "Sending...";
      submitBtn.style.opacity = "0.7";
    });
  }

  // Hero parallax — image scrolls slower than content
  function setupHeroParallax() {
    const banner = document.querySelector(".hero__banner");
    const img = document.querySelector(".hero__img");
    const scrollHint = document.querySelector(".hero__scroll-hint");
    if (!banner || !img) return;

    const height = banner.offsetHeight;

    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      if (y > height) return;
      const ratio = y / height;

      img.style.transform = `scale(${1 + ratio * 0.06}) translateY(${y * 0.25}px)`;

      if (scrollHint) {
        scrollHint.style.opacity = Math.max(0, 1 - ratio * 3);
      }
    }, { passive: true });
  }

  // Mouse-follow depth on hero content & blobs
  function setupHeroMouse() {
    const banner = document.querySelector(".hero__banner");
    const content = document.querySelector(".hero__content");
    const blobs = document.querySelectorAll(".hero__blob");
    if (!banner || !content) return;

    let targetX = 0, targetY = 0, currentX = 0, currentY = 0;
    let ticking = false;

    banner.addEventListener("mousemove", (e) => {
      const rect = banner.getBoundingClientRect();
      targetX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      targetY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;

      if (!ticking) {
        ticking = true;
        requestAnimationFrame(animate);
      }
    });

    banner.addEventListener("mouseleave", () => {
      targetX = 0;
      targetY = 0;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(animate);
      }
    });

    function animate() {
      currentX += (targetX - currentX) * 0.08;
      currentY += (targetY - currentY) * 0.08;

      content.style.transform = `translate(${currentX * -8}px, ${currentY * -6}px)`;

      blobs.forEach((blob, i) => {
        const factor = (i + 1) * 6;
        blob.style.transform = `translate(${currentX * factor}px, ${currentY * factor}px)`;
      });

      if (Math.abs(targetX - currentX) > 0.001 || Math.abs(targetY - currentY) > 0.001) {
        requestAnimationFrame(animate);
      } else {
        ticking = false;
      }
    }
  }

  // Sparkle particles on quote cards
  function setupQuoteSparkles() {
    const cards = document.querySelectorAll(".quotes__card");
    if (!cards.length) return;

    cards.forEach((card) => {
      const container = card.querySelector(".quotes__sparkles");
      if (!container) return;

      let interval;

      card.addEventListener("mouseenter", () => {
        interval = setInterval(() => {
          createSparkle(container, card);
        }, 150);
      });

      card.addEventListener("mouseleave", () => {
        clearInterval(interval);
      });
    });
  }

  function createSparkle(container, card) {
    const sparkle = document.createElement("div");
    const size = Math.random() * 6 + 3;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    
    let color = "#E8A0A6";
    if (card.classList.contains("quotes__card--teal")) color = "#64C8BE";
    if (card.classList.contains("quotes__card--lavender")) color = "#A08CD2";
    if (card.classList.contains("quotes__card--gold")) color = "#D4A574";

    sparkle.style.cssText = `
      position: absolute;
      left: ${x}%;
      top: ${y}%;
      width: ${size}px;
      height: ${size}px;
      background: ${color};
      border-radius: 50%;
      pointer-events: none;
      animation: sparkleFloat 1.2s ease-out forwards;
      box-shadow: 0 0 ${size * 2}px ${color};
    `;

    container.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1200);
  }

  // Language toggle with full translations
  function setupLangToggle() {
    const btn = document.getElementById('langToggle');
    if (!btn) return;

    const optEN = btn.querySelector('[data-lang="en"]');
    const optDE = btn.querySelector('[data-lang="de"]');

    // Store the original mixed content on first load
    const originals = {};
    const originalsHTML = {};
    document.querySelectorAll('[data-i18n]').forEach(el => {
      originals[el.getAttribute('data-i18n')] = el.textContent;
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      originalsHTML[el.getAttribute('data-i18n-html')] = el.innerHTML;
    });

    const translations = {
      en: {
        'nav.about': 'About',
        'nav.features': 'Features',
        'nav.team': 'Team',
        'nav.cta': 'Call to Action',
        'hero.eyebrow': 'Built for Midwives',
        'hero.float1': 'Follow-up questions between home visits',
        'hero.float2': 'New inquiries in the evening',
        'hero.float3': 'Short-notice schedule changes',
        'hero.float4': 'Coordinate next week',
        'hero.float5': 'Weekend rescheduling',
        'hero.heading': 'What if someone could<br>support you?',
        'hero.statement': '<strong class="hero__juno-text">JUNO</strong> is your intelligent assistant, developed together and tailored to your daily care routine.',
        'feat.title': 'Features',
        'feat.subtitle': '<strong class="hero__juno-text">JUNO</strong> is your intelligent assistant, developed together and tailored to <strong>your</strong> daily care routine.',
        'feat.cal.title': 'Your Optimized Calendar',
        'feat.cal.desc': 'Managing home visits, clinic hours, and birth windows is a logistical puzzle. Juno solves it automatically.',
        'feat.comm.title': 'Seamless Communication',
        'feat.comm.desc': 'Connect without the burnout. Midwifery is personal, but your private life is precious. Juno centralizes all your patient interactions into one professional hub.',
        'feat.diary.title': 'Digital Diary',
        'feat.diary.desc': "A holistic view of every journey. Every pregnancy is a story. Juno's digital profile gives you a 360-degree view of the mother's health and progress.",
        'feat.route.title': 'Optimize Your Home Visit Routes',
        'feat.route.desc': 'Juno plans appointments by location to minimize your travel time.',
        'feat.glance.title': 'Your Practice at a Glance',
        'feat.glance.desc': 'Track your visits and patient capacity in real-time to manage your workload without the stress. See your projected revenue and billing status at a glance, replacing messy spreadsheets with instant financial clarity.',
        'feat.circle.title': 'The Midwife Circle',
        'feat.circle.desc': 'Connect with a community of peers to share clinical experiences, solve common practice hurdles, and discuss industry trends. Gain valuable insights from collective wisdom and navigate the challenges of independent midwifery alongside a supportive professional network.',
        'refine.eyebrow': 'We are looking for insightful midwives to help us refine Juno.',
        'refine.heading': 'Shape the Future of<br>your Digital assistant.',
        'refine.sub': 'Join our research phase and ensure the tool is built for your real-world needs.',
        'refine.btn': 'Join Waitlist',
        'story.heading': '<span class="story__sparkle story__sparkle--1">\u2726</span>Our Story<svg class="story__arrow" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#2e2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M30 6c-4 6-10 16-20 24"/><path d="M14 26l-4 4 5 1"/></svg>',
        'story.quote': '"Built for the way you work." Juno isn\'t an \'office\' tool, it\'s a \'field\' tool. Whether you are in a living room, a birth center, or on the road, Juno keeps your practice organized, compliant, and human.',
        'shape.badge': 'Call to Action',
        'shape.heading': 'Choose the Role That Best Describes <strong class="hero__juno-text">You</strong>',
        'shape.text': "Whether you love shaping ideas or testing new tools, there's a place for you in the Juno community. Pick the role that fits your style and help us build something amazing together.",
        'shape.s.title': 'The Strategists',
        'shape.s.for': 'For the Visionaries',
        'shape.s.desc': 'Join an exclusive circle of midwives providing deep-dive feedback on features, ethics, and workflow.',
        'shape.s.btn': 'Apply as Strategist',
        'shape.b.title': 'The Beta Testers',
        'shape.b.for': 'For the Early Adopters',
        'shape.b.desc': 'Be the first to use the Juno platform in your daily practice and help us iron out the kinks.',
        'shape.b.btn': 'Join as Beta Tester',
        'contact.heading': 'Get in Touch',
        'contact.roleLabel': 'What describes you best?',
        'contact.msgLabel': 'Message',
        'contact.btn': 'Get in Touch With Us!',
        'team.label': 'Our Team',
        'team.heading': 'Meet the Minds Behind Juno',
        'team.subtitle': 'Passionate professionals dedicated to transforming midwifery care',
        'footer.features': 'Features',
        'footer.waitlist': 'Waitlist',
        'footer.contact': 'Contact',
        'footer.copy': '&copy; 2026 Juno Digital Assistant. All rights reserved.'
      },
      de: {
        'nav.about': '\u00dcber uns',
        'nav.features': 'Funktionen',
        'nav.team': 'Team',
        'nav.cta': 'Mitmachen',
        'hero.eyebrow': 'F\u00fcr Hebammen entwickelt',
        'hero.float1': 'R\u00fcckfragen zwischen Hausbesuchen',
        'hero.float2': 'Neue Anfragen am Abend',
        'hero.float3': 'Kurzfristige \u00c4nderungen im Tagesplan',
        'hero.float4': 'N\u00e4chste Woche koordinieren',
        'hero.float5': 'Umplanungen am Wochenende',
        'hero.heading': 'Und, wenn Dich jemand dabei<br>unterst\u00fctzen k\u00f6nnte?',
        'hero.statement': '<strong class="hero__juno-text">JUNO</strong> ist Deine intelligente Assistenz, gemeinsam entwickelt und abgestimmt auf Deinen Betreuungsalltag.',
        'feat.title': 'Funktionen',
        'feat.subtitle': '<strong class="hero__juno-text">JUNO</strong> ist Deine intelligente Assistenz, gemeinsam entwickelt und abgestimmt auf <strong>Deinen</strong> Betreuungsalltag.',
        'feat.cal.title': 'Dein optimierter Kalender',
        'feat.cal.desc': 'Hausbesuche, Sprechstunden und Geburtszeiten zu managen ist ein logistisches Puzzle. Juno l\u00f6st es automatisch.',
        'feat.comm.title': 'Nahtlose Kommunikation',
        'feat.comm.desc': 'Verbinde Dich ohne Burnout. Hebammenarbeit ist pers\u00f6nlich, aber Dein Privatleben ist kostbar. Juno zentralisiert alle Patienteninteraktionen in einem professionellen Hub.',
        'feat.diary.title': 'Digitales Tagebuch',
        'feat.diary.desc': 'Ein ganzheitlicher Blick auf jede Reise. Jede Schwangerschaft ist eine Geschichte. Junos digitales Profil gibt Dir einen 360-Grad-Blick auf Gesundheit und Fortschritt der Mutter.',
        'feat.route.title': 'Optimiere Deine Hausbesuchsrouten',
        'feat.route.desc': 'Juno plant Termine nach Standort, um Deine Fahrzeit zu minimieren.',
        'feat.glance.title': 'Deine Praxis auf einen Blick',
        'feat.glance.desc': 'Verfolge Deine Besuche und Patientenkapazit\u00e4t in Echtzeit, um Deine Arbeitslast stressfrei zu managen. Sieh Deinen prognostizierten Umsatz und Abrechnungsstatus auf einen Blick.',
        'feat.circle.title': 'Der Hebammenkreis',
        'feat.circle.desc': 'Verbinde Dich mit einer Gemeinschaft von Kolleginnen, um klinische Erfahrungen zu teilen, gemeinsame Praxish\u00fcrden zu l\u00f6sen und Branchentrends zu diskutieren.',
        'refine.eyebrow': 'Wir suchen engagierte Hebammen, die uns helfen, Juno zu verfeinern.',
        'refine.heading': 'Gestalte die Zukunft<br>Deiner digitalen Assistenz.',
        'refine.sub': 'Nimm an unserer Forschungsphase teil und stelle sicher, dass das Tool f\u00fcr Deine realen Bed\u00fcrfnisse entwickelt wird.',
        'refine.btn': 'Warteliste beitreten',
        'story.heading': '<span class="story__sparkle story__sparkle--1">\u2726</span>Unsere Geschichte<svg class="story__arrow" width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#2e2640" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M30 6c-4 6-10 16-20 24"/><path d="M14 26l-4 4 5 1"/></svg>',
        'story.quote': '\u201eGebaut f\u00fcr die Art, wie Du arbeitest.\u201c Juno ist kein \u201eB\u00fcro\u201c-Tool, sondern ein \u201eFeld\u201c-Tool. Ob im Wohnzimmer, im Geburtshaus oder unterwegs \u2013 Juno h\u00e4lt Deine Praxis organisiert, konform und menschlich.',
        'shape.badge': 'Mitmachen',
        'shape.heading': 'W\u00e4hle die Rolle, die <strong class="hero__juno-text">Dich</strong> am besten beschreibt',
        'shape.text': 'Ob Du gerne Ideen gestaltest oder neue Tools testest \u2013 es gibt einen Platz f\u00fcr Dich in der Juno-Community. W\u00e4hle die Rolle, die zu Dir passt, und hilf uns, etwas Gro\u00dfartiges aufzubauen.',
        'shape.s.title': 'Die Strategen',
        'shape.s.for': 'F\u00fcr die Vision\u00e4re',
        'shape.s.desc': 'Tritt einem exklusiven Kreis von Hebammen bei, die tiefgehendes Feedback zu Funktionen, Ethik und Arbeitsabl\u00e4ufen geben.',
        'shape.s.btn': 'Als Strategin bewerben',
        'shape.b.title': 'Die Beta-Tester',
        'shape.b.for': 'F\u00fcr die Vorreiter',
        'shape.b.desc': 'Sei die Erste, die die Juno-Plattform im Praxisalltag nutzt, und hilf uns, die letzten Fehler zu beheben.',
        'shape.b.btn': 'Als Beta-Testerin beitreten',
        'contact.heading': 'Kontakt aufnehmen',
        'contact.roleLabel': 'Was beschreibt Dich am besten?',
        'contact.msgLabel': 'Nachricht',
        'contact.btn': 'Kontakt aufnehmen!',
        'team.label': 'Unser Team',
        'team.heading': 'Die K\u00f6pfe hinter Juno',
        'team.subtitle': 'Engagierte Fachleute, die die Hebammenbetreuung transformieren',
        'footer.features': 'Funktionen',
        'footer.waitlist': 'Warteliste',
        'footer.contact': 'Kontakt',
        'footer.copy': '&copy; 2026 Juno Digitale Assistenz. Alle Rechte vorbehalten.'
      }
    };

    // Placeholders for form fields
    const placeholders = {
      en: { firstName: 'Name', surname: 'Surname', email: 'Email', message: 'Say something...' },
      de: { firstName: 'Vorname', surname: 'Nachname', email: 'E-Mail', message: 'Schreib uns etwas...' }
    };
    const selectOptions = {
      en: { '': 'Search', beta_tester: 'Beta Tester', strategist: 'Strategist' },
      de: { '': 'Suche', beta_tester: 'Beta-Tester', strategist: 'Strategin' }
    };

    // Store original placeholders & select text
    const origPlaceholders = {};
    document.querySelectorAll('.contact__input, .contact__textarea').forEach(el => {
      origPlaceholders[el.id] = el.placeholder;
    });
    const origSelectOptions = {};
    document.querySelectorAll('.contact__select option').forEach(opt => {
      origSelectOptions[opt.value] = opt.textContent;
    });

    let currentLang = null; // null = mixed original

    function applyLang(lang) {
      if (lang === currentLang) return;
      currentLang = lang;
      document.documentElement.setAttribute('lang', lang || 'en');

      // Text content elements
      document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (lang && translations[lang][key]) {
          el.textContent = translations[lang][key];
        } else if (!lang && originals[key]) {
          el.textContent = originals[key];
        }
      });

      // HTML content elements
      document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const key = el.getAttribute('data-i18n-html');
        if (lang && translations[lang][key]) {
          el.innerHTML = translations[lang][key];
        } else if (!lang && originalsHTML[key]) {
          el.innerHTML = originalsHTML[key];
        }
      });

      // Placeholders
      if (lang && placeholders[lang]) {
        Object.keys(placeholders[lang]).forEach(id => {
          const el = document.getElementById(id);
          if (el) el.placeholder = placeholders[lang][id];
        });
      } else if (!lang) {
        Object.keys(origPlaceholders).forEach(id => {
          const el = document.getElementById(id);
          if (el) el.placeholder = origPlaceholders[id];
        });
      }

      // Select options
      if (lang && selectOptions[lang]) {
        document.querySelectorAll('.contact__select option').forEach(opt => {
          if (selectOptions[lang][opt.value] !== undefined) {
            opt.textContent = selectOptions[lang][opt.value];
          }
        });
      } else if (!lang) {
        document.querySelectorAll('.contact__select option').forEach(opt => {
          if (origSelectOptions[opt.value]) opt.textContent = origSelectOptions[opt.value];
        });
      }
    }

    // Click individual language options
    optEN.addEventListener('click', (e) => {
      e.stopPropagation();
      optEN.classList.add('nav__lang-option--active');
      optDE.classList.remove('nav__lang-option--active');
      applyLang('en');
    });

    optDE.addEventListener('click', (e) => {
      e.stopPropagation();
      optDE.classList.add('nav__lang-option--active');
      optEN.classList.remove('nav__lang-option--active');
      applyLang('de');
    });
  }

  // Initialize
  function init() {
    setupNav();
    setupReveal();
    setupStagger();
    setupSmoothScroll();
    setupActiveNav();
    setupForm();
    setupHeroParallax();
    setupHeroMouse();
    setupQuoteSparkles();
    setupLangToggle();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();