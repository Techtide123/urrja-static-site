// Add the custom CSS if it hasn't been added yet
if (!document.querySelector('link[href="assets/css/custom.css"]')) {
  const customCSS = document.createElement("link");
  customCSS.rel = "stylesheet";
  customCSS.href = "assets/css/custom.css";
  document.head.appendChild(customCSS);
}

document.write(`<header id="xb-header-area" class="header-area is-sticky">
  <div class="header-top_wrap">
    <div class="container">
      <div class="header-top ul_li_between">
        <div class="xb-help_desk">
          <img  src="assets/img/icon/hero_top-icon.png" style="max-width: 70%;" alt="Help Desk Icon" />
          <p>Help Desk : <span>+91 8328888962</span></p>
        </div>
        <div class="xb-info">
          <ul class="ul_li align-items-end">
            <li>Address:- </li>
            <li> Ram Nagar,</li>
            <li>Brahmapur,</li>
            <li> Odisha , 760005  </li>
           
          </ul>
        </div>
      </div>
    </div>
  </div>

  <!-- Main Header -->
  <div class="xb-header">
    <div class="container">
      <div class="header__wrap ul_li_between">
        <!-- Logo -->
        <div class="header-logo">
          <a href="index.html">
            <img class="logoimage" src="assets/img/logo/logo.svg" alt="Website Logo" />
          </a>
        </div>

        <!-- Main Menu -->
        <div class="main-menu__wrap ul_li navbar navbar-expand-lg">
          <nav class="main-menu collapse navbar-collapse" role="navigation" aria-label="Primary Navigation">
            <ul>
              <li class="" aria-haspopup="true" aria-expanded="false">
                <a href="index.html">Home</a>
              </li>
                <li><a href="about.html">About us</a></li>
                 <li><a href="certificate.html">Certification</a></li>
              <li><a href="https://urrja-accademi.vercel.app/admission">Admission</a></li>
              <li><a href="#!">Notes</a></li>
              <li><a href="contact.html">Contact us</a></li>
              <li><a href="https://urrja-accademi.vercel.app/admin/login">Admin Login</a></li>
            </ul>
          </nav>

          <!-- Mobile Menu Wrapper -->
          <div class="xb-header-wrap mobile-menu-overlay">
            <div class="xb-header-menu mobile-menu-container">
              <div class="xb-header-menu-scroll mobile-menu-content">
                <div class="xb-menu-close xb-hide-xl xb-close mobile-close-btn" style="display:none;">
                  <i class="fas fa-times"></i>
                </div>

                <!-- Mobile Logo -->
                <div class="xb-logo-mobile xb-hide-xl mobile-logo-section">
                  <a href="index.html" rel="home">
                    <img src="assets/img/logo/logo.svg" alt="Mobile Logo" />
                  </a>
                </div>

                <!-- Mobile Navigation -->
                <nav class="xb-header-nav mobile-navigation" role="navigation" aria-label="Mobile Navigation">
                  <ul class="mobile-nav-list">
                    <li class="mobile-nav-item" aria-haspopup="true" aria-expanded="false">
                      <a href="index.html" class="mobile-nav-link">
                        <i class="fas fa-home mobile-nav-icon"></i>
                        <span>Home</span>
                      </a>
                    </li>
                    <li class="mobile-nav-item">
                      <a href="about.html" class="mobile-nav-link">
                        <i class="fas fa-info-circle mobile-nav-icon"></i>
                        <span>About us</span>
                      </a>
                    </li>
                    <li class="mobile-nav-item">
                      <a href="certificate.html" class="mobile-nav-link">
                        <i class="fas fa-certificate mobile-nav-icon"></i>
                        <span>Certification</span>
                      </a>
                    </li>
                    <li class="mobile-nav-item">
                      <a href="https://urrja-accademi.vercel.app/admission" class="mobile-nav-link">
                        <i class="fas fa-graduation-cap mobile-nav-icon"></i>
                        <span>Admission</span>
                      </a>
                    </li>
                    <li class="mobile-nav-item">
                      <a href="#!" class="mobile-nav-link">
                        <i class="fas fa-book mobile-nav-icon"></i>
                        <span>Notes</span>
                      </a>
                    </li>
                    <li class="mobile-nav-item">
                      <a href="contact.html" class="mobile-nav-link">
                        <i class="fas fa-envelope mobile-nav-icon"></i>
                        <span>Contact us</span>
                      </a>
                    </li>
                    <li class="mobile-nav-item">
                      <a href="https://urrja-accademi.vercel.app/admin/login" class="mobile-nav-link">
                        <i class="fas fa-sign-in-alt mobile-nav-icon"></i>
                        <span>Admin Login</span>
                      </a>
                    </li>
                  </ul>
                </nav>

                <!-- Mobile Contact Info -->
                <div class="mobile-contact-info">
                  <div class="mobile-help-desk">
                    <i class="fas fa-phone-alt"></i>
                    <span>+91 8328888962</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="xb-header-menu-backdrop mobile-backdrop"></div>
          </div>
        </div>

        <!-- Right Header Area -->
        <div class="header-right ul_li">
          <div class="language_dropdown dropdown"></div>
        </div>

        <!-- Mobile Hamburger Menu Icon -->
        <div class="header-bar-mobile side-menu d-lg-none">
          <a
            class="xb-nav-mobile mobile-menu-toggle"
            href="javascript:void(0);"
            aria-label="Toggle mobile menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
            <span class="hamburger-line"></span>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>

<style>
/* Enhanced Mobile Navigation Styles */
@media (max-width: 991px) {
  /* Mobile Menu Overlay */
  .mobile-menu-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 9999;
    visibility: hidden;
    opacity: 0;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  }

  .mobile-menu-overlay.open {
    visibility: visible;
    opacity: 1;
  }

  /* Mobile Menu Container */
  .mobile-menu-container {
    position: absolute;
    top: 0;
    right: 0;
    width: 320px;
    max-width: 85vw;
    height: 100vh;
    background: linear-gradient(135deg, #ffffff 0%, #f8f9fa 100%);
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.15);
    transform: translateX(100%);
    transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    overflow: hidden;
  }

  .mobile-menu-overlay.open .mobile-menu-container {
    transform: translateX(0);
  }

  /* Mobile Menu Content */
  .mobile-menu-content {
    height: 100%;
    overflow-y: auto;
    padding: 0;
    position: relative;
  }

  /* Mobile Close Button */
  .mobile-close-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background: #ff6b35;
    color: white;
    border-radius: 50%;
    display: flex !important;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
    z-index: 10;
    font-size: 16px;
  }

  .mobile-close-btn:hover {
    background: #e55a2b;
    transform: rotate(90deg);
  }

  /* Mobile Logo Section */
  .mobile-logo-section {
    padding: 30px 20px 20px;
    text-align: center;
    border-bottom: 1px solid #e9ecef;
    margin-bottom: 20px;
  }

  .mobile-logo-section img {
    max-height: 50px;
    width: auto;
  }

  /* Mobile Navigation List */
  .mobile-nav-list {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .mobile-nav-item {
    margin: 0;
    border-bottom: 1px solid #f1f3f4;
  }

  .mobile-nav-item:last-child {
    border-bottom: none;
  }

  /* Mobile Navigation Links */
  .mobile-nav-link {
    display: flex;
    align-items: center;
    padding: 18px 20px;
    color: #333;
    text-decoration: none;
    font-weight: 500;
    font-size: 16px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
  }

  .mobile-nav-link::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 107, 53, 0.1), transparent);
    transition: left 0.5s ease;
  }

  .mobile-nav-link:hover::before {
    left: 100%;
  }

  .mobile-nav-link:hover,
  .mobile-nav-item.active .mobile-nav-link {
    color: #ff6b35;
    background-color: rgba(255, 107, 53, 0.05);
    padding-left: 25px;
  }

  /* Mobile Navigation Icons */
  .mobile-nav-icon {
    width: 20px;
    margin-right: 15px;
    font-size: 16px;
    text-align: center;
    transition: transform 0.3s ease;
  }

  .mobile-nav-link:hover .mobile-nav-icon {
    transform: scale(1.1);
  }

  /* Active State */
  .mobile-nav-item.active .mobile-nav-link {
    background-color: rgba(255, 107, 53, 0.1);
    color: #ff6b35;
    font-weight: 600;
  }

  .mobile-nav-item.active .mobile-nav-link::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 4px;
    height: 100%;
    background: #ff6b35;
  }

  /* Mobile Contact Info */
  .mobile-contact-info {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 20px;
    background: #f8f9fa;
    border-top: 1px solid #e9ecef;
  }

  .mobile-help-desk {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #666;
    font-size: 14px;
  }

  .mobile-help-desk i {
    margin-right: 8px;
    color: #ff6b35;
  }

  /* Mobile Backdrop */
  .mobile-backdrop {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    backdrop-filter: blur(2px);
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .mobile-menu-overlay.open .mobile-backdrop {
    opacity: 1;
  }

  /* Enhanced Hamburger Menu */
  .mobile-menu-toggle {
    position: relative;
    width: 30px;
    height: 24px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .hamburger-line {
    width: 100%;
    height: 3px;
    background: #333;
    border-radius: 2px;
    transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    transform-origin: center;
  }

  .mobile-menu-toggle[aria-expanded="true"] .hamburger-line:nth-child(1) {
    transform: rotate(45deg) translate(6px, 6px);
  }

  .mobile-menu-toggle[aria-expanded="true"] .hamburger-line:nth-child(2) {
    opacity: 0;
    transform: translateX(20px);
  }

  .mobile-menu-toggle[aria-expanded="true"] .hamburger-line:nth-child(3) {
    transform: rotate(-45deg) translate(6px, -6px);
  }

  /* Animation for menu items */
  .mobile-menu-overlay.open .mobile-nav-item {
    animation: slideInFromRight 0.4s ease forwards;
  }

  .mobile-nav-item:nth-child(1) { animation-delay: 0.1s; }
  .mobile-nav-item:nth-child(2) { animation-delay: 0.15s; }
  .mobile-nav-item:nth-child(3) { animation-delay: 0.2s; }
  .mobile-nav-item:nth-child(4) { animation-delay: 0.25s; }
  .mobile-nav-item:nth-child(5) { animation-delay: 0.3s; }
  .mobile-nav-item:nth-child(6) { animation-delay: 0.35s; }

  @keyframes slideInFromRight {
    from {
      opacity: 0;
      transform: translateX(30px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
}

/* Hide mobile menu on desktop */
@media (min-width: 992px) {
  .mobile-menu-overlay {
    display: none !important;
  }
}
</style>

<!-- Enhanced JavaScript for Mobile Menu and Navigation -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.mobile-menu-toggle');
    const mobileMenuWrap = document.querySelector('.mobile-menu-overlay');
    const menuCloseBtn = document.querySelector('.mobile-close-btn');
    const mobileBackdrop = document.querySelector('.mobile-backdrop');

    // Handle active menu item based on current page
    function setActiveMenuItem() {
        const currentPath = window.location.pathname;
        const currentPage = currentPath.split('/').pop() || 'index.html';
        
        // Remove any existing active classes
        document.querySelectorAll('li.active, .mobile-nav-item.active').forEach(el => el.classList.remove('active'));
        
        // Get all menu items
        const desktopMenuItems = document.querySelectorAll('.main-menu nav ul li a');
        const mobileMenuItems = document.querySelectorAll('.mobile-nav-link');
        
        // Function to check and set active for a menu item
        function checkAndSetActive(menuItems, isMobile = false) {
            menuItems.forEach(item => {
                const href = item.getAttribute('href');
                if (!href || href === '#!' || href === '#') return;
                
                const hrefPage = href.split('/').pop();
                let isActive = false;
                
                if (currentPage === 'index.html' || currentPage === '') {
                    isActive = (href === 'index.html' || hrefPage === 'index.html');
                } else {
                    isActive = (hrefPage === currentPage);
                }
                
                if (isActive) {
                    if (isMobile) {
                        item.parentElement.classList.add('active');
                    } else {
                        item.parentElement.classList.add('active');
                    }
                }
            });
        }
        
        // Set active for both desktop and mobile menus
        checkAndSetActive(desktopMenuItems, false);
        checkAndSetActive(mobileMenuItems, true);
    }
    
    // Set active menu item immediately and after a short delay
    setActiveMenuItem();
    setTimeout(setActiveMenuItem, 100);

    // Add hover effects for desktop menu
    const desktopMenuItems = document.querySelectorAll('.main-menu nav ul li a');
    
    // Desktop hover effects
    desktopMenuItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            // Remove hover-active from all items
            desktopMenuItems.forEach(link => link.parentElement.classList.remove('hover-active'));
            // Add hover-active to current item
            item.parentElement.classList.add('hover-active');
        });
        
        item.addEventListener('mouseleave', () => {
            item.parentElement.classList.remove('hover-active');
        });
    });

    // Mobile menu functionality
    function openMobileMenu() {
        mobileMenuWrap.classList.add('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'true');
        document.body.style.overflow = 'hidden'; // Prevent body scroll
        
        // Add staggered animation to menu items
        const menuItems = document.querySelectorAll('.mobile-nav-item');
        menuItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(30px)';
            setTimeout(() => {
                item.style.transition = 'all 0.4s ease';
                item.style.opacity = '1';
                item.style.transform = 'translateX(0)';
            }, 100 + (index * 50));
        });
    }

    function closeMobileMenu() {
        mobileMenuWrap.classList.remove('open');
        mobileMenuBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = ''; // Restore body scroll
        
        // Reset menu items animation
        const menuItems = document.querySelectorAll('.mobile-nav-item');
        menuItems.forEach(item => {
            item.style.transition = '';
            item.style.opacity = '';
            item.style.transform = '';
        });
    }

    // Toggle mobile menu
    mobileMenuBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      const isOpen = mobileMenuWrap.classList.contains('open');
      
      if (isOpen) {
        closeMobileMenu();
      } else {
        openMobileMenu();
      }
    });

    // Close mobile menu on close button click
    menuCloseBtn?.addEventListener('click', (e) => {
      e.preventDefault();
      closeMobileMenu();
    });

    // Close mobile menu when clicking on backdrop
    mobileBackdrop?.addEventListener('click', () => {
      closeMobileMenu();
    });

    // Close mobile menu on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobileMenuWrap.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    // Handle mobile menu links
    const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
    mobileNavLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        // Close menu when clicking on a link (except for #! links)
        const href = link.getAttribute('href');
        if (href && href !== '#!' && href !== '#') {
          setTimeout(() => {
            closeMobileMenu();
          }, 150);
        }
      });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 991 && mobileMenuWrap.classList.contains('open')) {
        closeMobileMenu();
      }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href === '#' || href === '#!') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
          closeMobileMenu();
        }
      });
    });
  });
</script>


`);
