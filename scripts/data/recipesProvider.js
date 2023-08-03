import { recipes } from './recipes.js';
import RecipeDto from '../dto/recipeDto.js';

export default class recipesProvider {
	static findAll() {
		const dataProvider = new Set();

		// Parcours des recettes et instance de RecipesDto pour chaque recette

		recipes.forEach((recipe) => {
			// On accède au tableau "ingredients" dans le tableau "recipes"

			const ingredients = recipe.ingredients.map((ingredientData) => ({
				ingredient: ingredientData.ingredient,
				quantity: ingredientData.quantity,
				unit: ingredientData.unit || '',
			}));

			// Instanciation du DTO pour chaque recette

			const recipeData = new RecipeDto(
				recipe.id,
				recipe.image,
				recipe.name,
				recipe.servings,
				ingredients,
				recipe.time,
				recipe.description,
				recipe.appliance,
				recipe.ustensils
			);

			// Ajout au set "dataProvider"

			dataProvider.add(recipeData);
		});
		return dataProvider;
	}
}
