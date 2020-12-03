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
  // if running value use it, else use 1
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
    console.log(inputValue)
    if (inputValue === '-0') {
      inputValue = "-" + e.target.value;
    } else if (inputValue === '0') {
      console.log('here !!!')
      inputValue = e.target.value;
    } else {
      inputValue += e.target.value;
    }
    view.innerHTML = inputValue;
  })
})

operations.forEach(btn => {
  btn.addEventListener('click', (e) => {
    operation = e.path[0].id !== 'equals' ? e.path[0].id: operation;

    if ( runningValue ) {
      calRunningValue(runningValue, Number(inputValue), operation)
    } else if (total) {
      calRunningValue(total, Number(inputValue), operation)
    } else {
      runningValue = Number(inputValue)
    }
    inputValue = '';
  })
})

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