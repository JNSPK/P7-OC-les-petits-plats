import { recipes } from '../data/recipes.js';
import recipeCardBuilder from '../builder/recipeCardBuilder.js';

const recettes = document.querySelector('.recipes-wrapper');

recettes.innerHTML += recipeCardBuilder.buildAll(recipes);

console.log(ingredients);
