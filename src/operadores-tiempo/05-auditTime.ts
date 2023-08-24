import { auditTime, fromEvent, map, tap } from "rxjs";

//auditTImeemite el ultimo valor que ha sido emitido por el observable en un periodo de tiempo determinado
const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(
  map(({ x }) => x ),
  tap(val=>console.log('tap',val)),
  auditTime(2000)
)
  .subscribe(console.log

  );
