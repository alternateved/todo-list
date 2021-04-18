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
    projects[projectIndex].splice(todoIndex, 1);
  };

  const locate = (targetTask) => {
    projects.some((project) => {
      project.list.some((task) => {
        if (task.title === targetTask) {
          console.log(`if: task.title: ${task.title}`);
          console.log(`task: ${task}`);
          return task;
        }
      });
    });
  };

  const locateIndex = (targetTask) => {
    return projects.some((project) => {
      project.list.findIndex((task) => task.title === targetTask);
    });
  };

  return { create, modify, erase, locate, locateIndex };
})();

export default taskController;
