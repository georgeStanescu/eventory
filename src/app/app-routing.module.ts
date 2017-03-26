import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'posts',
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'posts',
  //   component: PostsComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routedComponents = [PostsComponent];