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
		// const upperCaseSelectedIngredients = ingredientsSelected.map((ingredient) =>
		// 	ingredient.toUpperCase()
		// );

		return (
			ingredientsSelected.every((ingredient) =>
				this.ingredients.has(ingredient.toUpperCase())
			) || ingredientsSelected.length === 0
		);
	}
	hasUstensil(ustensilsSelected) {
		// const upperCaseSelectedUstensils = ustensilsSelected.map((ustensil) =>
		// 	ustensil.toUpperCase()
		// );

		return (
			ustensilsSelected.every((ustensil) =>
				this.ustensils.has(ustensil.toUpperCase())
			) || ustensilsSelected.length === 0
		);
	}

	hasAppliance(appliancesSelected) {
		// const upperCaseSelectedAppliances = appliancesSelected.map((appliance) =>
		// 	appliance.toUpperCase()
		// );
		return (
			appliancesSelected.every((appliance) =>
				this.appliance.has(appliance.toUpperCase())
			) || appliancesSelected.length === 0
		);
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
