console.log('Hello world! You know can use this calculator now.')

// fungsi untuk menjalankan setiap fungsi kalkulator yang ada 
const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    waitingForSecondNumber: false
 };
 
 // fungsi untuk mengupdate angka yang muncul pada display 
function updateDisplay() {
    document.querySelector("#displayNumber").innerText = calculator.displayNumber;
 }
  
 // fungsi untuk menghapus angka yang sudah diinputkan pada display kembali ke 0 
function clearCalculator() {
    calculator.displayNumber = '0';
    calculator.operator = null;
    calculator.firstNumber = null;
    calculator.waitingForSecondNumber = false;
 }
 
// fungsi untuk mengganti nilai yang muncul setiap kali melakukan update angka pada display
function inputDigit(digit) {
    if (calculator.waitingForSecondNumber && calculator.firstNumber === calculator.displayNumber) {
            calculator.displayNumber = digit;
    } else {
        if (calculator.displayNumber === '0') {
            calculator.displayNumber = digit;
        } else {
            calculator.displayNumber += digit;
        }
    }
 }

 // menerapkan fungsi pada plusmin button
function inverseNumber() {
    if (calculator.displayNumber === '0') {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
 }

 function performPercent(percent) {
    if (calculator.displayNumber == null) {
        return;
    }
    calculator.displayNumber = calculator.displayNumber * 0.01;
 }

 function performDecimal(decimal) {
    if (calculator.displayNumber == null) {
        return;
    }
    calculator.displayNumber = calculator.displayNumber + '.';
 }

// menerapkan fungsi pada operator button
function handleOperator(operator) {
    if (!calculator.waitingForSecondNumber) {
        calculator.operator = operator;
        calculator.waitingForSecondNumber = true;
        calculator.firstNumber = calculator.displayNumber;
    } else {
        alert('Operator is applied')
    }
 }

 // menerapkan operator calculation
function performCalculation() {
    if (calculator.firstNumber == null || calculator.operator == null) {
        alert("Use the operator");
        return;
    }
  
    let result = 0;
    if (calculator.operator === "+") {
        result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber)
    } else if (calculator.operator === "-") {
        result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
    } else  if (calculator.operator === "x"){
        result = parseInt(calculator.firstNumber) * parseInt(calculator.displayNumber)
    } else if (calculator.operator === "/") {
        result = parseInt(calculator.firstNumber) / parseInt(calculator.displayNumber)
    } 
  
    calculator.displayNumber = result;
}

 // for loops untuk tombol atau .button yang ada pada kalkulator 
const buttons = document.querySelectorAll(".button");
for (let button of buttons) {
// menerapkan reset button pada tombok 'AC' kalkulator
button.addEventListener('click', function(event) {
     
    // mendapatkan objek elemen yang diklik
    const target = event.target;

    if(target.classList.contains('clear')) {
        clearCalculator();
        updateDisplay();
        return;
    }

    if(target.classList.contains('plusmin')) {
        inverseNumber();
        updateDisplay();
        return;
    }

    if(target.classList.contains('percent')) {
        performPercent(target.innerText)
        updateDisplay();
        return;
    }

    if(target.classList.contains('decimal')) {
        performDecimal(target.innerText)
        updateDisplay();
        return;
    }

    if(target.classList.contains('equals')) {
        performCalculation();
        updateDisplay();
        return;
    }

    if(target.classList.contains('operator')) {
        handleOperator(target.innerText)
        updateDisplay();
        return;
    }

    inputDigit(target.innerText);
    updateDisplay()
 });
}

