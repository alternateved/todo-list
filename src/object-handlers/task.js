const taskController = (() => {
  const create = ([title, description, dueDate, priority]) => {
    let active = true;
    return {
      title: title.value,
      description: description.value,
      dueDate:dueDate.value,
      priority: priority.value,
      active,
    };
  };

  const modify = (todo, attribute, newValue) => {
    todo[attribute] = newValue;
  };

  const remove = (projects, projectIndex, todoIndex) => {
    projects[projectIndex].splice(todoIndex, 1);
  };

  return { create, modify, remove };
})();

export default taskController;
