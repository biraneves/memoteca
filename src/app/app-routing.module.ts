import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddThoughtComponent } from './components/thoughts/add-thought/add-thought.component';
import { ListThoughtsComponent } from './components/thoughts/list-thoughts/list-thoughts.component';
import { DeleteThoughtComponent } from './components/thoughts/delete-thought/delete-thought.component';
import { EditThoughtComponent } from './components/thoughts/edit-thought/edit-thought.component';

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
  {
    path: 'thoughts/delete-thought/:id',
    component: DeleteThoughtComponent,
  },
  {
    path: 'thoughts/edit-thought/:id',
    component: EditThoughtComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
