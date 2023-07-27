export default class Algo2Service {
	static filterRecipes(searchParams, recipes) {
		const recipesFiltered = new Set();

		for (let recipesDto of recipes) {
			// const recipesDto = recipes[recipeIndex];
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

// (let recipeIndex = 0; recipeIndex < recipes.length; recipeIndex++)
//
