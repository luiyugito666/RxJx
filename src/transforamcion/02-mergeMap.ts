//mergeMap, recibe el valor qeu se a emitido el observable inicial y regresa un nuevo observable

import { fromEvent, interval, map, mergeMap, of, take, takeUntil } from "rxjs";


const letras$ = of('a', 'b', 'c', 'd');

letras$.pipe(
  mergeMap(val => interval(1000).pipe(
    map(i=>val+i),
    take(3)
  ))

)/* .subscribe({
  next: val => console.log('next: ', val),
  complete:()=>console.log('completado')
});
 */

//un ejemplo de saber en cuanto tiempo el usuario rpesional mouse

const mouseDown$ = fromEvent(document, 'mousedown');
const mouseup$ = fromEvent(document, 'mouseup');
const interval$ = interval();


mouseDown$.pipe(
  mergeMap(() => interval$.pipe(
    takeUntil(mouseup$)
  ))

).subscribe(console.log)