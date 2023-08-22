import {Observable, Observer, Subject } from 'rxjs'

//crearemos un observer
const observer: Observer<any> = {
  //el observer tiene 3 propiedades como el next, error y complete
  next: value => console.log('siguiente : ', value),
  error: error => console.warn('error ', error),
  complete: () => console.info('completado '),

};


const intervalos$ = new Observable<number>(subs => { 
  const intervalId = setInterval(
    () => subs.next(Math.random()), 1000
  );

  return () => {
    clearInterval(intervalId)
    console.log('intervalo destruido');};

})

//caracteristicas de subject
/* 1-casteo MultiCompiler, muchas subscripciones van a estar sujetas a esta misma subject$, el cual servira para distribuir la imsma informacion donde estan suscritos esas variables o a todos los lugares que le interesa ese valor.
2-tambien es un oberver. se puede mardar como argumento al subscribe
3-tambien se puede manejar el next, error y complete.


 */
//creamos el subject$ para luego subscribirlo y pasar el subject como parametro y lograr castear la misma informacion

const subject$ = new Subject();
const intervalo= intervalos$.subscribe(subject$)

//para lograr el casteo tenemos que  hacer la subscricion de la siguiente manera, creando una constante hacer subscribir al subjet que ya esta vinculadomcon el intervalos$.

const subs1 = subject$.subscribe(rand=>console.log('subs: 1',rand));
const subs2 = subject$.subscribe(rand => console.log('subs: 2', rand));


/* const sub1 = intervalos$.subscribe(rnd=>console.log('random 1',rnd));
const sub2 = intervalos$.subscribe(rnd=>console.log('random 2',rnd));

 */

setTimeout(() => { 
  subject$.next(10);
  subject$.complete();
  intervalo.unsubscribe();

},3000)