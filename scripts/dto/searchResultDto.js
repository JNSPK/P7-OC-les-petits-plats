export default class SearchResult {
	constructor(recipesDto) {
		this.recipes = recipesDto;
		this.listIngredients = new Set();
		this.listUstensils = new Set();
		this.listAppliances = new Set();
		this.tagIngredients = new Set();
		this.tagAppliances = new Set();
		this.tagUstensils = new Set();

		recipesDto.forEach((recipeDto) => {
			recipeDto.ingredients.forEach((ingredient) => {
				const ingredientName = ingredient.ingredient.toUpperCase();
				if (!this.listIngredients.has(ingredientName)) {
					if (!this.tagIngredients.has(ingredientName)) {
						this.listIngredients.add(ingredientName);
					}
				}
			});
			recipeDto.ustensils.forEach((ustensil) => {
				this.listUstensils.add(ustensil.toUpperCase());
			});

			this.listAppliances.add(recipeDto.appliance.toUpperCase());
		});

		console.log(this);
	}
	addTagIngredient(ingredient) {
		this.tagIngredients.add(ingredient);
	}
	addTagAppliance(appliance) {
		this.tagAppliances.add(appliance);
	}
	addTagUstensil(ustensil) {
		this.tagUstensils.add(ustensil);
	}
}
