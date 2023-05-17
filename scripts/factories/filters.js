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

    const emptyElement = document.createElement("span");
    emptyElement.classList.add("filters__dd__list__content__filter");
    const li = document.createElement("li");
    li.classList.add("filters__dd__list__content__filter");
    li.setAttribute("tabindex", 0);
    if (ingList.length !== 0) {
        i = 0;
        while (i < ingList.length) {
            li.setAttribute("title", ingList[i]);
            ingFilters.appendChild(li.cloneNode(true));
            i++;
        }
        ingFilters.appendChild(emptyElement.cloneNode(true));
        ingFilters.appendChild(emptyElement.cloneNode(true));
    } else {
        emptyFilter(ingFilters);
    }
    if (appList.length !== 0) {
        i = 0;
        while (i < appList.length) {
            li.setAttribute("title", appList[i]);
            appFilters.appendChild(li.cloneNode(true));
            i++;
        }
        appFilters.appendChild(emptyElement.cloneNode(true));
        appFilters.appendChild(emptyElement.cloneNode(true));
    } else {
        emptyFilter(appFilters);
    }
    if (uteList.length !== 0) {
        i = 0;
        while (i < uteList.length) {
            li.setAttribute("title", uteList[i]);
            uteFilters.appendChild(li.cloneNode(true));
            i++;
        }
        uteFilters.appendChild(emptyElement.cloneNode(true));
        uteFilters.appendChild(emptyElement.cloneNode(true));
    } else {
        emptyFilter(uteFilters);
    }
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

    const dropdown = node.parentElement.parentElement.parentElement;
    const searchbar = dropdown.querySelector(".filters__dd__btn__search");
    searchbar.value = "";
    dropdownTyping(searchbar);
    dropdown.focus();

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