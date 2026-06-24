// ========================================
// FORM VALIDATION
// ========================================

(function() {
    'use strict';
    
    /**
     * Validate email format
     */
    function isValidEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    /**
     * Show field error
     */
    function showError(field, message) {
        var errorEl = document.querySelector('.form-error[data-for="' + field.id + '"]');
        if (errorEl) {
            errorEl.textContent = message;
        }
        field.classList.add('error');
    }
    
    /**
     * Clear field error
     */
    function clearError(field) {
        var errorEl = document.querySelector('.form-error[data-for="' + field.id + '"]');
        if (errorEl) {
            errorEl.textContent = '';
        }
        field.classList.remove('error');
    }
    
    /**
     * Show toast notification
     */
    function showToast(message, type) {
        var toast = document.getElementById('toast');
        if (!toast) return;
        
        toast.textContent = message;
        toast.className = 'toast ' + type;
        
        void toast.offsetWidth;
        toast.classList.add('show');
        
        setTimeout(function() {
            toast.classList.remove('show');
        }, 3000);
    }
    
    /**
     * Validate contact form
     */
    function validateContactForm(form) {
        var name = form.querySelector('#name');
        var email = form.querySelector('#email');
        var message = form.querySelector('#message');
        var isValid = true;
        
        // Validate name
        if (!name.value.trim() || name.value.trim().length < 2) {
            showError(name, 'Please enter your full name (minimum 2 characters)');
            isValid = false;
        } else {
            clearError(name);
        }
        
        // Validate email
        if (!email.value.trim() || !isValidEmail(email.value.trim())) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        } else {
            clearError(email);
        }
        
        // Validate message
        if (!message.value.trim() || message.value.trim().length < 10) {
            showError(message, 'Please enter a message (minimum 10 characters)');
            isValid = false;
        } else {
            clearError(message);
        }
        
        return isValid;
    }
    
    /**
     * Initialize contact form
     */
    function initContactForm() {
        var form = document.getElementById('contactForm');
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateContactForm(form)) {
                var submitBtn = form.querySelector('button[type="submit"]');
                var originalText = submitBtn.innerHTML;
                
                submitBtn.innerHTML = '<span>Sending...</span>';
                submitBtn.disabled = true;
                
                setTimeout(function() {
                    showToast('Message sent successfully! We\'ll get back to you soon.', 'success');
                    submitBtn.innerHTML = originalText;
                    submitBtn.disabled = false;
                    form.reset();
                }, 2000);
            }
        });
        
        // Clear errors on input
        form.querySelectorAll('input, textarea').forEach(function(field) {
            field.addEventListener('input', function() {
                clearError(field);
            });
            field.addEventListener('blur', function() {
                if (field.id === 'email' && field.value.trim()) {
                    if (!isValidEmail(field.value.trim())) {
                        showError(field, 'Please enter a valid email address');
                    } else {
                        clearError(field);
                    }
                }
            });
        });
    }
    
    /**
     * Initialize newsletter form
     */
    function initNewsletterForm() {
        var form = document.getElementById('newsletterForm');
        if (!form) return;
        
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            var input = form.querySelector('input[type="email"]');
            
            if (input && isValidEmail(input.value.trim())) {
                showToast('Subscribed successfully! Check your email for updates.', 'success');
                input.value = '';
            } else if (input) {
                showToast('Please enter a valid email address.', 'error');
                input.classList.add('error');
                setTimeout(function() {
                    input.classList.remove('error');
                }, 3000);
            }
        });
    }
    
    // Initialize when DOM is ready
    function init() {
        initContactForm();
        initNewsletterForm();
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();