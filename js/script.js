/* =================================================================
   JENX PORTFOLIO - JAVASCRIPT (PASTEL AESTHETIC UPGRADES)
   Contains 10 robust interactive vanilla JS features.
   ================================================================= */

document.addEventListener('DOMContentLoaded', () => {

    // ==================== FEATURE 1: Mobile Hamburger Menu ====================
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isExpanded = navLinks.classList.contains('active');
            navToggle.setAttribute('aria-expanded', isExpanded);
        });

        // Close mobile menu when clicking any navigation link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                navToggle.setAttribute('aria-expanded', 'false');
            });
        });
    }


    // ==================== FEATURE 2: Scroll Active Nav Highlighting ====================
    const sections = document.querySelectorAll('section');
    const navItems = document.querySelectorAll('.nav-links .nav-link');

    window.addEventListener('scroll', () => {
        let currentSection = '';
        const scrollPosition = window.scrollY + 200;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                currentSection = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active-nav');
            if (item.getAttribute('href') === `#${currentSection}`) {
                item.classList.add('active-nav');
            }
        });
    });


    // ==================== FEATURE 3: Project Category Filter System ====================
   const filterButtons = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

if (filterButtons.length > 0 && projectCards.length > 0) {
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {

            // Update active filter button
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
            });

            button.classList.add('active');

            const filterValue = button.getAttribute('data-filter')
                .trim()
                .toLowerCase();

            // Filter project cards
            projectCards.forEach(card => {
                const cardCategories = (
                    card.getAttribute('data-category') || ''
                )
                    .split(',')
                    .map(category => category.trim().toLowerCase());

                if (
                    filterValue === 'all' ||
                    cardCategories.includes(filterValue)
                ) {
                    card.style.display = '';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

    
 ```javascript
    // ==================== FEATURE 4: Contact Form & Email App ====================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');
            const successMessage = document.getElementById('formSuccess');

            const name = nameInput.value.trim();
            const email = emailInput.value.trim();
            const message = messageInput.value.trim();

            const nameError = document.getElementById('nameError');
            const emailError = document.getElementById('emailError');
            const messageError = document.getElementById('messageError');

            // Clear previous errors
            if (nameError) nameError.textContent = '';
            if (emailError) emailError.textContent = '';
            if (messageError) messageError.textContent = '';

            if (successMessage) {
                successMessage.textContent = '';
            }

            let isValid = true;

            // Validate name
            if (!name) {
                if (nameError) {
                    nameError.textContent = 'Please enter your name.';
                }
                isValid = false;
            }

            // Validate email
            if (!email || !emailInput.validity.valid) {
                if (emailError) {
                    emailError.textContent = 'Please enter a valid email address.';
                }
                isValid = false;
            }

            // Validate message
            if (!message) {
                if (messageError) {
                    messageError.textContent = 'Please write a message.';
                }
                isValid = false;
            }

            if (!isValid) return;

            // Prepare the email
            const recipient = 'jenxyapyeexuan@gmail.com';

            const subject = encodeURIComponent(
                'Portfolio Enquiry from ' + name
            );

            const body = encodeURIComponent(
                'Name: ' + name + '\n' +
                'Email: ' + email + '\n\n' +
                'Message:\n' + message
            );

            const mailtoLink =
                'mailto:' + recipient +
                '?subject=' + subject +
                '&body=' + body;

            if (successMessage) {
                successMessage.textContent =
                    'Your email app should open. Please click Send in your email app to deliver your message.';
            }

            // Open the visitor's default email application
            window.location.href = mailtoLink;
        });
    }

    // ==================== FEATURE 5: Dynamic Copyright Year ====================
    const copyrightYear = document.getElementById('copyrightYear');

    if (copyrightYear) {
        copyrightYear.textContent = new Date().getFullYear();
    }

    // ==================== FEATURE 6: Scroll-to-Top Button ====================
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    if (scrollTopBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('show');
            } else {
                scrollTopBtn.classList.remove('show');
            }
        });

        scrollTopBtn.addEventListener('click', function (event) {
            event.preventDefault();

            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ==================== FEATURE 7: Typing Effect ====================
    const typingElement = document.querySelector('.typing-text');

    if (typingElement) {
        const words = ['Network Computing Student', 'Future IT Professional'];
        let wordIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function typeEffect() {
            const currentWord = words[wordIndex];

            if (deleting) {
                charIndex--;
            } else {
                charIndex++;
            }

            typingElement.textContent = currentWord.substring(0, charIndex);

            let delay = deleting ? 60 : 100;

            if (!deleting && charIndex === currentWord.length) {
                deleting = true;
                delay = 1200;
            } else if (deleting && charIndex === 0) {
                deleting = false;
                wordIndex = (wordIndex + 1) % words.length;
                delay = 400;
            }

            setTimeout(typeEffect, delay);
        }

        typeEffect();
    }

    // ==================== FEATURE 8: Project Card Hover Effect ====================
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('mouseenter', function () {
            this.classList.add('hovered');
        });

        card.addEventListener('mouseleave', function () {
            this.classList.remove('hovered');
        });
    });

    // ==================== FEATURE 9: Live Project Search ====================
    const projectSearch = document.getElementById('projectSearch');
    const filterButtons = document.querySelectorAll('.filter-btn');

    let activeFilter = 'all';

    function filterProjects() {
        const searchTerm = projectSearch
            ? projectSearch.value.trim().toLowerCase()
            : '';

        projectCards.forEach(card => {
            const categories = (card.getAttribute('data-category') || '')
                .split(',')
                .map(category => category.trim().toLowerCase());

            const title = (
                card.querySelector('h3')?.textContent || ''
            ).toLowerCase();

            const description = (
                card.querySelector('p')?.textContent || ''
            ).toLowerCase();

            const matchesCategory =
                activeFilter === 'all' || categories.includes(activeFilter);

            const matchesSearch =
                title.includes(searchTerm) ||
                description.includes(searchTerm);

            card.style.display =
                matchesCategory && matchesSearch ? '' : 'none';
        });
    }

    filterButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            activeFilter = (
                this.getAttribute('data-filter') || 'all'
            ).trim().toLowerCase();

            filterProjects();
        });
    });

    if (projectSearch) {
        projectSearch.addEventListener('input', filterProjects);
    }

    // ==================== FEATURE 10: External Link Security ====================
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.setAttribute('rel', 'noopener noreferrer');
    });

}); // End of DOMContentLoaded
```
    // ==================== FEATURE 5: Dynamic Copyright Year ====================
    const footerParagraph = document.querySelector('.site-footer p');
    if (footerParagraph) {
        const currentYear = new Date().getFullYear();
        footerParagraph.innerHTML = `&copy; ${currentYear} Jenx Yap. Built with pure HTML, CSS, and JavaScript.`;
    }


    // ==================== FEATURE 6: Scroll-to-Top Floating Pastel Button ====================
    const scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '&uarr;';
    scrollToTopBtn.setAttribute('id', 'scrollToTop');
    scrollToTopBtn.setAttribute('aria-label', 'Scroll back to top of page');
    scrollToTopBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background-color: #f472b6;
        color: white;
        border: 3px solid #1e1e24;
        border-radius: 50%;
        width: 48px;
        height: 48px;
        font-size: 22px;
        font-weight: bold;
        cursor: pointer;
        display: none;
        box-shadow: 3px 3px 0px #1e1e24;
        z-index: 1000;
        transition: transform 0.1s ease;
    `;
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 400) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });


    // ==================== FEATURE 7: Hero Subtitle Typing Effect ====================
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        heroSubtitle.textContent = '';
        let charIndex = 0;

        function typeWriter() {
            if (charIndex < originalText.length) {
                heroSubtitle.textContent += originalText.charAt(charIndex);
                charIndex++;
                setTimeout(typeWriter, 35);
            }
        }
        setTimeout(typeWriter, 500);
    }


    // ==================== FEATURE 8: Project Card Interactive Hover Effect ====================
    const projectCardsList = document.querySelectorAll('.project-card');
    projectCardsList.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translate(-3px, -3px)';
            card.style.boxShadow = '7px 7px 0px #1e1e24';
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translate(0, 0)';
            card.style.boxShadow = '4px 4px 0px #1e1e24';
        });
    });


    // ==================== FEATURE 9: Live Project Search Filter ====================
    const projectsSection = document.querySelector('#projects .container');
    if (projectsSection) {
        const searchWrapper = document.createElement('div');
        searchWrapper.style.margin = '20px 0';
        searchWrapper.innerHTML = `
            <input type="text" id="projectSearch" placeholder="🔍 Search projects by keyword..." aria-label="Search projects" style="
                width: 100%;
                max-width: 400px;
                padding: 10px 15px;
                border: 2px solid #1e1e24;
                border-radius: 8px;
                font-size: 1rem;
                font-family: 'Poppins', sans-serif;
                background-color: #f5f3ff;
                display: block;
                margin: 0 auto;
            ">
        `;
        const subtitleElem = projectsSection.querySelector('.section-subtitle');
        if (subtitleElem) {
            subtitleElem.insertAdjacentElement('afterend', searchWrapper);
        }

        const searchInput = document.getElementById('projectSearch');
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                projectCards.forEach(card => {
                    const titleText = card.querySelector('.project-title').textContent.toLowerCase();
                    const descText = card.querySelector('.project-desc').textContent.toLowerCase();

                    if (titleText.includes(query) || descText.includes(query)) {
                        card.style.display = 'block';
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        }
    }


    // ==================== FEATURE 10: External Link Security Enhancer ====================
    const allLinks = document.querySelectorAll('a');
    allLinks.forEach(link => {
        if (link.hostname !== window.location.hostname && link.getAttribute('href')?.startsWith('http')) {
            link.setAttribute('rel', 'noopener noreferrer');
            link.setAttribute('target', '_blank');
        }
    });

});