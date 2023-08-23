import { fromEvent, range } from 'rxjs';
import {map, mapTo, pluck } from 'rxjs/operators'

/* const rng$=range(1, 5);

rng$.pipe(
  map<number,string>(val => (val*10).toString() )
)
  .subscribe(console.log)
 */


const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$=keyup$.pipe(
  map(event => event.code )
)
const keyupPluck$ = keyup$.pipe(
  pluck('key')
);
const keyupMapTo$ = keyup$.pipe(
  mapTo('tecla presionada')
);




  keyupCode$.subscribe(code => console.log('map: ', code))
  keyupPluck$.subscribe(code => console.log('pluck: ', code))
  keyupMapTo$.subscribe(code => console.log('MapTo: ', code))
