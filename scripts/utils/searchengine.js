function searchEngine() {
    filteredRecipes = [];
    for (let i = 0; i < recipes.length; i++) {
        let recipe = recipes[i];
        let {name, ingredients, description} = recipe;
        let title = name.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "");
        let desc = description.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "");
        if (!searchbarValue || title.includes(searchbarValue) || desc.includes(searchbarValue)) {
            filterTags(recipe);
        } else {
            for (let i = 0; i < ingredients.length; i++) {
                let ing = ingredients[i].ingredient.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "");
                if (ing.includes(searchbarValue)) {
                    filterTags(recipe);
                }
            }
        }
    }
    displayRecipes(filteredRecipes);
}