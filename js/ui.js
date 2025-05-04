// Mobile Menu

document.addEventListener('DOMContentLoaded', () => {
    const mobileMenu = document.getElementById('mobile-menu');
    const navbarMenu = document.querySelector('.navbar-menu');

    mobileMenu.addEventListener('click', () => {
        navbarMenu.classList.toggle('active');
    });
})

document.addEventListener("DOMContentLoaded", function () {
    const section = document.querySelector(".group_picture-wrapper");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          section.classList.add("visible"); // fade in
        } else {
          section.classList.remove("visible"); // fade out
        }
      });
    }, {
      threshold: 0.7 // 30% of the section must be visible
    });

    observer.observe(section);
  });

window.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('alegre_title');
    setTimeout(() => {
        title.classList.add('animate-in');
    }, 1000); // Delay (in milliseconds) before animation starts
});

window.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    setTimeout(() => {
        navbar.classList.add('slide-in');
    }, 100); // Slight delay for smooth entry
});

window.addEventListener('DOMContentLoaded', () => {
    const cap = document.querySelector('.iska-cap');
    setTimeout(() => {
      cap.classList.add('separate');
    }, 1000); // Delay before uncapping
  });

gsap.registerPlugin(ScrollTrigger);

gsap.to("#alegre_title", {
    y: 100, 
    scrollTrigger: {
      trigger: "#homescreen",
      start: "top center",
      end: "bottom top",
      scrub: true
    }
});

gsap.registerPlugin(ScrollTrigger);

gsap.to("#cap", {
    x: "-100vw", 
    scrollTrigger: {
      trigger: ".alegre-wrapper",
      start: "top center",
      end: "+=2000",
      scrub: true
    }
});

gsap.to("#iska", {
    x: "100vw", 
    scrollTrigger: {
      trigger: ".alegre-wrapper",
      start: "top center",
      end: "+=2000",
      scrub: true
    }
});
