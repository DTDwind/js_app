function greet() {
	console.log('How are you');
}

function logGreeting(fn) {
	fn();
}

var greetMe = function() {//function expression
	console.log('I\'m fine thank you');
}

logGreeting(function() {
	console.log('Hi~!');
});
greet();
greetMe();
logGreeting(greet);
logGreeting(greetMe);