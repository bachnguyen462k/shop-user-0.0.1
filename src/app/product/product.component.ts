import { Component, OnInit } from '@angular/core';
import { faStarHalfAlt,faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html'
})
export class ProductComponent implements OnInit {
  faStar=faStarHalfStroke;
  constructor() { }

  ngOnInit(): void {
  }

}
