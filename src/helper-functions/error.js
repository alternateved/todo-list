function checkForInput(input) {
  if (input.value === "") {
    alert("Field should not be empty.");
    console.log(input);
    return false;
  } else return true;
}

export default checkForInput;
