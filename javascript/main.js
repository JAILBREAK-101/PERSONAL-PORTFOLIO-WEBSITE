//FOR THE MAIN JAVASCRIPT OF THE WEBPAGE, AND ALSO OTHER FUNCTIONALITIES ON THE WEBPAGE.
let scroll_html = document.getElementsByTagName('html')[0];

let section_nav = document.getElementById('navigation');
let home_section = document.getElementById('head');
let first_section_options = {
    // root_margin: '-200px 0px 0px 0px'
};

let home_sect_observer = new IntersectionObserver((entries, first_section_options) => {
    // Code for Intersection observer comes in here.
    entries.forEach(entry => {
        // If there's no insection
        if (!entry.isIntersecting) {
            section_nav.classList.add('scrolled-nav');
        }
        // else if (entry.isIntersecting && section_nav.className == 'scrolled-nav') {
        //     // Do nothing.
        // }
        else {
            section_nav.classList.remove('scrolled-nav');
        }
    })
}, first_section_options);

home_sect_observer.observe(home_section);


// THE CONDITION TO CHECK IF WE HAVE SCROLLED PAST A CERTAIN LIMIT, TO DISPLAY THE BACKGROUND OF THE NAVIGATION SECTION.

