import { NgModule } from '@angular/core';

import { ArticleComponent } from './article.component';
import { ArticleCommentComponent } from './article-comment.component';
import { MarkdownPipe } from './markdown.pipe';
import { SharedModule } from '../shared';
import { ArticleRoutingModule } from './article-routing.module';
import { ScrollSpyModule } from 'ngx-scrollspy';
@NgModule({
  imports: [
    SharedModule,
    ArticleRoutingModule,
    ScrollSpyModule
  ],
  declarations: [
    ArticleComponent,
    ArticleCommentComponent,
    MarkdownPipe
  ],

  providers: [
  ]
})
export class ArticleModule {}
