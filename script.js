// 1. AOS Animation පණ ගැන්වීම
document.addEventListener('DOMContentLoaded', function() {
    const aosScript = document.createElement('script');
    aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    aosScript.onload = function() {
        AOS.init({
    duration: 1200,
    once: false, 
    mirror: true
});
    };
    document.head.appendChild(aosScript);
});

// 2. Dark Mode Toggle (මතකය සහිතව - With LocalStorage)
const toggleBtn = document.getElementById('dark-mode-toggle');
const currentTheme = localStorage.getItem('theme');

// කලින් තෝරාගත් Theme එක තිබේ නම් එය සක්‍රීය කිරීම
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    toggleBtn.classList.replace('fa-moon', 'fa-sun');
}

if (toggleBtn) {
    toggleBtn.onclick = function() {
        document.body.classList.toggle('dark-theme');
        
        let theme = 'light';
        if (document.body.classList.contains('dark-theme')) {
            theme = 'dark';
            toggleBtn.classList.replace('fa-moon', 'fa-sun');
        } else {
            toggleBtn.classList.replace('fa-sun', 'fa-moon');
        }
        // තෝරාගත් Theme එක Browser එකේ මතකයේ තබා ගැනීම
        localStorage.setItem('theme', theme);
    }
}

// 3. Go Back වලදී පිටුව Refresh කිරීම
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
};

var swiper = new Swiper(".mySwiper", {
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});