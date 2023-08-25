//concatMap, emite valores por cada susbscriocion, pero pone en cola a las nuevas subscripciones hasta que la anterior emita todos sus valores

import { concatMap, fromEvent, interval, take } from "rxjs";

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(
  concatMap(()=>interval$)
).subscribe(console.log)