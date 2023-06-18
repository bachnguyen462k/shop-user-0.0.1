import { Component, OnInit } from '@angular/core';
import { ArticleListConfig } from '../core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor() { }
  listConfig: ArticleListConfig = {
    type: 'all',
    filters: {}
  };
  ngOnInit(): void {
  }

}
