/**
 * @function displayDropdown which open and close a dropdown.
 * @param {HTMLElement} btn The dropdown button.
 */
function displayDropdown(btn) {
    const dropdown = btn.parentElement;
    const text = dropdown.querySelector(".filters__dd__btn__text");
    const searchbar = dropdown.querySelector(".filters__dd__btn__search");
    const icon = dropdown.querySelector(".filters__dd__btn__icon");
    const list = dropdown.querySelector(".filters__dd__list");
    if (dropdown.classList.contains("filters__dd--open")) {
        dropdown.classList.remove("filters__dd--open");
        text.classList.replace("display-none", "display-block");
        searchbar.classList.replace("display-block", "display-none");
        icon.classList.replace("fa-angle-up", "fa-angle-down");
        list.classList.replace("display-block", "display-none");
    } else {
        dropdown.classList.add("filters__dd--open");
        text.classList.replace("display-block", "display-none");
        searchbar.classList.replace("display-none", "display-block");
        icon.classList.replace("fa-angle-down", "fa-angle-up");
        list.classList.replace("display-none", "display-block");
    }
}