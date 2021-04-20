function checkForInput(input) {
  if (input.value === "") {
    alert("Field should not be empty.");
    return false;
  } else return true;
}

function checkForDuplicates(fun) {
  if (fun) {
    alert("Object by this name already exists.");
    return false;
  } else return true;
}

export { checkForInput, checkForDuplicates };
