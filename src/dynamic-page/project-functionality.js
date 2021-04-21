import projectController from "../object-handlers/project";
import { projects } from "../object-handlers/storage";
import { checkForDuplicates, checkForInput } from "../helper-functions/error";
import createDOM from "../helper-functions/dom";
import resetValue from "../helper-functions/reset";
import { taskBox } from "./task-functionality";
import taskController from "../object-handlers/task";

// module for displaying projects container in nav tag
const projectBox = (() => {
  // functions for displaying box for adding new project
  const show = () => {
    const box = document.querySelector(".project-box");
    const addProjectButton = document.querySelector("#add-project");

    addProjectButton.classList.add("hidden");
    box.classList.remove("hidden");
  };

  const hide = () => {
    const box = document.querySelector(".project-box");
    const addProjectButton = document.querySelector("#add-project");

    addProjectButton.classList.remove("hidden");
    box.classList.add("hidden");
  };

  const addNew = () => {
    const userInput = document.querySelector("#project-name");

    if (
      checkForInput(userInput) &&
      checkForDuplicates(projectController.locateByProject(userInput.value))
    ) {
      projectController.create(userInput.value);
      render(userInput.value);
      resetValue(userInput);
      hide();
    }
  };

  const erase = (event) => {
    let projectDiv = event.target.parentNode;
    let projectTitle = event.target.previousSibling.textContent;

    let targetIndex = projects.findIndex(
      (project) => project.title === projectTitle
    );
    projectController.erase(targetIndex);
    projectDiv.remove();

    const projectSelectOptions = document.querySelectorAll(
      "#task-projects > option"
    );
    projectSelectOptions.forEach((option) => {
      if (option.textContent === projectTitle) option.remove();
    });
    taskBox.loadState();
  };

  // functions for rendering projects in projects container in nav tag
  const render = (title) => {
    const projectsContainer = document.querySelector(".list-projects");

    const elementDiv = createDOM("div", "list-element");
    projectsContainer.appendChild(elementDiv);

    const titleSpan = createDOM("span", "element-title");
    titleSpan.textContent = title;
    elementDiv.appendChild(titleSpan);
    titleSpan.addEventListener("click", loadProject);
    const iconSpan = createDOM("span", "fas", "fa-trash");
    iconSpan.addEventListener("click", erase);
    elementDiv.appendChild(iconSpan);

    // update list of projects in task modal
    const projectSelect = document.querySelector("#task-projects");
    const projectOption = createDOM("option");
    projectOption.textContent = title;
    projectSelect.appendChild(projectOption);
  };

  const renderAll = (projects) => {
    projects.forEach((project) => render(project.title));
  };

  const loadProject = (event) => {
    const targetProject = projectController.locateByProject(
      event.target.textContent
    );
    taskBox.clear();
    taskBox.setTitle(targetProject.title);
    taskBox.renderProject(targetProject);
  };

  const loadTodayTasks = () => {
    taskBox.clear();
    taskBox.setTitle("Today");

    const todayDate = new Date();

    const resultOfFilter = taskController.locateByDate(todayDate);
    taskBox.renderCustom(resultOfFilter);
  };

  const loadWeekTasks = () => {
    taskBox.clear();
    taskBox.setTitle("Next 7 Days");

    const todayDate = new Date();
    const weekDate = new Date(todayDate);
    weekDate.setDate(todayDate.getDate() + 7);

    const resultOfFilter = taskController.locateByDate(todayDate, weekDate);
    taskBox.renderCustom(resultOfFilter);
  };

  const loadAllTasks = () => {
    taskBox.clear();
    taskBox.setTitle("All tasks");
    projects.forEach((project) => {
      taskBox.renderProject(project);
    });
  };

  return {
    show,
    hide,
    addNew,
    erase,
    render,
    renderAll,
    loadTodayTasks,
    loadWeekTasks,
    loadAllTasks,
  };
})();

export default projectBox;
