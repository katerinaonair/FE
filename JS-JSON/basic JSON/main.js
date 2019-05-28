/*
JS : JSON - Java Script Object Notation
It is used to exchange data between a browser and a server.,
“sring” can be converted to an object an vs.
Data transfer to and from a server should be a string.
Example: var start = '{"favColor":"Orange", "favSeason":"Fall"}';
*/

var myObj = JSON.parse(start);
console.log(myObj);

var myString = JSON.stringify(myObj);
console.log(myString);

var myObj = JSON.parse(myString);
console.log(myObj);
/////
var theData1 = '{"first":"Paul", "last":"Cheney", "city":"NY"}';
var myObj1 = JSON.parse(theData1);
console.log(myObj1);
document.getElementById('msg').innerHTML = myObj1.last;

/// Double level JSON
var theData2 = '{"Jane":{"age":"29", "degree":"MBA"}, "Jim":{"age":"49", "degree":"MFA"}}';
var myObj2 = JSON.parse(theData2);
console.log(myObj2);
document.getElementById('msg2').innerHTML = myObj2.Jane.age;

//Triple level JSON
var theData3 = '{"Jane":{"age":"29", "degree":{"ASS":"VMI", "BA":"UVA"}}, "Jim":{"age":"49", "degree":{"ASS":"VMI", "BA":"UVA"}}}';
var myObj3 = JSON.parse(theData3);
console.log(myObj3);
document.getElementById('msg3').innerHTML = myObj3.Jane.degree.BA;
