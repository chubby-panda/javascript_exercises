window.onload = function() {
    let numberBox = document.getElementById('number-box');
    let firstNumber = document.createElement('h2');
    firstNumber.innerText = 0;
    firstNumber.innerText = parseInt(firstNumber.innerText);
    firstNumber.id = "number";
    numberBox.appendChild(firstNumber);
    console.log(typeof firstNumber.innerText)
}

function decrementNumber() {
    let num = parseInt(document.getElementById('number').innerText);
    console.log(num);
    console.log(typeof num);
    num -= 1;
    document.getElementById('number').innerText = num;
    console.log(num);
}

function incrementNumber() {
    let num = parseInt(document.getElementById('number').innerText);
    console.log(num);
    console.log(typeof num);
    num += 1;
    document.getElementById('number').innerText = num;
    console.log(num);
}