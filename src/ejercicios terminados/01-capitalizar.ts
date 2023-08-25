/**
 * Ejercicio: 
 * El objetivo de es realizar la misma impresión, pero usando observables
 * Nota: NO hay que usar el ciclo "FOR OF", usar un observable y llamar la función capitalizar
 */

import { of, from, tap, map } from 'rxjs';

/**
 * Salida esperada:
 * Batman
 * Joker
 * Doble Cara
 * Pingüino
 * Hiedra Venenosa
 */
(() =>{


  const nombres = ['batman', 'joker', 'doble cara', 'pingüino', 'hiedra venenosa'];

  const capitalizar = (nombre: string) => nombre.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());


  // Cambiar este FOR OF, por un observable y capitalizar las emisiones
/*   for( let nombre of nombres ) {
    console.log( capitalizar(nombre) )
  } */
//realizar un observable
  
  from(nombres).pipe(
     
   // map(val => capitalizar(val))
    //version simplificada del anterior map
    map(capitalizar)
  ).subscribe(console.log)
  
  
  
//se espera un .subscribe(console.log)






})();

