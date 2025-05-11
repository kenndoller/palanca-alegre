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

document.addEventListener('DOMContentLoaded', () => {
  const slide = document.querySelector('.puzzles-slide');
  const pieces = document.querySelectorAll('.puzzle-pieces .img-pieces');

  // Each piece gets a unique motion pattern
  const motion = [
    { x: -50, y: 100, r: -10 },
    { x: 60, y: 80, r: 12 },
    { x: -30, y: 120, r: -6 },
    { x: 45, y: 90, r: 8 }
  ];

  function animatePuzzlePieces() {
    const rect = slide.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const start = windowHeight;
    const end = -windowHeight;

    const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

    pieces.forEach((piece, i) => {
      const { x, y, r } = motion[i];
      const translateX = x * (1 - progress);
      const translateY = y * (1 - progress);
      const rotate = r * (1 - progress);
      piece.style.transform = `translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    });

    requestAnimationFrame(animatePuzzlePieces);
  }

  requestAnimationFrame(animatePuzzlePieces);
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

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".gem", 
  {
      opacity: 0,
  },
  {
      opacity: 1,
      duration: 1,
      ease: "power1.inOut",
      scrollTrigger: {
          trigger: "#curie-page",
          start: "top 120%",
          end: "#bottom center",
          scrub: true
      }
  }
);

gsap.to(".gem", {
opacity: 0,
ease: "power1.inOut",
scrollTrigger: {
  trigger: "#curie-page",
  start: "bottom center",
  end: "bottom+=30% center",
  scrub: true
}
});

gsap.fromTo(".gem-1", 
{
    opacity: 0,
},
{
    opacity: 1,
    duration: 0.2,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "#curie-page",
        start: "top 10%",
        end: "bottom 10%",
        scrub: true
    }
}
);

gsap.to(".gem-1", {
opacity: 0,
ease: "power1.inOut",
scrollTrigger: {
  trigger: "#einstein-page",
  start: "bottom center",
  end: "bottom+=30% center",
  scrub: true
}
});

gsap.fromTo(".gem-2", 
{
    opacity: 0,
},
{
    opacity: 1,
    duration: 1,
    ease: "power1.inOut",
    scrollTrigger: {
        trigger: "#tesla-page",
        start: "top 120%",
        end: "bottom 10%",
        scrub: true
    }
}
);

gsap.to(".gem-2", {
    opacity: 0,
    ease: "power1.inOut",
    scrollTrigger: {
      trigger: "#tesla-page",
      start: "bottom center",
      end: "+=300",                 
      scrub: true
    }
    });

gsap.to(".gem", {
  y: (i) => [-100, -150, 200, 250][i],       
  scale: 2,                                   
  filter: "blur(5px)",                       
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
      trigger: ".alegre-message",
      start: "center", 
      end: "bottom+=40% center",
      scrub: true,           
      toggleActions: "play none none none"
  }
});

gsap.to(".gem-1", {
y: (i) => [-100, -150, 200, 250][i],       
scale: 3,                                   
filter: "blur(2px)",                       
duration: 2,
ease: "power2.out",
scrollTrigger: {
    trigger: ".alegre-message",
    start: "center", 
    end: ".einstein-page",
    scrub: true,           
    toggleActions: "play none none none"
}
});

gsap.to(".gem-2", {
y: (i) => [-100, -150, 200, 250][i],       
scale: 2,                                   
filter: "blur(2px)",                       
duration: 2,
ease: "power2.out",
scrollTrigger: {
    trigger: ".alegre-message ",
    start: "bottom center", 
    end: "+=300",
    scrub: true,           
    toggleActions: "play none none none"
}
});

/* javascript of tarot cards*/

document.addEventListener('DOMContentLoaded', () => {
  const slide = document.querySelector('.prophecy-slide');
  const cards = document.querySelectorAll('.tarot-cards .img-tarots');

  // Define unique movement patterns for each card
  const movementSettings = [
    { x: -20, y: 80, r: -5 },
    { x: 10, y: 60, r: 6 },
    { x: -5, y: 100, r: -3 },
    { x: 15, y: 70, r: 8 },
    { x: -10, y: 90, r: -7 },
  ];

  function updateScrollEffect() {
    const rect = slide.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    const start = windowHeight;
    const end = -windowHeight;
    const progress = Math.min(Math.max((start - rect.top) / (start - end), 0), 1);

    cards.forEach((card, i) => {
      const { x, y, r } = movementSettings[i];
      const translateX = 15 + x * (1 - progress); 
      const translateY = y * (1 - progress);
      const rotate = r * (1 - progress);

      card.style.transform = `translate(${translateX}%, ${translateY}%) rotate(${rotate}deg)`;
    });

    requestAnimationFrame(updateScrollEffect);
  }

  requestAnimationFrame(updateScrollEffect);
});

