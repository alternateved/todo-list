import projectController from '../object-handlers/project';
import { projects } from '../object-handlers/storage';
import { checkForDuplicates, checkForInput } from '../helper-functions/error';
import createDOM from '../helper-functions/dom';
import resetValue from '../helper-functions/reset';
import { taskBox } from './task-functionality';
import taskController from '../object-handlers/task';

// module for project functionality in nav tag
const projectBox = (() => {
  // display box for adding new project
  const show = () => {
    const box = document.querySelector('.project-box');
    const addProjectButton = document.querySelector('#add-project');

    addProjectButton.classList.add('hidden');
    box.classList.remove('hidden');
  };

  // hide box for adding new project
  const hide = () => {
    const box = document.querySelector('.project-box');
    const addProjectButton = document.querySelector('#add-project');

    addProjectButton.classList.remove('hidden');
    box.classList.add('hidden');
    reset();
  };

  // add new project and render it on page
  const addNew = () => {
    const userInput = document.querySelector('#project-name');

    if (
      checkForInput(userInput) &&
      checkForDuplicates(projectController.locateByProject(userInput.value))
    ) {
      projectController.create(userInput.value);
      render(userInput.value);
      loadProjectFromTitle(userInput.value);
      reset();
      hide();
    }
  };

  // erase project from page and from storage
  const erase = (event) => {
    const projectDiv = event.target.parentNode;
    const projectTitle = event.target.previousSibling.textContent;

    const targetIndex = projects.findIndex(
      (project) => project.title === projectTitle
    );
    projectController.erase(targetIndex);
    projectDiv.remove();

    const projectSelectOptions = document.querySelectorAll(
      '#task-projects > option'
    );
    projectSelectOptions.forEach((option) => {
      if (option.textContent === projectTitle) option.remove();
    });
    taskBox.loadState();
  };

  // render single project in project container in nav tag
  const render = (title) => {
    const projectsContainer = document.querySelector('.list-projects');

    const elementDiv = createDOM('div', 'list-element');
    projectsContainer.appendChild(elementDiv);

    const titleSpan = createDOM('span', 'element-title');
    titleSpan.textContent = title;
    elementDiv.appendChild(titleSpan);
    titleSpan.addEventListener('click', loadProject);
    const iconSpan = createDOM('span', 'fas', 'fa-trash');
    iconSpan.addEventListener('click', erase);
    elementDiv.appendChild(iconSpan);

    // update list of projects in task modal
    const projectSelect = document.querySelector('#task-projects');
    const projectOption = createDOM('option');
    projectOption.textContent = title;
    projectSelect.appendChild(projectOption);
  };

  // render all projects in nav tag
  const renderAll = (projects) => {
    projects.forEach((project) => render(project.title));
  };

  // load project by title in task container
  const loadProjectFromTitle = (title) => {
    const targetProject = projectController.locateByProject(title);
    taskBox.clear();
    taskBox.setTitle(title);
    taskBox.renderProject(targetProject);
  };

  // load project by click event in task container
  const loadProject = (event) => {
    const targetProject = projectController.locateByProject(
      event.target.textContent
    );
    taskBox.clear();
    taskBox.setTitle(targetProject.title);
    taskBox.renderProject(targetProject);
  };

  // load all tasks in task box for today
  const loadTodayTasks = () => {
    taskBox.clear();
    taskBox.setTitle('Today');

    const todayDate = new Date();

    const resultOfFilter = taskController.locateByDate(todayDate);
    taskBox.renderCustom(resultOfFilter);
  };

  // load all tasks in task box for this week
  const loadWeekTasks = () => {
    taskBox.clear();
    taskBox.setTitle('Next 7 Days');

    const todayDate = new Date();
    const weekDate = new Date(todayDate);
    weekDate.setDate(todayDate.getDate() + 7);

    const resultOfFilter = taskController.locateByDate(todayDate, weekDate);
    taskBox.renderCustom(resultOfFilter);
  };

  // load all tasks from every project
  const loadAllTasks = () => {
    taskBox.clear();
    taskBox.setTitle('All tasks');
    projects.forEach((project) => {
      taskBox.renderProject(project);
    });
  };

  const reset = () => {
    const userInput = document.querySelector('#project-name');
    resetValue(userInput);
  };

  return {
    show,
    hide,
    addNew,
    erase,
    render,
    renderAll,
    loadProjectFromTitle,
    loadTodayTasks,
    loadWeekTasks,
    loadAllTasks,
  };
})();

export default projectBox;
