export default class SearchResult {
	constructor(recipesDto) {
		this.recipes = recipesDto;
		this.listIngredients = new Set();
		this.listUstensils = new Set();
		this.listAppliances = new Set();
		this.tagIngredients = new Set();
		this.tagAppliances = new Set();
		this.tagUstensils = new Set();
		this.filteredIngredients = [...this.listIngredients];

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
		if (
			!this.tagIngredients.has(ingredient) &&
			this.listIngredients.has(ingredient)
		) {
			this.tagIngredients.add(ingredient);
			this.listIngredients.delete(ingredient);
		}
	}

	removeTagIngredient(ingredient) {
		if (
			this.tagIngredients.has(ingredient) &&
			!this.listIngredients.has(ingredient)
		) {
			this.tagIngredients.delete(ingredient);
			this.listIngredients.add(ingredient);
		}
	}

	addTagAppliance(appliance) {
		this.tagAppliances.add(appliance);
	}
	addTagUstensil(ustensil) {
		this.tagUstensils.add(ustensil);
	}
	filterIngredients(searchValue) {
		// Réinitialiser filteredIngredients avec les ingrédients non filtrés lorsque la recherche est vide
		if (searchValue.trim() === '') {
			this.filteredIngredients = [...this.listIngredients].sort();
		} else {
			this.filteredIngredients = [...this.listIngredients]
				.filter((ingredient) => ingredient.includes(searchValue.toUpperCase()))
				.sort();
		}
	}
}
