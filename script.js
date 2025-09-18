/* ==========================================================================
   SCRIPT.JS - Interactive Functionality for Modern Website
   ========================================================================== */

/* NEW FEATURES ADDED:
 * 1. Logo support in header navigation with responsive scaling
 * 2. Updated team section layout with co-founders and mentors rows
 * 3. Custom background image support (background_img1.png)
 * 4. Enhanced responsive design for new layout structure
 */

/**
 * DOM Content Loaded Event Listener
 * Initializes all functionality after the DOM is fully loaded
 */
document.addEventListener('DOMContentLoaded', function() {
    
    // Initialize all functionality
    initializeNavigation();
    initializeScrollEffects();
    initializeSmoothScrolling();
    initializeScrollToTop();
    initializeAnimations();
    initializeParallax();
    
    // NEW: Debug background image loading
    checkBackgroundImage();
    
    console.log('Website initialized successfully!');
});

/* ==========================================================================
   BACKGROUND IMAGE DEBUGGING
   ========================================================================== */

/**
 * Check if background image loads successfully
 */
function checkBackgroundImage() {
    const img = new Image();
    img.onload = function() {
        console.log('✅ Background image (background_img1.png) loaded successfully!');
    };
    img.onerror = function() {
        console.error('❌ Failed to load background image (background_img1.png)');
        console.log('💡 Troubleshooting tips:');
        console.log('   1. Check if background_img1.png exists in the same folder as index.html');
        console.log('   2. Verify the image file is not corrupted');
        console.log('   3. Try refreshing the page or clearing browser cache');
    };
    img.src = 'background_img1.png';
}

/* ==========================================================================
   NAVIGATION FUNCTIONALITY
   ========================================================================== */

/**
 * Initialize navigation functionality including mobile menu toggle
 * and active link highlighting
 */
function initializeNavigation() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav__link');
    const header = document.getElementById('header');
    
    // Mobile menu toggle functionality
    if (navToggle && navMenu) {
        navToggle.addEventListener('click', function() {
            toggleMobileMenu();
        });
        
        // Close mobile menu when clicking on nav links
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                closeMobileMenu();
            });
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = navMenu.contains(event.target) || navToggle.contains(event.target);
            if (!isClickInsideNav && navMenu.classList.contains('active')) {
                closeMobileMenu();
            }
        });
    }
    
    // Update active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        updateActiveNavLink();
        updateHeaderOnScroll();
    });
    
    // Handle keyboard navigation
    navLinks.forEach(link => {
        link.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                link.click();
            }
        });
    });
}

/**
 * Toggle mobile navigation menu
 */
function toggleMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const icon = navToggle.querySelector('i');
    
    navMenu.classList.toggle('active');
    
    // Change hamburger icon to X when menu is open
    if (navMenu.classList.contains('active')) {
        icon.classList.replace('fa-bars', 'fa-times');
        document.body.style.overflow = 'hidden'; // Prevent body scroll
    } else {
        icon.classList.replace('fa-times', 'fa-bars');
        document.body.style.overflow = ''; // Restore body scroll
    }
}

/**
 * Close mobile navigation menu
 */
function closeMobileMenu() {
    const navMenu = document.getElementById('nav-menu');
    const navToggle = document.getElementById('nav-toggle');
    const icon = navToggle.querySelector('i');
    
    navMenu.classList.remove('active');
    icon.classList.replace('fa-times', 'fa-bars');
    document.body.style.overflow = ''; // Restore body scroll
}

/**
 * Update active navigation link based on current scroll position
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav__link');
    const scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach(link => {
                link.classList.remove('active');
            });
            
            // Add active class to current section link
            const activeLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    });
}

/**
 * Update header appearance on scroll
 */
function updateHeaderOnScroll() {
    const header = document.getElementById('header');
    const scrollY = window.pageYOffset;
    
    if (scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}

/* ==========================================================================
   SMOOTH SCROLLING FUNCTIONALITY
   ========================================================================== */

/**
 * Initialize smooth scrolling for navigation links
 */
function initializeSmoothScrolling() {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                smoothScrollToElement(targetSection);
            }
        });
    });
}

