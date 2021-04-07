function checkForInput(input) {
  if (input.value === "") {
    alert("Field should not be empty.");
    return false;
  } else return true;
}

export default checkForInput;
