function firstWord(s) {
  // your code here

  if (s === null) {
    return s;
  }

  let i = 0;
  while (i < s.length && s[i] !== " ") {
    i++;
  }
  return s.substring(0, i);
}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
