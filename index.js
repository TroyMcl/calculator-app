let total;
let runningValue;
let inputValue = '';
let operation;

let digits = document.querySelectorAll(".digit");
let operations = document.querySelectorAll(".operation")
let view = document.getElementById('view')
let clear = document.getElementById('clear');
let negative = document.getElementById('negative')
let percent = document.getElementById('percent');

clear.addEventListener('click', (e) => {
  runningValue = null;
  inputValue = '';
  operation = null;
  view.innerHTML = 0;
})

negative.addEventListener('click', (e) => {
  if (inputValue === '0' || inputValue === '') {
    inputValue = '-0'
  } else {
    inputValue = (Number(inputValue) * -1).toString();
  }
  view.innerHTML = inputValue;
})

percent.addEventListener('click', (e) => {

  if (runningValue) {
    inputValue = runningValue * Number(inputValue)/100;
  } else {
    inputValue = 1 * Number(inputValue)/100;
  }
  let base = runningValue || 1;
  calRunningValue(base, inputValue, operation)
})

digits.forEach(btn => {
  btn.addEventListener('click', (e) => {
    digitInput(e.target.value);
  })
})

operations.forEach(btn => {
  btn.addEventListener('click', (e) => {
    operationInput(e.path[0].id)
  })
})

const digitInput = (digit) => {

    if (inputValue === '-0') {
      inputValue = "-" + digit;
    } else if (inputValue === '0') {
      console.log('here !!!')
      inputValue = digit;
    } else {
      inputValue += digit;
    }
    view.innerHTML = inputValue;
}

const operationInput = (type) => {
  operation = type !== 'equals' ? type: operation;
  if ( runningValue ) {
    calRunningValue(runningValue, Number(inputValue), operation)
  } else if (total) {
    calRunningValue(total, Number(inputValue), operation)
  } else {
    runningValue = Number(inputValue)
  }
  inputValue = '';
}

const calRunningValue = (running, input, operation) => {
  switch(operation) {
    case 'subtract':
      runningValue = running - input;
      break;
    case 'divide':
      runningValue = running / (input || 1);
      break;
    case 'multiply':
      runningValue = running * (input || 1);
      break;
    case 'add':
      runningValue = running + input;
      break;
    case 'equals':
      total = running;
      break;
  }
  view.innerHTML = runningValue
  inputValue = '';
}

document.addEventListener('keypress', (e) => {

  switch(e.key) {
    case '.':
      digitInput(e.key)
      break;
    case '0':
      digitInput(e.key)
      break;
    case '1':
      digitInput(e.key)
      break;
    case '2':
      digitInput(e.key)
      break;
    case '3':
      digitInput(e.key)
      break;
    case '4':
      digitInput(e.key)
      break;
    case '5':
      digitInput(e.key)
      break;
    case '6':
      digitInput(e.key)
      break;
    case '7':
      digitInput(e.key)
      break;
    case '8':
      digitInput(e.key)
      break;
    case '9':
      digitInput(e.key)
      break;
    case '/':
      operationInput('divide')
      break;
    case '*':
      operationInput('multiply')
      break;
    case '-':
      operationInput('subtract')
      break;
    case '+':
      operationInput('add')
      break;
    case 'Enter':
      operationInput('equals')
      break;
  }
})