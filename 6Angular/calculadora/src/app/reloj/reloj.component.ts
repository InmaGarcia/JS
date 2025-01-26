import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reloj',
  imports: [FormsModule],
  templateUrl: './reloj.component.html',
  styleUrl: './reloj.component.css',
})
export class RelojComponent {
  resultado: number = 0;

  valor1: number = 0;
  valor2: number = 0;

  calcular(event: any) {
    if (event.target.value == 'sumar') {
      this.resultado = this.valor1 + this.valor2;
    } else if (event.target.value == 'restar') {
      this.resultado = this.valor1 - this.valor2;
    } else if (event.target.value == 'multi') {
      this.resultado = this.valor1 * this.valor2;
    } else {
      this.resultado = this.valor1 / this.valor2;
    }
  }
}
