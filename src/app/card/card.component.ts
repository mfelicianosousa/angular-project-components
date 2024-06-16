import { Component, Input} from '@angular/core';

function handlePlanPeriod(value : string){
  console.log('handlePlanPeriod', value);
  // outra logica 
  return value.toUpperCase();
}

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',

})

export class CardComponent {

  private _planType : string = '';
  

  @Input('planType')
  set planType(value : string){
    this._planType= value.toUpperCase();
  }

  get planType(): string {
    return this._planType;
  }

  @Input({ alias : 'planPeriod', transform: (value:string)=> handlePlanPeriod(value)}) planPeriod: string ='';
  @Input({alias: 'planPrice', required: true}) planPrice: number = 0;

  onButtonFatherClick(valueEmitted: boolean): void {
    console.log('onButtonFatherClick',valueEmitted);
    console.log('planType', this.planType);
  }
}
