import { Component, OnInit } from '@angular/core';
import { faStarHalfAlt,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product',
  templateUrl: './product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
  faStar=faStarHalfStroke;
  constructor() { }

  ngOnInit(): void {
  }

}
