import { checkForDuplicates, checkForInput } from "../helper-functions/error";
import createDOM from "../helper-functions/dom";
import resetValue from "../helper-functions/reset";
import taskController from "../object-handlers/task";
import projectController from "../object-handlers/project";
import searchTerm from "./search";
import projectBox from "./project-functionality";
import { format, compareAsc, compareDesc } from "date-fns";

const taskModal = (() => {
  // display task modal
  const show = (option) => {
    const box = document.querySelector(".task-box");
    modifyModal(option);
    box.classList.remove("hidden");
    window.addEventListener("click", (event) => {
      if (event.target == box) hide();
    });
  };

  // hide task modal
  const hide = () => {
    const box = document.querySelector(".task-box");
    box.classList.add("hidden");
    reset();
  };

  // depending on option variable, display modal for adding task or for updating task
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
    }
  };

  // reset task modal form
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
  // add and render new task
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
      let newTask = taskController.create(taskData.map((item) => item.value));
      projectController.insert(taskProject.value, newTask);

      loadState();

      taskModal.reset();
      taskModal.hide();
    }
  };

  // update and render updated task
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

    if (taskData.every(checkForInput)) {
      taskController.erase(oldProject, targetTask.title);
      if (checkForDuplicates(projectController.locateByTask(taskTitle.value))) {
        let newTask = taskController.create(taskData.map((item) => item.value));
        projectController.insert(taskProject.value, newTask);

        loadState();

        taskModal.reset();
        taskModal.hide();
      }
    }
  };

  // remove task from page and from storage
  const removeTask = (targetTask) => {
    const targetNode = targetTask.target.parentNode.parentNode;
    const taskTitle = targetNode.querySelector(".task-title").textContent;
    const taskProject = projectController.locateByTask(taskTitle);
    taskController.erase(taskProject, taskTitle);
    targetNode.remove();
  };

  // mark task completion or undo task completion
  const toggleStrike = (event) => {
    const checkIcon = event.target;
    const taskTitle = checkIcon.parentNode.querySelector(".task-title");
    const targetTask = taskController.locate(
      checkIcon.parentNode.querySelector(".task-title").textContent
    );

    if (targetTask.active) {
      checkIcon.classList.remove("fa-circle");
      checkIcon.classList.add("fa-check-circle");
      taskTitle.classList.add("strikethrough");
      taskController.modify(targetTask, "active", false);
    } else {
      checkIcon.classList.remove("fa-check-circle");
      taskTitle.classList.remove("strikethrough");
      checkIcon.classList.add("fa-circle");
      taskController.modify(targetTask, "active", true);
    }
  };

  // render task in task container
  const render = ({ title, dueDate, active }) => {
    const tasksContainer = document.querySelector(".tasks");
    const referenceTask = document.querySelector("#add-task");
    const taskDiv = createDOM("div", "task");
    tasksContainer.insertBefore(taskDiv, referenceTask);

    const leftPanel = createDOM("div", "left-task-panel");
    taskDiv.appendChild(leftPanel);
    const checkIcon = createDOM("span", "far", "fa-circle");
    checkIcon.addEventListener("click", toggleStrike);
    const titleSpan = createDOM("span", "task-title");
    titleSpan.textContent = title;
    leftPanel.appendChild(checkIcon);
    leftPanel.appendChild(titleSpan);

    if (!active) titleSpan.classList.add("strikethrough");

    const rightPanel = createDOM("div", "right-task-panel");
    taskDiv.appendChild(rightPanel);
    const dateSpan = createDOM("span", "task-date");
    dateSpan.textContent = format(new Date(dueDate), "dd/MM/yyyy");
    const editIcon = createDOM("span", "fas", "fa-edit");
    editIcon.addEventListener("click", taskModal.show);
    const trashIcon = createDOM("span", "fas", "fa-trash");
    trashIcon.addEventListener("click", removeTask);
    rightPanel.appendChild(dateSpan);
    rightPanel.appendChild(editIcon);
    rightPanel.appendChild(trashIcon);
  };

  // render all tasks from provided project and sort it accordingly to chosen option
  const renderProject = (project) => {
    sortOption(project.list);
    project.list.forEach((task) => render(task));
  };

  // render all tasks from provided array and sort it accordingly to chosen option
  const renderCustom = (tasks) => {
    sortOption(tasks);
    tasks.forEach((task) => render(task));
  };

  // set title of task container 
  const setTitle = (title) => {
    const titleDiv = document.querySelector(".tasks-title");
    titleDiv.textContent = title;
  };

  // render task in proper context depending on task container title
  const loadState = () => {
    const containerTitle = document.querySelector(".tasks-title").textContent;
    switch (containerTitle) {
      case "All tasks":
        projectBox.loadAllTasks();
        break;
      case "Next 7 Days":
        projectBox.loadWeekTasks();
        break;
      case "Today":
        projectBox.loadTodayTasks();
        break;

      default:
        // nasty hack to reuse searchTerm function
        if (containerTitle.includes("Searched")) {
          const searchBox = document.querySelector(".search-term");
          searchBox.value = containerTitle
            .replace("Searched for:", "")
            .replace(/"/g, "")
            .trim();
          searchTerm();
        } else {
          projectBox.loadProjectFromTitle(containerTitle);
        }
    }
  };

  // sort provided array depending of the state of due date icon on page 
  const sortOption = (tasks) => {
    if (checkForSort())
      tasks.sort((a, b) =>
        compareAsc(new Date(a.dueDate), new Date(b.dueDate))
      );
    else
      tasks.sort((a, b) =>
        compareDesc(new Date(a.dueDate), new Date(b.dueDate))
      );
  };

  // check what is the state of due date icon on page
  const checkForSort = () => {
    const sortIcon = document.querySelector(".tasks-sort").firstElementChild;
    return sortIcon.classList.contains("fa-sort-up");
  };

  // change due date icon and re-sort task container content
  const toggleSort = () => {
    const sortIcon = document.querySelector(".tasks-sort").firstElementChild;

    if (checkForSort()) {
      sortIcon.classList.remove("fa-sort-up");
      sortIcon.classList.add("fa-sort-down");
      loadState();
    } else {
      sortIcon.classList.remove("fa-sort-down");
      sortIcon.classList.add("fa-sort-up");
      loadState();
    }
  };

  // clear all rendered tasks from task container
  const clear = () => {
    const tasks = document.querySelectorAll(".task");
    tasks.forEach((task) => task.remove());
  };

  return {
    addTask,
    updateTask,
    renderProject,
    renderCustom,
    setTitle,
    loadState,
    toggleSort,
    clear,
  };
})();

export { taskModal, taskBox };
