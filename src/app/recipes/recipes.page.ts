import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[] = [{
    id: 'r1', title: 'Shnitzel', imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/recipe-image-legacy-id-494495_12-16f2358.jpg?quality=90&webp=true&resize=440,400',
    ingredients: ['2 eggs', 'sage', 'breadcrumbs', 'pork meat', 'butter']
  }, {
    id: 'r2', title: 'Pork souvlaki', imageUrl: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/pork-souvlaki-1380e9d.jpg?quality=90&webp=true&resize=440,400',
    ingredients: ['lemon', 'paprika', 'yogurt', 'pork meat', 'red peppers']
  }];

  constructor() { }

  ngOnInit() {
  }

}