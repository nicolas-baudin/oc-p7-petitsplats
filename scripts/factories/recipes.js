/**
 * @function recipeFactory   create a single recipe HTML element for index.
 * @param {object} recipe                 Object of recipe informations.
 * @returns {HTMLElement}               The HTML element for 1 recipe.
 */
function recipeFactory(recipe) {
    const {name, ingredients, time, description} = recipe;

    const container = document.createElement("article");
    container.classList.add("recipe");
        const recipePicture = document.createElement("div");
        recipePicture.classList.add("recipepicture");
        recipePicture.setAttribute("alt", "Photos représentant la recette : " + name);
        container.appendChild(recipePicture);
        const recipeText = document.createElement("div");
        recipeText.classList.add("recipetext");
        container.appendChild(recipeText);
            const recipeTextTitleTime = document.createElement("div");
            recipeTextTitleTime.classList.add("recipetext__titletime");
            recipeText.appendChild(recipeTextTitleTime);
                const textTitle = document.createElement("span");
                textTitle.classList.add("titletime__title");
                textTitle.textContent = name;
                recipeTextTitleTime.appendChild(textTitle);
                const textTime = document.createElement("div");
                textTime.classList.add("titletime__time");
                recipeTextTitleTime.appendChild(textTime);
                    const clockIcon = document.createElement("span");
                    clockIcon.classList.add("titletime__time__icon");
                    clockIcon.classList.add("fa-regular");
                    clockIcon.classList.add("fa-clock");
                    textTime.appendChild(clockIcon);
                    const timeValue = document.createElement("span");
                    timeValue.classList.add("titletime__time__value");
                    timeValue.textContent = time + " min";
                    textTime.appendChild(timeValue);
            const recipeTextIngDesc = document.createElement("div");
            recipeTextIngDesc.classList.add("recipetext__ingdesc");
            recipeText.appendChild(recipeTextIngDesc);
                const ingredientsList = document.createElement("div");
                ingredientsList.classList.add("recipetext__ingdesc__child");
                ingredientsList.classList.add("ingdesc__ingredients");
                recipeTextIngDesc.appendChild(ingredientsList);
                    ingredients.forEach((e) => {
                        const ingredient = document.createElement("div");
                        ingredient.classList.add("ingredient");
                            const ingredientName = document.createElement("span");
                            ingredientName.classList.add("ingredient__name");
                            ingredient.appendChild(ingredientName);
                            const ingredientQty = document.createElement("span");
                            ingredientQty.classList.add("ingredient__quantity");
                            ingredient.appendChild(ingredientQty);
                        if (e.quantity == undefined) {
                            ingredientName.textContent = e.ingredient;
                        } else if (e.unit == undefined) {
                            ingredientName.textContent = e.ingredient + ": ";
                            ingredientQty.textContent = e.quantity;
                        } else {
                            ingredientName.textContent = e.ingredient + ": ";
                            ingredientQty.textContent = e.quantity + " " + e.unit;
                        }
                        ingredientsList.appendChild(ingredient);
                    })
                const recipeDesc = document.createElement("span");
                recipeDesc.classList.add("recipetext__ingdesc__child");
                recipeDesc.classList.add("ingdesc__description");
                recipeDesc.textContent = `${description.slice(0, 210)}...`;
                recipeTextIngDesc.appendChild(recipeDesc);
    
    return(container);
}