/**
 * Smooth scroll to a specific element
 * @param {Element} element - The target element to scroll to
 */
function smoothScrollToElement(element) {
    const headerHeight = document.getElementById('header').offsetHeight;
    const targetPosition = element.offsetTop - headerHeight;
    
    window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
    });
}

/* ==========================================================================
   SCROLL TO TOP FUNCTIONALITY
   ========================================================================== */

/**
 * Initialize scroll to top button functionality
 */
function initializeScrollToTop() {
    const scrollTopBtn = document.getElementById('scroll-top');
    
    if (scrollTopBtn) {
        // Show/hide scroll to top button based on scroll position
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        
        // Scroll to top when button is clicked
        scrollTopBtn.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        
        // Keyboard accessibility for scroll to top button
        scrollTopBtn.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                this.click();
            }
        });
    }
}

/* ==========================================================================
   SCROLL ANIMATIONS AND EFFECTS
   ========================================================================== */

/**
 * Initialize scroll-based animations and effects
 */
function initializeScrollEffects() {
    // Create intersection observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all sections for scroll animations
    const animatedElements = document.querySelectorAll('.section, .technology__card, .team__member, .services__item');
    animatedElements.forEach(element => {
        // Set initial state for animations
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        observer.observe(element);
    });
}

/**
 * Initialize general animations for various elements
 */
function initializeAnimations() {
    // Add staggered animation delay to technology cards
    const techCards = document.querySelectorAll('.technology__card');
    techCards.forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add staggered animation delay to team members - Updated for new layout
    const teamSections = document.querySelectorAll('.team__section');
    teamSections.forEach((section, sectionIndex) => {
        const teamMembers = section.querySelectorAll('.team__member');
        teamMembers.forEach((member, memberIndex) => {
            // Stagger animations within each section
            member.style.transitionDelay = `${(sectionIndex * 0.3) + (memberIndex * 0.1)}s`;
        });
    });
    
    // Add staggered animation delay to service items
    const serviceItems = document.querySelectorAll('.services__item');
    serviceItems.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
    });
    
    // Add hover effects to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.02)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
}

/* ==========================================================================
   PARALLAX EFFECTS
   ========================================================================== */

/**
 * Initialize parallax scrolling effects
 */
function initializeParallax() {
    const heroBackground = document.querySelector('.hero__bg-image');
    
    if (heroBackground) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            
            // Apply parallax effect only if user hasn't disabled motion
            if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
                heroBackground.style.transform = `translateY(${rate}px)`;
            }
        });
    }
}

/* ==========================================================================
   UTILITY FUNCTIONS
   ========================================================================== */

/**
 * Debounce function to limit the rate of function execution
 * @param {Function} func - The function to debounce
 * @param {number} wait - The number of milliseconds to delay
 * @param {boolean} immediate - Whether to trigger on the leading edge
 * @returns {Function} - The debounced function
 */
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        
        if (callNow) func.apply(context, args);
    };
}

/**
 * Throttle function to limit the rate of function execution
 * @param {Function} func - The function to throttle
 * @param {number} limit - The number of milliseconds to throttle
 * @returns {Function} - The throttled function
 */
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

/* ==========================================================================
   PERFORMANCE OPTIMIZATIONS
   ========================================================================== */

// Optimize scroll events with throttling
window.addEventListener('scroll', throttle(function() {
    updateActiveNavLink();
    updateHeaderOnScroll();
}, 16)); // ~60fps

// Optimize resize events with debouncing
window.addEventListener('resize', debounce(function() {
    // Close mobile menu on resize to larger screen
    if (window.innerWidth > 768) {
        closeMobileMenu();
    }
}, 250));

/* ==========================================================================
   ACCESSIBILITY ENHANCEMENTS
   ========================================================================== */

/**
 * Handle keyboard navigation for interactive elements
 */
