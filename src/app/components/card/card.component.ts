import { Component, Input } from '@angular/core';
import { card } from 'src/app/models/card.model';

@Component({
  selector: 'tutorial-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
   @Input()card: card;   
}
