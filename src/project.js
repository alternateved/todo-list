const createTodo = (title, description, dueDate, priority) => {
    return {
        title,
        description,
        dueDate,
        priority
    }
}

const projectController = (() => {
    let projects = [];

    // check localStorage for data
    const checkData = () => {
        // if(localStorage has something) projects = projects localStorage;
        // else initiateData();
    }
    
    const storeData = () => {
        
    }

    // initiate default data
    const initiateData = () => {
        projects.push(createProject("Default project"));
    }

    const createProject = (title) => {
        let lists = [];
    
        return {
            title,
            lists     
        }
    }

    const modifyProject = (index, title) => {
        projects[index].title = title;
    }

    const removeProject = (index) => {
        projects.splice(index, 1);
    }

})();