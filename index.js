let buttons = document.getElementById('buttons')
let input = document.getElementById('inputs')
let clear = document.getElementById('AC')
let del = document.getElementById('DEL')
let res = document.getElementById('Equal')



buttons.addEventListener('click', (event) => {
  console.log(event.target.innerText);

  if (event.target.tagName === 'BUTTON') {

    const operation = ['AC', 'DEL', '='];

    const currentOperation = event.target.innerText;

    if (!operation.includes(currentOperation)) {
      input.value = input.value + currentOperation
    }

  }
})

// clear
clear.addEventListener('click', () => {
  input.value = '';
})

// delete
del.addEventListener('click', () => {
  input.value = input.value.slice(0, -1);
})

// result
res.addEventListener('click', () => {
  try {
    input.value = parseInt(eval(input.value))  //parseInt removes leading zeros
  }
  catch (error) {
    input.value = 'Invalid Format'
  }
})

