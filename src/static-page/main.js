import createDOM from "../helper-functions/dom";

function createMain() {
  const main = createDOM("main");

  const tasksContainer = createDOM("div", "tasks-container");
  main.appendChild(tasksContainer);

  const tasksHeader = createDOM("div", "tasks-header");
  tasksContainer.appendChild(tasksHeader);

  const headerTitle = createDOM("div", "tasks-title");
  headerTitle.textContent = "Placeholder";
  tasksHeader.appendChild(headerTitle);

  const headerSort = createDOM("div", "tasks-sort");
  tasksHeader.appendChild(headerSort);

  const sortIcon = createDOM("span", "fas", "fa-sort-up");
  headerSort.appendChild(sortIcon);

  const sortText = createDOM("span");
  sortText.textContent = "Due date";
  headerSort.appendChild(sortText);

  const tasksDiv = createDOM("div", "tasks");
  tasksContainer.appendChild(tasksDiv);

  const addTaskDiv = createDOM("div");
  addTaskDiv.id = "add-task";
  tasksDiv.appendChild(addTaskDiv);

  const addTaskPanel = createDOM("div", "panel");
  addTaskDiv.appendChild(addTaskPanel);
  
  const addTaskIcon = createDOM("span", "fas", "fa-plus-circle");
  addTaskPanel.appendChild(addTaskIcon);

  const addTaskText = createDOM("span");
  addTaskText.textContent = "Add task";
  addTaskPanel.appendChild(addTaskText);

  return main;
}

export default createMain;
