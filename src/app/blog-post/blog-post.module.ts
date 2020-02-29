import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogPostComponent } from './blog-post.component';
import { RouterModule ,Route} from '@angular/router';

const routes: Route[]=[
  {
  path: '',
  component: BlogPostComponent
  }
]

@NgModule({
  declarations: [BlogPostComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})

export class BlogPostModule { }
