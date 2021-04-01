import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    selectWithIconList: Observable<selectWithIcon[]>;
    @Input() store: Store<AppState>;
    cardForm: FormGroup;
    constructor(private formBuilder: FormBuilder) {
        this.cardForm = this.formBuilder.group(
            {
                icon: [, [Validators.required]],
                title: [, [Validators.required]],
                subtitle: [, [Validators.required]],
                description: [, [Validators.required]]
            }
        );
    }
    ngOnInit(): void {
        this.selectWithIconList = this.store.select(select => select.selectWithIcons);
        this.store.dispatch(new SelectWithIconActions());
    }
    AddCard() {
        console.log(this.cardForm.value);
    }
}