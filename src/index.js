import './css/style.css';
import './js/app';
import { fellowship, pack, aragorn, gandalf, legolas } from './js/app'


let setIter = pack.values()
setIter.next()
setIter.next()


// const iterator = {
//   gen(n = pack.size) {
//     let i = 1;
//     return {
//       next() {
//       if (i<=n) {
//         return { value: i++, done: false }
//       } else {
//         return { value: undefined, done: true }
        

//       }
//     }
//   }
//   }
// }

// let a = iterator.gen()
// a.next()
// a.next()
// a.next()
// a.next()

