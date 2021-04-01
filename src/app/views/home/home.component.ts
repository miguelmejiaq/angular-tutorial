import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import AppState from 'src/app/app.state';

@Component({
    selector: 'view-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeView {
    constructor(public store: Store<AppState>){

    }
}