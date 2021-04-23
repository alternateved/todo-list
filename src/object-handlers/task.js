import { projects, storageController } from '../object-handlers/storage';

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
    storageController.store('projects', projects);
  };

  const erase = (project, taskName) => {
    let taskIndex = locateIndex(taskName);
    project.list.splice(taskIndex, 1);
    storageController.store('projects', projects);
  };

  const locate = (targetTask) => {
    let locatedTask;
    projects.some((project) => {
      locatedTask = project.list.find((task) => task.title === targetTask);
      if (locatedTask) return true;
    });
    return locatedTask;
  };

  const locateByTerm = (term) => {
    let resultArray = [];
    term = term.toLowerCase();
    projects.forEach((project) =>
      project.list.forEach((task) => {
        if (
          task.title.toLowerCase().includes(term) ||
          task.description.toLowerCase().includes(term)
        ) {
          resultArray.push(task);
        }
      })
    );
    return resultArray;
  };

  const locateByDate = (dateBeginning, dateEnd = dateBeginning) => {
    let resultArray = [];
    projects.forEach((project) =>
      project.list.forEach((task) => {
        if (
          new Date(task.dueDate).getDate() >= dateBeginning.getDate() &&
          new Date(task.dueDate).getDate() <= dateEnd.getDate() &&
          new Date(task.dueDate).getFullYear() >= dateBeginning.getFullYear() &&
          new Date(task.dueDate).getFullYear() <= dateEnd.getFullYear()
        )
          resultArray.push(task);
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
      if (locatedIndex) return true;
    });
    return locatedIndex;
  };

  return {
    create,
    modify,
    erase,
    locate,
    locateByTerm,
    locateByDate,
    locateIndex,
  };
})();

export default taskController;
