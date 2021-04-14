const taskController = (() => {
  const create = (data) => {
    let active = true;
    return {
      title: data[0].value,
      description: data[1].value,
      dueDate: data[2].value,
      priority: data[3].value,
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
