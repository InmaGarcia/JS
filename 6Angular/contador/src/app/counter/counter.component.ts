import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  imports: [],
  templateUrl: './counter.component.html',
  styleUrl: './counter.component.css',
})
export class CounterComponent {
  valor: number = 10;

  contador(event: any) {
    if (event.target.value == 'mas') {
      this.valor += 1;
    } else if (event.target.value == 'menos') {
      this.valor -= 1;
    } else {
      this.valor = 10;
    }
  }
}
