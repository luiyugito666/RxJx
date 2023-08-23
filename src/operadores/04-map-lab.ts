
//crearemos un contenido html generico a travez de typexcript

import { fromEvent } from "rxjs";
import { map, tap } from 'rxjs/operators';

//crearemos unos parrafos para el contenido de la pagina
const texto = document.createElement('div');

texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel quam vel eros tempus semper. Mauris volutpat, nisi nec venenatis interdum, diam massa imperdiet mi, et mollis dui enim sit amet arcu. Vestibulum egestas fermentum tortor. Cras ut placerat erat, accumsan maximus elit. Sed lobortis, tortor sed blandit rutrum, neque quam consectetur augue, quis lacinia lectus diam non odio. Aenean tristique ullamcorper tortor et ultrices. Nam hendrerit sed est a tincidunt. Suspendisse luctus, ex id dignissim pretium, sem ligula congue risus, nec mattis urna orci et magna.
<br/><br/>
Fusce et magna et turpis blandit lobortis. Quisque purus lorem, porta vitae scelerisque id, fringilla a ante. Maecenas efficitur risus diam, vitae finibus dolor rutrum in. Vivamus sit amet justo lorem. Phasellus mattis mattis mattis. Duis vel faucibus quam, ut tincidunt risus. Maecenas suscipit magna vel mattis dignissim. Morbi sed massa eros. Aenean sit amet feugiat arcu. Integer libero leo, dignissim vel leo nec, sollicitudin consequat velit. Duis sed viverra nunc. Pellentesque eget laoreet justo. Integer eget condimentum felis, vel lacinia eros. Mauris tempus, nisi porta interdum fringilla, quam sapien tincidunt justo, at faucibus sapien lacus at mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus congue elementum eros, non pretium nulla tincidunt quis.
<br/><br/>
Pellentesque vitae massa quis ex fermentum ornare ac pretium augue. Praesent consectetur cursus lorem a gravida. Aenean ut auctor mauris. Donec facilisis odio nec aliquam vehicula. In erat orci, feugiat a sagittis vel, aliquet a massa. Fusce pretium, ante sit amet consequat cursus, dolor ex interdum risus, eget dapibus urna lorem ut est. Praesent placerat tortor sit amet urna eleifend iaculis. Curabitur mattis in neque id iaculis. Aenean pharetra arcu quis commodo egestas. Nunc rhoncus felis tortor, eget sagittis mauris congue id. Proin sollicitudin quis felis sit amet eleifend. Aenean id leo at lacus sodales tincidunt sed sit amet risus. Nullam auctor libero ut metus ullamcorper varius. Vestibulum non risus eu ante feugiat malesuada.
<br/><br/>
Praesent nisl mi, posuere ultricies orci sed, tincidunt sagittis justo. Aenean tempor diam id sollicitudin varius. Morbi blandit condimentum imperdiet. Aliquam erat volutpat. Phasellus egestas iaculis orci, sit amet blandit eros pharetra ut. Cras lobortis vehicula diam. Quisque id lorem nec mi ultrices vehicula eget vel mauris. Quisque non rhoncus arcu. Phasellus ut urna eget velit facilisis tempus.
<br/><br/>
Nulla vel diam sed sem viverra vestibulum. In ac dolor id sem placerat venenatis. Vestibulum interdum porttitor sem nec egestas. Mauris porta dolor ac hendrerit malesuada. Vestibulum non mi molestie, tincidunt turpis ullamcorper, euismod quam. Curabitur vel nunc consequat massa tempus efficitur. Vivamus laoreet nunc sit amet molestie feugiat.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean vel quam vel eros tempus semper. Mauris volutpat, nisi nec venenatis interdum, diam massa imperdiet mi, et mollis dui enim sit amet arcu. Vestibulum egestas fermentum tortor. Cras ut placerat erat, accumsan maximus elit. Sed lobortis, tortor sed blandit rutrum, neque quam consectetur augue, quis lacinia lectus diam non odio. Aenean tristique ullamcorper tortor et ultrices. Nam hendrerit sed est a tincidunt. Suspendisse luctus, ex id dignissim pretium, sem ligula congue risus, nec mattis urna orci et magna.
<br/><br/>
Fusce et magna et turpis blandit lobortis. Quisque purus lorem, porta vitae scelerisque id, fringilla a ante. Maecenas efficitur risus diam, vitae finibus dolor rutrum in. Vivamus sit amet justo lorem. Phasellus mattis mattis mattis. Duis vel faucibus quam, ut tincidunt risus. Maecenas suscipit magna vel mattis dignissim. Morbi sed massa eros. Aenean sit amet feugiat arcu. Integer libero leo, dignissim vel leo nec, sollicitudin consequat velit. Duis sed viverra nunc. Pellentesque eget laoreet justo. Integer eget condimentum felis, vel lacinia eros. Mauris tempus, nisi porta interdum fringilla, quam sapien tincidunt justo, at faucibus sapien lacus at mauris. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus congue elementum eros, non pretium nulla tincidunt quis.
<br/><br/>
Pellentesque vitae massa quis ex fermentum ornare ac pretium augue. Praesent consectetur cursus lorem a gravida. Aenean ut auctor mauris. Donec facilisis odio nec aliquam vehicula. In erat orci, feugiat a sagittis vel, aliquet a massa. Fusce pretium, ante sit amet consequat cursus, dolor ex interdum risus, eget dapibus urna lorem ut est. Praesent placerat tortor sit amet urna eleifend iaculis. Curabitur mattis in neque id iaculis. Aenean pharetra arcu quis commodo egestas. Nunc rhoncus felis tortor, eget sagittis mauris congue id. Proin sollicitudin quis felis sit amet eleifend. Aenean id leo at lacus sodales tincidunt sed sit amet risus. Nullam auctor libero ut metus ullamcorper varius. Vestibulum non risus eu ante feugiat malesuada.
<br/><br/>
Praesent nisl mi, posuere ultricies orci sed, tincidunt sagittis justo. Aenean tempor diam id sollicitudin varius. Morbi blandit condimentum imperdiet. Aliquam erat volutpat. Phasellus egestas iaculis orci, sit amet blandit eros pharetra ut. Cras lobortis vehicula diam. Quisque id lorem nec mi ultrices vehicula eget vel mauris. Quisque non rhoncus arcu. Phasellus ut urna eget velit facilisis tempus.
<br/><br/>
Nulla vel diam sed sem viverra vestibulum. In ac dolor id sem placerat venenatis. Vestibulum interdum porttitor sem nec egestas. Mauris porta dolor ac hendrerit malesuada. Vestibulum non mi molestie, tincidunt turpis ullamcorper, euismod quam. Curabitur vel nunc consequat massa tempus efficitur. Vivamus laoreet nunc sit amet molestie feugiat.
`;

//crearemos el body y luego haremos la referencia al body
const body = document.querySelector('body');
//con la diguiente linea enviamos el texto creado al body
body.append(texto);

//creamos el progresBar a traves de un div

const progressBar = document.createElement('div');
//agregamos atributos de classe y el valor progress-bar, el cual ya esta definido en el style
progressBar.setAttribute('class', 'progress-bar');
//luego se realiza el append del progress bar

body.append(progressBar);


//funcion que haga realice el calculo
const calcularPorcentajeScroll = (event) => { 
  const {
    scrollTop,
    scrollHeight,
    clientHeight
  } = event.target.documentElement;
  return  (scrollTop/(scrollHeight-clientHeight))*100
 
  
 
}


//stream - vamos a suscribirnos al croll del html
const scroll$ = fromEvent(document, 'scroll');

/* scroll$.subscribe(console.log) */

//procedimiento para indicarnos cual es  el procentaje del scroll

const progress$ = scroll$.pipe(
  map(calcularPorcentajeScroll),
  tap(console.log)

);
  progress$.subscribe(porcentaje => { 
    progressBar.style.width = `${porcentaje}%`;
  }
  
)

