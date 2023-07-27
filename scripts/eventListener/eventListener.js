import TagBuilder from '../builder/tagBuilder.js';

export default class EventListener {
	static listen(searchService) {
		const dropdownsAndTags = document.querySelector('.dropdowns-and-tags');

		dropdownsAndTags.addEventListener('click', (e) => {
			this.toggleMenu(e);
			this.addSelectedTag(e, searchService);

			const isCloseButton = e.target.classList.contains('remove-tag');
			if (isCloseButton) {
				this.removeSelectedTag(e, searchService);
			}
			// searchService.search();
		});

		this.dropdownSearch(dropdownsAndTags);
		this.inputListen(searchService);
		this.inputSubmit(searchService);
	}

	static toggleMenu(e) {
		const isAMenuTrigger = e.target.classList.contains('menu-trigger');

		if (!isAMenuTrigger) {
			return false;
		}

		const dropdownMenu = e.target.nextElementSibling;

		dropdownMenu.classList.toggle('active');
	}

	static addSelectedTag(e, searchService) {
		const isATag = e.target.classList.contains('tag');

		if (!isATag) {
			return;
		}

		e.target.classList.add('selected');

		TagBuilder.buildTag(e);

		const selectedTagsArea = document.querySelector('.selected-tags');
		selectedTagsArea.classList.add('active');

		const isIngredientTag = e.target.classList.contains(
			'ingredients-list-item'
		);
		const isApplianceTag = e.target.classList.contains('appliances-list-item');
		const isUstensilTag = e.target.classList.contains('ustensils-list-item');

		if (e.target.classList.contains('selected')) {
			if (
				isIngredientTag &&
				!searchService.searchParams.ingredientsSelected.includes(
					e.target.textContent.toUpperCase()
				)
			) {
				searchService.searchParams.ingredientsSelected.push(
					e.target.textContent.toUpperCase()
				);
			}
			if (isApplianceTag) {
				searchService.searchParams.appliancesSelected.push(
					e.target.textContent.toUpperCase()
				);
			}
			if (isUstensilTag) {
				searchService.searchParams.ustensilsSelected.push(
					e.target.textContent.toUpperCase()
				);
			}
			searchService.search();
		}
	}
	static removeSelectedTag(e, searchService) {
		const selectedTagsArea = document.querySelector('.selected-tags');
		selectedTagsArea.removeChild(e.target.parentNode);
		const targetedIngredient =
			searchService.searchParams.ingredientsSelected.indexOf(
				e.target.parentNode
			);

		const targetedAppliance =
			searchService.searchParams.appliancesSelected.indexOf(
				e.target.parentNode
			);
		const targetedUstensil =
			searchService.searchParams.ustensilsSelected.indexOf(e.target.parentNode);

		const isIngredientTag =
			e.target.parentNode.classList.contains('ingredient-tag');
		const isApplianceTag =
			e.target.parentNode.classList.contains('appliance-tag');
		const isUstensilTag =
			e.target.parentNode.classList.contains('ustensil-tag');

		if (isIngredientTag) {
			searchService.searchParams.ingredientsSelected.splice(
				targetedIngredient,
				1
			);
		}
		if (isApplianceTag) {
			searchService.searchParams.appliancesSelected.splice(
				targetedAppliance,
				1
			);
		}
		if (isUstensilTag) {
			searchService.searchParams.ustensilsSelected.splice(targetedUstensil, 1);
		}
		searchService.search();
	}

	static inputListen(searchService) {
		//on key up
		document.querySelector('.search').addEventListener('keyup', () => {
			searchService.search();
		});
	}
	static inputSubmit(searchService) {
		//on click sur loupe
		document.querySelector('.submit').addEventListener('click', (e) => {
			e.preventDefault();
			searchService.search();
		});
	}

	static dropdownSearch(dropdownsAndTags) {
		dropdownsAndTags.addEventListener('keyup', (e) => {
			const searchValue = e.target.value.toUpperCase();
			const options = e.target.closest('ul').querySelectorAll('option');

			this.dropdownFiltered(searchValue, options);
		});
	}

	static dropdownFiltered(searchValue, options) {
		options.forEach((item) => {
			let hasSearchValue = item.value.toUpperCase().includes(searchValue);

			item.style.display = hasSearchValue ? 'flex' : 'none';
		});
	}
}
