import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
    selector: 'tutorial-text-box',
    templateUrl: './textbox.component.html',
    styleUrls: ['./textbox.component.scss']
})
export class TextBoxComponent{
    value = new FormControl('', { updateOn: 'blur' });
}