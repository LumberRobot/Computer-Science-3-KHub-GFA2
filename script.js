function add(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = +num1 + +num2;
    document.getElementById("result").innerHTML = "The sum of " + num1 + " and " + num2 + " is " + result + ".";
}

function minus(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = num1 - num2;
    document.getElementById("result").innerHTML = "The difference of " + num1 + " and " + num2 + " is " + result + ".";
}

function mult(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = num1 * num2;
    document.getElementById("result").innerHTML = "The product of " + num1 + " and " + num2 + " is " + result + ".";
}

function divide(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = num1 / num2;
    document.getElementById("result").innerHTML = "The quotient of " + num1 + " and " + num2 + " is " + result + ".";
}

function mod(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var result = num1 % num2;
    document.getElementById("result").innerHTML = "The remainder of " + num1 + " and " + num2 + " is " + result + ".";
}