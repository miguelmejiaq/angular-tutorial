import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import AppState from 'src/app/app.state';
import { AddCards } from 'src/app/widgets/addCards/AddCards.component';

@Component({
    selector: 'view-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeView {
    constructor(public store: Store<AppState>, public dialog: MatDialog){

    }
    AddCard = () =>{
        const dialogRef = this.dialog.open(AddCards,{
            data: {
                store : this.store,
                action: 'Add'
            }
        });
    }
}