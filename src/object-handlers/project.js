import { projects, storageController } from "./storage";

const projectController = (() => {
  const create = (title) => {
    let project = {
      title: title,
      list: [],
    };
    projects.push(project);
    storageController.store("projects", projects);
  };

  const modify = (index, title) => {
    projects[index].title = title;
    storageController.store("projects", projects);
  };

  const erase = (index) => {
    projects.splice(index, 1);
    storageController.store("projects", projects);
  };

  const locateByTask = (targetTask) => {
    return projects.find((project) =>
      project.list.find((task) => task.title === targetTask)
    );
  };

  const locateByProject = (targetProject) => {
    return projects.find((project) => project.title === targetProject);
  };

  const locateIndex = (targetProject) => {
    return projects.findIndex((project) => project.title === targetProject);
  };

  return {
    create,
    modify,
    erase,
    locateByTask,
    locateByProject,
    locateIndex,
  };
})();

export default projectController;
