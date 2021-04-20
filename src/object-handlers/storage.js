import { loadTheme } from "../dynamic-page/theme";
import projectController from "./project";
import projectBox from "../dynamic-page/project-functionality";

let projects = [];

const storageController = (() => {
  const initiate = () => {
    let storedProjects = check("projects");
    let storedTheme = check("theme");

    if (storedTheme !== undefined) {
      loadTheme(storedTheme);
    } else {
      loadTheme("light");
    }
    if (storedProjects !== undefined) {
      projects = storedProjects;
      projectBox.renderAll(projects);
      projectBox.loadAllTasks();
    } else {
      projectController.create("First project");
      // add some default tasks
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

  const modify = () => {};

  return {
    initiate,
    check,
    store,
    modify,
  };
})();

export { projects, storageController };
