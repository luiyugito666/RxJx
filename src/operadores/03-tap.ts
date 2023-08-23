//tap: disparar efectos secudarios

import {  range} from "rxjs";
import { map,tap } from "rxjs/operators";

const numeros$ = range(1, 5);


numeros$.pipe(
  tap(val => console.log('val antes:', val)),
  map(val => val * 10),
  tap({
    next: val => console.log('val despues:', val),
    complete:()=>console.log('termiando')
  }),
  tap()
 
  
)
  .subscribe(val => console.log('sub: ', val))