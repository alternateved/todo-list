const createTodo = (title, description, dueDate, priority) => {
    return {
        title,
        description,
        dueDate,
        priority
    }
}

const createProject = (title) => {
    let lists = [];

    return {
        title,
        lists     
    }
}

