import { projects } from "../object-handlers/storage";

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

  const erase = (projectIndex, todoIndex) => {
    projects[projectIndex].list.splice(todoIndex, 1);
  };

  const locate = (targetTask) => {
    let locatedTask;
    projects.some((project) => {
      project.list.some((task) => {
        if (task.title === targetTask) {
          console.log(`if: task.title: ${task.title}`);
          console.log(`task: ${task}`);
          locatedTask = task;
          return true;
        }
      });
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