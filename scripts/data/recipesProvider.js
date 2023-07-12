import { recipes } from './recipes.js';
import RecipeDto from '../dto/recipeDto.js';

export default class recipesProvider {
	static findAll() {
		const dataProvider = new Set();

		// Parcours des recettes et instance de RecipesDto pour chaque recette

		// fetch('./recipes.js').then((res) => res.json()); ??????????????

		recipes.forEach((recipe) => {
			const ingredients = recipe.ingredients.map((ingredientData) => ({
				ingredient: ingredientData.ingredient,
				quantity: ingredientData.quantity,
				unit: ingredientData.unit || '',
			}));

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

			dataProvider.add(recipeData);
		});
		return dataProvider;
	}
}
