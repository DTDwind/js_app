class test {
	constructor (food){
		this.food = food;
   
	}
	printInfo(){
		console.log(`want to eat ${this.food}.`);
	}
  love(){
    console.log('annie~ I love you <3');
  }
}

var apple = new Person('apple');
apple.printInfo();

var fish = new Person('fish');
fish.love();