import { Observable, of } from 'rxjs';


/* const obs$ = of<any>('gi', function(){ },[4,6],...[5,5,8,7,5]); */
const obs$ = of(5,6,8,7,5)

console.log('inicio');
obs$.subscribe( {
    next: value => console.log('next', value),
    error: err => console.log('error', err),
    complete:()=>console.log('end')
      
}
    
);
console.log('fin');