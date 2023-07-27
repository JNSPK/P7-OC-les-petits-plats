export default class SearchResult {
	constructor(recipesDto, searchParams) {
		this.recipes = recipesDto;
		this.listIngredients = new Set();
		this.listUstensils = new Set();
		this.listAppliances = new Set();
		this.filteredIngredients = [...this.listIngredients];
		this.filteredAppliances = [...this.listAppliances];
		this.filteredUstensils = [...this.listUstensils];
		this.searchParams = searchParams;

		recipesDto.forEach((recipeDto) => {
			recipeDto.ingredients.forEach((ingredient) => {
				const ingredientName = ingredient.toUpperCase();
				if (
					!this.searchParams.ingredientsSelected.some(
						(ingredient) => ingredient === ingredientName
					)
				) {
					this.listIngredients.add(ingredientName);
				}
			});

			recipeDto.appliance.forEach((appliance) => {
				const applianceName = appliance.toUpperCase();
				if (
					!this.searchParams.appliancesSelected.some(
						(appliance) => appliance === applianceName
					)
				) {
					this.listAppliances.add(applianceName);
				}
			});
			recipeDto.ustensils.forEach((ustensil) => {
				const ustensilName = ustensil.toUpperCase();
				//
				if (
					!this.searchParams.ustensilsSelected.some(
						(ustensil) => ustensil === ustensilName
					)
				) {
					this.listUstensils.add(ustensilName);
				}
			});
		});
	}
}
