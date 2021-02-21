import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit, OnDestroy {
  private loadedRecipeSub: Subscription;
  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipesService: RecipesService,
    private router: Router
    ) { }

  ngOnDestroy(): void {
    this.loadedRecipeSub.unsubscribe();
  }
  ngOnInit() {
    this.loadedRecipeSub = this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        return;
      }
      const recipeid = paramMap.get('recipeId');
      this.loadedRecipe = this.recipesService.getRecipe(recipeid);
    });
  }
  onDeleteRecipe(recipeId: string) {
    this.recipesService.deleteRecipe(this.loadedRecipe.id);
    this.router.navigate(['/recipes'], { replaceUrl: true });
  }
}
