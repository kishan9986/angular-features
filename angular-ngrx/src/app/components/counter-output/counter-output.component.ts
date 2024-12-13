import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';
import { selectCount, selectDountCount } from '../../store/counter.selector';

@Component({
  selector: 'app-counter-output',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './counter-output.component.html',
  styleUrl: './counter-output.component.scss'
})
export class CounterOutputComponent implements OnInit {
  count$: Observable<number>;
  doubleCount$:  Observable<number>;

  constructor(
    private store: Store<{count: number}>) {
      this.count$ = store.select(selectCount);
      this.doubleCount$ = store.select(selectDountCount);
    }

  ngOnInit(): void {
    
  }
}
