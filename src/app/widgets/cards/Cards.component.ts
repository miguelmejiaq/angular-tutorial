import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { card } from 'src/app/models/card.model';
import { ListCardsActions } from 'src/app/store/cards/cards.actions';
import AppState from 'src/app/app.state';

@Component({
    selector: 'widget-cards',
    templateUrl: './cards.component.html',
    styleUrls : ['./cards.component.scss']
})
export class CardsWidget implements OnInit{
    cards: Observable<card[]>;
    @Input()store:Store<AppState>;
    constructor(){
    }
    ngOnInit(): void{
        this.cards = this.store.select(select => select.cards);
        this.store.dispatch( new ListCardsActions());
    }
}