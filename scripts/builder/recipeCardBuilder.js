import recipesProvider from '../data/recipesProvider.js';

export default class RecipeCardBuilder {
	static BuildAllCards() {
		const recettes = document.querySelector('.recipes-wrapper');
		const recipes = recipesProvider.findAll();

		recipes.forEach((recipe) => {
			recettes.innerHTML += this.buildCard(recipe);
		});
	}

	static buildCard(recipe) {
		return `
        <article class="card">
            <section class="img-wrapper" tabindex="4" aria-label="illustration de la recette">
                <img class="recipe-img" 
                src="assets/images/recettes/${recipe.image}"
                alt="Illustration de la recette">
            </section>
                <section class="informations">
                    <section class="time">${recipe.time} min</section>
                    <h1 class="card-title">${recipe.name}</h1>
                    <section class="recette">
                        <h2 class="subtitle">Recette</h2>
                            <section class="description">
                            ${recipe.description}
                            </section>
                    </section>
                    <section class="necessaire">
                        <h3 class="subtitle">Ingrédients</h3>
                            <section class="ingredients">
                            ${this.displayIngredients(recipe.ingredientsData)}
                            </section>
                    </section>
                </section>
        </article>
        `;
	}
	static displayIngredients(ingredientsData) {
		let html = '';
		ingredientsData.forEach((ingredient) => {
			if (ingredient.unit && ingredient.quantity) {
				html += `<div class="ingredient-container"><div class="ingredient">${ingredient.ingredient}</div>
            <div class="quantity">${ingredient.quantity} ${ingredient.unit}</div></div>`;
			} else {
				html += `
              <div class="ingredient">${ingredient.ingredient}</div>
            `;
			}
		});
		return html;
	}
}
