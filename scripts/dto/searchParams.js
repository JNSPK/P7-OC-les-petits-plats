export default class SearchParams {
	constructor() {
		this.inputValue = document.querySelector('#search').value.toUpperCase();
		this.ingredientsSelected = [
			...document.querySelectorAll('.ingredient-tag'),
		].map((text) => text.textContent.toUpperCase());

		this.appliancesSelected = [
			...document.querySelectorAll('.appliance-tag'),
		].map((text) => text.textContent.toUpperCase());

		this.ustensilsSelected = [
			...document.querySelectorAll('.ustensil-tag'),
		].map((text) => text.textContent.toUpperCase());
	}
}
