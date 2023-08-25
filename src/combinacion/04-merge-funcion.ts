import { fromEvent, merge, pluck, subscribeOn } from 'rxjs';

const keyup$ = fromEvent(document, 'keyup')
const click$ = fromEvent(document, 'click')

merge(
  keyup$.pipe(pluck('type')),
  click$.pipe(pluck('type'))

).subscribe(console.log)
