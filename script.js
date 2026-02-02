// 1. AOS Animation පණ ගැන්වීම (Initialize AOS)
// මේ කොටස අනිවාර්යයෙන්ම තිබිය යුතුයි Animations පෙනෙන්නට නම්
document.addEventListener('DOMContentLoaded', function() {
    // AOS library එක load වී ඇති බව තහවුරු කරගැනීම සඳහා CDN එක හරහා script එකක් ඇතුළත් කරමු
    const aosScript = document.createElement('script');
    aosScript.src = 'https://unpkg.com/aos@2.3.1/dist/aos.js';
    aosScript.onload = function() {
        AOS.init({
            duration: 1000, // Animation එක තත්පර 1ක් පුරා සිදුවේ
            once: true,     // scroll කරද්දී එක පාරක් පමණක් පෙන්වයි
            offset: 100     // animation එක පටන් ගන්න ඕන දුර
        });
    };
    document.head.appendChild(aosScript);
});

// 2. Dark Mode Toggle වැඩසටහන
const toggleBtn = document.getElementById('dark-mode-toggle');
if (toggleBtn) {
    toggleBtn.onclick = function() {
        document.body.classList.toggle('dark-theme');
        // Icon එක මාරු කිරීම (Moon -> Sun)
        if (document.body.classList.contains('dark-theme')) {
            toggleBtn.classList.replace('fa-moon', 'fa-sun');
        } else {
            toggleBtn.classList.replace('fa-sun', 'fa-moon');
        }
    }
}

// 3. Go Back වලදී පිටුව Refresh කිරීම (කලින් කතා කළ පරිදි)
window.onpageshow = function(event) {
    if (event.persisted) {
        window.location.reload();
    }
};