// alert if input is empty
function checkForInput(input) {
  if (input.value === '') {
    alert('Field should not be empty.');
    return false;
  } else return true;
}

// alert if provided element is not falsy
function checkForDuplicates(fun) {
  if (fun) {
    alert('Object by this name already exists.');
    return false;
  } else return true;
}

export { checkForInput, checkForDuplicates };
