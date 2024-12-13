import { createReducer, on } from "@ngrx/store";
import { decrement, increment, initialize } from "./counter.actions";

const inititialState: number = 0;

export const counterRedcuer = createReducer(
    inititialState,
    on(increment, (state, action) => {
        return state + action.count
    }),
    on(decrement, (state, action) => {
       return state - action.count
    }),
    on(initialize, (state, action) => {
        return action.count
    })
)


// export function counterRedcuer(state= inititialState) {
//     return state
// }

