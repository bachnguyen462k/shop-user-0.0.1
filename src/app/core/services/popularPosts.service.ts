import { Injectable } from '@angular/core';
import { Article } from '../models/article.model';


@Injectable({
  providedIn: 'root'
})
export class PopularPostService {
  getPopularPosts(): Article[] {
    const jsonData = window.localStorage.getItem('popularPosts');
    if (jsonData) {
      return JSON.parse(jsonData);
    } else {
      return [];
    }
  }
  

  savePopularPosts(data: Article) {
    const popularPosts: Article[] = JSON.parse(window.localStorage.getItem('popularPosts')) || [];
  
    // Remove existing article with the same slug
    const existingArticleIndex = popularPosts.findIndex(article => article.slug === data.slug);
    if (existingArticleIndex !== -1) {
      popularPosts.splice(existingArticleIndex, 1);
    }
  
    // Add new article to the beginning of the array
    popularPosts.unshift(data);
  
    // Limit the array to a maximum of 5 articles
    if (popularPosts.length > 5) {
      popularPosts.splice(5);
    }
  
    const jsonData = JSON.stringify(popularPosts);
    window.localStorage.setItem('popularPosts', jsonData);
  }
   
  

  destroyPopularPosts() {
    window.localStorage.removeItem('popularPosts');
  }

}
