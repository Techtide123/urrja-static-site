// Add the custom CSS if it hasn't been added yet
if (!document.querySelector('link[href="assets/css/custom.css"]')) {
  const customCSS = document.createElement("link");
  customCSS.rel = "stylesheet";
  customCSS.href = "assets/css/custom.css";
  document.head.appendChild(customCSS);
}

document.write(`<header id="xb-header-area" class="header-area is-sticky">
  <!-- Header Top Bar -->
  <div class="header-top_wrap">
    <div class="container">
      <div class="header-top ul_li_between">
        <div class="xb-help_desk">
          <img src="assets/img/icon/hero_top-icon.png" alt="Help Desk Icon" />
          <p>Help Desk : <span>+91 8328888962</span></p>
        </div>
        <div class="xb-info">
          <ul class="ul_li align-items-end">
            <li>Information For :</li>
            <li><a href="#!">Students</a></li>
            <li><a href="#!">Faculty</a></li>
            <li><a href="#!">Alumni</a></li>
            <li><a href="#!">Research</a></li>
            <li><a href="#!">Community</a></li>
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
            <img src="assets/img/logo/logo.svg" alt="Website Logo" />
          </a>
        </div>

        <!-- Main Menu -->
        <div class="main-menu__wrap ul_li navbar navbar-expand-lg">
          <nav class="main-menu collapse navbar-collapse" role="navigation" aria-label="Primary Navigation">
            <ul>
              <li class="" aria-haspopup="true" aria-expanded="false">
                <a href="index.html">Home</a>
              </li>
              <li><a href="admission.html">Admission</a></li>
              <li><a href="#!">Notes</a></li>
              <li><a href="about.html">About us</a></li>
              <li class="active"><a href="contact.html">Contact</a></li>
            </ul>
          </nav>

          <!-- Mobile Menu Wrapper -->
          <div class="xb-header-wrap">
            <div class="xb-header-menu">
              <div class="xb-header-menu-scroll">
                <div class="xb-menu-close xb-hide-xl xb-close" style="display:none;">×</div>

                <!-- Mobile Logo -->
                <div class="xb-logo-mobile xb-hide-xl">
                  <a href="index.html" rel="home">
                    <img src="assets/img/logo/logo.svg" alt="Mobile Logo" />
                  </a>
                </div>

                <!-- Mobile Search -->
                <div class="xb-header-mobile-search xb-hide-xl">
                  <form role="search" action="#" method="get">
                    <input
                      type="text"
                      placeholder="Search..."
                      name="s"
                      class="search-field"
                      aria-label="Search"
                    />
                    <button class="search-submit" type="submit">
                      <i class="far fa-search"></i>
                    </button>
                  </form>
                </div>

                <!-- Mobile Navigation -->
                <nav class="xb-header-nav" role="navigation" aria-label="Mobile Navigation">
                  <ul class="xb-menu-primary clearfix">
                    <li class="menu-item menu-item-has-children" aria-haspopup="true" aria-expanded="false">
                      <a href="index.html">Home</a>
                    </li>
                    <li class="menu-item">
                      <a href="admission.html">Admission</a>
                    </li>
                    <li class="menu-item menu-item-has-children" aria-haspopup="true" aria-expanded="false">
                      <a href="#!">Courses</a>
                      <ul class="sub-menu" aria-label="submenu">
                        <li><a href="courses.html">Courses</a></li>
                        <li><a href="course-single.html">Course Details</a></li>
                      </ul>
                    </li>
                    <li class="menu-item menu-item-has-children" aria-haspopup="true" aria-expanded="false">
                      <a href="#!">Pages</a>
                      <ul class="sub-menu" aria-label="submenu">
                        <li><a href="about.html">About Us</a></li>
                        <li class="menu-item menu-item-has-children" aria-haspopup="true" aria-expanded="false">
                          <a href="blog.html">Blog</a>
                          <ul class="sub-menu" aria-label="submenu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="blog-single.html">Blog Details</a></li>
                          </ul>
                        </li>
                        <li class="menu-item menu-item-has-children" aria-haspopup="true" aria-expanded="false">
                          <a href="event.html">Event</a>
                          <ul class="sub-menu" aria-label="submenu">
                            <li><a href="event.html">Event</a></li>
                            <li><a href="event-single.html">Event Details</a></li>
                          </ul>
                        </li>
                        <li class="menu-item menu-item-has-children" aria-haspopup="true" aria-expanded="false">
                          <a href="team.html">Team</a>
                          <ul class="sub-menu" aria-label="submenu">
                            <li><a href="team.html">Team</a></li>
                            <li><a href="team-single.html">Team Details</a></li>
                          </ul>
                        </li>
                        <li><a href="tuition-fees.html">Tuition & Fees</a></li>
                      </ul>
                    </li>
                    <li class="menu-item">
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div class="xb-header-menu-backdrop"></div>
          </div>
        </div>

        <!-- Right Header Area -->
        <div class="header-right ul_li">
          <a class="header-search header-search-btn" href="javascript:void(0);" aria-label="Open Search">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              aria-hidden="true"
            >
              <path
                d="M10.5 3.75H15"
                stroke="#170006"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.5 6H12.75"
                stroke="#170006"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.75 8.625C15.75 12.5625 12.5625 15.75 8.625 15.75C4.6875 15.75 1.5 12.5625 1.5 8.625C1.5 4.6875 4.6875 1.5 8.625 1.5"
                stroke="#170006"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.5 16.5L15 15"
                stroke="#170006"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Search
          </a>

          <div class="language_dropdown dropdown"></div>
        </div>

        <!-- Mobile Hamburger Menu Icon -->
        <div class="header-bar-mobile side-menu d-lg-none">
          <a
            class="xb-nav-mobile"
            href="javascript:void(0);"
            aria-label="Toggle mobile menu"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <i class="fal fa-bars"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</header>

<!-- Minimal JavaScript for Mobile Menu and Dropdown Toggle -->
<script>
  document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.querySelector('.xb-nav-mobile');
    const mobileMenuWrap = document.querySelector('.xb-header-wrap');
    const menuCloseBtn = document.querySelector('.xb-menu-close');

    // Handle active menu item based on current page
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    const menuItems = document.querySelectorAll('.main-menu nav ul li a, .xb-header-nav ul li a');
    
    // Remove any existing active classes
    document.querySelectorAll('.active').forEach(el => el.classList.remove('active'));
    
    menuItems.forEach(item => {
        const href = item.getAttribute('href');
        // Check if the current page matches the menu item's href
        if (href === currentPage || 
            (currentPage === 'index.html' && href === './') ||
            (currentPage === '' && href === './') ||
            (currentPage === 'index.html' && href === 'index.html')) {
            item.parentElement.classList.add('active');
            // Add active class to parent li if it's in a submenu
            const parentLi = item.closest('.menu-item-has-children');
            if (parentLi) {
                parentLi.classList.add('active');
            }
        }
        
        // Desktop menu hover effect
        if (window.innerWidth > 991) {
            item.addEventListener('mouseenter', () => {
                menuItems.forEach(link => link.parentElement.classList.remove('hover-active'));
                item.parentElement.classList.add('hover-active');
            });
            
            item.addEventListener('mouseleave', () => {
                item.parentElement.classList.remove('hover-active');
            });
        }
    });

    // Toggle mobile menu
    mobileMenuBtn?.addEventListener('click', () => {
      const expanded = mobileMenuBtn.getAttribute('aria-expanded') === 'true';
      mobileMenuBtn.setAttribute('aria-expanded', !expanded);
      mobileMenuWrap.classList.toggle('open');
      if (menuCloseBtn) menuCloseBtn.style.display = !expanded ? 'block' : 'none';
    });

    // Close mobile menu on close button click
    menuCloseBtn?.addEventListener('click', () => {
      mobileMenuWrap.classList.remove('open');
      mobileMenuBtn.setAttribute('aria-expanded', false);
      menuCloseBtn.style.display = 'none';
    });

    // Dropdown toggle for mobile submenu
    const dropdownParents = document.querySelectorAll('.menu-item-has-children > a');
    dropdownParents.forEach(parentLink => {
      parentLink.addEventListener('click', e => {
        const li = parentLink.parentElement;
        if (window.innerWidth <= 991) {
          e.preventDefault();
          const expanded = parentLink.getAttribute('aria-expanded') === 'true';
          parentLink.setAttribute('aria-expanded', !expanded);
          li.classList.toggle('open');
        }
      });
    });
  });
</script>


`);
