export default class SearchResult {
	constructor(recipesDto) {
		this.recipes = recipesDto;
		this.listIngredient = new Set();
		this.listUstensils = new Set();
		this.listAppliance = new Set();
		recipesDto.forEach((recipeDto) => {
			recipeDto.ingredients.forEach((ingredient) => {
				this.listIngredient.add(ingredient.ingredient.toUpperCase());
			});
			recipeDto.ustensils.forEach((ustensil) => {
				this.listUstensils.add(ustensil.toUpperCase());
			});

			this.listAppliance.add(recipeDto.appliance.toUpperCase());
		});

		// this.tagIngredients = new Set(['banane', 'fraise']);
		// this.tagUstensil = new Set();
		// this.tagAppliance = new Set(['cuillère']);
	}
}
