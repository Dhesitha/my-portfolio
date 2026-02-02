// Scroll වෙද්දී sections ලස්සනට පේන්න (Reveal animation)
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.card');
hiddenElements.forEach((el) => observer.observe(el));


window.addEventListener('pageshow', function(event) {
    if (event.persisted) {
       
        window.location.reload();
    }
});