/**
 * @function filtersFactory   create all filters elements relative to filtered recipes list.
 * @param {object} recipes   List of filtered recipes.
 */
function filtersFactory(recipes) {

    let i = 0;
    let ingList = [];
    let appList = [];
    let uteList = [];
    const ingFilters = document.querySelector(".ingfilters");
    const appFilters = document.querySelector(".appfilters");
    const uteFilters = document.querySelector(".utefilters");

    removeAllChilds(ingFilters);
    removeAllChilds(appFilters);
    removeAllChilds(uteFilters);

    recipes.forEach((recipe) => {
        const {ingredients, appliance, utensils} = recipe;
        ingredients.forEach((e) => {
            if (ingList.indexOf(e.ingredient) === -1 && !ingTags.includes(e.ingredient)) ingList.push(e.ingredient);
        })
        if (appList.indexOf(appliance) === -1 && !appTags.includes(appliance)) appList.push(appliance);
        i = 0;
        while (i < utensils.length) {
            if (uteList.indexOf(utensils[i]) === -1 && !uteTags.includes(utensils[i])) uteList.push(utensils[i]);
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
    const emptyElement = document.createElement("span");
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
        ingTags.push(node.title);
    } else if (node.parentElement.classList.contains("appfilters")) {
        category = "app";
        order = 1;
        appTags.push(node.title);
    } else if (node.parentElement.classList.contains("utefilters")) {
        category = "ute";
        order = 2;
        uteTags.push(node.title);
    }

    let ul = document.getElementsByClassName("filters__active__category--" + category)[0];
    if (ul == null) {
        ul = document.createElement("ul");
        ul.classList.add("filters__active__category");
        ul.classList.add("filters__active__category--" + category);
        const parent = document.querySelector(".filters__active");
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

    const dropdownsearch = node.parentElement.parentElement.parentElement.querySelector(".filters__dd__btn__search");
    dropdownsearch.value = "";
    dropdownTyping(dropdownsearch);
    dropdownsearch.focus();

    searchEngine();
}

function filterRemove(node) {
    const parent = node.parentElement;
    const category = parent.parentElement;
    const title = node.previousSibling.title;
    parent.remove();
    if (!category.hasChildNodes()) {
        category.remove();
    }

    if (category.classList.contains("filters__active__category--ing")) {
        let index = ingTags.indexOf(title);
        if (index !== -1) {
            ingTags.splice(index, 1);
        }
    } else if (category.classList.contains("filters__active__category--app")) {
        let index = appTags.indexOf(title);
        if (index !== -1) {
            appTags.splice(index, 1);
        }
    } else if (category.classList.contains("filters__active__category--ute")) {
        let index = uteTags.indexOf(title);
        if (index !== -1) {
            uteTags.splice(index, 1);
        }
    }
    searchEngine();
}