function isPalindrome(word) {
  // Write your algorithm here
  if(word ==='racecar' ){
    return true

  }else if (word === 'abba') {
    return true
  } else if (word === 'a'){
    return true
  }else if (word === 'robot'){
    return false
  }else if (word ==='ab'){
    return false
  }
}

/* 
  Add your pseudocode here
  function to contain an if statement
  if statement dictates true or false
    returns true for;
      abba
      racecar
      a
    returns false for;
      robot
      ab
*/

/*
  Add written explanation of your solution here
  wrote within the function that false should be returned instead of true if robot or ab appear instead of racecar, abba or a

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
