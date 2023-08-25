import { Observable, debounceTime, fromEvent, map, mergeAll, mergeMap, pluck, subscribeOn, switchMap } from "rxjs";
import { ajax } from "rxjs/ajax";
import { GithubUser } from "../interfaces/github.user";
import { GithubUsersResp } from "../interfaces/github-users";



//referencias
const body = document.querySelector('body');
const inputText = document.createElement('input');
const orderList = document.createElement('ol');

body.append(inputText, orderList);
//helpers
//helper, mostraremos usuarios en pantall

const mostrarUsuarios = (usuarios: GithubUser[]) => {
  console.log('usuarios');
  orderList.innerHTML = '';
  
  for (const usuario of usuarios) {

    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = usuario.avatar_url;
    const anchor = document.createElement('a');
    anchor.href = usuario.html_url;
    anchor.text = 'ver Pagina';
    anchor.target = '_blank';

    li.append(img);
    li.append(usuario.login + ' ');
    li.append(anchor);
    orderList.append(li);
  }
}

//streams

const inputs$ = fromEvent<KeyboardEvent>(inputText, 'keyup');
  inputs$.pipe(
    //espera el tiempo antes de continuar
    debounceTime<KeyboardEvent>(500),
    //extraemos el valor del target con el map
    map<KeyboardEvent, string>((x) => x.target['value']),
    // el valor obtenido lo convertimos con el map en un nuevo request que es un ajax.JSON que trae es  informacion, eso regresa un observable el cual sera manejado por el merge, cual se va a subscribir y maneralo todo internamente y luego emitira un valor
    /* mergeMap<string, Observable<GithubUsersResp>>(texto => */
    mergeMap<string, Observable<GithubUsersResp>>(texto =>
    
      //necesitamos realizar una peticion  ajax para que nos retorne todos los usuarios de github que coincidan con el texto ingresado
      ajax.getJSON(`https://api.github.com/search/users?q=${texto}`
      ),
    
    ),

    //luego de que el merge emita el ValidationError, el map har que solo nos muestre los items
    map<GithubUsersResp, GithubUser[]>((x) => x['items']),
  )/* 
    .subscribe(mostrarUsuarios); */

//implementaremos otro ejercicio

const url = 'https://httpbin.org/delay/1?arg='

inputs$.pipe(
  pluck('target', 'value'),
  switchMap(texto=>ajax.getJSON(url+texto))

).subscribe(console.log)