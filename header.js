document.write(`
      <style>
        .btn {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 8px 16px;
            height: 36px;
            font-size: 14px;
            font-weight: 500;
            color: #111827;
            background: #ffffff;
            border: 1px solid #e5e7eb;
            border-radius: 6px;
            box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
            cursor: pointer;
            transition: all 0.2s ease;
            margin:25px 60px
        }

        .btn:hover:not(:disabled) {
            background: #df2822ff;
            color: #000;
        }

        .btn:focus-visible {
            outline: none;
            box-shadow: 0 0 0 3px rgba(99, 102, 241, 0.3);
        }

        .btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
        }

        .btn svg {
            width: 18px;
            height: 18px;
            stroke: currentColor;
        }

        /* media query for mobile screen */

        @media screen and (max-width: 767px) {
            .header-top_wrap {
                display: none;
            }
        }
    </style>
  
    <!-- header start -->
        <header id="xb-header-area" class="header-area is-sticky">
            <div class="header-top_wrap">
                <div class="container">
                    <div class="header-top ul_li_between">
                        <div class="xb-help_desk">
                            <img src="assets/img/icon/hero_top-icon.png" alt="">
                            <p>Help Desk : <span style="font-size: 14px;">+91 8328888962</span></p>
                        </div>
                        <div class="xb-info">
                            <p>Location : <span style="font-size: 14px;">Anant nagar 1st line extension ,Ram Nagar,Brahmapur, Odisha , 760005 </span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div class="xb-header">
                <div class="container">
                    <div class="header__wrap ul_li_between">
                        <div class="header-logo">
                            <a href="index.html"><img src="assets/img/logo/logo.svg" alt="" style="width: 65px;"></a>
                        </div>
                        <div class="main-menu__wrap ul_li navbar navbar-expand-lg">
                            <nav class="main-menu collapse navbar-collapse">
                                <ul>
                                    <li>
                                        <a href="index.html">Home</a>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="about.html">About Us</a>
                                        <ul class="submenu">
                                            <li><a href="about.html#history">Our History</a></li>
                                            <li><a href="about.html#mission-vission">Mission & Vision</a></li>
                                            <li><a href="about.html#Our-Core-Values">Our Core Values</a></li>
                                            <li><a href="about.html#explore">Explore us</a></li>
                                            <li><a href="about.html#whyus">Why Choose Us</a></li>
                                            <li><a href="about.html#director">Director’s Message</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="academic.html">Academics</a>
                                        <ul class="submenu">
                                            <li><a href="academic.html#courses">Courses</a></li>
                                            <li><a href="academic.html#affiliation">Affiliation</a></li>
                                            <li><a href="academic.html#teams">Faculty</a></li>
                                        </ul>
                                    </li>
                                    <li class="menu-item-has-children">
                                        <a href="academic.html">Examination</a>
                                        <ul class="submenu">
                                            <li><a href="academic.html#syllabus">Syllabus</a></li>
                                            <li><a href="academic.html#questionbank">Question Bank</a></li>
                                            <li><a href="academic.html#result">Results</a></li>
                                        </ul>
                                    </li>
                                    <li><a href="https://urrja-accademi.vercel.app/admission">Admission</a></li>
                                    <li><a href="https://urrja-accademi.vercel.app/notes">Notes</a></li>
                                    <li class="menu-item-has-children">
                                        <a href="gallery.html">Gallery</a>
                                        <ul class="submenu">
                                            <li><a href="gallery.html#Campus">Campus</a></li>
                                            <li><a href="gallery.html#Events">Events</a></li>
                                        </ul>
                                    </li>
                                    <!-- <li class="menu-item-has-children">
                                        <a href="#!">Pages</a>
                                        <ul class="submenu">
                                            <li><a href="about.html">About Us</a></li>
                                            <li class="menu-item-has-children"><a href="blog.html">Blog</a>
                                                <ul class="submenu">
                                                    <li><a href="blog.html">Blog</a></li>
                                                    <li><a href="blog-single.html">Blog Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children"><a href="event.html">Event</a>
                                                <ul class="submenu">
                                                    <li><a href="event.html">Event</a></li>
                                                    <li><a href="event-single.html">Event Details</a></li>
                                                </ul>
                                            </li>
                                            <li class="menu-item-has-children"><a href="team.html">Team</a>
                                                <ul class="submenu">
                                                    <li><a href="team.html">Team</a></li>
                                                    <li><a href="team-single.html">Team Details</a></li>
                                                </ul>
                                            </li>
                                            <li><a href="tuition-fees.html">Tuition & Fees</a></li>
                                        </ul>
                                    </li> -->
                                    <li>
                                        <a href="contact.html">Contact</a>
                                    </li>
                                </ul>
                                
                            </nav>
                            <div class="xb-header-wrap">
                                <div class="xb-header-menu">
                                    <div class="xb-header-menu-scroll">
                                        <div class="xb-menu-close xb-hide-xl xb-close"></div>
                                        <div class="xb-logo-mobile xb-hide-xl">
                                            <a href="index.html" rel="home"><img src="assets/img/logo/logo.svg"
                                                    alt=""></a>
                                        </div>

                                        <nav class="xb-header-nav">
                                            <ul class="xb-menu-primary clearfix">
                                                <li class="menu-item ">
                                                    <a href="index.html">Home</a>
                                                </li>
                                                <li class="menu-item menu-item-has-children">
                                                    <a href="about.html">About us</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="about.html#history">Our History</a></li>
                                                        <li><a href="about.html#mission-vission">Mission & Vision</a>
                                                        </li>
                                                        <li><a href="about.html#explore">Explore us</a></li>
                                                        <li><a href="about.html#whyus">Why Choose Us</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item menu-item-has-children">
                                                    <a href="academic.html">Academics</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="academic.html#courses">Courses</a></li>
                                                        <li><a href="academic.html#affiliation">Affiliation</a></li>
                                                        <li><a href="academic.html#teams">Faculty</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item menu-item-has-children">
                                                    <a href="academic.html">Examination</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="academic.html#courses">Syllabus</a></li>
                                                        <li><a href="academic.html#affiliation">Question Bank</a></li>
                                                        <li><a href="academic.html#teams">Results</a></li>
                                                    </ul>
                                                </li>
                                                <li><a href="https://urrja-accademi.vercel.app/admission">Admission</a>
                                                </li>
                                                <li><a href="https://urrja-accademi.vercel.app/notes">Notes</a></li>
                                                <li class="menu-item menu-item-has-children">
                                                    <a href="gallery.html">Gallery</a>
                                                    <ul class="sub-menu">
                                                        <li><a href="gallery.html#Campus">Campus</a></li>
                                                        <li><a href="gallery.html#Events">Events</a></li>
                                                    </ul>
                                                </li>
                                                <li class="menu-item">
                                                    <a href="contact.html">Contact</a>
                                                </li>
                                                <a href="https://urrja-accademi.vercel.app/admin/login" class="btn">Admin</a>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                <div class="xb-header-menu-backdrop"></div>
                            </div>
                        </div>
                        <div class="header-right ul_li">
                            <a href="https://urrja-accademi.vercel.app/admin/login" class="admin-btn">
                                <button type="button" class="btn">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round">
                                        <path d="m10 17 5-5-5-5"></path>
                                        <path d="M15 12H3"></path>
                                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"></path>
                                    </svg>
                                    Admin Panel
                                </button>
                            </a>
                        </div>
                        <div class="header-bar-mobile side-menu d-lg-none">
                            <a class="xb-nav-mobile" href="javascript:void(0);"><i class="fal fa-bars"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- header end -->

        <!-- header search start -->
        <div class="header-search-form-wrapper">
            <div class="xb-search-close xb-close"></div>
            <div class="header-search-container">
                <form role="search" class="search-form" action="#">
                    <input type="search" class="search-field" placeholder="Search …" value="" name="s">
                    <button type="submit" class="search-submit"><i class="far fa-search"></i></button>
                </form>
            </div>
        </div>
        <div class="body-overlay"></div>
        <!-- header search end -->
  `);
