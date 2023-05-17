// --- LISTENERS --- //

// Listeners on each sort menu buttons
(function() {
  document.addEventListener("click", function(e) {
      target = e.target;
      const dropdownButtons = document.querySelectorAll(".filters__dd__btn");
      const isDropdownOpen = document.querySelector(".filters__dd--open") !== null;
      if (isDropdownOpen) {
          let dropdown = document.querySelector(".filters__dd--open");
          let btn = dropdown.querySelector(".filters__dd__btn");
          let searchbar = dropdown.querySelector(".filters__dd__btn__search");
          let list = dropdown.querySelector(".filters__dd__list__content");
          let filters = dropdown.querySelectorAll(".filters__dd__list__content__filter")
          if (target !== btn && target !== searchbar && target !== list) {
            displayDropdown(btn);
          }
      }
      dropdownButtons.forEach((btn) => {
          if (target == btn) {
              displayDropdown(btn);
          }  
      });
  });
})();

// Active filters listeners
document.addEventListener("click", function(e) {
    let target = e.target;
    if (target.classList.contains("filters__dd__list__content__filter")) {
        filterAdd(target);
    } else if (target.classList.contains("filters__active__icon")) {
        filterRemove(target);
    }
});

// Searchbar listener
document.addEventListener("change", function(e) {
  let target = e.target;
  if (target.classList.contains("searchbar__input")) {
    searchbarValue = target.value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
    searchEngine();
  }
});

// Dropdown searchbar listener
document.addEventListener("keyup", function(e) {
  let target = e.target;
  if (target.classList.contains("filters__dd__btn__search")) {
    dropdownTyping(target);
  }
});

/**
 * @function dropdownTyping    will focus the 1st element in a modal.
 * @param {HTMLElement} element     The modal or the element.
 */
function dropdownTyping(element) {
  let text = element.value.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
  let dropdown = element.parentElement.parentElement;
  let list = dropdown.querySelector(".filters__dd__list__content");
  let filters = list.getElementsByTagName("li");
  for (let i = 0; i < filters.length; i++) {
    let filter = filters[i].title.toLowerCase().normalize('NFD').replace(/\p{Diacritic}/gu, '');
    if (filter.includes(text)) {
      filters[i].classList.remove("display-none");
    } else {
      filters[i].classList.add("display-none");
    }
  }
}

/**
 * @function removeAllChilds who delete all childs in HTML element.
 * @param {HTMLElement} parent The HTML element.
 */
function removeAllChilds(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

/**
 * @function filterTags will push the recipe to the filtered array if all tags matches
 * @param {Object} recipe The recipe.
 */
function filterTags(recipe) {
  let {ingredients, appliance, utensils} = recipe;
  let tags = ingTags.concat(appTags, uteTags);
  let recipeArray = [];
  ingredients.forEach((e) => { recipeArray.push(e.ingredient); });
  recipeArray.push(appliance);
  utensils.forEach((e) => { recipeArray.push(e); });
  if (checkTags(tags, recipeArray)) filteredRecipes.push(recipe);
}

/**
 * @function checkTags who compare selected tags to all recipe values.
 * @param {Array} tagsArray 
 * @param {Array} recipeArray 
 * @returns {boolean} true if all tags matches atleast 1 value.
 */
function checkTags(tagsArray, recipeArray) {
  let allTagsOk = true;
      if (tagsArray.length !== 0) {
          tagsArray.forEach((tag) => {
              if (!recipeArray.includes(tag)) allTagsOk = false;
          });
      }
  return(allTagsOk);
}

/**
 * @function focusFirstElementIn    will focus the 1st element in a modal.
 * @param {HTMLElement} element     The modal or the element.
 */
function focusFirstElementIn(element) {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const firstFocusableElement = element.querySelectorAll(focusableElements)[0];
    firstFocusableElement.focus();
}

/**
 * @function trapFocusIn        will add a container listener to trp the focus in it.
 * @param {HTMLElement} element The container.
 */
function trapFocusIn(element) {
    
    element.addEventListener("keydown", focusEvent);

    function focusEvent(e) {
        const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
        const focusableContent = element.querySelectorAll(focusableElements);
        const firstFocusableElement = element.querySelectorAll(focusableElements)[0];
        const lastFocusableElement = focusableContent[focusableContent.length - 1];
        let isTabPressed = e.key === "Tab";
        if (!isTabPressed) {
          return;
        }
        if (e.shiftKey) {
          if (document.activeElement === firstFocusableElement) {
            lastFocusableElement.focus();
            e.preventDefault();
          }
        } else {
          if (document.activeElement === lastFocusableElement) {
            firstFocusableElement.focus();
            e.preventDefault();
          }
        }
    }
}