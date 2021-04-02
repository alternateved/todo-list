const addProjectButton = document.querySelector("#add-project");
addProjectButton.addEventListener("click", showProjectBox());

const addButton = document.querySelector("#add-project-box");
addButton.addEventListener("click", addNewProject());

const cancelButton = document.querySelector("#cancel-project-box");
cancelButton.addEventListener("click", hideProjectBox());

const addTask = document.querySelector("#add-task");
addTask.addEventListener("click", showTaskBox());

const themeButton = document.querySelector("#theme-switcher");
themeButton.addEventListener("click", toggleTheme());