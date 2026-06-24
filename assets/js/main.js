// ========================================
// MAIN - Entry Point
// ========================================

(function() {
    'use strict';
    
    /**
     * Hide loading screen
     */
    function hideLoader() {
        var loader = document.getElementById('loader');
        if (loader) {
            setTimeout(function() {
                loader.classList.add('hidden');
                document.body.classList.add('page-reveal');
            }, 500);
        }
    }
    
    /**
     * Initialize smooth scroll for all anchor links
     */
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
            anchor.addEventListener('click', function(e) {
                var targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                var target = document.querySelector(targetId);
                if (target) {
                    e.preventDefault();
                    var headerHeight = document.querySelector('.header')?.offsetHeight || 80;
                    var targetPosition = target.getBoundingClientRect().top + window.scrollY - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    /**
     * Initialize active link highlighting
     */
    function initActiveLinks() {
        var sections = document.querySelectorAll('section[id]');
        var navLinks = document.querySelectorAll('.nav-links a:not(.nav-cta)');
        
        if (!sections.length || !navLinks.length) return;
        
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var id = entry.target.id;
                    navLinks.forEach(function(link) {
                        link.classList.remove('active');
                        if (link.getAttribute('href') === '#' + id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, {
            threshold: 0.3,
            rootMargin: '-80px 0px 0px 0px'
        });
        
        sections.forEach(function(section) {
            observer.observe(section);
        });
    }
    
    /**
     * Initialize keyboard navigation for accessibility
     */
    function initKeyboardNav() {
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                var nav = document.getElementById('navLinks');
                if (nav && nav.classList.contains('open')) {
                    document.getElementById('hamburger')?.click();
                }
            }
        });
    }
    
    // ========================================
    // INITIALIZE EVERYTHING
    // ========================================
    
    function init() {
        hideLoader();
        initSmoothScroll();
        initActiveLinks();
        initKeyboardNav();
    }
    
    // Wait for all assets to load
    if (document.readyState === 'complete') {
        init();
    } else {
        window.addEventListener('load', init);
    }
})();