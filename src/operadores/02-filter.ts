import { from, fromEvent, of, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';


interface Personaje { 
  tipo: string,
  nombre:string
}
/* 
range(1, 10).pipe(
  filter(val => val % 2 == 1)
  ).subscribe(console.log) */
range(1, 10).pipe(
  filter((val, i) => {
    console.log('index: ', i);
    return val % 2 == 1;
  })
)
/*   .subscribe(console.log); */

const heroes:Personaje[] = [
  {
    tipo: 'heroe',
    nombre: 'lufy'
  },
  {
    tipo: 'heroe',
    nombre: 'zoro'
  },
  {
    tipo: 'villano',
    nombre: 'kizaru'
  },
  
];
const personajes$ = from(heroes);
personajes$.pipe(
  filter(
    val => val.tipo !== 'heroe'
  ))/* .subscribe(console.log);
 */
const keyup$ = fromEvent<KeyboardEvent>(document, 'keyup').pipe(
  map(event => event.code),//el mat recibe un observable(keyboardEvent) y emite un string
  filter(key=>key==='Enter')
)

keyup$.subscribe(console.log);