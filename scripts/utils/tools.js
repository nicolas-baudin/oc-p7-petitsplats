// Modals variables
let recipesList;
let ingList = new Array();
let appList = new Array();
let uteList = new Array();

// const contactMeButton = document.querySelector(".photograph__contact");
// let modalForm;
// let modalLB;
// let form;
// let formOk;
// let elementsToHide;
// let inputsCheck;

// // Listeners
// contactMeButton.addEventListener("click", function() {displayForm()});
// window.addEventListener("mouseup", function(e) {
//     if (e.target == modalForm) {
//         displayModal(modalForm);
//     } else if (e.target == modalLB) {
//         displayModal(modalLB);
//     }
// });
// window.addEventListener("keydown", function(e){
//     if (e.key === "Escape") {
//         if (modalForm && modalForm.classList.contains("display-block")) {
//             closeForm();
//         } else if (modalLB) {
//             closeLB();
//         }
//     }
// });

// /**
//  * @function checkFile                          will return the filepath and the type of a media.
//  * @param {object} data                         The JSON media informations.
//  * @returns {{element: string, file:string}}    element : type of media / file : filepath of media.
//  */
// function checkFile(data) {
//     let file;
//     let element;
//     if (data.image) {
//         file = data.image;
//         element = "img";
//     } else {
//         file = data.video;
//         element = "video";
//     }
//     return {element, file};
// }

// /**
//  * @function displayModal       toggle some classes to display modals with a smooth animation.
//  * @param {HTMLElement} element The modal.
//  */
// function displayModal(element) {
//     if (element.classList.contains("display-none")) {
//         element.classList.remove("display-none");
//         if (element.classList.contains("block")) {
//             element.classList.add("display-block");
//         } else {
//             element.classList.add("display-flex");
//         }
//         focusFirstElementIn(element);
//         setTimeout(function() {
//             element.classList.remove("inactive-animation");
//         }, 20);
//         disableScroll();
//     } else {
//         enableScroll();
//         element.classList.add("inactive-animation");
//         element.addEventListener("transitionend", function() {
//             if (element.classList.contains("block")) {
//                 element.classList.remove("display-block");
//             } else {
//                 element.classList.remove("display-flex");
//             }
//             element.classList.add("display-none");
//             modalCheckBeforeRemove(element);
//         }, {
//             capture: false,
//             once: true,
//             passive: false
//         });
//     }
// }

// /**
//  * @function disableScroll who disable scroll, keep the Y position and keep the scrollbar.
//  */
// function disableScroll() {
//     // Get the current page position
//     let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//     let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
//     // when scroll, go to the values
//     window.onscroll = function() {
//         window.scrollTo(scrollLeft, scrollTop);
//     };
// }

// /**
//  * @function enableScroll who re-enable scroll.
//  */
// function enableScroll() {
//     window.onscroll = function() {};
// }

// /**
//  * @function displayElement     toggle some classes to display elements with a smooth animation.
//  * @param {HTMLElement} element The element.
//  */
// function displayElement(element) {
//     if (element.classList.contains("display-none")) {
//         element.classList.remove("display-none");
//         if (element.classList.contains("block")) {
//             element.classList.add("display-block");
//         } else {
//             element.classList.add("display-flex");
//         }
//         setTimeout(function () {
//             element.classList.remove("inactive-animation");
//         }, 20);
//     } else {
//         element.classList.add("inactive-animation");
//         element.addEventListener("transitionend", function() {
//             if (element.classList.contains("block")) {
//                 element.classList.remove("display-block");
//             } else {
//                 element.classList.remove("display-flex");
//             }
//             element.classList.add("display-none");
//         }, {
//             capture: false,
//             once: true,
//             passive: false
//         });
//     }
// }

// /**
//  * @function focusFirstElementIn    will focus the 1st element in a modal.
//  * @param {HTMLElement} element     The modal or the element.
//  */
// function focusFirstElementIn(element) {
//     const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
//     const firstFocusableElement = element.querySelectorAll(focusableElements)[0];
//     firstFocusableElement.focus();
// }

// /**
//  * @function trapFocusIn        will add a container listener to trp the focus in it.
//  * @param {HTMLElement} element The container.
//  */
// function trapFocusIn(element) {
    
//     element.addEventListener("keydown", focusEvent);

//     function focusEvent(e) {
//         const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
//         const focusableContent = element.querySelectorAll(focusableElements);
//         const firstFocusableElement = element.querySelectorAll(focusableElements)[0];
//         const lastFocusableElement = focusableContent[focusableContent.length - 1];
//         let isTabPressed = e.key === "Tab";
//         if (!isTabPressed) {
//           return;
//         }
//         if (e.shiftKey) {
//           if (document.activeElement === firstFocusableElement) {
//             lastFocusableElement.focus();
//             e.preventDefault();
//           }
//         } else {
//           if (document.activeElement === lastFocusableElement) {
//             firstFocusableElement.focus();
//             e.preventDefault();
//           }
//         }
//     }
// }

// /**
//  * @function modalCheckBeforeRemove     checks if the modal is a contact form then hide instead of delete if it's not empty.
//  * @param {HTMLElement} element         The element to check.
//  */
// function modalCheckBeforeRemove(element) {
//     if (element.id == "contact__modal") {
//         const firstName = Object(document.getElementById("firstname"));
//         const lastName = Object(document.getElementById("lastname"));
//         const email = Object(document.getElementById("email"));
//         const message = Object(document.getElementById("message"));
//         let inputs = [firstName.value, lastName.value, email.value, message.value];
//         let isItEmpty = array => array.every(value => value === "");
//         if (isItEmpty(inputs)) {
//             element.remove();
//             modalForm = "";
//         }
//     } else {
//         element.remove();
//     }
// }