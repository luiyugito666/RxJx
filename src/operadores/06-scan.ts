import { from } from "rxjs";
import { map, reduce, scan } from 'rxjs/operators';

const numeros = [1, 2, 3, 4, 5];

/* const totalAcumulado = (acc, cur) => {
  return acc+cur;
}
  */

//la funcion anterior se puede realizar en una sola linea sin el return
const totalAcumulado = (acc, cur) =>  acc+cur;

//reduce
from(numeros).pipe(
  reduce(totalAcumulado,0))
  .subscribe(console.log)
  //scan
from(numeros).pipe(
  scan(totalAcumulado,0))
  .subscribe(console.log)
  
//redux

interface Usuario {
  id?: string;
  autenticado?: boolean;
  token?: string;
  edad?: number;
}

const user: Usuario[] = [
  { id: 'lui', autenticado:false, token:null },
  { id: 'lui', autenticado:true, token:'ABC' },
  { id: 'lui', autenticado:true, token:'ABC123' },

]

const state$ = from(user).pipe(
  scan<Usuario,Usuario>((acc, cur) => { 
    return {...acc,...cur}
  }, {edad:33}
  )
)

const id$ = state$.pipe(
  map(state => state.id)
);

id$.subscribe(console.log);