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
        if (i < 30) {
            const ingredient = document.createElement("li");
            ingredient.classList.add("filter");
            ingredient.textContent = ingList[i];
            ingFilters.appendChild(ingredient);
            i++;
        } else {
            break;
        } 
    }
    i = 0;
    while (i < appList.length) {
        if (i < 30) {
            const appliance = document.createElement("li");
            appliance.classList.add("filter");
            appliance.textContent = appList[i];
            appFilters.appendChild(appliance);
            i++;
        } else {
            break;
        } 
    }
    i = 0;
    while (i < uteList.length) {
        if (i < 30) {
            const utensil = document.createElement("li");
            utensil.classList.add("filter");
            utensil.textContent = uteList[i];
            uteFilters.appendChild(utensil);
            i++;
        } else {
            break;
        } 
    }
    
    // Add 2 emptyspaces to avoid wrapped elements to take all the width
    // It keep the 3 elements ratio for a single element on a line
    const emptyElement = document.createElement("li");
    emptyElement.classList.add("filter");
    ingFilters.appendChild(emptyElement.cloneNode(true));
    ingFilters.appendChild(emptyElement.cloneNode(true));
    appFilters.appendChild(emptyElement.cloneNode(true));
    appFilters.appendChild(emptyElement.cloneNode(true));
    uteFilters.appendChild(emptyElement.cloneNode(true));
    uteFilters.appendChild(emptyElement.cloneNode(true));
}