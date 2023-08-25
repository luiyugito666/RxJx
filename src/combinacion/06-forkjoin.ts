//forkjoin, los observables deben ser finitos

import { delay, forkJoin, interval, of, take } from "rxjs";

const numero$ = of(1, 2, 3, 4);

const intervalos$ = interval(1000).pipe(take(3));
const letras$ = of('a', 'b', 'c', 'd').pipe(delay(3500));

/* const obs4$ = forkJoin(
  numero$,intervalos$,letras$).subscribe(console.log) */
  /* const obs4$ = forkJoin(
    numero$, intervalos$, letras$)
    .subscribe((resp) => {
  
      console.log('numeros',resp[0]);
      console.log('intervalos',resp[1]);
      console.log('letras',resp[2]);
  
  
  
     }) */
/* const obs4$ = forkJoin({
  numero$, intervalos$, letras$})
  .subscribe((resp) => 
    console.log('letras',resp)
   ) */
const obs4$ = forkJoin({

  num:numero$,
  inet:intervalos$,
  let:letras$
})
  .subscribe((resp) => 
    console.log('letras',resp)
   )
