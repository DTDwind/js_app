function greeting(callback) {
	console.log('Hi');
	var data = {
		name: 'Hello'
	};
	callback(data);
}

greeting(data => {
	console.log('1');
	console.log(data);
});

greeting(data => {
	console.log('2');
	console.log(data.name);
});