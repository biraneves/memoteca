import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddThoughtComponent } from './components/thoughts/add-thought/add-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';

const routes: Routes = [
  {
    path: 'add-thought',
    component: AddThoughtComponent,
  },
  {
    path: 'list-thoughts',
    component: ListThoughtsComponent,
  },
  {
    path: '',
    redirectTo: 'list-thoughts',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
