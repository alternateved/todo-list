import storageController from "./storage";

const projectController = (() => {
  const create = (projects, title) => {
    let project = {
      title: title,
      list: []
    }
    projects.push(project);
    storageController.store("projects", projects);
  };

  const modify = (projects, index, title) => {
    projects[index].title = title;
    storageController.store("projects", projects);
  };

  const remove = (projects, index) => {
    projects.splice(index, 1);
    storageController.store("projects", projects);
  };

  return {
    create, 
    modify,
    remove
  }
})();

export default projectController;
