import { loadTheme } from "../src/dynamicPage/theme";

const storageController = (() => {
  let projects = [];

  const initiate = () => {
    let storedProjects = check("projects");
    let storedTheme = check("theme");
    console.log(storedTheme);
    
    if(storedTheme !== undefined) {
      loadTheme(storedTheme);
      console.log(`LOADED: ${storedTheme}`);
    }

    if(storedProjects !== undefined) {
      projects = storedProjects;
    } else {
      // create default
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
    console.log(`STORED: ${variable}`);
  };

  const modify = () => {};

  return {
    initiate,
    check,
    store,
    modify,
  };
})();

export default storageController;