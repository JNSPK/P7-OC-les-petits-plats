export default class TagBuilder {
	static buildTag(e) {
		const selectedTag = document.createElement('div');
		const closeButton = document.createElement('div');

		// On récupère le bakckground color de l'élément cliqué.

		const elementStyles = window.getComputedStyle(e.target);
		const backgroundColor = elementStyles.backgroundColor;

		selectedTag.classList.add('selected-tag');
		closeButton.classList.add('remove-tag');

		selectedTag.innerHTML = e.target.textContent;
		selectedTag.appendChild(closeButton);
		selectedTag.style.backgroundColor = backgroundColor;

		const isIngredientTag = e.target.classList.contains(
			'ingredients-list-item'
		);
		const isApplianceTag = e.target.classList.contains('appliances-list-item');
		const isUstensilTag = e.target.classList.contains('ustensils-list-item');

		if (isIngredientTag) {
			selectedTag.classList.add('ingredient-tag');
		}
		if (isApplianceTag) {
			selectedTag.classList.add('appliance-tag');
		}
		if (isUstensilTag) {
			selectedTag.classList.add('ustensil-tag');
		}

		const selectedTagsArea = document.querySelector('.selected-tags');

		selectedTagsArea.appendChild(selectedTag);
	}
}
