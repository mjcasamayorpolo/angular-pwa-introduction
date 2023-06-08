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
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({ opacity: 0.2 })),
      transition('void <=> *', animate(3000)),
    ]),
  ],
})
export class CardComponent implements OnInit {
  @Input() images!: Image[];

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
