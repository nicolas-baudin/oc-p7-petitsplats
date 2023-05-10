// Modals variables
let recipesList;
let ingList = new Array();
let appList = new Array();
let uteList = new Array();

// Active filters listeners
document.addEventListener("click", function(e) {
    let target = e.target;
    if (target.classList.contains("filters__dd__list__content__filter")) {
        filterAdd(target);
    } else if (target.classList.contains("filters__active__icon")) {
        filterRemove(target);
    }
});

// Searchbar listener
const sb = document.getElementById("searchbar");
sb.addEventListener("keyup", typing);

function typing() {
    console.log(this.value);
}
// window.addEventListener("keydown", function(e){
//     if (e.key === "Escape") {
//         if (modalForm && modalForm.classList.contains("display-block")) {
//             closeForm();
//         } else if (modalLB) {
//             closeLB();
//         }
//     }
// });

/**
 * @function focusFirstElementIn    will focus the 1st element in a modal.
 * @param {HTMLElement} element     The modal or the element.
 */
function focusFirstElementIn(element) {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const firstFocusableElement = element.querySelectorAll(focusableElements)[0];
    firstFocusableElement.focus();
}

/**
 * @function trapFocusIn        will add a container listener to trp the focus in it.
 * @param {HTMLElement} element The container.
 */
function trapFocusIn(element) {
    
    element.addEventListener("keydown", focusEvent);

    function focusEvent(e) {
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = element.querySelectorAll(focusableElements);
        const firstFocusableElement = element.querySelectorAll(focusableElements)[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];
        let isTabPressed = e.key === "Tab";
        if (!isTabPressed) {
          return;
        }
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
    }
}