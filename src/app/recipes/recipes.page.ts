import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {
  recipes: Recipe[];


  constructor(
      private recipesService: RecipesService,
      private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.activatedRoute.url.subscribe(() => {
      this.recipes = this.recipesService.getAllRecipes();
    });
  }

}