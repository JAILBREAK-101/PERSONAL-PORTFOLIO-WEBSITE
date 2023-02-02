// The Variables.
const main_carousel = document.getElementsByClassName('carousel')[0];
const track_container = document.querySelector('.carousel-track-container');

// The Slides in my carousel.
const slides_container = document.getElementsByClassName('carousel-slides-list')[0];

let my_slides = Array.from(slides_container.children);

// The Buttons.
const left_button = document.querySelector('.left-btn');
const right_button = document.getElementById('right-button');

// before starting the movement, we know to know how much width we'll move.
my_slides_width = my_slides[0].getBoundingClientRect().width;

// How far each slide is from the first one.

//  = my_slides[0] *2 + my_slides_width + 'px';
// each slide.
my_slides[0].style.left = my_slides_width * 0 +'px';
my_slides[1].style.left = my_slides_width * 1 + 'px';
my_slides[2].style.left = my_slides_width * 2 + 'px';
my_slides[3].style.left = my_slides_width * 3 + 'px';
my_slides[4].style.left = my_slides_width * 4 + 'px';

// Setting my slides position.
// for (slides in slides_container) {    
    // let move_the_slides = (slide, index) => {
    //     slide.style.left = my_slides_width * index + 'px';
    // }
// }

// For each of my slides
// for (slides in slides_container) {
//     move_the_slides();
// }
// my_slides.forEach((slide, index) => {
//     move_the_slides();
// });

// my_slides.forEach(move_slides(slide, index));
// my_slides.forEach(move_the_slides);

// The Movement.
function move_slides(track_container, current_slide, target_slide) {
    // let target_slide = my_slides[my_slides_width];
    track_container.style.transform = 'translateX( -'+target_slide.style.left +')';
    // let current_slide = document.querySelector('.current-slide');
    // let target_slide = current_slide.nextElementSibling;
    current_slide.classList.remove('current-slide');
    target_slide.classList.add('current-slide');
    if (my_slides[target_slide] > my_slides.length) {
        console.log(my_slides[target_slide])
        // current_slide.classList.remove('current-slide');
        // target_slide[0].classList.add('current-slide');
    }
    // console.log(current_slide);
}

// Hiding and showing
function hiding_showing (my_slides, current_index_slide, left_button, right_button) {
    // let current_slide = track_container.querySelector('.current-slide');
    // let current_slide_index = my_slides.findIndex((slide) => {
        // slide.querySelector('.current-slide');
        // })
        // let total_slides = my_slides.length;
        if (current_index_slide === my_slides.length - 1) {
        left_button.classList.remove('.is-hidden');
        right_button.classList.add('is-hidden');
    }
    else if (current_index_slide === 0) {
        right_button.classList.remove('is-hidden');
        left_button.classList.add('is-hidden');
    }
    else {
        right_button.classList.remove('is-hidden');
        left_button.classList.remove('is-hidden');
    }
}

// THE MOVEMENT WHEN I CLICK, IN ACTION.
right_button.addEventListener('click', () => {
    const current_slide = track_container.querySelector('.current-slide');
    const next_slide = current_slide.nextElementSibling;
    const next_index = my_slides.findIndex(slide => slide === next_slide);
    // move_the_slides(current_slide,0);
    move_slides(track_container, current_slide, next_slide);
    hiding_showing(my_slides, next_index, left_button, right_button);
})

left_button.addEventListener('click', () => {
    let current_slide = track_container.querySelector('.current-slide');
    let previous_slide = current_slide.previousElementSibling;
    const prev_index = my_slides.findIndex(slide => slide === previous_slide);
    move_slides(track_container, current_slide, previous_slide);
    hiding_showing(my_slides, prev_index, left_button, right_button);
})

// // Animation.
// let id = setInterval(() => {
//     // For Movement.
//     const current_slide = track_container.querySelector('.current-slide');
//     const next_slide = current_slide.nextElementSibling;
//     move_slides(track_container, current_slide, next_slide);
//     // move_slides(track_container, current_slide, previous_slide);

//     // For Buttons hiding and showing.
//     const next_index = my_slides.findIndex(slide => slide === next_slide);
//     hiding_showing(my_slides, next_index, left_button, right_button);
//     // hiding_showing(my_slides, prev_index, left_button, right_button);
//     // if (current_index_slide > my_slides.length) {
//     //     clearInterval(id);
//     // }
// }, 20000);

console.log(my_slides.length);