//diferencia entre mergeMap, cuando empieza una nueva susbcripcion, la anterior continua emitiendo y se completa cuando todas las emisiones anteriores terminan de4 completarse, por otro lado el switchMap, completa suscripciones anteriores para comenzar otra y luego completarla

import { fromEvent, interval, mergeMap, switchMap } from "rxjs";


const click$ = fromEvent(document, 'click');

const interval$ = interval(1000);

click$.pipe(
/*   mergeMap(()=>interval$), */
  switchMap(()=>interval$)
  ).subscribe(console.log)
