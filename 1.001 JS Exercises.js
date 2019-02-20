// Array is variable used to store elements. 2 methods of invoking an array

var house = [];
var house = new Array();

//Create an array of 5 undefined elements
var house = new Array(10,20,30,40,50);


//Create an array of 5 elements
var house2 = ["1BR", "2BR", "3BR", "4BR"];

//Storing numbers, booleans, strings in an array
var house3 = ["1 BR", 2500, "Rent", true];

//Raising an alert
alert(house[0]+" cost = "+house[1]);

//Length of an array
var len = house.length;

for(var i = 0; i < len; i++)
	alert(house[i]);


//////////OBJECTS////////////
// Objects are collections of related data and functionalities
// These are called PROPERTIES & METHODS when inside objects

//Creating an object with functions within
var person = {
	name: { //Creating sub-name spaces
		first: 'Bob', 
		last: 'Smith',
	},
	age: 32,
	gender: 'Male',

	interests: ['music', 'skiing'], //nate you can create arrays using square brackets
	bio: function(){
		alert(this.name[0] + ' '+ this.name[1]+ ' is '+ this.age + ' years old. He likes' + this.interests[0] + ' and ' + this.interests[1] + '.');
	}, //DPnt forget commas that seperate member values
	greeting: function(){
		alert('Hi! I\'m ' + this.name[0]+ ' '+this.name[1]);
	},
	

}

//Calling functions ( Dont forget the commas)
person.greeting();


//Calling other methods
person.name;


//OBJECT members can be anything
// DATA Objects are PROPERTIES 
// DATA FUNCTIONS are METHODS
 person.name.last;
 person.name.first;


//Updating object members
person.name = 45;
person['name']['last'] = 'Doherty';

//Creating new members
person.farewell = function(){ alert("Bye EVeryone!")};
person['eyes'] = 'hazel';

//Adding new members into objects
var dataName = 'height';
var dataValue = '1.75m';

person[dataName] = dataValue; //Using [] adds members, as opposed to the dot notation





