// ========================================
// SCROLL ANIMATIONS & PARTICLES
// ========================================

(function() {
    'use strict';
    
    // ========================================
    // PARTICLE SYSTEM
    // ========================================
    
    function ParticleSystem(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) return;
        
        this.ctx = this.canvas.getContext('2d');
        this.particles = [];
        this.mouse = { x: null, y: null };
        this.count = 80;
        this.animationId = null;
        
        this.resize();
        this.initParticles();
        this.bindEvents();
        this.animate();
    }
    
    ParticleSystem.prototype.resize = function() {
        this.canvas.width = this.canvas.parentElement.offsetWidth;
        this.canvas.height = this.canvas.parentElement.offsetHeight;
    };
    
    ParticleSystem.prototype.initParticles = function() {
        this.particles = [];
        for (var i = 0; i < this.count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                radius: Math.random() * 2 + 0.5,
                speedX: (Math.random() - 0.5) * 0.5,
                speedY: (Math.random() - 0.5) * 0.5,
                opacity: Math.random() * 0.5 + 0.1
            });
        }
    };
    
    ParticleSystem.prototype.bindEvents = function() {
        var self = this;
        
        window.addEventListener('resize', function() {
            self.resize();
            self.initParticles();
        });
        
        this.canvas.addEventListener('mousemove', function(e) {
            var rect = self.canvas.getBoundingClientRect();
            self.mouse.x = e.clientX - rect.left;
            self.mouse.y = e.clientY - rect.top;
        });
        
        this.canvas.addEventListener('mouseleave', function() {
            self.mouse.x = null;
            self.mouse.y = null;
        });
    };
    
    ParticleSystem.prototype.animate = function() {
        var self = this;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(function(particle, index) {
            // Move
            particle.x += particle.speedX;
            particle.y += particle.speedY;
            
            // Wrap around edges
            if (particle.x < 0) particle.x = self.canvas.width;
            if (particle.x > self.canvas.width) particle.x = 0;
            if (particle.y < 0) particle.y = self.canvas.height;
            if (particle.y > self.canvas.height) particle.y = 0;
            
            // Mouse interaction
            if (self.mouse.x !== null && self.mouse.y !== null) {
                var dx = self.mouse.x - particle.x;
                var dy = self.mouse.y - particle.y;
                var distance = Math.sqrt(dx * dx + dy * dy);
                
                if (distance < 150) {
                    var force = (150 - distance) / 150;
                    particle.x -= dx * force * 0.02;
                    particle.y -= dy * force * 0.02;
                }
            }
            
            // Draw particle
            self.ctx.beginPath();
            self.ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
            
            var gradient = self.ctx.createRadialGradient(
                particle.x, particle.y, 0,
                particle.x, particle.y, particle.radius * 2
            );
            gradient.addColorStop(0, 'rgba(0, 212, 255, ' + particle.opacity + ')');
            gradient.addColorStop(1, 'rgba(124, 58, 237, ' + particle.opacity * 0.3 + ')');
            
            self.ctx.fillStyle = gradient;
            self.ctx.fill();
            
            // Draw connections
            self.drawConnections(particle, index);
        });
        
        this.animationId = requestAnimationFrame(function() {
            self.animate();
        });
    };
    
    ParticleSystem.prototype.drawConnections = function(particle, index) {
        for (var i = index + 1; i < this.particles.length; i++) {
            var other = this.particles[i];
            var dx = particle.x - other.x;
            var dy = particle.y - other.y;
            var distance = Math.sqrt(dx * dx + dy * dy);
            
            if (distance < 120) {
                var opacity = (1 - distance / 120) * 0.15;
                this.ctx.beginPath();
                this.ctx.moveTo(particle.x, particle.y);
                this.ctx.lineTo(other.x, other.y);
                this.ctx.strokeStyle = 'rgba(0, 212, 255, ' + opacity + ')';
                this.ctx.lineWidth = 0.5;
                this.ctx.stroke();
            }
        }
    };
    
    // ========================================
    // INTERSECTION OBSERVER ANIMATIONS
    // ========================================
    
    function initScrollReveal() {
        var elements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .scale-in, .stagger-children');
        
        if (!elements.length) return;
        
        var observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
        
        elements.forEach(function(element) {
            observer.observe(element);
        });
    }
    
    // ========================================
    // BACK TO TOP BUTTON
    // ========================================
    
    function initBackToTop() {
        var button = document.getElementById('backToTop');
        if (!button) return;
        
        var isVisible = false;
        
        function handleScroll() {
            var shouldShow = window.scrollY > 500;
            
            if (shouldShow !== isVisible) {
                isVisible = shouldShow;
                button.classList.toggle('visible', shouldShow);
            }
        }
        
        function throttle(func, limit) {
            var inThrottle;
            return function() {
                if (!inThrottle) {
                    func.apply(this, arguments);
                    inThrottle = true;
                    setTimeout(function() {
                        inThrottle = false;
                    }, limit);
                }
            };
        }
        
        window.addEventListener('scroll', throttle(handleScroll, 100));
        
        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // ========================================
    // PARALLAX EFFECT
    // ========================================
    
    function initParallax() {
        var floatingElements = document.querySelectorAll('.floating-element');
        
        document.addEventListener('mousemove', function(e) {
            var x = (e.clientX / window.innerWidth - 0.5) * 20;
            var y = (e.clientY / window.innerHeight - 0.5) * 20;
            
            floatingElements.forEach(function(el, i) {
                var speed = 0.5 + i * 0.2;
                el.style.transform = 'translate(' + (x * speed) + 'px, ' + (y * speed) + 'px)';
            });
        });
    }
    
    // ========================================
    // INITIALIZE
    // ========================================
    
    function init() {
        // Particle system
        new ParticleSystem('particleCanvas');
        
        // Scroll reveal
        initScrollReveal();
        
        // Back to top
        initBackToTop();
        
        // Parallax
        initParallax();
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();