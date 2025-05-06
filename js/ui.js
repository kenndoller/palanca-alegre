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
filter: "blur(14px)",                       
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
scale: 3,                                   
filter: "blur(3px)",                       
duration: 2,
ease: "power2.out",
scrollTrigger: {
    trigger: ".alegre-message ",
    start: "center", 
    end: "+=300",
    scrub: true,           
    toggleActions: "play none none none"
}
});
