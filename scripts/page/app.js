import { recipes } from '../data/recipes.js';
import RecipesProvider from '../data/recipesProvider.js';
import SearchResultDto from '../dto/searchResultDto.js';
import RecipeCardBuilder from '../builder/recipeCardBuilder.js';
import DropdownBuilder from '../builder/dropdownBuilder.js';
import ClickListener from '../eventListener/clickEvent.js';

const recipe = RecipesProvider.findAll(recipes);

// const recipeBis = new recipesDto(
// 	1,
// 	'Recette01.jpg',
// 	'Limonade de Coco',
// 	[
// 		{
// 			ingredient: 'Lait de coco',
// 			quantity: 400,
// 			unit: 'ml',
// 		},
// 		{
// 			ingredient: 'Banane',
// 			quantity: 2,
// 		},
// 		{
// 			ingredient: 'Glaçons',
// 		},
// 	],
// 	10,
// 	"Mettre les glaçons à votre goût dans le blender, ajouter le lait, la crème de coco, le jus de 2 citrons et le sucre. Mixer jusqu'à avoir la consistence désirée",
// 	'Mixer',
// 	['couteau', 'verres']
// );
const recipesData = new Set(recipe);
console.log(recipesData);

const searchResult = new SearchResultDto(recipes);

// Pour chaque recette stockée dans le Set, fabrication d'une carte et ajout au DOM

RecipeCardBuilder.BuildAllCards(recipesData);

// Pour chaque ingrédient, ajout au menu déroulant "Ingrédients"

DropdownBuilder.buildIngredientDropdown(searchResult);
DropdownBuilder.buildApplianceDropdown(searchResult);
DropdownBuilder.buildUstensilsDropdown(searchResult);

// Ecoute du click pour les évènements

ClickListener.listen();
