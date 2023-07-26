// function map(f, a) {
//     const result = new Array(a.length);
//     for (let i = 0; i < a.length; i++) {
//       result[i] = f(a[i]);
//     }
//     return result;
//   }
  
//   const cube = function (x) {
//     return x * x * x;
//   };
  
//   const numbers = [0, 1, 2, 5, 10];
//   console.log(map(cube, numbers)); // [0, 1, 8, 125, 1000]

function outside(x) {
    function inside(y) {
      return x + y;
    }
    return inside;
  }
  
  const fnInside = outside(3); // Think of it like: give me a function that adds 3 to whatever you give it
  console.log(fnInside(5)); // 8
  console.log(outside(3)(5)); // 8
  
  