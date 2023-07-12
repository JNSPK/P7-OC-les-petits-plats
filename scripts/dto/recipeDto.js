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
		ingredients.forEach((ingredient) => {
			this.ingredients.add(ingredient.ingredient);
		});
		this.ingredientsData = new Set([...ingredients]);
		this.time = time;
		this.description = description;
		this.appliance = new Set([appliance]);
		this.ustensils = new Set([...ustensils]); // Retrait des doublons, majuscules, minuscules, pluriel, singulier
	}

	// cleanValues() {
	// 	new Set()
	// }
}
