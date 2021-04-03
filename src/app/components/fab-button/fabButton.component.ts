import {Component, EventEmitter, Output} from '@angular/core';

@Component({
    selector: 'tutorial-fab-button',
    templateUrl: './fabButton.component.html',
    styleUrls: ['./fabButton.component.scss']
})
export class FabButtonComponent{
  @Output() clickButton = new EventEmitter ;  
  OnClickButton(){
      this.clickButton.emit();
  }
}