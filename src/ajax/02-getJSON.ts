import { ajax } from "rxjs/ajax";


const url = 'https://httpbin.org/delay/1';
/* const url = 'https://api.github.com/users?per_page=5'; */
//podemos enviar los headers, token, etc , esto dentro del getJSON como el segundo argumento
const obs$ = ajax.getJSON(url,{
  'Content-Type': 'appRequestJson',
  'mi-token':'aBC456'
}
  
);
  obs$.subscribe(data=>console.log('data:',data))
