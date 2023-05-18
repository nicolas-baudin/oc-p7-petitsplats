function searchEngine() {
    filteredRecipes = [];
    allTags = ingTags.concat(appTags, uteTags);
    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i];
        let {name, ingredients, description} = recipe;
        let title = completeNormalize(name);
        let desc = completeNormalize(description);
        if (!searchbarValue || title.includes(searchbarValue) || desc.includes(searchbarValue)) {
            filterTags(recipe);
        } else {
            for (let i = 0; i < ingredients.length; i++) {
                let ing = completeNormalize(ingredients[i].ingredient);
                if (ing.includes(searchbarValue)) {
                    filterTags(recipe);
                    break;
                }
            }
        }
    }
    displayRecipes(filteredRecipes);
}