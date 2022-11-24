import { Observable, range, of, interval, timer, from } from 'rxjs';

// const testSubscribe = Observable.create(subscriber => {
//     let num = 0;
//     setInterval(() => {
//         subscriber.next(num++);
//         if (num > 10) {
//             subscriber.error(new Error('Got Error'))
//             subscriber.complete();
//         }
        
//     }, 1000);
    
// });

// testSubscribe.subscribe({
//     next(v) {
//         console.log(v);
//     },
//     complete() {

//     },
//     error(e) {
//         console.error(e);
//     }
// });

// range(0, 5).subscribe(console.log);
// of(...[1, 2, 3]).subscribe(console.log);
// interval(1000).subscribe(console.log);
timer(5000, 1000).subscribe(console.log);
from([1, 2, 3, 4]).subscribe(console.log);
from(new Map([
    [ {key: 1}, { name: 'test1' }],
    [ {key: 2}, { name: 'test2' }]
])).subscribe(console.log);
