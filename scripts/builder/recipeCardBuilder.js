export default class Card {
	static buildAll(recipes) {
		let html = '';
		recipes.forEach((recipe) => {
			html += this.buildCard(recipe);
		});

		return html;
	}
	static buildCard(recipe) {
		console.log(recipe);
		return `
        <article class="card">
            <section class="img-wrapper" tabindex="4" aria-label="illustration de la recette">
                <img class="recipe-img" 
                src="assets/images/recettes/${recipe.image}"
                alt="Illustration de la recette">
            </section>
                <section class="informations">
                    <h1 class="card-title">${recipe.name}</h1>
                        <section class="recette">
                            <h2 class="sous-titre">Recette</h2>
                                ${recipe.description}
                        </section>
                            <section class="ingredients">
                                <h3 class="sous-titre">Ingrédients</h3>
                                    ${this.displayIngredients(
																			recipe.ingredients
																		)}
                            </section>
                </section>
        </article>
        `;
	}
	static displayIngredients(ingredients) {
		let html = '';
		ingredients.forEach((ingredient) => {
			if (ingredient.unit && ingredient.quantity) {
				html += `<div class="ingredient">${ingredient.ingredient}</div>
            <div class="quantity">${ingredient.quantity}${ingredient.unit}</div>`;
			} else {
				html += `
              <div class="ingredient">${ingredient.ingredient}</div>
            `;
			}
		});
		return html;
	}
}
