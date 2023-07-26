import RecipesProvider from '../data/recipesProvider.js';
import EventListener from '../eventListener/eventListener.js';
import SearchService from '../dto/searchService.js';

const recipes = RecipesProvider.findAll();

const searchService = new SearchService(recipes);

searchService.search();

// Ecoute du click pour les évènements

EventListener.listen(searchService);
