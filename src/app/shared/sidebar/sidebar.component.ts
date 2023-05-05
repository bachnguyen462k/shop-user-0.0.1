import { Component, OnInit } from '@angular/core';
import { Article, PopularPostService } from '../../core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  popularPost : Article[];
  popularPostNew : Article;
  constructor(
    private popularPostService: PopularPostService,
  ) { }

  ngOnInit(): void {
    //load Article to locl
   this.popularPost= this.popularPostService.getPopularPosts();
   if (this.popularPost && this.popularPost.length) {
    this.popularPostNew= this.popularPost[0];

   }
  }

}
