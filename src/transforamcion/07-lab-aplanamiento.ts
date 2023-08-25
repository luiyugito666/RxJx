//ejercicio de comparacion entre mergeMap,swithcMap,exhaustMap
//creado un formulario

import { catchError, exhaustMap, fromEvent, map, mergeMap, of, pluck, switchMap, tap } from "rxjs";
import { ajax } from "rxjs/ajax";


//helper o funcion auxiliar, recibe el email y password, el cual retornara un ajax
const peticionHttpLogin = (userPass) => ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
  //pluck('response','token')
  map(x => x.response['token']),
  catchError(ee=>of('token no valido'))
)



const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

//configuraciones adicionales

inputEmail.type = 'email';
inputEmail.placeholder = 'Email',
inputEmail.value = 'eve.holt@reqres.in';
inputPass.type = 'password';
inputPass.placeholder = 'Password',
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar'

const body = document.querySelector('body');

body.append(form);
form.append(inputEmail, inputPass, submitBtn);
//streams
//primero prevenimos el comportamiento por defecto que tiene el formulario(el comprtamiento que tiene por defecto es el de refrescar la pagina al hacer click en el boton)

const submitForm$ = fromEvent<Event>(form, 'submit')
  .pipe(
    tap(ev => ev.preventDefault()),
    map(ev => ({
      email: ev.target[0].value,
      password: ev.target[1].value
      
    })),
  /*   mergeMap(peticionHttpLogin), */
    switchMap(peticionHttpLogin),
  /*   exhaustMap(peticionHttpLogin), */
    

);
                            
submitForm$.pipe()
  //en la peticion nos envia como response el token
  .subscribe(token => { console.log(token) })



