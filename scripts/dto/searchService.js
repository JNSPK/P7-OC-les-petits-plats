import SearchParams from './searchParams.js';
import SearchResult from './searchResult.js';
import RecipeCardBuilder from '../builder/recipeCardBuilder.js';
import DropdownBuilder from '../builder/dropdownBuilder.js';
import Algo1Service from '../service/algo1Service.js';

export default class SearchService {
	constructor(recipes) {
		this.recipes = recipes;
	}

	search() {
		this.searchParams = new SearchParams();
		const recipesFiltered = this.searchMatchingRecipes();
		this.searchResult = new SearchResult(recipesFiltered);
		this.refreshRecipes();
		this.refreshDropdowns();
		console.log(this);
	}

	searchMatchingRecipes() {
		return Algo1Service.filterRecipes(this.searchParams, this.recipes);
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
	filterIngredients(searchValue) {
		// Réinitialiser filteredIngredients avec les ingrédients non filtrés lorsque la recherche est vide
		if (searchValue.trim() === '') {
			this.searchResult.filteredIngredients = [
				...this.searchResult.listIngredients,
			].sort();
		} else {
			this.searchResult.filteredIngredients = [
				...this.searchResult.listIngredients,
			]
				.filter((ingredient) => ingredient.includes(searchValue.toUpperCase()))
				.sort();
		}
		DropdownBuilder.buildIngredientsDropdown(
			this.searchResult,
			this.searchParams
		);
	}
	filterAppliances(searchValue) {
		// Réinitialiser filteredAppliances avec les ingrédients non filtrés lorsque la recherche est vide
		if (searchValue.trim() === '') {
			this.searchResult.filteredAppliances = [
				...this.searchResult.listAppliances,
			].sort();
		} else {
			this.searchResult.filteredAppliances = [
				...this.searchResult.listAppliances,
			]
				.filter((appliance) => appliance.includes(searchValue.toUpperCase()))
				.sort();
		}
		DropdownBuilder.buildAppliancesDropdown(
			this.searchResult,
			this.searchParams
		);
	}
	filterUstensils(searchValue) {
		// Réinitialiser filteredUstensils avec les ingrédients non filtrés lorsque la recherche est vide
		if (searchValue.trim() === '') {
			this.searchResult.filteredUstensils = [
				...this.searchResult.listUstensils,
			].sort();
		} else {
			this.searchResult.filteredUstensils = [...this.searchResult.listUstensils]
				.filter((ustensil) => ustensil.includes(searchValue.toUpperCase()))
				.sort();
		}
		DropdownBuilder.buildUstensilsDropdown(
			this.searchResult,
			this.searchParams
		);
	}
}
