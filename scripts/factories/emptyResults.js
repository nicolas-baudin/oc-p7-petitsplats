/**
 * @function emptyResults who will display error messages when the research returns empty array
 */
function emptyResults() {
    const recipesSection = document.querySelector(".recipes");
    const ingFilters = document.querySelector(".ingfilters");
    const appFilters = document.querySelector(".appfilters");
    const uteFilters = document.querySelector(".utefilters");
    removeAllChilds(recipesSection);
    removeAllChilds(ingFilters);
    removeAllChilds(appFilters);
    removeAllChilds(uteFilters);

    const errorMessage = document.createElement("div");
    errorMessage.classList.add("errormessage");
    errorMessage.textContent = "La recherche ne trouve aucun résultats";
    recipesSection.appendChild(errorMessage);
    emptyFilter(ingFilters);
    emptyFilter(appFilters);
    emptyFilter(uteFilters);
}

/**
 * @function emptyFilter who will display error message when there is no filter available
 * @param {HTMLElement} element The element who will receive the div
 */
function emptyFilter(element) {
    const errorMessage = document.createElement("div");
    errorMessage.classList.add("errormessage");
    errorMessage.textContent = "Aucun filtre disponible";
    element.appendChild(errorMessage);
}