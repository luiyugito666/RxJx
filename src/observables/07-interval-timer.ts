import { interval, timer } from 'rxjs'


const hoyEn5 = new Date();
hoyEn5.setSeconds(hoyEn5.getSeconds() + 5);


const observer = {
  next: val => console.log('next:', val),
  complete:()=>console.log('completado')
}

const interval$ = interval(1000);
//se le puso argumento de date en el timer, para que se pueda completar en dicho tiempo el observable
const timer$ = timer(hoyEn5);


console.log('inicio');
/* interval$.subscribe(observer); */
timer$.subscribe(observer)
console.log('fin');