import { of, from } from 'rxjs'

/* 
--of cra un observable y nos sirve para tomar argumentos y genera una secuencia de valores
--from crea un observable en base un arreglo, objeto con estructura de arregli, promise,iterable,observable   */

const observer = {

  next: val => console.log('next: ', val),
  complete: () => console.log('completado')
};
//cramos una funcion generadora function*(){}
const miGenerador = function* () {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
 
const miIterable = miGenerador();
//se pude morar con el siguiente metodo for

/* for (let id of miIterable) { 
  console.log(id);
} */

//otra manera de verlo podemos realizarlo con el from, por ser observable permite trabajar con operadores, transformar la data y hacer el flujo de informacion mas clara

from(miIterable).subscribe(observer);


/* const src$ = of(...[1, 2, 3, 4, 5]); */
/* const src$ = from([1, 2, 3, 4, 5]); */
/* const src$ = from('fernando'); */
const src$ = from(fetch('https://api.github.com/users/klerith'));

/* src$.subscribe(
async (resp) => { 
    console.log(resp)
    const dataResp =  await resp.json();
    console.log(dataResp);
    

  }
)
 */
/* src$.subscribe(observer); */