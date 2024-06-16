import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cardPlanType  = 'Simples';
  cardPlanPeriod = 'Mensal';
  cardPlanPrice = 100;
  
  handlePlanType(text: string){
    this.cardPlanType = text;
  }

  handlePlanPeriod(text: string){
    this.cardPlanPeriod = text;
  }
}
