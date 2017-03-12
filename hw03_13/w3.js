// Object Literals
let name, phone;
let person = {
	name: name,
	phone: phone,
	intro: function() {
		console.log(`Hi, I am ${this.name} and phone number goes ${this.phone}`);
	}
}

person.name = "Annie";
person.phone = "5201314";
person.intro();
