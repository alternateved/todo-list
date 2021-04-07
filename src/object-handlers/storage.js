import { loadTheme } from "../dynamic-page/theme";
import projectController from "./project";
import { renderAllProjects } from "../dynamic-page/project-functionality";

const storageController = (() => {
  let projects = [];

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
      renderAllProjects(projects);
    } else {
      projectController.create(projects, "First project");
      renderAllProjects(projects);
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
    projects,
    initiate,
    check,
    store,
    modify,
  };
})();

export default storageController;
