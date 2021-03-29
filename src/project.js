let projects = [];

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

export {
  projects,
  createProject,
  modifyProject,
  removeProject,
  createTodo,
  modifyTodo,
  removeTodo,
};
