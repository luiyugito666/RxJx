import { of, range, observeOn, asyncScheduler } from 'rxjs';

/* const src$ = range(1, 7) */
//para volverlo asyncrono utilizamos el pipe
const src$ = range(1, 7).pipe(observeOn(asyncScheduler));
console.log('inicio');

src$.subscribe(ev => console.log(ev));
console.log('fin');