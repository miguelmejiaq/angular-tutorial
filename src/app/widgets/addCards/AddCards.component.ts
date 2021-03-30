import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectWithIcon } from 'src/app/models/selectWithIcon.model';
import { SelectWithIconActions } from 'src/app/store/selectWithIcon/selectWithIcon.actions';
import AppState from './../../app.state';

@Component({
    selector: 'add-card-form',
    templateUrl: './AddCards.component.html',
    styleUrls: ['./AddCards.component.scss']
})
export class AddCards implements OnInit {
    selectWithIconList : Observable<selectWithIcon[]>;
    constructor(private store: Store<AppState>){
    }
    ngOnInit(): void{
        this.selectWithIconList = this.store.select(select => select.selectWithIcons);
        this.store.dispatch(new SelectWithIconActions());
    }
}