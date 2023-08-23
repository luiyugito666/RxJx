//distinctUntilKeyChanged:emite valores, siempre cuando la emision anterior no sea la misma, pero esta pendiente de la propiedad y el valor

import { distinct, distinctUntilChanged, distinctUntilKeyChanged, from, of } from "rxjs";


const numeros$ = of(1, 1, 2,1, '1', 5,5,3,5)

numeros$.pipe(
  distinctUntilChanged()
)
  .subscribe(console.log
  
)


interface Personaje { 
   nombre:string
}

const personaje: Personaje[] = [
  {nombre:'luffy'},
  { nombre: 'x' },
  {nombre:'x'},
  {nombre:'lui'},
  {nombre:'zoro'},
  {nombre:'x'},
  {nombre:'lui'},
  {nombre:'lui'},
  {nombre:'choper'},
  {nombre:'lui'},

]

const person$ = from(personaje).pipe(
  //cuando los argumentos nos son primitivos, entonces toca trabajar con sus propiedades, por ello en el argumento se le debe poner la condicion comparando el valor anterior con actual, si la condicion es true, entonces no dejara pasar el valor
  distinctUntilKeyChanged('nombre')
).subscribe(console.log)