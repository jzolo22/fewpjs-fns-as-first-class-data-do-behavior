/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time){
  const n = time.split(":");
  const hour = parseInt(n[0])
  if (hour >= 0 && hour < 12) {
    return "Good Morning"
  }
  else if (hour >= 12 && hour <= 17 ){
    return "Good Afternoon"
  }
  else {
    return "Good Evening"
  }
}

/* Write your implementation of displayMessage() */

function displayMessage(string) {
  let x = document.getElementById("greeting"); 
  x.innerHTML = string
}
