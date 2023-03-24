import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './pages/landing/landing.component';
import { MakeYourOwnComponent } from './pages/make-your-own/make-your-own.component';
import { GenderComponent } from './sections/gender/gender.component';
import { CharactersComponent } from './sections/characters/characters.component';
import { OptionsComponent } from './pages/options/options.component';
import { MakeGoodBetterComponent } from './pages/make-good-better/make-good-better.component';
import { LetUsChooseComponent } from './pages/let-us-choose/let-us-choose.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ProgressbarComponent } from './components/progressbar/progressbar.component';
import { OptionCardComponent } from './components/option-card/option-card.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RadioInputComponent } from './components/radio-input/radio-input.component';
import { ImpressionsComponent } from './sections/impressions/impressions.component';
import { IngredientsComponent } from './sections/ingredients/ingredients.component';
import { ChipsComponent } from './components/chips/chips.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { IngredientComponent } from './components/ingredient/ingredient.component';
import { LazyLoadingImgDirective } from './lazy-loading-img.directive';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    MakeYourOwnComponent,
    GenderComponent,
    CharactersComponent,
    OptionsComponent,
    MakeGoodBetterComponent,
    LetUsChooseComponent,
    NavbarComponent,
    ProgressbarComponent,
    OptionCardComponent,
    RadioInputComponent,
    ImpressionsComponent,
    IngredientsComponent,
    ChipsComponent,
    SearchbarComponent,
    IngredientComponent,
    LazyLoadingImgDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
