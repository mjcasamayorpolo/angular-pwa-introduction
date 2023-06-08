import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Image } from 'src/app/models/image.interface';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0.2 })),
      transition('void <=> *', animate(3000)),
    ]),
  ],
})
export class GridComponent implements OnInit {
  @Input() images!: Image[];

  displayedColumns: string[] = ['id', 'author'];

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
