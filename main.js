// function without parmaeter and no return type
function add1() {
    var numValue1 = 10;
    var numValue2 = 20;
    console.log(numValue1 + numValue2);
}
add1();
// function with parameter and no return type
function add2(numValue1, numValue2) {
    console.log(numValue1 + numValue2);
}
add2(2, 2);
// function without parameter and return type
function add3() {
    var numValue1 = 20;
    var numValue2 = 20;
    return numValue1 + numValue2;
}
var result = add3();
console.log(result);
// function with parameter and return type
function add4(numValue1, numValue2) {
    return numValue1 + numValue2;
}
result = add4(2, 2);
console.log(result);
