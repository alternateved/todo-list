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

  const locate = (targetTask) => {
    let locatedProject;
    projects.some((project) => {
      project.list.some((task) => {
        if (task.title === targetTask) {
          locatedProject = project;
          return true;
        }
      });
    });
    return locatedProject;
  };

  const locateIndex = (targetProject) => {
    return projects.findIndex((project) => project.title === targetProject);
  };

  return {
    create,
    modify,
    erase,
    locate,
    locateIndex,
  };
})();

export default projectController;
