const projectController = (() => {
  const create = (title) => {
    let lists = [];
    return {
      title,
      lists,
    };
  };

  const modify = (projects, index, title) => {
    projects[index].title = title;
  };

  const remove = (projects, index) => {
    projects.splice(index, 1);
  };

  return {
    create, 
    modify,
    remove
  }
})();

export default projectController;
