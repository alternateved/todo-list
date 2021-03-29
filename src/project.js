const projectController = (() => {
  let projects = [];

  // check localStorage for data
  const checkData = () => {
    if (localStorage.getItem("projects")) {
      const storageProjects = JSON.parse(localStorage.getItem("projects"));
      projects = storageProjects;
    } else {
      initiateData();
    }
  };

  // initiate default data
  const initiateData = () => {
    projects.push(createProject("Default project"));
  };

  // store data in localStorage
  const storeData = () => {
    localStorage.setItem("projects", JSON.stringify(projects));
  };

  const createProject = (title) => {
    let lists = [];
    return {
      title,
      lists,
    };
  };

  const modifyProject = (index, title) => {
    projects[index].title = title;
  };

  const removeProject = (index) => {
    projects.splice(index, 1);
  };

  const createTodo = (title, description, dueDate, priority) => {
    return {
      title,
      description,
      dueDate,
      priority,
    };
  };

  const modifyTodo = (todo, attribute, newValue) => {
    todo[attribute] = newValue;
  };

  const removeTodo = (projectIndex, todoIndex) => {
    projects[projectIndex].splice(todoIndex, 1);
  };

  return {
    projects,
    createProject,
    modifyProject,
    removeProject,
    createTodo,
    modifyTodo,
    removeTodo,
  };
})();
