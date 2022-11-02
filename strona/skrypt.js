function suma() {

    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    
    let wynik = parseInt(firstNumber.value) + parseInt(secondNumber.value);
    let result = document.getElementById("result"); 
    
    result.innerHTML = wynik;
}

function roznica() {

    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    
    let wynik = parseInt(firstNumber.value) - parseInt(secondNumber.value);
    let result = document.getElementById("result"); 
    
    result.innerHTML = wynik;
}

function mnozenie() {

    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    
    let wynik = parseInt(firstNumber.value) * parseInt(secondNumber.value);
    let result = document.getElementById("result"); 
    
    result.innerHTML = wynik;
}

function dzielenie() {

    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    
    let result = document.getElementById("result"); 
    if (parseInt(secondNumber.value) == 0) {
         
        result.innerHTML = "Nie mozna dzielic przez zero"; 
    }
    else {
    let wynik = parseInt(firstNumber.value) / parseInt(secondNumber.value);
    let result = document.getElementById("result"); 
    
    result.innerHTML = wynik;

    }
}

function modulo() {

    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    
    let result = document.getElementById("result"); 
    if (parseInt(secondNumber.value) == 0) {
         
        result.innerHTML = "Nie mozna dzielic przez zero"; 
    }
    else {
    let wynik = parseInt(firstNumber.value) % parseInt(secondNumber.value);
    let result = document.getElementById("result"); 
    
    result.innerHTML = wynik;

    }
}

function potegowanie() {

    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");
    
    let wynik = Math.pow(parseInt(firstNumber.value),parseInt(secondNumber.value));
    let result = document.getElementById("result"); 
    
    result.innerHTML = wynik;
}
