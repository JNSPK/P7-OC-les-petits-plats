export default class RecipeDto {
	constructor(
		id,
		image,
		name,
		servings,
		ingredients,
		time,
		description,
		appliance,
		ustensils
	) {
		this.id = id;
		this.image = image;
		this.name = name;
		this.servings = servings;
		this.ingredients = new Set();
		ingredients.forEach((ingredient) =>
			addPluralFormToSet(ingredient.ingredient, this.ingredients)
		);
		this.ingredientsData = new Set([...ingredients]);
		this.time = time;
		this.description = description;
		this.appliance = new Set([appliance.toUpperCase()]);
		this.ustensils = new Set();
		ustensils.forEach((ustensil) =>
			addPluralFormToSet(ustensil, this.ustensils)
		); // Retrait des doublons, majuscules, minuscules, pluriel, singulier
	}
	isValidInput(inputValue) {
		const isValid =
			this.name.toUpperCase().includes(inputValue) ||
			this.ingredients.has(inputValue.toUpperCase()) ||
			this.description.toUpperCase().includes(inputValue) ||
			inputValue == '';

		return isValid;
	}
	hasIngredient(ingredientsSelected) {
		const hasIngredient =
			this.ingredients.has(ingredientsSelected.toString()) ||
			ingredientsSelected == '';

		return hasIngredient;
	}
	hasUstensil(ustensilsSelected) {
		const hasUstensil =
			this.ustensils.has(ustensilsSelected.toString()) ||
			ustensilsSelected == '';
		return hasUstensil;
	}
	hasAppliance(appliancesSelected) {
		const hasAppliance =
			this.appliance.has(appliancesSelected.toString()) ||
			appliancesSelected == '';
		return hasAppliance;
	}

	// cleanValues() {
	// 	new Set();
	// }
}
function addPluralFormToSet(value, set) {
	const pluriel = value + 's';

	if (!set.has(pluriel)) {
		set.add(value.toUpperCase());
	}
}
