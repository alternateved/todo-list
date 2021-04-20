import { loadTheme } from "../dynamic-page/theme";
import projectController from "./project";
import projectBox from "../dynamic-page/project-functionality";
import taskController from "../object-handlers/task";

let projects = [];

const storageController = (() => {
  // either load stored projects from localStorage or create default new project
  const initiate = () => {
    let storedProjects = check("projects");
    let storedTheme = check("theme");

    // check if there is already stored theme preference
    if (storedTheme !== undefined) {
      loadTheme(storedTheme);
    } else {
      loadTheme("light");
    }
    // check if there are stored projects, if not, create default project and render all
    if (storedProjects !== undefined) {
      projects = storedProjects;
      projectBox.renderAll(projects);
      projectBox.loadAllTasks();
    } else {
      projectController.create("First project");
      const firstTask = taskController.create(["Write a book", "All your life you've dreamed...", "2022-04-07", "high"]);
      const secondTask = taskController.create(["Workout", "It is important to...", "2021-04-07", "medium"]);
      const thirdTask = taskController.create(["Take out the trash", "It is starting to smell...", "2021-04-07", "high"]);
      const fourthTask = taskController.create(["Fix old bike", "I used to love that...", "2021-04-10", "low"]);
      projectController.insert("First project", firstTask);
      projectController.insert("First project", secondTask);
      projectController.insert("First project", thirdTask);
      projectController.insert("First project", fourthTask);
      projectBox.renderAll(projects);
    }
  };
  // check localStorage for data
  const check = (string) => {
    if (localStorage.getItem(string)) {
      return JSON.parse(localStorage.getItem(string));
    }
  };
  // store data in localStorage
  const store = (string, variable) => {
    localStorage.setItem(string, JSON.stringify(variable));
  };

  return {
    initiate,
    check,
    store,
  };
})();

export { projects, storageController };
