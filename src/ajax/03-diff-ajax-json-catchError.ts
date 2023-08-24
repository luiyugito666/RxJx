import { catchError, of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";


const url = 'https://httpbins.org/delay/1';
/* const url = 'https://api.github.com/users?per_page=5'; */
//crearemos una funcion para manejar error
const manejaError = (resp: AjaxError) => { 
  console.warn('error', resp.message);
  return of({
    ok: false,
    usuarios: []
  });



}



//podemos enviar los headers, token, etc , esto dentro del getJSON como el segundo argumento
/* const obs$ = ajax.getJSON(url,{
  'Content-Type': 'appRequestJson',
  'mi-token':'aBC456'
}); */

/* const obs$ = ajax.getJSON(url).pipe(
  catchError(manejaError)
);
const obs2$ = ajax(url).pipe(
  catchError(manejaError)
); */
const obs$ = ajax.getJSON(url).pipe(

);
const obs2$ = ajax(url).pipe(

);




/* obs$.pipe(
  catchError(manejaError)
).subscribe({
  next: val => console.log('next:', val),
  error: err => console.warn('error: ', err),
  complete:()=>console.log('completado')
})
 */
/* 
obs2$.subscribe(data=>console.log('ajax: ',data)) */
//utilizaremos un observer
obs$.pipe(
  catchError(manejaError)
)
  .subscribe(
  {
    next: val => console.log('next: ', val),
    error: err => console.warn('err: ', err),
    complete:()=>console.log('completado')
  }
)