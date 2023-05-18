function searchEngine() {
    filteredRecipes = [];
    recipes.forEach((recipe) => {
        let {name, ingredients, description} = recipe;
        let title = completeNormalize(name);
        let desc = completeNormalize(description);
        if (!searchbarValue || title.includes(searchbarValue) || desc.includes(searchbarValue)) {
            filterTags(recipe);
        } else {
            ingredients.forEach((e) => {
                let ing = completeNormalize(e.ingredient);
                if (ing.includes(searchbarValue)) {
                    filterTags(recipe);
                }
            });
        }
    });
    displayRecipes(filteredRecipes);
}