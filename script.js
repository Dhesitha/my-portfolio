document.addEventListener("DOMContentLoaded", function () {
  // AOS Animations
  AOS.init({
    duration: 1000,
    once: true,
    offset: 100,
  });
  var typed = new Typed("#typed", {
    strings: [
      "Full Stack Developer.",
      "IT Student (NVQ Level 5).",
      "Java Enthusiast.",
      "UI/UX Designer.",
    ],
    typeSpeed: 50,
    backSpeed: 30,
    loop: true,
  });

  // Swiper Slider
  if (typeof Swiper !== "undefined") {
    new Swiper(".mySwiper", {
      loop: true,
      autoplay: { delay: 2500, disableOnInteraction: false },
      pagination: { el: ".swiper-pagination", clickable: true },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    });
  }
});

// Dark Mode Toggle
// Dark Mode Toggle (Default: Dark)
const toggleBtn = document.getElementById('dark-mode-toggle');
const currentTheme = localStorage.getItem('theme');

// 1. මුලින්ම ලෝඩ් වෙද්දී Dark Mode එක දාන්න (කලින් Light Mode තෝරාගෙන නැත්නම්)
if (currentTheme === null || currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if(toggleBtn) toggleBtn.classList.replace('fa-moon', 'fa-sun');
} else {
    document.body.classList.remove('dark-theme');
    if(toggleBtn) toggleBtn.classList.replace('fa-sun', 'fa-moon');
}

// 2. Button එක එබූ විට මාරු කිරීම
if (toggleBtn) {
    toggleBtn.onclick = function() {
        document.body.classList.toggle('dark-theme');
        let theme = 'light';
        
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark';
            this.classList.replace('fa-moon', 'fa-sun');
        } else {
            this.classList.replace('fa-sun', 'fa-moon');
        }
        localStorage.setItem('theme', theme);
    }
}

window.onpageshow = function (event) {
  if (event.persisted) {
    window.location.reload();
  }
};
