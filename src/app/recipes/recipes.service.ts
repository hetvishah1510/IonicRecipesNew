import { Injectable } from '@angular/core';
import { Recipe } from './recipe.modal';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  
  private recipes: Recipe[] =  [
    {
    id: 'r1',
    title: 'Pizza',
    imageUrl:'https://homepages.cae.wisc.edu/~ece533/images/fruits.png',
    ingredints:['chess','tometo','olives'],
  },
  {
    id: 'r2',
    title: 'Pasta',
    imageUrl:'https://homepages.cae.wisc.edu/~ece533/images/monarch.png',
    ingredints:['chess','white sauce','pasta'],
  },
  {
    id: 'r3',
    title: 'Burger',
    imageUrl:'https://homepages.cae.wisc.edu/~ece533/images/fruits.png',
    ingredints:['chess','white sauce','Bread','Red sauce'],
  },
];
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }
  getRecipe(recipeId: string){
    return{
      ...this.recipes.find(recipe =>{
        return recipe.id === recipeId; 
      }),
    };
  }
}
