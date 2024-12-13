import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CounterOutputComponent } from './components/counter-output/counter-output.component';
import { CounterInputComponent } from './components/counter-input/counter-input.component';
import { Store } from '@ngrx/store';
import { loadData } from './store/counter.actions';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CounterOutputComponent, CounterInputComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'angular-ngrx';
  constructor(
    private store: Store
  ) {}

  ngOnInit(): void {
    this.store.dispatch(loadData())
  }
}
