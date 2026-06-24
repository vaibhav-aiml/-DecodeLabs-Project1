// ========================================
// ANIMATED COUNTERS
// ========================================

(function() {
    'use strict';
    
    /**
     * Animate a single counter
     */
    function animateCounter(element) {
        var target = parseInt(element.getAttribute('data-target'), 10);
        var duration = 2000;
        var startTime = performance.now();
        
        function updateCounter(currentTime) {
            var elapsed = currentTime - startTime;
            var progress = Math.min(elapsed / duration, 1);
            
            // Ease out cubic
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.floor(eased * target);
            
            element.textContent = current;
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        }
        
        requestAnimationFrame(updateCounter);
    }
    
    /**
     * Initialize all counters with Intersection Observer
     */
    function initCounters() {
        var counters = document.querySelectorAll('.stat-number[data-target]');
        
        if (!counters.length) return;
        
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    var counter = entry.target;
                    if (!counter.dataset.animated) {
                        counter.dataset.animated = 'true';
                        animateCounter(counter);
                    }
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -50px 0px'
        });
        
        counters.forEach(function(counter) {
            observer.observe(counter);
        });
    }
    
    // Initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initCounters);
    } else {
        initCounters();
    }
})();