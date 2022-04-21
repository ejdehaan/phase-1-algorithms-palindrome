function isPalindrome(str) {
  let origStr = str.toLowerCase()
  let reverseStr = origStr.split('').reverse().join('')
  return reverseStr === origStr ? true : false
}


/* 
  1. Write a function isPalindrome
  2. Will take in one argument (a string)
  3. If argument === a palindrome, return true
  4. If argument \== a palindrom, return false
  5. console log result
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
