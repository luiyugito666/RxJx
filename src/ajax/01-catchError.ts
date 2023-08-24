import { of } from "rxjs";
import { AjaxError, ajax } from "rxjs/ajax";
import { catchError, map } from "rxjs/operators";

//el fetch api trabaja en base a promesas y no a observables
const url = 'https://api.github.com/users?per_page=5';

const fetchPromesa = fetch(url);

/* creamos una funcion para manejar errores */

/* const manejaErorres = (response:Response )=> { 

  if (!response.ok) { 
    throw new Error(response.statusText);
  }
  return response;
} */
//hacemos una funcion para retornar error con el meto de ctachError
const atrataError = (err: AjaxError) => {
  console.warn('error en:', err);
  return of([]);
 }



/* 
fetchPromesa
  .then(
    resp=>resp.json()
  )
  .then(
data=>console.log('data: ',data)
  )
  .catch(

) */
  
//haciendo la peticion usando fetch api
/* fetchPromesa.then(manejaErorres)
  .then(
    resp=>resp.json()
  )
  .then(
data=>console.log('data: ',data)
  )
  .catch(err=>
console.warn('error en usaurioas',err)
  ) */

  //haciendo la peticion usando la peticion ajax
ajax(url).pipe(
  map(({ response }) => response),
  catchError(atrataError)
).subscribe(console.log);