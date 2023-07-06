import { recipes } from '../data/recipes.js';
import recipeCardBuilder from '../builder/recipeCardBuilder.js';
import recipesDto from '../data/recipesDto.js';

const recettes = document.querySelector('.recipes-wrapper');

// Création d'un DataProvider pour stocker les instances de RecipesDto

const dataProvider = new Set();

// Parcours des recettes et instance de RecipesDto pour chaque recette

recipes.forEach((recipeData) => {
	const ingredients = recipeData.ingredients.map((ingredientData) => ({
		ingredient: ingredientData.ingredient,
		quantity: ingredientData.quantity,
		unit: ingredientData.unit || '',
	}));

	const recipe = new recipesDto(
		recipeData.id,
		recipeData.image,
		recipeData.name,
		recipeData.servings,
		ingredients,
		recipeData.time,
		recipeData.description,
		recipeData.appliance,
		recipeData.ustensils
	);

	dataProvider.add(recipe);
});

console.log(dataProvider);

// Pour chaque recette stockée dans le Set, fabrication d'une carte et ajout au DOM

dataProvider.forEach((recipe) => {
	recettes.innerHTML += recipeCardBuilder.buildCard(recipe);
});
