let total;
let runningValue;
let inputValue = '';
let operation;

let digits = document.querySelectorAll(".digit");
let operations = document.querySelectorAll(".operation")
let view = document.getElementById('view')
let clear = document.getElementById('clear');

clear.addEventListener('click', (e) => {
  runningValue = null;
  inputValue = '';
  operation = null;
  view.innerHTML = 0;
})

digits.forEach(btn => {
  btn.addEventListener('click', (e) => {
    inputValue += e.target.value
    view.innerHTML = inputValue;
  })
})

operations.forEach(btn => {
  btn.addEventListener('click', (e) => {
    operation = e.path[0].id !== 'equals' ? e.path[0].id: operation;
    console.log(operation)
    if ( runningValue ) {
      calRunningValue(runningValue, Number(inputValue), operation)
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
      runningValue = running / input;
      break;
    case 'multiply':
      runningValue = running * input;
      break;
    case 'add':
      runningValue = running + input;
      break;
    case 'equals':
      console.log(running, input, operation)
      total = running;
      // runningValue = running;
      console.log('total', display)
      break;
  }
  view.innerHTML = runningValue
  inputValue = '';
}