const buttons = document.querySelector("[data-carousel-button]")

buttons.forEach(button => {
    button.addEventListener("click", () => {
        const offset = button.dataset.carouselButton === "next" ? 1 : -1
        const slides = button
            .closest("[data-carousel]")
            .querySelector("[data-slides")

        const activeSlide = slides.querySelector("[data-active]")
        let newIndex = [...slides.children].indexOf(activeSlide) + offset
        if (newIndex < 0) newIndex = slides.children.length - 1
        if (newIndex >= slides.children.length) newIndex = 0

        slides.children[newIndex].dataset.active = true
        delete activeSlide.dataset.active
    })
})

// For typed Animation
// const typing = new Typed(".typing", {
//     strings: ["", "FrontEnd WebDeveloper", "Pythonista", "Graphics Designer"],
//     typeSpeed: 100,
//     backSpeed: 60,
//     loop: true,
// })



// Overrule creating new Javascript.
// // For Our Image Carousel
// const carou_btn = document.querySelectorAll("[data-carousel-button]")
// // This is a data-attribute, to be referenced through our HTML.
// carou_btn.forEach(button => {
//     button.addEventListener("click", () => {
//         // THis is to go to our next button (Next Slide).
//         const offset = button.dataset.carouselButton === "next" ? 1 : -1
//         const slides = button.closest("[data-carousel]").querySelector("[data-slides]")
//         // This is making us go from our buttons to our data carousel, to select the slides there, using the navigation buttons (NEXT AND PREVIOUS).
//         // Getting our Active Slide
//         const activeSlide = slides.querySelector("[data-active]")
//         let newIndex = [...slides.children].indexOf(activeSlide) + offset
//         // Converting Slides to array, for selection (For the above).

//         // To go to our Last Image
//         if (newIndex < 0) newIndex = slides.children.length - 1
//         // If we pass the last slide...
//         if (newIndex => slides.children.length) newIndex = 0
//         // Loop from the Beginning
//         slides.children[newIndex].dataset.active = true
//         delete activeSlide.dataset.active
//         // This removes our data-slide that was active (before), before adding our data-slide that was active.
//     })
// })