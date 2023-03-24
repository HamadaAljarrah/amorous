import { Component, Input, OnInit } from '@angular/core';
import { fadeInOut } from 'src/app/animation/onLoad';
import { MyoNavService } from 'src/app/services/myo-nav.service';
import {
    Ingredient,
    UserChoiceService,
} from 'src/app/services/user-choice.service';
import { data } from './ingredients';

@Component({
    selector: 'app-ingredients',
    templateUrl: './ingredients.component.html',
    styleUrls: ['./ingredients.component.scss'],
    animations: [fadeInOut],
})
export class IngredientsComponent implements OnInit {
    @Input() showNum!: number;
    ingredients: Ingredient[] = [];
    filteredIngredients: Ingredient[] = [];
    chosenIngredients: Ingredient[] = [];
    searchText = '';

    constructor(
        private myoNavService: MyoNavService,
        private userChoiceService: UserChoiceService
    ) {}

    ngOnInit(): void {
        this.ingredients = data;
        this.userChoiceService.choices$.subscribe((data) => {
            this.chosenIngredients = data.ingridients;
            if (data.ingridients == undefined) this.chosenIngredients = [];
        });
    }
    get show(): boolean {
        return this.myoNavService.getCurrentComponent() === this.showNum;
    }

    search(event: Event) {
        this.searchText = "" + event;
        this.filteredIngredients = this.ingredients.filter((ing) =>
            ing.name.toLowerCase().includes(this.searchText.toLowerCase())
        );        
    }

    addIngredient(ingredient: Ingredient): void {
        if (this.ingredientExist(ingredient)) return;
        if (this.chosenIngredients.length >= 5) return;
        this.chosenIngredients.push(ingredient);
        this.userChoiceService.setIngridients(this.chosenIngredients);
        console.log(this.chosenIngredients);
    }

    removeIngredient(ingredient: Ingredient): void {
        const index = this.chosenIngredients.indexOf(ingredient);
        this.chosenIngredients.splice(index, 1);
        this.userChoiceService.setIngridients(this.chosenIngredients);
    }

    ingredientExist(ing: Ingredient): boolean {
        if (this.chosenIngredients.indexOf(ing) == -1) return false;
        return true;
    }
}