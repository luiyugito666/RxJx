import {Observable, Observer } from 'rxjs'

//crearemos un observer
const observer: Observer<any> = {
  //el observer tiene 3 propiedades como el next, error y complete
  next: value => console.log('siguiente : ', value),
  error: error => console.warn('error ', error),
  complete: () => console.info('completado '),

};


const intervalos$ = new Observable<number>(subscriber => {
  //crear un contador 1,2,3,
  let contador= 0;
  
  const intervalo = setInterval(() => {
    contador++;
    subscriber.next(contador);
    console.log(contador);

  }, 1000);

  setTimeout(() => { 
    subscriber.complete();
  }, 2500);


  //el return se ejecutara cuando se realice el unsubscribe
  return () => { 
    clearInterval(intervalo);
    console.log('intervalo destruido');

  }

});

const subs1 = intervalos$.subscribe(observer);
observer
const subs2 = intervalos$.subscribe(observer);
const subs3 = intervalos$.subscribe(observer);

//para limpiar los 3 intervalos simultaneamente utilizaremos el siguiente metodo de observables en cadena
subs1.add(subs2);
subs2.add(subs3);

setTimeout(() => {

  subs1.unsubscribe();
  /* subs2.unsubscribe();
  subs3.unsubscribe(); */
  console.log('completado timeOut');
}, 4000); 

