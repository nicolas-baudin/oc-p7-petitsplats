// Listeners on each sort menu buttons
(function() {
    document.addEventListener("click", function(e) {
        target = e.target;
        const dropdownButtons = document.querySelectorAll(".filters__dd__btn");
        const isDropdownOpen = document.querySelector(".filters__dd--open") !== null;
        if (isDropdownOpen) {
            let dropdown = document.querySelector(".filters__dd--open");
            let btn = dropdown.querySelector(".filters__dd__btn");
            let searchbar = dropdown.querySelector(".filters__dd__btn__search");
            let list = dropdown.querySelector(".filters__dd__list__content");
            let filters = dropdown.querySelectorAll(".filters__dd__list__content__filter")
            if (target !== btn && target !== searchbar && target !== list) {
                filters.forEach((filter) => {
                    if (target !== filter) {
                        displayDropdown(btn);
                    }  
                });
            }
        }
        dropdownButtons.forEach((btn) => {
            if (target == btn) {
                displayDropdown(btn);
            }  
        });
    });
})();

/**
 * @function showMenus which open the filters menus.
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