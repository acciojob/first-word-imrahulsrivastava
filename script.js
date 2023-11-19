function firstWord(s) {
  // your code here

  const arr = [];

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === " ") {
      return arr.join("");
    }
    arr.push(s.charAt(i));
  }

  return arr.join("");
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
