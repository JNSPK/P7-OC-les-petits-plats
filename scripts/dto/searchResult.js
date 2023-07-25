export default class SearchResult {
	constructor(recipesDto) {
		this.recipes = recipesDto;
		this.listIngredients = new Set();
		this.listUstensils = new Set();
		this.listAppliances = new Set();
		this.filteredIngredients = [...this.listIngredients];
		this.filteredAppliances = [...this.listAppliances];
		this.filteredUstensils = [...this.listUstensils];

		recipesDto.forEach((recipeDto) => {
			recipeDto.ingredients.forEach((ingredient) => {
				const ingredientName = ingredient.toUpperCase();
				if (!this.listIngredients.has(ingredientName)) {
					this.listIngredients.add(ingredientName);
				}
			});

			recipeDto.ustensils.forEach((ustensil) => {
				const ustensilName = ustensil.toUpperCase();
				//
				if (!this.listUstensils.has(ustensilName)) {
					this.listUstensils.add(ustensilName);
				}
			});

			recipeDto.appliance.forEach((appliance) => {
				const applianceName = appliance.toUpperCase();
				if (!this.listAppliances.has(applianceName)) {
					this.listAppliances.add(applianceName);
				}
			});
		});
	}
}
