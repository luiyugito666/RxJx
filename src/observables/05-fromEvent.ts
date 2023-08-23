import { fromEvent } from 'rxjs'

/* eventos del DOM */

const srcl1$ = fromEvent<PointerEvent>(document, 'click');
const srcl2$ = fromEvent<KeyboardEvent>(document, 'keyup');


const observer = {
  next: val=>console.log('next',val)
}

srcl1$.subscribe(({x,y})=>console.log(x,y));
srcl2$.subscribe(({key}) => console.log(key));