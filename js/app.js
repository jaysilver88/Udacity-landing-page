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
        
        //create variable for section id
        const sectionId = section.getAttribute('id');
        
        
        // set 'href to the section Id
        anchorElement.setAttribute('href', `#${sectionId}`)
        
        // set class name for anchor
        anchorElement.className = 'menu__link';
        
        // set inner text 
        anchorElement.innerHTML = section.getAttribute('data-nav');
        
        // add anchor to li 
        listElements.append(anchorElement);
        
        // add li elements to ul navbar
        navBar.append(listElements);
        
    })
}

buildNavBar()

// Scroll into viewport of section on click
function smootheScroll() {
    // create click event
    navBar.addEventListener('click', function(event) {
        
        // remove defaut click animation
        event.preventDefault();
        
        // reference target to specific link
        const hrefId = event.target.getAttribute('href');
        
        // reference desired part of page to linked target
        const section = document.querySelector(hrefId);
        
        // change scroll behavior
        section.scrollIntoView({ behavior: "smooth", inline: "nearest" });
        
        const activeLink = document.querySelector('.active');
        if (activeLink) {
            activeLink.classList.remove('active');
        }
        event.target.classList.add('active');
    })
}

smootheScroll()

// Set sections as active
window.onscroll = () => {
    sections.forEach((section) => {
        // get postition of sections
        if (section.getBoundingClientRect().top >= -400 && section.getBoundingClientRect().top <= 150) {
            
            // update class to section in viewport
            section.classList.add("your-active-class");
        } else {
            // update class to sections not in viewport
            section.classList.remove("your-active-class");
        }
    });
};

