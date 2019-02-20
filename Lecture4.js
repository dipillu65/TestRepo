

//Defining functions
var a = [1,2,3];
var x = 7;
var y = 8;
var max = -999;

var print = function(x){console.log(x)};
//for(i =0; i < a.length; i++){
//    print(a[i]);
//}
a.forEach(print); //calling print function 
var add = function(a,b){return a+b;}
var r = add(x,y);
console.log("result = "+ r);

a.forEach(function(x){ //function to find max number in array
if (x > max) max = x;
});
console.log('max value = '+ max); //Print max value from array


