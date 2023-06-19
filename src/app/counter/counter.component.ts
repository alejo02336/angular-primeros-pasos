import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: ` <h1>Counter Component</h1>
    <h3>Counter : {{ counter }}</h3>
    <button (click)="add()">+1</button>
    <button (click)="reset()">Reset</button>
    <button (click)="subtract(1)">-1</button>`,
})
export class CounterComponent {
  public counter: number = 10;

  add(): void {
    this.counter += 1;
  }

  subtract(value: number): void {
    this.counter -= value;
  }

  reset = (): void => {
    this.counter = 0;
  };
}
