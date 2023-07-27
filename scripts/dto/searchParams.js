export default class SearchParams {
	constructor() {
		const inputValue = document.querySelector('#search').value.toUpperCase();
		this.inputValue = inputValue.length > 2 ? inputValue : '';
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
