/*
Java Script Design Patterns

The Gang of four book: Design Patterns - Elements of Reusable Object-Oriented Software.

Module Pattern, Facade Pattern, Observer Pattern

Types of Patterns:
Creational: Constructor, Module, Factory, Singleton 
Structural: Decorator, Facade, Flyweight
Behavioral: Command, Mediator, Observer


OBJECTS In JS:
- How to create one:
	var obj ={};
	Var lastObj = new Object();
- Assigning Keys and values
	var obj ={};
	var val =‘value’;
	obj[val] = ‘new value’;
	Console.log(obj[val]); // new value
*/


//- Define property
var task = {
	title: 'My task',
	description: 'My Desc'
};

Object.defineProperty(task, 'toString', {
	value: function(){
	return this.title + ' ' + this.description;
},
	writable:true,
	enumerable: true,
	configurable: true
});


//- Inherence:
var urgentTask = Object.create(task);
Object.defineProperty(urgentTask, 'toString', {
	value: function(){
	return this.title + ' ' + 'is urgent';
},
	writable:false,
	enumerable: false,
	configurable: false
});


console.log(task);
console.log(urgentTask.toString());




