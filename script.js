function add(){
const number1 = document.getElementById("num1").value;
const number2 = document.getElementById("num2").value;
const sum = parseInt(number1) + parseInt(number2);
document.getElementById("output1").innerText="Sum is:"+sum;
}

function Sub(){
    const number1 = document.getElementById("num1").value;
const number2 = document.getElementById("num2").value;
const sub = parseInt(number1) - parseInt(number2);
document.getElementById("output2").innerText="The Sub is : "+sub;
}

function multi(){
    const number1 = document.getElementById("num1").value;
const number2 = document.getElementById("num2").value;
const multi = parseInt(number1) * parseInt(number2);
document.getElementById("output3").innerText= "The Multi is : "+multi;
}

function div(){
    const number1 = document.getElementById("num1").value;
const number2 = document.getElementById("num2").value;
const div = parseInt(number1) / parseInt(number2);
document.getElementById("output4").innerText="The Division is : "+div;
}
///check
function load(){
    location.reload();
}