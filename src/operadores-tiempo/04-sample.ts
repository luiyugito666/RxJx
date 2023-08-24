
//sample: emite el ultimo valor emitido por el observable, hasta que el otro observable que tenemos dentro del operador sample emita un valor

import { fromEvent, interval, sample } from "rxjs";

const interval$ = interval(500)
const click$ = fromEvent(document, 'click')

interval$.pipe(
  sample(click$)

)
  .subscribe(console.log

)