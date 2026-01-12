document.addEventListener('DOMContentLoaded', () => {
    // Language Toggle Logic
    const langToggleBtn = document.getElementById('lang-toggle');
    let currentLang = 'en'; // Default language

    const toggleLanguage = () => {
        currentLang = currentLang === 'en' ? 'jp' : 'en';
        updateContent();
    };

    const updateContent = () => {
        const translatableElements = document.querySelectorAll('[data-en][data-jp]');

        translatableElements.forEach(el => {
            if (currentLang === 'jp') {
                el.textContent = el.getAttribute('data-jp');
            } else {
                el.textContent = el.getAttribute('data-en');
            }
        });

        // Update button text? Optionally
        // langToggleBtn.textContent = currentLang === 'en' ? 'JP' : 'EN';
    };

    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', toggleLanguage);
    }

    // Simple scroll reveal (placeholder for more complex animation)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    });

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in-section');
        observer.observe(section);
    });
});
