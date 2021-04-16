import { projects, storageController } from "../object-handlers/storage";
import checkForInput from "../helper-functions/error";
import createDOM from "../helper-functions/dom";
import resetValue from "../helper-functions/reset";
import taskController from "../object-handlers/task";

const taskBox = (() => {
  const show = () => {
    const box = document.querySelector(".task-box");
    box.classList.remove("hidden");
    window.addEventListener("click", (event) => {
      if (event.target == box) hide();
    });
  };
  const hide = () => {
    const box = document.querySelector(".task-box");
    box.classList.add("hidden");
  };
  const addNew = () => {
    const taskData = [];

    const taskTitle = document.querySelector("#task-title");
    const taskDescription = document.querySelector("#task-description");
    const taskDueDate = document.querySelector("#task-date");
    const taskPriority = document.querySelector("#task-priority");
    const taskProject = document.querySelector("#task-projects");
    taskData.push(
      taskTitle,
      taskDescription,
      taskDueDate,
      taskPriority,
      taskProject
    );

    if (taskData.every(checkForInput)) {
      // add to project
      let newTask = taskController.create(taskData);
      let targetIndex = projects.findIndex(
        (project) => project.title === taskProject.value
      );
      projects[targetIndex].list.push(newTask);
      render(newTask);
      storageController.store("projects", projects);

      // render on page (with evenHandlers)
      taskData.forEach((element) => {
        if (element.id === "task-priority" || element.id === "task-projects") {
          element.selectedIndex = 0;
        } else resetValue(element);
      });
      hide();
    }
  };

  const render = ({title, dueDate}) => {
    const tasksContainer = document.querySelector(".tasks");
    const referenceTask = document.querySelector("#add-task");
    const taskDiv = createDOM("div", "task");
    tasksContainer.insertBefore(taskDiv, referenceTask);
    
    const leftPanel = createDOM("div", "left-task-panel");
    taskDiv.appendChild(leftPanel);
    const checkIcon = createDOM("span", "far", "fa-circle");
    const titleSpan = createDOM("span");
    titleSpan.textContent = title;
    leftPanel.appendChild(checkIcon);
    leftPanel.appendChild(titleSpan);
    
    const rightPanel = createDOM("div", "right-task-panel");
    taskDiv.appendChild(rightPanel);
    const dateSpan = createDOM("span");
    dateSpan.textContent = dueDate;
    const editIcon = createDOM("span", "fas", "fa-edit");
    const trashIcon = createDOM("span", "fas", "fa-trash");
    rightPanel.appendChild(dateSpan);
    rightPanel.appendChild(editIcon);
    rightPanel.appendChild(trashIcon);

  };

  const renderProject = (project) => {
    project.forEach((task) => render(task));
  };

  return { show, hide, addNew };
})();

export default taskBox;
