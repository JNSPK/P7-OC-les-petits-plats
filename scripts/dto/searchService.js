import SearchParams from './searchParams.js';
import SearchResult from './searchResult.js';
import RecipeCardBuilder from '../builder/recipeCardBuilder.js';
import DropdownBuilder from '../builder/dropdownBuilder.js';
import Algo2Service from '../service/algo2Service.js';

export default class SearchService {
	constructor(recipes) {
		this.recipes = recipes;
	}

	search() {
		this.searchParams = new SearchParams();
		const recipesFiltered = this.searchMatchingRecipes();
		this.searchResult = new SearchResult(recipesFiltered, this.searchParams);
		this.refreshRecipes();
		this.refreshDropdowns();
		console.dir(this);
	}

	searchMatchingRecipes() {
		return Algo2Service.filterRecipes(this.searchParams, this.recipes);
	}

	refreshRecipes() {
		// Pour chaque recette stockée dans le Set, fabrication d'une carte et ajout au DOM

		RecipeCardBuilder.BuildAllCards(this.searchResult.recipes);
	}
	refreshDropdowns() {
		// Pour chaque ingrédient, ajout au menu déroulant "Ingrédients"

		DropdownBuilder.buildIngredientsDropdown(
			this.searchResult,
			this.searchParams
		);
		DropdownBuilder.buildAppliancesDropdown(
			this.searchResult,
			this.searchParams
		);
		DropdownBuilder.buildUstensilsDropdown(
			this.searchResult,
			this.searchParams
		);
	}
}
