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
		this.filteredAppliances = [...this.listAppliances];
		this.filteredUstensils = [...this.listUstensils];

		recipesDto.forEach((recipeDto) => {
			recipeDto.ingredients.forEach((ingredient) => {
				const ingredientName = ingredient.toUpperCase();
				if (!this.listIngredients.has(ingredientName)) {
					if (!this.tagIngredients.has(ingredientName)) {
						this.listIngredients.add(ingredientName);
					}
				}
			});
			// recipesDto.forEach((recipeDto) => {
			// 	recipeDto.ingredients.forEach((ingredient) => {
			// 		const ingredientName = ingredient.ingredient.toUpperCase();
			// 		this.cleanValues(
			// 			ingredientName,
			// 			this.listIngredients,
			// 			this.tagIngredients
			// 		);
			// 	});

			recipeDto.ustensils.forEach((ustensil) => {
				const ustensilName = ustensil.toUpperCase();
				//
				if (!this.listUstensils.has(ustensilName)) {
					if (!this.tagUstensils.has(ustensilName)) {
						this.listUstensils.add(ustensilName);
					}
				}
			});

			recipeDto.appliance.forEach((appliance) => {
				const applianceName = appliance.toUpperCase();
				if (!this.listAppliances.has(applianceName)) {
					if (!this.tagAppliances.has(applianceName)) {
						this.listAppliances.add(applianceName);
					}
				}
			});
		});
	}

	// 	filterIngredients(searchValue) {
	// 		// Réinitialiser filteredIngredients avec les ingrédients non filtrés lorsque la recherche est vide
	// 		if (searchValue.trim() === '') {
	// 			this.filteredIngredients = [...this.listIngredients].sort();
	// 		} else {
	// 			this.filteredIngredients = [...this.listIngredients]
	// 				.filter((ingredient) => ingredient.includes(searchValue.toUpperCase()))
	// 				.sort();
	// 		}
	// 	}
	// 	filterAppliances(searchValue) {
	// 		// Réinitialiser filteredAppliances avec les ingrédients non filtrés lorsque la recherche est vide
	// 		if (searchValue.trim() === '') {
	// 			this.filteredAppliances = [...this.listAppliances].sort();
	// 		} else {
	// 			this.filteredAppliances = [...this.listAppliances]
	// 				.filter((appliance) => appliance.includes(searchValue.toUpperCase()))
	// 				.sort();
	// 		}
	// 	}
	// 	filterUstensils(searchValue) {
	// 		// Réinitialiser filteredUstensils avec les ingrédients non filtrés lorsque la recherche est vide
	// 		if (searchValue.trim() === '') {
	// 			this.filteredUstensils = [...this.listUstensils].sort();
	// 		} else {
	// 			this.filteredUstensils = [...this.listUstensils]
	// 				.filter((ustensil) => ustensil.includes(searchValue.toUpperCase()))
	// 				.sort();
	// 		}
	// 	}
	//
}
