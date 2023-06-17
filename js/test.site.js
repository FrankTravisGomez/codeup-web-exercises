// // let numbers = [1, 2, 3, 4, 5];
// // numbers.map(n => n * 3)
//
//
// // Get the About me link
// const aboutMeLink = document.querySelector('#me');
//
// // Add an event listener to the About me link
// aboutMeLink.addEventListener('click', event => {
//     // Prevent default link behavior
//     event.preventDefault();
//
//     // Get the section to scroll to
//     const targetSection = document.querySelector('#about-me');
//
//     // Scroll to the section
//     targetSection.scrollIntoView({
//         behavior: 'smooth'
//     });
// });
//
// // Get the About me link
// const projectLink = document.querySelector('#project');
//
// // Add an event listener to the About me link
// projectLink.addEventListener('click', event => {
//     // Prevent default link behavior
//     event.preventDefault();
//
//     // Get the section to scroll to
//     const targetSection = document.querySelector('#projects');
//
//     // Scroll to the section
//     targetSection.scrollIntoView({
//         behavior: 'smooth'
//     });
// });
//
// // Get the About me link
// const contactLink = document.querySelector('#contact-me');
//
// // Add an event listener to the About me link
// contactLink.addEventListener('click', event => {
//     // Prevent default link behavior
//     event.preventDefault();
//
//     // Get the section to scroll to
//     const targetSection = document.querySelector('#contact');
//
//     // Scroll to the section
//     targetSection.scrollIntoView({
//         behavior: 'smooth'
//     });
// });
//
// const langLInk = document.querySelector('#lang');
// langLInk.addEventListener('click', event =>{
//     event.preventDefault();
//     const targetSection =document.querySelector('#languages');
//     targetSection.scrollIntoView({
//         behavior:'smooth'
//     })
// });



// Define an array of numbers
const numbers = [1, 2, 3, 4, 5];

// Map over the numbers array and multiply each number by 3
const multipliedNumbers = numbers.map(n => n * 3);

// Get the "About me" link element
const aboutMeLink = document.querySelector('#me');

// Add an event listener to the "About me" link
aboutMeLink.addEventListener('click', event => {
    // Prevent default link behavior
    event.preventDefault();

    // Get the section to scroll to
    const targetSection = document.querySelector('#about-me');

    // Scroll to the section smoothly
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});

// Get the "Projects" link element
const projectLink = document.querySelector('#project');

// Add an event listener to the "Projects" link
projectLink.addEventListener('click', event => {
    // Prevent default link behavior
    event.preventDefault();

    // Get the section to scroll to
    const targetSection = document.querySelector('#projects');

    // Scroll to the section smoothly
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});

// Get the "Contact me" link element
const contactLink = document.querySelector('#contact-me');

// Add an event listener to the "Contact me" link
contactLink.addEventListener('click', event => {
    // Prevent default link behavior
    event.preventDefault();

    // Get the section to scroll to
    const targetSection = document.querySelector('#contact');

    // Scroll to the section smoothly
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});

// Get the "Languages" link element
const langLink = document.querySelector('#lang');

// Add an event listener to the "Languages" link
langLink.addEventListener('click', event => {
    // Prevent default link behavior
    event.preventDefault();

    // Get the section to scroll to
    const targetSection = document.querySelector('#languages');

    // Scroll to the section smoothly
    targetSection.scrollIntoView({
        behavior: 'smooth'
    });
});