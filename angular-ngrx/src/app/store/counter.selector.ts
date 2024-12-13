import { createSelector } from "@ngrx/store";

export const selectCount = (state: {count: number}) => state.count;
export const selectDountCount = createSelector(
    selectCount,
    (state: number) => state * 2
)