import { asyncScheduler } from "rxjs";

//el asyncscheduler no crea un observable, crea una subscripcion
//una subscripcion es producto de un subscribe
//.subscribe() esto genera una subscripcion

//---

//los siguientes metodos se pueden generar usando el asyncScheduler
/* setTimeout(() => { }, 3000);
setInterval(() => { }, 3000); */

const saludar = () => console.log('hola mundo');
const saludar2 = val => console.log(`hola ${val}`);
/* asyncScheduler.schedule(saludar, 2000);
asyncScheduler.schedule(saludar2, 2000,'luis'); */

const subs= asyncScheduler.schedule(function (state) { 
  console.log('state', state);
  this.schedule(state + 1, 1000);
  
}, 3000, 0)

//conne este paso cancelamos la subscripcion
/* setTimeout(() => { 
  subs.unsubscribe();

},6000) */

//ahora utilizamos asyncSchudeler para cancelar la subscripcion
asyncScheduler.schedule(()=>subs.unsubscribe(),6000)


