import projectBox from "./project-box";
import { showTaskBox } from "./task-box";
import toggleTheme from "./theme";

function startListening() {
  const addProjectButton = document.querySelector("#add-project");
  addProjectButton.addEventListener("click", projectBox.show);

  const addButton = document.querySelector("#add-project-box");
  addButton.addEventListener("click", projectBox.addNew);

  const cancelButton = document.querySelector("#cancel-project-box");
  cancelButton.addEventListener("click", projectBox.hide);

  const addTask = document.querySelector("#add-task");
  addTask.addEventListener("click", showTaskBox());

  const themeButton = document.querySelector("#theme-switcher");
  themeButton.addEventListener("click", toggleTheme());
}

export default startListening;
