import { close, question } from "./utils.js";

function reverseString(str) {
  if (str.length <= 1) {
    return str;
  }

  return reverseString(str.slice(1)) + str.charAt(0);
}

async function main() {
  const toConvert = await question("Enter a word to reverse: ");

  console.log(`Reversed string is`, reverseString(String(toConvert)));
  close();
  return;
}

main();
