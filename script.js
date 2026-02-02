// 1. පිටුව Load වූ පසුව AOS සහ Swiper පණ ගැන්වීම
document.addEventListener('DOMContentLoaded', function() {
    
    // AOS (Animations) ආරම්භ කිරීම
    AOS.init({ 
        duration: 1000, 
        once: true,
        offset: 100
    });
    
    // Swiper (Image Slider) ආරම්භ කිරීම
    // HTML එකේ Swiper JS ලින්ක් එක තිබිය යුතුයි
    if (typeof Swiper !== 'undefined') {
        new Swiper(".mySwiper", {
            loop: true,
            autoplay: { 
                delay: 2500, 
                disableOnInteraction: false 
            },
            pagination: { 
                el: ".swiper-pagination", 
                clickable: true 
            },
            navigation: { 
                nextEl: ".swiper-button-next", 
                prevEl: ".swiper-button-prev" 
            },
        });
    }
});

// 2. Dark Mode Toggle (මතකය සහිතව - LocalStorage)
const toggleBtn = document.getElementById('dark-mode-toggle');
const currentTheme = localStorage.getItem('theme');

// කලින් තෝරාගත් Theme එක තිබේ නම් එය සක්‍රීය කිරීම
if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
    if(toggleBtn) toggleBtn.classList.replace('fa-moon', 'fa-sun');
}

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

// 3. Go Back වලදී පිටුව Refresh කිරීම
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
};