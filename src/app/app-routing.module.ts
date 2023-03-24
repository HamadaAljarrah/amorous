import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { LetUsChooseComponent } from './pages/let-us-choose/let-us-choose.component';
import { MakeGoodBetterComponent } from './pages/make-good-better/make-good-better.component';
import { MakeYourOwnComponent } from './pages/make-your-own/make-your-own.component';
import { OptionsComponent } from './pages/options/options.component';

const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'options', component: OptionsComponent },
  { path: 'options/make-your-own', component: MakeYourOwnComponent },
  { path: 'options/make-good-better', component: MakeGoodBetterComponent },
  { path: 'options/let-us-choose', component: LetUsChooseComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
