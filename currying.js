function mult(a, b) {
  return a*b;
}
function foo(a) {
  return function(b) {
     return mult(a,b);
   }};
var par=foo(2);
console.log(par(3));
