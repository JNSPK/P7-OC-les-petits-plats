export default class Algo2Service {
	static filterRecipes(searchParams, recipes) {
		const recipesFiltered = new Set();

		const arrayRecipes = Array.from(recipes);

		for (
			let recipeIndex = 0;
			recipeIndex < arrayRecipes.length;
			recipeIndex++
		) {
			let recipesDto = arrayRecipes[recipeIndex];
			const recipeDtoMatchSearchParams =
				recipesDto.isValidInput(searchParams.inputValue.toUpperCase()) &&
				recipesDto.hasIngredient(searchParams.ingredientsSelected) &&
				recipesDto.hasUstensil(searchParams.ustensilsSelected) &&
				recipesDto.hasAppliance(searchParams.appliancesSelected);
			if (recipeDtoMatchSearchParams) {
				recipesFiltered.add(recipesDto);
			}
		}
		return recipesFiltered;
	}
}
