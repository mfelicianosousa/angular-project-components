import { Component, EventEmitter, Input, Output, booleanAttribute } from '@angular/core';

@Component({
  selector: 'app-card-button',
  templateUrl: './card-button.component.html',
  styleUrl: './card-button.component.css'
})
export class CardButtonComponent {

  propTest: boolean = false;

  @Input({transform: booleanAttribute}) buttonDisabled: boolean = false;

  @Output('buttonChildClick') buttonClickEmitter = new EventEmitter<boolean>();

  onButtonClick(){
    console.log('onButtonChildClick');
    this.buttonClickEmitter.emit(this.propTest);
  }
}