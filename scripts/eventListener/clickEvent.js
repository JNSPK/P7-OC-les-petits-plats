// import SearchResult from '../dto/searchResultDto.js';
import DropdownBuilder from '../builder/dropdownBuilder.js';

export default class ClickListener {
	static listen(searchResult) {
		const dropdowns = document.querySelector('.dropdowns-and-tags');

		dropdowns.addEventListener('click', (e) => {
			this.toggleMenu(e);
			this.toggleTagState(e, searchResult);
			const selectedTags = document.querySelector('.selected-tags');
			const selectedTag = document.createElement('div');
			const isCloseButton = e.target.classList.contains('remove-tag');

			if (e.target.classList.contains('selected')) {
				e.target.style.display = 'none';
				const elementStyles = window.getComputedStyle(e.target);
				const backgroundColor = elementStyles.backgroundColor;

				selectedTags.classList.add('active');

				const closeButton = document.createElement('div');

				selectedTag.classList.add('selected-tag');
				closeButton.classList.add('remove-tag');

				selectedTag.innerHTML = e.target.textContent;
				selectedTag.appendChild(closeButton);
				selectedTag.style.backgroundColor = backgroundColor;

				selectedTags.appendChild(selectedTag);
			}

			if (isCloseButton) {
				selectedTags.removeChild(e.target.parentNode);
				const targetedIngredient =
					e.target.parentNode.textContent.toUpperCase();
				searchResult.removeTagIngredient(targetedIngredient);

				DropdownBuilder.buildIngredientDropdown(searchResult);
			}
		});
	}
	static toggleMenu(e) {
		const isAMenuTrigger = e.target.classList.contains('menu-trigger');

		if (!isAMenuTrigger) {
			return false;
		}

		const dropdownMenu = e.target.nextElementSibling;

		dropdownMenu.classList.toggle('active');
	}

	static toggleTagState(e, searchResult) {
		const isATag = e.target.classList.contains('tag');
		const isIngredientTag =
			e.target.parentNode.classList.contains('ingredients-list');
		const isApplianceTag =
			e.target.parentNode.classList.contains('appliances-list');
		const isUstensilTag =
			e.target.parentNode.classList.contains('ustensils-list');

		if (!isATag) {
			return false;
		}

		//////////////////// A remplacer par un switch ///////////////////////

		if (isIngredientTag) {
			const targetedIngredient = e.target.textContent.toUpperCase();

			// Ajouter l'ingrédient aux tags
			searchResult.addTagIngredient(targetedIngredient);
		} else if (isApplianceTag) {
			const targetedAppliance = e.target.textContent.toUpperCase();

			// Ajouter l'appareil aux tags
			searchResult.addTagAppliance(targetedAppliance);
		} else if (isUstensilTag) {
			const targetedUstensil = e.target.textContent.toUpperCase();

			// Ajouter l'ingrédient aux tags
			searchResult.addTagUstensil(targetedUstensil);
		}
		////////////////////////////////////////////////////////////////////

		e.target.classList.add('selected');
	}
}
