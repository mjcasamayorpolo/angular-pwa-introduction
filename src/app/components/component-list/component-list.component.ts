import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';
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
  images: Image[] = [];
  viewGrid: boolean;

  constructor(public router: Router, private imagesService: ComponentService) {
    this.viewGrid = true;
  }

  ngOnInit(): void {
    setTimeout(
      () =>
        this.imagesService.getAllImages().subscribe((images) => {
          this.images = images;
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
