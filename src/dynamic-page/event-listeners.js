import projectBox from "./project-functionality";
import { taskModal } from "./task-functionality";
import { toggleTheme } from "./theme";

function startListening() {
  const addProjectButton = document.querySelector("#add-project");
  addProjectButton.addEventListener("click", projectBox.show);

  const cancelButton = document.querySelector("#cancel-project-box");
  cancelButton.addEventListener("click", projectBox.hide);

  const addButton = document.querySelector("#add-project-box");
  addButton.addEventListener("click", projectBox.addNew);

  const addTaskButton = document.querySelector("#add-task");
  addTaskButton.addEventListener("click", () => taskModal.show("New Task"));

  const themeButton = document.querySelector("#theme-switcher");
  themeButton.addEventListener("click", toggleTheme);
}

export default startListening;
