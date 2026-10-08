/**
 * ==============================================================================
 * SUKI® — CLIENT-SIDE UI INTERACTION & MOTION SCRIPT
 * ==============================================================================
 * Handles:
 * 1. Dynamic transparent/frosted navbar on scroll
 * 2. Active section link tracking with header offset
 * 3. Smooth scrolling with fixed header height offset
 * 4. Scroll-driven reveal orchestration (IntersectionObserver)
 * 5. Interactive fluid parallax on Hero liquid backdrop
 * 6. Dynamic cursor spotlight on Bento cards
 * 7. Tactile pill button & link micro-interactions
 * ==============================================================================
 */

if (typeof window !== "undefined" && typeof document !== "undefined") {
  document.addEventListener("DOMContentLoaded", () => {
    const header = document.querySelector(".header");
    const navLinks = document.querySelectorAll(".navbar a");
    const sections = document.querySelectorAll("section[id]");
    const homeSection = document.querySelector(".home");
    const liquidBackdrop = document.querySelector(".liquid-backdrop");
    const contactCards = document.querySelectorAll(".contact-card");

    // 1. Dynamic Transparent to Frosted Navbar on Scroll
    const updateHeaderState = () => {
      if (header) {
        if (window.scrollY > 20) {
          header.classList.add("scrolled");
        } else {
          header.classList.remove("scrolled");
        }
      }
    };

    // 2. Dynamic Active Navbar Link Highlight on Scroll
    const updateActiveNav = () => {
      const scrollPosition = window.scrollY + 140;
      let currentSectionId = "home";

      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          currentSectionId = section.getAttribute("id");
        }
      });

      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${currentSectionId}`) {
          link.classList.add("active");
        }
      });
    };

    // Unified scroll handler
    const onScroll = () => {
      updateHeaderState();
      updateActiveNav();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // 3. Smooth Scrolling with Fixed Header Offset
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
      anchor.addEventListener("click", (e) => {
        const targetId = anchor.getAttribute("href");
        if (!targetId || targetId === "#") return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          e.preventDefault();
          const headerHeight = header ? header.offsetHeight : 80;
          const targetPosition =
            targetElement.getBoundingClientRect().top + window.scrollY - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });

    // 4. Scroll-Driven Reveal Orchestration (Replay/Refresh on Scroll Up & Down)
    const revealElements = document.querySelectorAll(
      ".hero-container, .reveal-on-scroll, .reveal-card"
    );

    if ("IntersectionObserver" in window) {
      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("is-revealed");
            } else {
              // Reset animasi saat elemen keluar viewport agar terulang saat di-scroll kembali
              entry.target.classList.remove("is-revealed");
            }
          });
        },
        {
          rootMargin: "0px 0px -40px 0px",
          threshold: 0.1,
        }
      );

      revealElements.forEach((el) => revealObserver.observe(el));
    } else {
      // Fallback for older browsers
      revealElements.forEach((el) => el.classList.add("is-revealed"));
    }

    // 5. Interactive Fluid Parallax on Hero Liquid Backdrop
    if (homeSection && liquidBackdrop) {
      let mouseX = 0;
      let mouseY = 0;
      let currentX = 0;
      let currentY = 0;
      let isHeroHovered = false;

      homeSection.addEventListener("mouseenter", () => {
        isHeroHovered = true;
      });

      homeSection.addEventListener("mouseleave", () => {
        isHeroHovered = false;
        mouseX = 0;
        mouseY = 0;
      });

      homeSection.addEventListener(
        "mousemove",
        (e) => {
          const rect = homeSection.getBoundingClientRect();
          const normalizedX = (e.clientX - rect.left) / rect.width - 0.5;
          const normalizedY = (e.clientY - rect.top) / rect.height - 0.5;
          mouseX = normalizedX * 24; // subtle parallax depth
          mouseY = normalizedY * 24;
        },
        { passive: true }
      );

      const animateParallax = () => {
        currentX += (mouseX - currentX) * 0.06;
        currentY += (mouseY - currentY) * 0.06;

        if (Math.abs(currentX) > 0.02 || Math.abs(currentY) > 0.02 || isHeroHovered) {
          liquidBackdrop.style.transform = `translate3d(${currentX.toFixed(2)}px, ${currentY.toFixed(2)}px, 0)`;
        }

        requestAnimationFrame(animateParallax);
      };

      requestAnimationFrame(animateParallax);
    }

    // 6. Dynamic Cursor Spotlight on Bento Contact Cards
    contactCards.forEach((card) => {
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--spotlight-x", `${x}px`);
        card.style.setProperty("--spotlight-y", `${y}px`);
      });
    });

    // 7. Tactile Pill Buttons Micro-Interactions
    const pillButtons = document.querySelectorAll(
      ".btn-pill-outline, .btn-pill-solid, .card-link"
    );

    pillButtons.forEach((btn) => {
      btn.addEventListener("mousedown", () => {
        btn.style.transform = "scale(0.97)";
      });
      btn.addEventListener("mouseup", () => {
        btn.style.transform = "";
      });
      btn.addEventListener("mouseleave", () => {
        btn.style.transform = "";
      });
    });

    console.log("Suki® Dark Editorial Motion & UI Architecture initialized.");
  });
}
