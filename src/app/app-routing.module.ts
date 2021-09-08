import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from "./main/main.component";
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: '', redirectTo: '/main', pathMatch:'full' },
  { path: 'main', component: MainComponent },
  { path: 'search', component: SearchComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