document.addEventListener('keydown', function(event) {
    // Handle Escape key to close mobile menu
    if (event.key === 'Escape') {
        const navMenu = document.getElementById('nav-menu');
        if (navMenu && navMenu.classList.contains('active')) {
            closeMobileMenu();
        }
    }
    
    // Handle Tab key for better focus management
    if (event.key === 'Tab') {
        document.body.classList.add('keyboard-navigation');
    }
});

// Remove keyboard navigation class when mouse is used
document.addEventListener('mousedown', function() {
    document.body.classList.remove('keyboard-navigation');
});

/* ==========================================================================
   ERROR HANDLING AND LOADING STATES
   ========================================================================== */

/**
 * Handle image loading errors gracefully
 */
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img');
    
    images.forEach(img => {
        img.addEventListener('error', function() {
            console.warn(`Failed to load image: ${this.src}`);
            
            // NEW: Special handling for logo image
            if (this.classList.contains('nav__logo-image')) {
                this.style.display = 'none'; // Hide logo if it fails to load
                console.info('Logo image failed to load - hidden from view');
            } else {
                // For other images, add placeholder styling
                this.style.opacity = '0.5';
                this.alt = 'Image failed to load';
            }
        });
        
        img.addEventListener('load', function() {
            this.style.opacity = '1';
        });
    });
});

/**
 * Handle external resource loading failures
 */
window.addEventListener('error', function(event) {
    if (event.target.tagName === 'LINK' || event.target.tagName === 'SCRIPT') {
        console.warn(`Failed to load external resource: ${event.target.src || event.target.href}`);
    }
});

/* ==========================================================================
   FORM INTERACTIONS (if forms are added in the future)
   ========================================================================== */

/**
 * Initialize form functionality
 * This function is ready for future form implementations
 */
function initializeForms() {
    const forms = document.querySelectorAll('form');
    
    forms.forEach(form => {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            // Add form validation and submission logic here
            console.log('Form submitted:', this);
            
            // Example: Show success message
            showNotification('Form submitted successfully!', 'success');
        });
    });
}

/**
 * Show notification messages
 * @param {string} message - The message to display
 * @param {string} type - The type of notification (success, error, info)
 */
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification--${type}`;
    notification.textContent = message;
    
    // Style the notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        padding: '12px 24px',
        backgroundColor: type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6',
        color: 'white',
        borderRadius: '8px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        zIndex: '10000',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease'
    });
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    }, 10);
    
    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 3000);
}

/* ==========================================================================
   ANALYTICS AND TRACKING (placeholder for future implementation)
   ========================================================================== */

/**
 * Track user interactions for analytics
 * This is a placeholder function for future analytics implementation
 */
function trackInteraction(action, element) {
    // Example: Google Analytics event tracking
    // gtag('event', action, {
    //     'event_category': 'engagement',
    //     'event_label': element
    // });
    
    console.log(`Analytics: ${action} on ${element}`);
}

// Track navigation clicks
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('nav__link')) {
        trackInteraction('navigation_click', event.target.textContent.trim());
    }
    
    if (event.target.classList.contains('btn')) {
        trackInteraction('button_click', event.target.textContent.trim());
    }
});

/* ==========================================================================
   CONSOLE WELCOME MESSAGE
   ========================================================================== */

// Display a welcome message in the console for developers
console.log(`
🚀 WE-Sensing Website
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Built with modern web technologies and best practices.

Features:
✓ Responsive Design
✓ Smooth Scrolling
✓ Mobile Navigation
✓ Scroll Animations
✓ Parallax Effects
✓ Accessibility Features
✓ Performance Optimizations

For support or customization, contact the development team.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`);

/* ==========================================================================
   MODULE EXPORTS (for future bundling)
   ========================================================================== */

// If using a module bundler, export the main functions
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        initializeNavigation,
        initializeScrollEffects,
        initializeSmoothScrolling,
        initializeScrollToTop,
        initializeAnimations,
        initializeParallax,
        showNotification,
        trackInteraction
    };
}