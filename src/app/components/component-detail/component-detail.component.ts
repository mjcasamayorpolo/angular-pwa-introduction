import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.interface';
import { ComponentService } from 'src/app/services/component.service';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-detail.component.html',
  styleUrls: ['./component-detail.component.css'],
})
export class ComponentDetailComponent implements OnInit {
  product!: Product;

  constructor(
    private componentService: ComponentService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const identifier = this.activatedRoute.snapshot.paramMap.get('id');
    this.componentService.getProductById(identifier).subscribe((product) => {
      if (!product) {
        return this.router.navigateByUrl('/');
      }
      this.product = product;
      //console.log('Image --> ', this.product);
    });
  }
}
