import { close, question } from "./utils.js";

function sum(n) {
  if (!Array.isArray(n)) {
    return "error: input must be an array";
  }

  if (n.length === 0) {
    return 0;
  }

  if (n.length === 1) {
    return n[0];
  }

  const [first, ...rest] = n;

  return first + sum(rest);
}

async function main() {
  const toConvert = await question("Enter a array: ");

  const input = JSON.parse(toConvert);

  if (!Array.isArray(input)) {
    console.log("error: input must be an array");
    close();
    return;
  }

  console.log(`sum off all elements is ${sum(input)}`);
  close();
  return;
}

main();
