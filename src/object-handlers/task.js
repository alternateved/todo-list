import { projects, storageController } from "../object-handlers/storage";

const taskController = (() => {
  const create = ([title, description, dueDate, priority]) => {
    let active = true;
    return {
      title: title.value,
      description: description.value,
      dueDate: dueDate.value,
      priority: priority.value,
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

  const locateIndex = (targetTask) => {
    let locatedIndex;
    projects.some((project) => {
      locatedIndex = project.list.findIndex(
        (task) => task.title === targetTask
      );
    });
    return locatedIndex;
  };

  return { create, modify, erase, locate, locateIndex };
})();

export default taskController;
