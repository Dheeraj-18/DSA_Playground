function printHelloWorld() {
  console.log('Hello world')
}

let num = 7

function greet(name) {
  console.log('Namaste ' + name)
}

function sum(a, b) {
  console.log('sum is: ', a + b)
}

function square(num) {
  return num ** 2
}

greet('sam')
sum(1, 34)

let value = square(9)
console.log(value)

function checkEligibility(age) {
  if (age < 1) {
    console.log('invalid Input')
  } else if (age < 18) {
    console.log('Not Eligible to Vote')
  } else {
    console.log('Eligible to Vote')
  }
}

checkEligibility(23)
checkEligibility(7)

function isEvenOdd(num) {
    if(num%2==0){
        console.log(`${num} is Even`);
    }
    else console.log(`${num} is Odd`);
}

isEvenOdd(67)
