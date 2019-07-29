// function without parmaeter and no return type

function add1(): void {
  let numValue1: number = 10;
  let numValue2: number = 20;

  console.log(numValue1 + numValue2);
}

add1();

// function with parameter and no return type
function add2(numValue1: number, numValue2: number): void {
  console.log(numValue1 + numValue2);
}

add2(2, 2);

// function without parameter and return type
function add3(): number {
  let numValue1: number = 20;
  let numValue2: number = 20;

  return numValue1 + numValue2;
}

let result = add3();
console.log(result);

// function with parameter and return type
function add4(numValue1: number, numValue2: number): number {
  return numValue1 + numValue2;
}

result = add4(2, 2);
console.log(result);
