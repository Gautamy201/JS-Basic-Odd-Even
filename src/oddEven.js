function generateNumber() {
  // generate a random integer(hint : Math.random)
  return Math.floor(Math.random() * 100) + 1;
  
}
function checkOddEven(num) {
  // logic for even / odd
  return num % 2 === 0 ? "even" : "odd";
}

window.onload = function () {
  // add event listeners to the button here 
  let button = document.getElementById("generate-number")
  button.addEventListener("click",()=>{
    let number = generateNumber()
    document.getElementById("number").innerText = number
    let EvenOrOdd = checkOddEven(number)
    document.getElementById("odd-even").innerHTML=`The number is ${EvenOrOdd}`
  })
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
