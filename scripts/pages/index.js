/**
 * @async
 * @function init will call the function displayData.
 */
async function init() {
    displayRecipes(recipes);
}
init();

/**
 * @async
 * @function displayRecipes   who loop to display an element for each recipe in the object in parameter.
 * @param {object} recipes    Object with all recipes.
 */
async function displayRecipes(recipes) {
    if (recipes.length !== 0) {
        const recipesSection = document.querySelector(".recipes");
        removeAllChilds(recipesSection);
        recipes.forEach((recipe) => {
            const recipeElement = recipeFactory(recipe);
            recipesSection.appendChild(recipeElement);
        });
        // Add 2 emptyspaces to avoid wrapped elements to take all the width
        // It keep the 3 elements ratio for a single element on a line
        const emptyElement = document.createElement("article");
        emptyElement.classList.add("recipe");
        recipesSection.appendChild(emptyElement.cloneNode(true));
        recipesSection.appendChild(emptyElement.cloneNode(true));
        filtersFactory(recipes);
    } else {
        emptyResults();
    }
}