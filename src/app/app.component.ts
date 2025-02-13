import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { evaluate } from 'mathjs';

@Component({
  selector: 'app-root',
  standalone: true,  
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, FormsModule, MatButtonModule, MatInputModule, MatCardModule, MatFormFieldModule]  
})
export class AppComponent {
  expression: string = '';

  buttons: string[][] = [
    ['C', '(', ')', '/'],
    ['7', '8', '9', '*'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=', '^'],
    ['sin', 'cos', 'tan', '√'],
    ['ln', 'log', 'π', 'e']
  ];

  onButtonClick(value: string) {
    if (value === '=') {
      this.calculate();
    } else if (value === 'C') {
      this.expression = '';
    } else {
      this.expression += value;
    }
  }

  calculate() {
    try {
      let expr = this.expression
        .replace(/π/g, 'Math.PI')
        .replace(/e/g, 'Math.E')
        .replace(/√/g, 'sqrt')
        .replace(/\^/g, '**');

      this.expression = evaluate(expr).toString();
    } catch {
      this.expression = 'Error';
    }
  }
}
