import { fromEvent  } from "rxjs";
import { map, tap,takeWhile } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
  tap(console.log),
  map(({ x, y }) => ({ x, y })),
  //se le agrega el true, por que es el parametro include, el cual se imprimira por ser quien rompa la condicion.
  takeWhile(({x})=>x<500,true)
)
  .subscribe(
    {
      next: val => console.log('next: ', val),
      complete: () => console.log('completado')
    }
  )