const projectBox = document.querySelector(".project-box");

function showProjectBox() {
  projectBox.classList.remove("hidden");
}
function hideProjectBox() {
  projectBox.classList.add("hidden");
}
function addNewProject() {}
//const projectForm = document.querySelector("#project-name");
//{
//  console.log(projectForm.value);
//  projectForm.value = "";
//}

export { showProjectBox, hideProjectBox, addNewProject };
