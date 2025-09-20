import readline from "readline";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (query) => {
  return new Promise((resolve) => {
    rl.question(query, (answer) => {
      resolve(answer);
    });
  });
};

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
    rl.close();
    return;
  }

  console.log(`is ${factorial(num)}`);
  rl.close();
}

main();
