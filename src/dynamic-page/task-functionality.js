import { checkForDuplicates, checkForInput } from "../helper-functions/error";
import createDOM from "../helper-functions/dom";
import resetValue from "../helper-functions/reset";
import taskController from "../object-handlers/task";
import projectController from "../object-handlers/project";

const taskModal = (() => {
  const show = (option) => {
    const box = document.querySelector(".task-box");
    modifyModal(option);
    box.classList.remove("hidden");
    window.addEventListener("click", (event) => {
      if (event.target == box) hide();
    });
  };

  const hide = () => {
    const box = document.querySelector(".task-box");
    box.classList.add("hidden");
    reset();
  };

  const modifyModal = (option) => {
    const taskBoxTitle = document.querySelector(".task-box-title");
    const taskButton = document.querySelector("#add-task-box");

    const cancelTask = document.querySelector("#cancel-task-box");
    cancelTask.addEventListener("click", hide);

    if (option === "New Task") {
      taskBoxTitle.textContent = option;
      taskButton.textContent = "Add Task";
      taskButton.onclick = taskBox.addTask;
    } else {
      const taskTitle = document.querySelector("#task-title");
      const taskDescription = document.querySelector("#task-description");
      const taskDueDate = document.querySelector("#task-date");
      const taskPriority = document.querySelector("#task-priority");
      const taskProject = document.querySelector("#task-projects");
      const currentTaskDiv = option.target.parentNode.parentNode;

      let taskInModification = currentTaskDiv.querySelector(".task-title")
        .textContent;

      let currentProject = projectController.locateByTask(taskInModification);
      taskInModification = taskController.locate(taskInModification);

      taskTitle.value = taskInModification.title;
      taskDescription.value = taskInModification.description;
      taskDueDate.value = taskInModification.dueDate;
      taskPriority.value = taskInModification.priority;
      taskProject.value = currentProject.title;

      taskBoxTitle.textContent = "Update Task";
      taskButton.textContent = "Modify task";
      taskButton.onclick = () =>
        taskBox.updateTask(taskInModification, currentProject, currentTaskDiv);
      //render current data
    }
  };

  const reset = () => {
    let data = [];
    const taskTitle = document.querySelector("#task-title");
    const taskDescription = document.querySelector("#task-description");
    const taskDueDate = document.querySelector("#task-date");
    const taskPriority = document.querySelector("#task-priority");
    const taskProject = document.querySelector("#task-projects");
    data.push(
      taskTitle,
      taskDescription,
      taskDueDate,
      taskPriority,
      taskProject
    );

    data.forEach((element) => {
      if (element.id === "task-priority" || element.id === "task-projects") {
        element.selectedIndex = 0;
      } else resetValue(element);
    });
  };

  return { show, hide, reset };
})();

const taskBox = (() => {
  const addTask = () => {
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

    if (
      taskData.every(checkForInput) &&
      checkForDuplicates(projectController.locateByTask(taskTitle.value))
    ) {
      // add to project
      let newTask = taskController.create(taskData.map(item => item.value));
      projectController.insert(taskProject.value, newTask);
      render(newTask);
    }
    taskModal.reset();
    taskModal.hide();
  };

  const updateTask = (targetTask, oldProject, targetNode) => {
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

    if (
      taskData.every(checkForInput) &&
      checkForDuplicates(projectController.locateByTask(taskTitle.value))
    ) {
      taskController.erase(oldProject, targetTask.title);

      let newTask = taskController.create(taskData.map(item => item.value));
      projectController.insert(taskProject.value, newTask);

      targetNode.querySelector(".task-title").textContent = taskTitle.value;
      targetNode.querySelector(".task-date").textContent = taskDueDate.value;
    }
    taskModal.reset();
    taskModal.hide();
  };

  const removeTask = (targetTask) => {
    const targetNode = targetTask.target.parentNode.parentNode;
    const taskTitle = targetNode.querySelector(".task-title").textContent;
    const taskProject = projectController.locateByTask(taskTitle);
    taskController.erase(taskProject, taskTitle);
    targetNode.remove();
  };

  const render = ({ title, dueDate }) => {
    const tasksContainer = document.querySelector(".tasks");
    const referenceTask = document.querySelector("#add-task");
    const taskDiv = createDOM("div", "task");
    tasksContainer.insertBefore(taskDiv, referenceTask);

    const leftPanel = createDOM("div", "left-task-panel");
    taskDiv.appendChild(leftPanel);
    const checkIcon = createDOM("span", "far", "fa-circle");
    // checkIcon.addEventListener("click", toggleTask);
    const titleSpan = createDOM("span", "task-title");
    titleSpan.textContent = title;
    leftPanel.appendChild(checkIcon);
    leftPanel.appendChild(titleSpan);

    const rightPanel = createDOM("div", "right-task-panel");
    taskDiv.appendChild(rightPanel);
    const dateSpan = createDOM("span", "task-date");
    dateSpan.textContent = dueDate;
    const editIcon = createDOM("span", "fas", "fa-edit");
    editIcon.addEventListener("click", taskModal.show);
    const trashIcon = createDOM("span", "fas", "fa-trash");
    trashIcon.addEventListener("click", removeTask);
    rightPanel.appendChild(dateSpan);
    rightPanel.appendChild(editIcon);
    rightPanel.appendChild(trashIcon);
  };

  const renderProject = (project) => {
    project.list.forEach((task) => render(task));
  };
  
  const setTitle = (title) => {
    const titleDiv = document.querySelector(".tasks-title");
    titleDiv.textContent = title;
  };

  const clear = () => {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach(task => task.remove());
  };

  return { addTask, updateTask, renderProject, setTitle, clear }
})();

export { taskModal, taskBox };
