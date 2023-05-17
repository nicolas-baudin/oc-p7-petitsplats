// --- Global variables --- //
let searchbarValue;
let ingTags = [];
let appTags = [];
let uteTags = [];
let filteredRecipes = [];

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

function filterTags(recipe) {
    let {ingredients, appliance, utensils} = recipe;
    let allTagsOk = true;
    let recipeIng = [];
    if (ingTags.length !== 0) {
        ingredients.forEach((e) => {
            recipeIng.push(e.ingredient);
        });
        ingTags.forEach((tag) => {
            if (!recipeIng.includes(tag)) {
                allTagsOk = false;
            }
        });
    } else if (appTags.length !== 0) {
        appTags.forEach((tag) => {
            if (tag != appliance) {
                allTagsOk = false;
            }
        });
    } else if (uteTags.length !== 0) {
        uteTags.forEach((tag) => {
            if (!utensils.includes(tag)) {
                allTagsOk = false;
            }
        });
    }
    if (allTagsOk) {
        filteredRecipes.push(recipe);
    }
}