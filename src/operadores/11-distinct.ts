//distinct: nos permite pasar unicamente los valores que aun no se han emitido por el observable

import { distinct, from, of } from "rxjs";


/* const numeros$ = of(1, 1, 2, '1', 5, 2, 3, 4, 5, 6, 5,1);

numeros$.pipe(
  distinct()
)
  .subscribe(console.log
  
)
 */

interface Personaje { 
   nombre:string
}

const personaje: Personaje[] = [
  {nombre:'luffy'},
  {nombre:'x'},
  {nombre:'lui'},
  {nombre:'zoro'},
  {nombre:'x'},
  {nombre:'nami'},
  {nombre:'lui'},
  {nombre:'choper'},
  {nombre:'lui'},

]

const person$ = from(personaje).pipe(
  //como el personaje es un objeto, entonces debemos indicar que campo debe evaluar
  distinct(p=>p.nombre)
).subscribe(console.log)