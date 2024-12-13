import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { decrement, increment, initialize, loadData } from "./counter.actions";
import { of, switchMap, tap, withLatestFrom } from "rxjs";
import { selectCount } from "./counter.selector";
import { Store } from "@ngrx/store";

@Injectable()
export class CounteEffects {

    initializeState = createEffect(() => this.actions$.pipe(
        ofType(loadData),
        switchMap(() => {
            const storedData = localStorage.getItem('count');
            if(storedData) {
                return of(initialize({count : +storedData}))
            }
            return of(initialize({count: 0}))
        }),
    ));


    saveCount = createEffect(() => this.actions$.pipe(
        ofType(increment, decrement),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, count]) => {
            console.log(action)
            localStorage.setItem('count', count.toString())
        })

    ), {dispatch: false});

    constructor(private actions$: Actions, private store: Store<{count: number}>) {}
}