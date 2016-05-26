// part1 - prototype inheritance using functions-constructors

function Animal(age, name, sound, region) {
	this.name = name;
	this.age = age;
	this.sound = sound;
	this.region = region;
	this.say = function() {
		return this.sound;
	}
}

function Dog(age, name, sound, region) {
	Animal.apply(this, arguments);
	
	this.goAway = function() {
		return "The " + this.constructor.name + " called " + this.name + " runs away.";
	}
}

function Cat(age, name, sound, region) {
	Animal.apply(this, arguments);
	
	this.goAway = function() {
		return "The " + this.constructor.name + " called " + this.name + " jumps away.";
	}
}

function Woodpecker(age, name, sound, region) {
	Animal.apply(this, arguments);
	
	this.goAway = function() {
		return "The " + this.constructor.name + " called " + this.name + " flies away.";
	}
}

function getType(obj) {
	return obj.constructor.name;
}

function getThisType() {
	return this.constructor.name;
}

//creating objects and checking their type
var dog = new Dog(5, "Barbos", "woof", "Ukraine");
dog.say();
dog.goAway();

var cat = new Cat(3, "Barsik", "meow", "Poland");
cat.say();
cat.goAway();

var woodpecker = new Woodpecker(5, "Woodie", "bang", "USA");
woodpecker.say();
woodpecker.goAway();

//getting type by passing object
getType(cat);
getType(dog);
getType(woodpecker);

//getting type by calling function with context
getThisType.call(cat);
getThisType.call(dog);
getThisType.call(woodpecker);

// part2 - Inheritance using Object.create

function Animal(age, name, sound, region) {
	this.age = age; 
	this.name = name; 
	this.sound = sound; 
	this.region = region; 
	return this;
}

Animal.prototype.say = function() {
	return this.sound;
}

Dog.prototype = Object.create(Animal.prototype);
Dog.prototype.constructor = Dog;
Dog.prototype.goAway = function() {
	return "The " + this.constructor.name + " called " + this.name + " runs away.";
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.constructor = Cat;
Cat.prototype.goAway = function() {
	return "The " + this.constructor.name + " called " + this.name + " jumps away.";
}

Woodpecker.prototype = Object.create(Animal.prototype);
Woodpecker.prototype.constructor = Woodpecker;
Woodpecker.prototype.goAway = function() {
	return "The " + this.constructor.name + " called " + this.name + " flies away.";
}

function getType(obj) {
	return obj.constructor.name;
}

function getThisType() {
	return this.constructor.name;
}

//creating objects and checking their type
var dog = new Dog(5, "Barbos", "woof", "Ukraine");
dog.say();
dog.goAway();

var cat = new Cat(3, "Barsik", "meow", "Poland");
cat.say();
cat.goAway();

var woodpecker = new Woodpecker(5, "Woodie", "bang", "USA");
woodpecker.say();
woodpecker.goAway();

//getting type by passing object
getType(cat);
getType(dog);
getType(woodpecker);

//getting type by calling function with context
getThisType.call(cat);
getThisType.call(dog);
getThisType.call(woodpecker);
