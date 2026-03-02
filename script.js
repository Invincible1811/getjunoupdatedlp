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

  // Language toggle
  function setupLangToggle() {
    const btn = document.getElementById('langToggle');
    if (!btn) return;

    const options = btn.querySelectorAll('.nav__lang-option');

    btn.addEventListener('click', () => {
      options.forEach(opt => opt.classList.toggle('nav__lang-option--active'));
      const activeLang = btn.querySelector('.nav__lang-option--active');
      if (activeLang) {
        const lang = activeLang.getAttribute('data-lang');
        document.documentElement.setAttribute('lang', lang);
      }
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