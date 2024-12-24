// Ce fichier contient le code JavaScript pour le projet. Il gère l'interactivité et les fonctionnalités dynamiques de la page web.

        // Initialisation des animations AOS
        AOS.init({
            duration: 1000,
            once: true
        });

        // Gestion du thème sombre/clair
        const themeToggle = document.getElementById('theme-toggle');
        const body = document.body;
        
        themeToggle.addEventListener('click', () => {
            body.classList.toggle('dark-mode');
            const icon = themeToggle.querySelector('i');
            if (body.classList.contains('dark-mode')) {
                icon.classList.remove('fa-moon');
                icon.classList.add('fa-sun');
            } else {
                icon.classList.remove('fa-sun');
                icon.classList.add('fa-moon');
            }
        });

        // Animation du header au scroll
        let lastScroll = 0;
        const header = document.querySelector('.header');

        window.addEventListener('scroll', () => {
            const currentScroll = window.pageYOffset;
            
            if (currentScroll <= 0) {
                header.style.transform = 'translateY(0)';
                return;
            }
            
            if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
                header.style.transform = 'translateY(-100%)';
            } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
                header.style.transform = 'translateY(0)';
            }
            
            lastScroll = currentScroll;
        });
