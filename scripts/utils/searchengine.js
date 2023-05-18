function searchEngine() {
    filteredRecipes = [];
    recipes.forEach((recipe) => {
        let {name, ingredients, description} = recipe;
        let title = name.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "");
        let desc = description.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "");
        if (!searchbarValue || title.includes(searchbarValue) || desc.includes(searchbarValue)) {
            filterTags(recipe);
        } else {
            ingredients.forEach((e) => {
                let ing = e.ingredient.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, "");
                if (ing.includes(searchbarValue)) {
                    filterTags(recipe);
                }
            });
        }
    });
    displayRecipes(filteredRecipes);
}