import { recipes } from '../data/recipes.js';
import RecipesProvider from '../data/recipesProvider.js';
import SearchResultDto from '../dto/searchResultDto.js';
import RecipeCardBuilder from '../builder/recipeCardBuilder.js';
import DropdownBuilder from '../builder/dropdownBuilder.js';
import ClickListener from '../eventListener/clickEvent.js';
import KeyListener from '../eventListener/keyEvent.js';

const recipe = RecipesProvider.findAll(recipes);

const recipesData = new Set(recipe);

const searchResult = new SearchResultDto(recipes);

// Pour chaque recette stockée dans le Set, fabrication d'une carte et ajout au DOM

RecipeCardBuilder.BuildAllCards(recipesData);

// Pour chaque ingrédient, ajout au menu déroulant "Ingrédients"

DropdownBuilder.buildIngredientDropdown(searchResult);
DropdownBuilder.buildApplianceDropdown(searchResult);
DropdownBuilder.buildUstensilsDropdown(searchResult);

// Ecoute du click pour les évènements

ClickListener.listen(searchResult);

// Ecoute du keydown pour les recherches au sein des dropdowns

KeyListener.listen(searchResult);
