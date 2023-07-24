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
			console.log(searchService);
		});

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

		const selectedTagsArea = document.querySelector('.selected-tags');
		const selectedTag = document.createElement('div');
		const elementStyles = window.getComputedStyle(e.target);
		const backgroundColor = elementStyles.backgroundColor;
		const isIngredientTag = e.target.classList.contains(
			'ingredients-list-item'
		);
		const isApplianceTag = e.target.classList.contains('appliances-list-item');
		const isUstensilTag = e.target.classList.contains('ustensils-list-item');
		const closeButton = document.createElement('div');

		selectedTagsArea.classList.add('active');
		selectedTag.classList.add('selected-tag');
		closeButton.classList.add('remove-tag');

		selectedTag.innerHTML = e.target.textContent;
		selectedTag.appendChild(closeButton);
		selectedTag.style.backgroundColor = backgroundColor;
		selectedTagsArea.appendChild(selectedTag);

		if (e.target.classList.contains('selected')) {
			e.target.style.display = 'none';

			if (isIngredientTag) {
				selectedTag.classList.add('ingredient-tag');
				searchService.searchParams.ingredientsSelected.push(
					e.target.textContent.toUpperCase()
				);
				if (
					searchService.searchParams.ingredientsSelected.includes(
						e.target.textContent.toUpperCase()
					)
				) {
					searchService.searchResult.listIngredients.delete(
						e.target.textContent
					);
				}

				// searchService.searchResult.listIngredients.delete(e.target);
			}
			if (isApplianceTag) {
				selectedTag.classList.add('appliance-tag');
				searchService.searchParams.appliancesSelected.push(
					e.target.textContent.toUpperCase()
				);
			}
			if (isUstensilTag) {
				selectedTag.classList.add('ustensil-tag');
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
		var targetedIngredient =
			searchService.searchParams.ingredientsSelected.indexOf(
				e.target.parentNode
			);

		var targetedAppliance =
			searchService.searchParams.appliancesSelected.indexOf(
				e.target.parentNode
			);
		var targetedUstensil = searchService.searchParams.ustensilsSelected.indexOf(
			e.target.parentNode
		);

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
		const input = document.querySelector('.search');

		input.addEventListener('keyup', (e) => {
			if (e.target.value.length > 2) {
				searchService.search(e);
			}
			if (document.querySelector('.search').value.length === 0) {
				searchService.search(e);
			}
		});
	}
	static inputSubmit(searchService) {
		//on click sur loupe
		const submit = document.querySelector('.submit');

		submit.addEventListener('click', (e) => {
			e.preventDefault();

			if (document.querySelector('.search').value.length > 2) {
				searchService.search(e);
			}
			if (document.querySelector('.search').value.length === 0) {
				searchService.search(e);
			}
		});
	}
}
