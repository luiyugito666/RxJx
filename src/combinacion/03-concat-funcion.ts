//concat-funcion, se emite uno a continuacion de otra,

import { concat, interval, of, take } from "rxjs";


const interval$ = interval(100);
concat(

  interval$.pipe(take(3)),
  interval$.pipe(take(2)),
  of(1)
).subscribe(console.log)
