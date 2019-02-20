var exports = module.exports = {};
exports.add = function(a,b){return a+b;}
exports.data = [1,2,3];

//Load Student data
var app = require('./students')
var students = app.myFunc();
var len = students.length
console.log('The number of people in the array are '+ len);

//Count number of students in database
var s = students.filter(function(students){return students.Role == 'student'|| students.role == 'student'}).length
console.log('The number of students are '+ s)

