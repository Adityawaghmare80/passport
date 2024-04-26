var cl = console.log;

var a = 10;
var b = "15";
var c = 5;
var d = 20;
var e = "true";
var f ;
var g = "25";
var h = "15";
var i = 30;
var j = 50;
var k = "false";

var result = a + c;
cl(result, typeof result);
//ans: 15 number

var result = a + b;
cl(result, typeof result);
//ans: 1015 string

var result = a - b;
cl(result, typeof result);
//ans: -5 number

var result = g + h;
cl(result, typeof result);
//ans: 2515 string

var result = d + e;
cl(result, typeof result);
//ans: 20true string

var result = f + g;
cl(result, typeof result); 
//ans: undefined25 string

var result = a + c + d;
cl(result, typeof result);
//ans: 35 number

var result = j - g;
cl(result, typeof result);
//ans: 25 number

var result = a + b + e + f;
cl(result, typeof result);
//ans: 1015trueundefined string

var result = g + h + i + j;
cl(result, typeof result);
//ans: 25153050 string 

var result = j + i + h;
cl(result, typeof result);
//ans: 8015 string

var result= f + i;
cl(result, typeof result);
//ans: NaN number 

var result = b + d + e + k; 
cl(result, typeof result);
//ans: 1520truefalse string

var result = a * d;
cl(result, typeof result);
//ans: 200 number

var result = b * h;
cl(result, typeof rseult);
//ans; 225 undefined

var result = d % c;
cl(result, typeof result);
//ans: 0 number

var result = a / j;
cl(result, typeof result);
// 0.2 number

var result = e + k;
cl(result, typeof result);
//ams: truefalse string



var para3 = document.getElementById("para3");
para3.innerHTML = result;









