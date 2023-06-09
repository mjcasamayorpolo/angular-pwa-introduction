import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-component-list',
  templateUrl: './component-list.component.html',
  styleUrls: ['./component-list.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0.2 })),
      transition('void <=> *', animate(3000)),
    ]),
  ],
})
export class ComponentListComponent implements OnInit {
  products: Product[] = [];
  viewGrid: boolean;

  constructor(
    public router: Router,
    private productsService: ComponentService
  ) {
    this.viewGrid = true;
  }

  ngOnInit(): void {
    setTimeout(
      () =>
        this.productsService.getAllProducts().subscribe((products) => {
          this.products = products;
        }),
      2000
    );
  }

  onViewGrid(): void {
    this.viewGrid = true;
  }

  onViewCards(): void {
    this.viewGrid = false;
  }

  goToDetail(): void {}
}
