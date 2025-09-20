import { close, question } from "./utils.js";

function fibonacci(n) {
  if (n === 0 || n === 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function fibonacciWithSequence(n) {
  console.log("Fibonacci sequence:");
  for (let i = 0; i <= n; i++) {
    const result = fibonacci(i);
    console.log(`F(${i}) = ${result}`);
  }
  return fibonacci(n);
}

async function main() {
  const toConvert = await question("Enter a number: ");
  const num = parseInt(toConvert);

  if (isNaN(num) || num < 0) {
    console.log("Invalid input");
    close();
    return -1;
  }

  const result = fibonacciWithSequence(num);
  console.log(`\nFinal result: Fibonacci(${num}) = ${result}`);
  close();
  return 0;
}

main();
