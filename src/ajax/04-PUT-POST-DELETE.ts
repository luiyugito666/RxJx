import { ajax } from "rxjs/ajax";
const url = 'https://httpbin.org/delay/1';

//un get tiene argumentos de url y objeto con la configuracion de los headers
ajax.get(url, {
  
});
/* //post recibe 3 argumentos, url-body-(herders,tokes,etc)
ajax.post(url, {
  id: 1,
  nombre:'lui'
}, {
  'mi-token':'ABC123'

}).subscribe(console.log)


ajax.put(url, {
  id: 1,
  nombre:'lui'
}, {
  'mi-token':'ABC123'

}).subscribe(console.log)

//delete , no permite enviar ninguna informacion en el body
ajax.delete(url ).subscribe(console.log)


 */

ajax(
  {
    url: url,
    method: 'POST',// el metodo se puede cambiar por PUT, DELETE
    headers: {
      'mi-token':'asdf123'
    },
    body: {
      id: 1,
      nombre:'lui'
    }

  }
).subscribe(console.log);

