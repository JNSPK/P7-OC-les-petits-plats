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
			addToSet(ingredient.ingredient, this.ingredients)
		);
		this.ingredientsData = new Set([...ingredients]);
		this.time = time;
		this.description = description;
		this.appliance = new Set([appliance.toUpperCase()]);
		this.ustensils = new Set();
		ustensils.forEach((ustensil) => addToSet(ustensil, this.ustensils));
	}
	isValidInput(inputValue) {
		const isValid =
			this.name.toUpperCase().includes(inputValue) ||
			this.ingredients.has(inputValue) ||
			this.description.toUpperCase().includes(inputValue) ||
			inputValue == '';

		return isValid;
	}
	hasIngredient(ingredientsSelected) {
		return (
			ingredientsSelected.every((ingredient) =>
				this.ingredients.has(ingredient.toUpperCase())
			) || ingredientsSelected.length === 0
		);
	}
	hasUstensil(ustensilsSelected) {
		return (
			ustensilsSelected.every((ustensil) =>
				this.ustensils.has(ustensil.toUpperCase())
			) || ustensilsSelected.length === 0
		);
	}

	hasAppliance(appliancesSelected) {
		return (
			appliancesSelected.every((appliance) =>
				this.appliance.has(appliance.toUpperCase())
			) || appliancesSelected.length === 0
		);
	}
}
function addToSet(value, set) {
	if (!set.has(value)) {
		set.add(value.toUpperCase());
	}
}
