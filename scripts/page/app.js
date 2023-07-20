import RecipesProvider from '../data/recipesProvider.js';
import ClickListener from '../eventListener/clickEvent.js';
import KeyListener from '../eventListener/keyEvent.js';
import SearchService from '../dto/searchService.js';

const recipes = RecipesProvider.findAll();

const searchService = new SearchService(recipes);

searchService.search();

// Ecoute du click pour les évènements

ClickListener.listen(searchService);

// Ecoute du keydown pour les recherches au sein des dropdowns

// KeyListener.listen(searchService);

// console.log(searchResult);
