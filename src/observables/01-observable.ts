import {Observable, Observer } from 'rxjs'

//crearemos un observer
const observer: Observer<any> = {
//el observer tiene 3 propiedades como el next, error y complete
  next: value => console.log('siguiente [next]: ', value),
  error: error => console.warn('error [obs]', error),
  complete:() =>console.info('completado [obs]'),

}

/* const observable$ = Observable.create(); */


const obs$ = new Observable<string>(subs => { 
  subs.next('hola');
  subs.next('mundo');
 /*  const a= undefined;
  a.nombre */
  subs.complete();
  subs.next('mundo');


});

//en ES6. cuando se tiene de esta manera 'resp => console.log(resp)' se puede usar de la manera mas simplificada como ' console.log'

/* obs$.subscribe(console.log); */

//veamos otra manera para mandar informacion en este subscribe es la siguiente
//el suscribe recibe 3 argumentos, el primero es el next, luego error y por ultimo el complete ---> subscribe(next?: (value: string) => void, error?: (error: any) => void, complete?: () => void): Subscription

 obs$.subscribe( observer)
/* obs$.subscribe( 
 valor => console.log('next: ', valor),
  error => console.warn('error', error),
  ()=>console.info('completado')
 
)
 */