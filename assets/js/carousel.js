// ========================================
// TESTIMONIAL CAROUSEL
// ========================================

(function() {
    'use strict';
    
    var track = document.getElementById('carouselTrack');
    var dotsContainer = document.getElementById('carouselDots');
    var prevBtn = document.getElementById('prevBtn');
    var nextBtn = document.getElementById('nextBtn');
    
    if (!track) return;
    
    var items = track.children;
    var totalItems = items.length;
    var currentIndex = 0;
    var autoplayInterval = null;
    var isTransitioning = false;
    
    /**
     * Initialize dots
     */
    function initDots() {
        if (!dotsContainer) return;
        
        for (var i = 0; i < totalItems; i++) {
            var dot = document.createElement('button');
            dot.className = 'carousel-dot';
            dot.setAttribute('data-index', i);
            dot.setAttribute('aria-label', 'Go to testimonial ' + (i + 1));
            dotsContainer.appendChild(dot);
        }
    }
    
    /**
     * Go to specific slide
     */
    function goTo(index) {
        if (isTransitioning || index === currentIndex) return;
        if (index < 0) index = totalItems - 1;
        if (index >= totalItems) index = 0;
        
        isTransitioning = true;
        currentIndex = index;
        
        // Move track
        var offset = -index * 100;
        track.style.transform = 'translateX(' + offset + '%)';
        
        // Update dots
        if (dotsContainer) {
            var dots = dotsContainer.children;
            for (var i = 0; i < dots.length; i++) {
                dots[i].classList.toggle('active', i === index);
            }
        }
        
        // Update ARIA
        for (var j = 0; j < items.length; j++) {
            items[j].setAttribute('aria-hidden', j !== index);
        }
        
        setTimeout(function() {
            isTransitioning = false;
        }, 600);
    }
    
    /**
     * Next slide
     */
    function next() {
        goTo(currentIndex + 1);
    }
    
    /**
     * Previous slide
     */
    function prev() {
        goTo(currentIndex - 1);
    }
    
    /**
     * Start autoplay
     */
    function startAutoplay() {
        if (autoplayInterval) return;
        autoplayInterval = setInterval(function() {
            next();
        }, 5000);
    }
    
    /**
     * Stop autoplay
     */
    function stopAutoplay() {
        if (autoplayInterval) {
            clearInterval(autoplayInterval);
            autoplayInterval = null;
        }
    }
    
    /**
     * Bind events
     */
    function bindEvents() {
        // Previous button
        if (prevBtn) {
            prevBtn.addEventListener('click', prev);
        }
        
        // Next button
        if (nextBtn) {
            nextBtn.addEventListener('click', next);
        }
        
        // Dot clicks
        if (dotsContainer) {
            dotsContainer.addEventListener('click', function(e) {
                var dot = e.target.closest('.carousel-dot');
                if (dot) {
                    var index = parseInt(dot.getAttribute('data-index'), 10);
                    goTo(index);
                }
            });
        }
        
        // Pause autoplay on hover
        track.addEventListener('mouseenter', stopAutoplay);
        track.addEventListener('mouseleave', startAutoplay);
        
        // Keyboard navigation
        track.addEventListener('keydown', function(e) {
            if (e.key === 'ArrowLeft') {
                e.preventDefault();
                prev();
            } else if (e.key === 'ArrowRight') {
                e.preventDefault();
                next();
            }
        });
    }
    
    // Initialize
    initDots();
    bindEvents();
    goTo(0);
    startAutoplay();
})();