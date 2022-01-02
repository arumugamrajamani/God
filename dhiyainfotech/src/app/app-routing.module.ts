import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { CreatePostsComponent } from './create-posts/create-posts.component';
import { EditPostsComponent } from './edit-posts/edit-posts.component';
import { MyPostsComponent } from './my-posts/my-posts.component';
import { PostsDetailsComponent } from './posts-details/posts-details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path:'posts', component:PostsComponent, pathMatch:'full' },
  {path:'posts/:id', component:PostsDetailsComponent},
  {path:'contact/:id', component:ContactPageComponent},
  {path:'edit-posts/:id', component:EditPostsComponent},
  {path:'my-posts', component:MyPostsComponent},
  {path:'create-post', component:CreatePostsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
