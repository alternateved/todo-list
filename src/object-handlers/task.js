import { projects, storageController } from "../object-handlers/storage";

const taskController = (() => {
  const create = ([title, description, dueDate, priority]) => {
    let active = true;
    return {
      title,
      description,
      dueDate,
      priority,
      active,
    };
  };

  const modify = (todo, attribute, newValue) => {
    todo[attribute] = newValue;
  };

  const erase = (project, taskName) => {
    let taskIndex = locateIndex(taskName);
    project.list.splice(taskIndex, 1);
    storageController.store("projects", projects);
  };

  const locate = (targetTask) => {
    let locatedTask;
    projects.some((project) => {
      locatedTask = project.list.find((task) => task.title === targetTask);
    });
    return locatedTask;
  };

  const locateByTerm = (term) => {
    let resultArray = [];
    projects.forEach((project) =>
      project.list.forEach((task) => {
        if (task.title.toLowerCase().includes(term) || task.description.toLowerCase().includes(term)) {
          resultArray.push(task);
        }
      })
    );
    return resultArray;
  };

  const locateIndex = (targetTask) => {
    let locatedIndex;
    projects.some((project) => {
      locatedIndex = project.list.findIndex(
        (task) => task.title === targetTask
      );
    });
    return locatedIndex;
  };

  return { create, modify, erase, locate, locateByTerm, locateIndex };
})();

export default taskController;
