export default class CountBuilder {
	// On récupère la taille du set "recipes" au sein du searchResult

	static build(searchResult) {
		const countZone = document.querySelector('.compteur');
		countZone.innerHTML = '';
		let recipesNumber = searchResult.recipes.size;

		let html = `${recipesNumber} recette(s)`;

		countZone.innerHTML = html;
	}
}
