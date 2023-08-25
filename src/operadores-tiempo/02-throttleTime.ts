
//throttleTime - emite el primer valor cada intervalo de tiempo, pero tambien se puede configurar para que capture el primer valor y ultimo valor throttleTime(1000, asyncScheduler, { leading: true,    trailing:true  })
import { asyncScheduler, debounceTime, distinctUntilChanged, fromEvent, map, pluck, tap, throttleTime } from 'rxjs';


const click$ = fromEvent(document, 'click');

click$.pipe(
  debounceTime(1000)
)
  /* .subscribe(console.log) */

const input = document.createElement('input');
document.querySelector('body').append(input);

const input$ = fromEvent<any>(input, 'keyup');

input$.pipe(
  /*   throttleTime(1000), */
  //ahora haremos una configuracion parq ue me capture el primer y ultimo elemento 
  throttleTime(1000, asyncScheduler, {
    leading: true,
    trailing:true
  }),
/*   debounceTime(1000), */
   
   
  map(e => e.target.value),
   distinctUntilChanged()

 
).subscribe(console.log);