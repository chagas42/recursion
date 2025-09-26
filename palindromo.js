import { question } from "./utils.js";

function isPalindrome(str) {
  console.log(str);
  if (str.length <= 1) return true;
  if (str[0] !== str[str.length - 1]) return false;
  return isPalindrome(str.slice(1, -1));
}

async function main() {
  while (true) {
    const word = await question("informe uma palavra: ");
    console.log(isPalindrome(word));
  }
}

main();
