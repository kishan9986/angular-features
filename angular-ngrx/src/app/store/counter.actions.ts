import { createAction, props } from "@ngrx/store";

export const increment = createAction('[Count] Increment', props<{count: number}>())
export const decrement = createAction('[Count] Decrement', props<{count: number}>())
export const initialize = createAction('[Count] Initialize', props<{count: number}>())
export const loadData = createAction('[Count] load from loaclStorage')