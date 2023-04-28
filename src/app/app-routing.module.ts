import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroDetailsComponent } from './hero-details/hero-details.component';
import { HeroEditComponent } from './hero-edit/hero-edit.component';
import {HeroComponent} from './hero/hero.component';

const routes: Routes = [
    {
        path: '',
        component: HeroComponent
    },
    {
          path: 'details',
          component: HeroDetailsComponent
    },
    {
        path: 'edit/:id',
        component: HeroEditComponent
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
