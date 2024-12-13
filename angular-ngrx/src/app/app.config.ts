import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideStore } from '@ngrx/store';

import { routes } from './app.routes';
import { counterRedcuer } from './store/counter.reducer';
import { provideEffects } from '@ngrx/effects';
import { CounteEffects } from './store/counter.effect';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ count: counterRedcuer }),
    provideEffects([CounteEffects])
  ]
};
