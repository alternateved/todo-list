import projectBox from "./project-functionality";
import { taskModal } from "./task-functionality";
import { toggleTheme } from "./theme";
import searchTerm from "./search";

function startListening() {
  const searchButton = document.querySelector(".search-button");
  searchButton.addEventListener("click", searchTerm);

  const searchBox = document.querySelector(".search-term");
  searchBox.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) searchButton.click();
  });

  const addProjectButton = document.querySelector("#add-project");
  addProjectButton.addEventListener("click", projectBox.show);

  const projectName = document.querySelector("#project-name");
  projectName.addEventListener("keyup", (event) => {
    if (event.keyCode === 13) addButton.click();
  });

  const cancelButton = document.querySelector("#cancel-project-box");
  cancelButton.addEventListener("click", projectBox.hide);

  const addButton = document.querySelector("#add-project-box");
  addButton.addEventListener("click", projectBox.addNew);

  const addTaskButton = document.querySelector("#add-task");
  addTaskButton.addEventListener("click", () => taskModal.show("New Task"));

  const themeButton = document.querySelector("#theme-switcher");
  themeButton.addEventListener("click", toggleTheme);

  const allTaskButton = document.querySelector("#all-tasks-shortcut");
  allTaskButton.addEventListener("click", projectBox.loadAllTasks);
}

export default startListening;
