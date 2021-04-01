import { Component, Input, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

@Component({
    selector: 'tutorial-text-area',
    templateUrl: './textarea.component.html',
    styleUrls: ['./textarea.component.scss']
})
export class TextAreaComponent {
    @Input()control: FormControl;
    @Input()name: String; 
}