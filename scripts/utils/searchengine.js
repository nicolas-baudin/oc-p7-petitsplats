function searchEngine() {
    filteredRecipes = [];
    let searchbarRecipes;
    if (!searchbarValue) {
        searchbarRecipes = recipes;
    } else {
        const nameFilter = recipes.filter(function(r) { return completeNormalize(r.name).includes(searchbarValue); });
        const descFilter = recipes.filter(function(r) { return completeNormalize(r.description).includes(searchbarValue); });
        const ingFilter = recipes.filter(function(r) { return r.ingredients.some(i => completeNormalize(i.ingredient).includes(searchbarValue))});
        searchbarRecipes = [...new Set([...nameFilter,...descFilter,...ingFilter])];
    }
    allTags = ingTags.concat(appTags, uteTags);
    searchbarRecipes.forEach((r) => filterTags(r));
    displayRecipes(filteredRecipes);
}