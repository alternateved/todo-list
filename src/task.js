const create = (title, description, dueDate, priority) => {
  return {
    title,
    description,
    dueDate,
    priority,
    project,
  };
};

const modify = (todo, attribute, newValue) => {
  todo[attribute] = newValue;
};

const remove = (projects, projectIndex, todoIndex) => {
  projects[projectIndex].splice(todoIndex, 1);
};

export { create, modify, remove };
