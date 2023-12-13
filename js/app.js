/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/
const navBar = document.querySelector('#navbar__list');
const sections = document.querySelectorAll('section');

// build the nav
function buildNavBar() {
    sections.forEach(function(section) {
        // create list(li) items for each section
        const listElements = document.createElement('li');
        
        // create anchor element for each li element
        const anchorElement = document.createElement('a');
        
        // create variable for section id
        const sectionId = section.getAttribute('id');
        
        // set 'href to the section Id
        anchorElement.setAttribute('href', `#${sectionId}`);
        
        // set class name for anchor
        anchorElement.className = 'menu__link';
        
        // set inner text 
        anchorElement.innerHTML = section.getAttribute('data-nav');
        
        // add anchor to li 
        listElements.append(anchorElement);
        
        // add li elements to ul navbar
        navBar.append(listElements);
    });
}
buildNavBar();

// Scroll into viewport of section on click
function smootheScroll() {
    // create click event
    navBar.addEventListener('click', function(event) {
        // remove default click animation
        event.preventDefault();
        
        // reference target to specific link
        const hrefId = event.target.getAttribute('href');
        
        // reference desired part of page to linked target
        const section = document.querySelector(hrefId);
        
        // change scroll behavior
        section.scrollIntoView({ behavior: 'smooth', inline: 'nearest' });
        
        // Add and remove 'active' class for the clicked link
        const activeLink = document.querySelector('.active');
        if (activeLink) {
            activeLink.classList.remove('active');
        }
        event.target.classList.add('active');
    });
}
smootheScroll();

// Set sections and anchor links as active on scroll
window.addEventListener('scroll', function() {
    sections.forEach((section) => {
        // get position of sections
        const sectionBounds = section.getBoundingClientRect();
        if (sectionBounds.top >= -400 && sectionBounds.top <= 150) {
            // update class to section in viewport
            section.classList.add('your-active-class');

            // Update the active link in the navigation bar
            const sectionId = section.id;
            const correspondingLink = document.querySelector(`a[href="#${sectionId}"]`);

            if (correspondingLink) {
                // Remove 'active' class from all links
                document.querySelectorAll('.menu__link').forEach(link => {
                    link.classList.remove('active');
                });

                // Add active class to the corresponding link
                correspondingLink.classList.add('active');
            }
        } else {
            // update class to sections not in viewport
            section.classList.remove('your-active-class');
        }
    });
});
