import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, Renderer2 } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import {
  Article,
  ArticlesService,
  Comment,
  CommentsService,
  User,
  UserService,
  PopularPostService
} from '../core';
import slugify from 'slugify';

@Component({
  selector: 'app-article-page',
  templateUrl: './article.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ArticleComponent implements OnInit {
  article: Article;
  currentUser: User;
  canModify: boolean;
  comments: Comment[];
  commentControl = new FormControl();
  commentFormErrors = {};
  isSubmitting = false;
  isDeleting = false;

  articleId: string;
  urlEncodedLink: string;
  headings: { text: string; level: number; slug: string }[] = [];
  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private commentsService: CommentsService,
    private router: Router,
    private userService: UserService,
    private cd: ChangeDetectorRef,
    private popularPostService: PopularPostService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    // Retreive the prefetched article
    this.route.data.subscribe(
      (data: { article: Article }) => {
        this.article = data.article;

        // Load the comments on this article
        this.populateComments();
        this.cd.markForCheck();
      }
    );

    // Load the current user's data
    this.userService.currentUser.subscribe(
      (userData: User) => {
        this.currentUser = userData;

        this.canModify = (this.currentUser.username === this.article.author.username);
        this.cd.markForCheck();
      }
    );
    // load popularPosts
    this.popularPostService.savePopularPosts(this.article);

    // Lấy articleId từ URL
    this.route.params.subscribe(params => {
      this.articleId = params['id'];
    });

    // Tạo link share Facebook bằng cách lấy URL trực tiếp từ trình duyệt
    this.urlEncodedLink = encodeURIComponent(window.location.href);


    // lay menu
    const parser = new DOMParser();
    const htmlDoc = parser.parseFromString(this.article.body, 'text/html');
    const headingElements = htmlDoc.querySelectorAll('h1, h2, h3');

    headingElements.forEach((heading: HTMLElement) => {
      const text = heading.innerText;
      const level = parseInt(heading.tagName.slice(1));
      const slug = slugify(text, { lower: true, strict: true });
      this.headings.push({ text, level, slug });
    });

    console.log(this.headings); // Print the headings array


  }

  onToggleFavorite(favorited: boolean) {
    this.article.favorited = favorited;

    if (favorited) {
      this.article.favoritesCount++;
    } else {
      this.article.favoritesCount--;
    }
  }

  trackByFn(index, item) {
    return index;
  }

  onToggleFollowing(following: boolean) {
    this.article.author.following = following;
  }

  deleteArticle() {
    this.isDeleting = true;

    this.articlesService.destroy(this.article.slug)
      .subscribe(
        success => {
          this.router.navigateByUrl('/');
        }
      );
  }

  populateComments() {
    this.commentsService.getAll(this.article.slug)
      .subscribe(comments => {
        this.comments = comments;
        this.cd.markForCheck();
      });
  }

  addComment() {
    this.isSubmitting = true;
    this.commentFormErrors = {};

    const commentBody = this.commentControl.value;
    this.commentsService
      .add(this.article.slug, commentBody)
      .subscribe(
        comment => {
          this.comments.unshift(comment);
          this.commentControl.reset('');
          this.isSubmitting = false;
          this.cd.markForCheck();
        },
        errors => {
          this.isSubmitting = false;
          this.commentFormErrors = errors;
          this.cd.markForCheck();
        }
      );
  }

  onDeleteComment(comment) {
    this.commentsService.destroy(comment.id, this.article.slug)
      .subscribe(
        success => {
          this.comments = this.comments.filter((item) => item !== comment);
          this.cd.markForCheck();
        }
      );
  }


  scrollToElement(heading: any) {
    const targetElement = document.querySelector(`#${heading.slug}`);

    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  }
  
}
