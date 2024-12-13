import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment } from '../../store/counter.actions';

@Component({
  selector: 'app-counter-input',
  standalone: true,
  imports: [],
  templateUrl: './counter-input.component.html',
  styleUrl: './counter-input.component.scss'
})
export class CounterInputComponent {

  constructor(
    private store: Store<{count: number}>) {
      
    }

  increment() {
    this.store.dispatch(increment({count: 1}))
  }

  decrement() {
    this.store.dispatch(decrement({count: 1}))
  }
}
