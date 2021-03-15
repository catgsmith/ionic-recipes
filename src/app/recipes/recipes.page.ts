import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from './recipe.model';
import { RecipesService } from './recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit, OnDestroy {
  recipes: Recipe[];


  constructor(
      private recipesService: RecipesService,
      private activatedRoute: ActivatedRoute,
    ) { }

  ngOnInit() {
    console.log("ngOnInit Called Once");
/*     this.activatedRoute.url.subscribe(() => {
      this.recipes = this.recipesService.getAllRecipes();
    }); */
  }

  ngOnDestroy() {
    console.log("ngOnDestroy doesn't get called - it remains on the stack");
  }


  ionViewWillEnter() {
    console.log('ionViewWillEnter');
    this.recipes = this.recipesService.getAllRecipes();
  }

  ionViewDidEnter() {
    console.log('ionViewDidEnter');
  }

  ionViewWillLeave() {
    console.log('ionViewWillLeave');
  }

  ionViewDidLeave() {
    console.log('ionViewDidLeave');
  }
}