import { close, question } from "./utils.js";

function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  return n * factorial(n - 1);
}

async function main() {
  const number = await question("Factorial of: ");
  const num = parseInt(number);

  if (isNaN(num) || num < 0) {
    console.log("Please enter a valid non-negative integer.");
    close();
    return -1;
  }

  console.log(`is ${factorial(num)}`);
  close();
  return 0;
}

main();
