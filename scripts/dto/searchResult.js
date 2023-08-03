export default class SearchResult {
	constructor(recipesDto, searchParams) {
		this.recipes = recipesDto;
		this.listIngredients = new Set();
		this.listUstensils = new Set();
		this.listAppliances = new Set();
		this.searchParams = searchParams;

		recipesDto.forEach((recipeDto) => {
			recipeDto.ingredients.forEach((ingredient) => {
				const ingredientName = ingredient;
				if (
					!this.searchParams.ingredientsSelected.some(
						(ingredient) => ingredient === ingredientName.toUpperCase()
					)
				) {
					addPluralFormToSet(this.listIngredients, ingredientName);
				}
			});

			recipeDto.appliance.forEach((appliance) => {
				const applianceName = appliance;
				if (
					!this.searchParams.appliancesSelected.some(
						(appliance) => appliance === applianceName.toUpperCase()
					)
				) {
					addPluralFormToSet(this.listAppliances, applianceName);
				}
			});
			recipeDto.ustensils.forEach((ustensil) => {
				const ustensilName = ustensil;
				//
				if (
					!this.searchParams.ustensilsSelected.some(
						(ustensil) => ustensil === ustensilName.toUpperCase()
					)
				) {
					addPluralFormToSet(this.listUstensils, ustensilName);
				}
			});
		});

		function addPluralFormToSet(set, value) {
			if (![...set].includes(value.substring(0, value.length - 1))) {
				set.add(value.toUpperCase());
			}
		}
	}
}
