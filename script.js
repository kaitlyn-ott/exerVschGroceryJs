console.log('hello');


var shopper = {	
	firstName: "Joe",	
	lastName: "Smith",	
	age: 29,	
	isCurrent: true,	
	fullname: function() 
	{return this.firstName + " " + this.lastName;},
	groceryCart: ["apples", "oranges", "strawberries", "watermelon", "grapes"]

};

console.log(shopper)
console.log(shopper.fullname())


