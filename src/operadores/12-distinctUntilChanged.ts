//distinctUntilChanged:emite valores, siempre cuando la eemision anterior no sea la misma

import { distinct, distinctUntilChanged, from, of } from "rxjs";


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
  distinctUntilChanged((ant,act)=>ant.nombre===act.nombre)
).subscribe(console.log)