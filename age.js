let user_input = prompt("Please enter a date in YYYY-MM-DD format:");

let milliseconds = Date.parse(user_input);
let now = Date.now()
let age = Math.floor((now - milliseconds)/(1000*60*60*24 * 365));

alert(`The user age is: ${age}`)
