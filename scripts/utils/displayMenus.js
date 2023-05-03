// Listeners on each sort menu buttons
(function() {
    const filtersBtn = document.querySelectorAll(".filters__list__btn");
    filtersBtn.forEach((btn) => btn.addEventListener("mousedown", showMenus));
})();

/**
 * @function showMenus which open the filters menus.
 */
function showMenus() {
    const btn = this;
    const category = btn.parentElement;
    const list = category.querySelector(".filters__list__ul");
    const text = btn.querySelector(".filters__list__text");
    const icon = btn.querySelector(".filters__list__btn__icon");
    let placeholder;
    if (category.classList.contains("color--ing")) {
        placeholder = "Rechercher un ingrédient";
    } else if (category.classList.contains("color--app")) {
        placeholder = "Rechercher un appareil";
    } else {
        placeholder = "Rechercher un ustensile"
    }

    icon.classList.replace("fa-angle-down", "fa-angle-up");
    
    btn.classList.replace("filters__list__btn", "filters__list__btn__search");
    category.classList.replace("filters__list__category", "filters__list__category--open");
    list.classList.replace("display-none", "display-flex");
    text.remove();
    const search = document.createElement("input");
    search.setAttribute("type", "text");
    search.setAttribute("name", "search");
    search.setAttribute("placeholder", placeholder);
    search.classList.add("filters__list__search");
    btn.insertBefore(search, btn.firstChild);

    btn.removeEventListener("mousedown", showMenus);
    icon.addEventListener("click", hideMenus);
}

/**
 * @function hideMenus which close the filters menus.
 */
function hideMenus() {
    const btn = this.parentElement;
    const category = btn.parentElement;
    const list = category.querySelector(".filters__list__ul");
    const search = btn.querySelector(".filters__list__search");
    const icon = btn.querySelector(".filters__list__btn__icon");
    let textvalue;
    if (category.classList.contains("color--ing")) {
        textvalue = "Ingrédients";
    } else if (category.classList.contains("color--app")) {
        textvalue = "Appareils";
    } else {
        textvalue = "Ustensiles"
    }

    icon.classList.replace("fa-angle-up", "fa-angle-down");

    btn.classList.replace("filters__list__btn__search", "filters__list__btn");
    category.classList.replace("filters__list__category--open", "filters__list__category");
    list.classList.replace("display-flex", "display-none");
    search.remove();
    const text = document.createElement("span");
    text.classList.add("filters__list__text");
    text.textContent = textvalue;
    btn.insertBefore(text, btn.firstChild);

    icon.removeEventListener("click", hideMenus);
    btn.addEventListener("mousedown", showMenus);
}