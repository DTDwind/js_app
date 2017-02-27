function b1(){
	console.log(myVar);
}

function a1(){
	var myVar = 1;
	b1();
	console.log(myVar);
}

var myVar = 1000;
console.log(myVar);
a1();

function a2(){
	var myVar = 1;
	function b2(){
		// var myVar;
		console.log(myVar);
	}
	b2();
	console.log(myVar);
}

var myVar = 20;
console.log(myVar);
a2();

var firstname = 'Sam';
var addSurname = () => {
	var surname = 'cheng';
	var fullname = firstname + ' ' + surname;
	var firstname = 'QAQ';
	console.log(fullname);
}