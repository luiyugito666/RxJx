//first, emite el primer valor qeu cumpla la condicion



import { fromEvent, of } from "rxjs";
import { first, map, take, tap } from 'rxjs/operators';

/* const numeros$ = of(1, 2, 3, 4, 5);

numeros$.pipe(
first(x=>x>=3)
)
  .subscribe(console.log); */
const click$ = fromEvent<PointerEvent>(document, 'click');
click$.pipe(
  tap(() => console.log('tap')),
  /*con map puedo desestructurar*/
  map(({clientX,clientY }) => ({clientX,clientY })),
  first(e=>e.clientX>=400)
).subscribe(
  {
    next: val => console.log('next: ', val),
    complete:()=>console.log('completado')

  }
)
