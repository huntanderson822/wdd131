import { recipes } from "./recipes.mjs";


function random(num) {
  return Math.floor(Math.random() * num);
}


function getRandomRecipe(list) {
  const index = random(list.length);
  return list[index];
}


function tagsTemplate(tags = []) {
  return tags
    .map(tag => `<li class="tag">${tag}</li>`)
    .join("");
}

function ratingTemplate(rating) {
  let html = `<span
    class="rating"
    role="img"
    aria-label="Rating: ${rating} out of 5 stars"
  >`;

  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      html += `<span aria-hidden="true" class="icon-star">⭐</span>`;
    } else {
      html += `<span aria-hidden="true" class="icon-star-empty">☆</span>`;
    }
  }

  html += `</span>`;
  return html;
}


function recipeTemplate(recipe) {
  return `
    <article class="recipe-card">
      <img src="${recipe.image}" alt="Image of ${recipe.name}" />
      <div class="recipe-info">
        ${
          recipe.tags && recipe.tags.length
            ? `<ul class="recipe__tags">${tagsTemplate(recipe.tags)}</ul>`
            : ""
        }
        <h2>${recipe.name}</h2>
        ${ratingTemplate(recipe.rating)}
        <p class="description">
          ${recipe.description}
        </p>
      </div>
    </article>
  `;
}


function renderRecipes(recipeList) {
  const container = document.querySelector(".recipes");

  const html = recipeList.map(recipeTemplate).join("");

  container.innerHTML = html || `<p>No recipes found.</p>`;
}


function filterRecipes(query) {
  const q = query.toLowerCase();

  const filtered = recipes.filter(recipe => {
    const nameMatch = recipe.name.toLowerCase().includes(q);
    const descMatch = recipe.description.toLowerCase().includes(q);

    const tagsMatch =
      recipe.tags &&
      recipe.tags.find(tag => tag.toLowerCase().includes(q));

    const ingredientsMatch =
      recipe.ingredients &&
      recipe.ingredients.find(ingredient =>
        ingredient.toLowerCase().includes(q)
      );

    return nameMatch || descMatch || tagsMatch || ingredientsMatch;
  });

  const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));
  return sorted;
}


function searchHandler(event) {
  event.preventDefault();

  const input = document.querySelector("#search");
  const query = input.value.trim().toLowerCase();

  if (!query) {
 
    const randomRecipe = getRandomRecipe(recipes);
    renderRecipes([randomRecipe]);
    return;
  }

  const results = filterRecipes(query);
  renderRecipes(results);
}


function init() {
  const recipe = getRandomRecipe(recipes);
  renderRecipes([recipe]);

  document
    .querySelector(".search-form") 
    .addEventListener("submit", searchHandler);
}

init();
