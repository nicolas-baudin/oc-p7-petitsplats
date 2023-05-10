/**
 * @function filtersFactory   create all filters elements relative to filtered recipes list.
 * @param {object} recipes   List of filtered recipes.
 */
function filtersFactory(recipes) {
    
    let i = 0;
    ingList = [];
    appList = [];
    uteList = [];
    const ingFilters = document.querySelector(".ingfilters");
    const appFilters = document.querySelector(".appfilters");
    const uteFilters = document.querySelector(".utefilters");

    recipes.forEach((recipe) => {
        const {ingredients, appliance, utensils} = recipe;
        ingredients.forEach((e) => {
            if (ingList.indexOf(e.ingredient) === -1) ingList.push(e.ingredient);
        })
        if (appList.indexOf(appliance) === -1) appList.push(appliance);
        i = 0;
        while (i < utensils.length) {
            if (uteList.indexOf(utensils[i]) === -1) uteList.push(utensils[i]);
            i++;
        }
    });

    i = 0;
    while (i < ingList.length) {
        const ingredient = document.createElement("li");
        ingredient.classList.add("filters__dd__list__content__filter");
        ingredient.setAttribute("title", ingList[i]);
        ingFilters.appendChild(ingredient);
        i++;
        if (i > 30) {
            ingFilters.classList.add("scrollbar-y");
        }
    }
    i = 0;
    while (i < appList.length) {
        const appliance = document.createElement("li");
        appliance.classList.add("filters__dd__list__content__filter");
        appliance.setAttribute("title", appList[i]);
        appFilters.appendChild(appliance);
        i++;
        if (i > 30) {
            appFilters.classList.add("scrollbar-y");
        }
    }
    i = 0;
    while (i < uteList.length) {
        const utensil = document.createElement("li");
        utensil.classList.add("filters__dd__list__content__filter");
        utensil.setAttribute("title", uteList[i]);
        uteFilters.appendChild(utensil);
        i++;
        if (i > 30) {
            uteFilters.classList.add("scrollbar-y");
        }
    }
    
    // Add 2 emptyspaces to avoid wrapped elements to take all the width
    // It keep the 3 elements ratio for a single element on a line
    const emptyElement = document.createElement("li");
    emptyElement.classList.add("filters__dd__list__content__filter");
    ingFilters.appendChild(emptyElement.cloneNode(true));
    ingFilters.appendChild(emptyElement.cloneNode(true));
    appFilters.appendChild(emptyElement.cloneNode(true));
    appFilters.appendChild(emptyElement.cloneNode(true));
    uteFilters.appendChild(emptyElement.cloneNode(true));
    uteFilters.appendChild(emptyElement.cloneNode(true));
}

function filterAdd(node) {
    let category;
    let order;
    if (node.parentElement.classList.contains("ingfilters")) {
        category = "ing";
        order = 0;
    } else if (node.parentElement.classList.contains("appfilters")) {
        category = "app";
        order = 1;
    } else if (node.parentElement.classList.contains("utefilters")) {
        category = "ute";
        order = 2;
    }

    let ul = document.getElementsByClassName("filters__active__category--" + category)[0];
    if (ul == null) {
        ul = document.createElement("ul");
        ul.classList.add("filters__active__category");
        ul.classList.add("filters__active__category--" + category);
        const parent = document.getElementsByClassName("filters__active")[0];
        parent.insertBefore(ul, parent.children[order]);
    }

    let catClass = "color--" + category;
    let classes = ["btn", "filters__active__btn", catClass];
    let iconClasses = ["filters__active__icon", "fa-regular", "fa-circle-xmark"];

    const li = document.createElement("li");
    li.classList.add(...classes);
        let text = document.createElement("span");
        text.classList.add("filters__active__text");
        text.setAttribute("title", node.title);
        li.appendChild(text);
        let icon = document.createElement("span");
        icon.classList.add(...iconClasses);
        li.appendChild(icon);
    ul.appendChild(li);
}

function filterRemove(node) {
    const parent = node.parentElement;
    const category = parent.parentElement;
    parent.remove();
    if (!category.hasChildNodes()) {
        category.remove();
    }
}