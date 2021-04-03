import projectBox from "./project-box";
import taskBox from "./task-box";
import toggleTheme from "./theme";

function startListening() {
  const addProjectButton = document.querySelector("#add-project");
  addProjectButton.addEventListener("click", projectBox.show);

  const cancelButton = document.querySelector("#cancel-project-box");
  cancelButton.addEventListener("click", projectBox.hide);

  const addButton = document.querySelector("#add-project-box");
  addButton.addEventListener("click", projectBox.addNew);

  const addTaskButton = document.querySelector("#add-task");
  addTaskButton.addEventListener("click", taskBox.show);

  const cancelTask = document.querySelector("#cancel-task-box");
  cancelTask.addEventListener("click", taskBox.hide);

  const addTask = document.querySelector("#add-task-box");
  addTask.addEventListener("click", taskBox.addNew);

  const themeButton = document.querySelector("#theme-switcher");
  themeButton.addEventListener("click", toggleTheme());
}

export default startListening;
