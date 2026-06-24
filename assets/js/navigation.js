// ========================================
// NAVIGATION MODULE
// ========================================

(function() {
    'use strict';
    
    const header = document.querySelector('.header');
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('navLinks');
    const scrollProgress = document.querySelector('.scroll-progress-bar');
    let lastScrollY = 0;
    let isHeaderHidden = false;
    
    /**
     * Toggle mobile menu
     */
    function toggleMenu() {
        const isOpen = navLinks.classList.toggle('open');
        hamburger.classList.toggle('active');
        hamburger.setAttribute('aria-expanded', isOpen);
        document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    
    /**
     * Close mobile menu
     */
    function closeMenu() {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
    }
    
    /**
     * Handle scroll events
     */
    function handleScroll() {
        const currentScrollY = window.scrollY;
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = (currentScrollY / scrollHeight) * 100;
        
        // Update scroll progress bar
        if (scrollProgress) {
            scrollProgress.style.width = Math.min(scrollPercent, 100) + '%';
        }
        
        // Toggle scrolled class for glass effect
        if (currentScrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        // Hide/show header based on scroll direction
        if (currentScrollY > 100) {
            if (currentScrollY > lastScrollY && !isHeaderHidden) {
                header.classList.add('hidden');
                isHeaderHidden = true;
            } else if (currentScrollY < lastScrollY && isHeaderHidden) {
                header.classList.remove('hidden');
                isHeaderHidden = false;
            }
        } else {
            header.classList.remove('hidden');
            isHeaderHidden = false;
        }
        
        lastScrollY = currentScrollY;
    }
    
    /**
     * Throttle helper
     */
    function throttle(func, limit) {
        let inThrottle;
        return function(...args) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => {
                    inThrottle = false;
                }, limit);
            }
        };
    }
    
    /**
     * Initialize navigation
     */
    function init() {
        // Hamburger click
        if (hamburger) {
            hamburger.addEventListener('click', toggleMenu);
        }
        
        // Close menu on link click
        if (navLinks) {
            navLinks.querySelectorAll('a').forEach(function(link) {
                link.addEventListener('click', function() {
                    if (window.innerWidth <= 768) {
                        closeMenu();
                    }
                });
            });
        }
        
        // Close menu on outside click
        document.addEventListener('click', function(e) {
            if (window.innerWidth <= 768) {
                var isNav = navLinks && navLinks.contains(e.target);
                var isHamburger = hamburger && hamburger.contains(e.target);
                if (!isNav && !isHamburger && navLinks && navLinks.classList.contains('open')) {
                    closeMenu();
                }
            }
        });
        
        // Handle scroll with throttling
        window.addEventListener('scroll', throttle(handleScroll, 50));
        
        // Handle resize
        window.addEventListener('resize', function() {
            if (window.innerWidth > 768 && navLinks && navLinks.classList.contains('open')) {
                closeMenu();
            }
        });
        
        // Initial check
        handleScroll();
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();