// 1. Here j index is responsible for a single row for each iteration of i here i is responsible for how may rows we want and j is for column if
//    we see as matrix

// * * * *
// * * * *
// * * * *
// * * * *
// for (let i = 0; i < 4; i++) {
//   row = ' '
//   for (j = 0; j < 4; j++) {
//     row = row + ' *'
//   }
//   console.log(row)
// }

// -------------------------
// 2.
//     *
//     * *
//     * * *
//     * * * *

// for (let i = 0; i < 4; i++) {
//   row = ' '
//   for (let j = 0; j < i + 1; j++) {
//     row = row + '* '
//   }
//   console.log(row)
// }
// --------------------
// 3.
//    1
//    1 2
//    1 2 3
//    1 2 3 4
//    1 2 3 4 5

// for (let i = 0; i < 5; i++) {
//   let row = ' '
//   for (let j = 0; j < i + 1; j++) {
//     row = row + (j + 1)
//   }
//   console.log(row)
// }

// 4.
//    1
//    2 2
//    3 3 3
//    4 4 4 4
//    5 5 5 5 5

// for (let i = 0; i < 5; i++) {
//   let row = ' '
//   for (let j = 0; j < i + 1; j++) {
//     row = row + (i + 1)
//   }
//   console.log(row)
// }

// 5.
//    * * * * *
//    * * * *
//    * * *
//    * *
//    *
//
// for (let i = 0; i < 4; i++) {
//   let row = ' '
//   for (let j = 0; j < 4 - i; j++) {
//     row = row + '* '
//   }
//   console.log(row)
// }

// 6.
//   1 2 3 4
//   1 2 3
//   1 2
//   1
// for (let i = 0; i < 4; i++) {
//   let row = ' '
//   for (let j = 0; j < 4 - i; j++) {
//     row = row + (j + 1)
//   }
//   console.log(row);
// }

// 7.
//            *
//          * *
//        * * *
//      * * * *
//    * * * * *

// for (let i = 0; i < 8; i++) {
//   let row = ' '
//   for (let j = 0; j < 8 - (i + 1); j++) {
//     row = row + ' '
//   }
//   for (let k = 0; k < i + 1; k++) {
//     row = row + '*'
//   }
//   console.log(row)
// }

//8. 1
//   1 0
//   1 0 1
//   1 0 1 0
//   1 0 1 0 1
//   1 0 1 0 1 0
for (let i = 0; i < 5; i++) {
  let row = ''
  let toggle = 1
  for (j = 0; j < i + 1; j++) {
    row = row + toggle
    toggle === 0 ? (toggle = 1) : (toggle = 0)
  }
  console.log(row)
}
