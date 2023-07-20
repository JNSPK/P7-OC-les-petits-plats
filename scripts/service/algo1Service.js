export default class Algo1Service {
	static filterRecipes(searchParams, recipes) {
		const recipesFiltered = new Set();
		recipes.forEach((recipeDto) => {
			const recipeDtoMatchSearchParams =
				recipeDto.isValidInput(searchParams.inputValue.toUpperCase()) &&
				recipeDto.hasIngredient(searchParams.ingredientsSelected) &&
				recipeDto.hasUstensil(searchParams.ustensilsSelected) &&
				recipeDto.hasAppliance(searchParams.appliancesSelected);
			if (recipeDtoMatchSearchParams) {
				recipesFiltered.add(recipeDto);
			}
		});

		return recipesFiltered;
	}
}
