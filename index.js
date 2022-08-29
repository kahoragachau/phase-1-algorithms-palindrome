function isPalindrome(word) {
  // Write your algorithm here
  const reverseWord = word.split("").reverse("").join("")
  if (word === reverseWord){
    return true
  }
  else {
    return false
  }
}

/* 
  Add your pseudocode here
  First create a variable to store the reversed array
    turn the word to an array by spliting it
    secondly reverse the array
    thirdly join the reversed array
  compare the first words with the reversed word 
    if they match return true
      else return false
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
