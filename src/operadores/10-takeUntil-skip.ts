
//takeUntil: nos permite emitir valores hasta que obtro observable emita su primer valor

//skip: sirve para saltar o emitir x cantidades de emisiones iniciales

import { fromEvent, interval } from "rxjs";
import { skip, takeUntil, tap } from "rxjs/operators";



const boton = document.createElement('button');
boton.innerHTML = 'detener Timer'
document.querySelector('body').append(boton);


const counter$ = interval(1000);

const clickBtn$ = fromEvent(boton, 'click').pipe(
  tap(()=>console.log("antes de skip")),
  skip(2),
  tap(()=>console.log("despues de skip"))
);

counter$.pipe(
  takeUntil(clickBtn$)

)
  .subscribe(
    {
      next: val => console.log('next: ', val),
      complete:()=>console.log('completado')
    }
  )