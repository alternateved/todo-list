import { projects, storageController } from "../object-handlers/storage";
import checkForInput from "../helper-functions/error";
import createDOM from "../helper-functions/dom";
import resetValue from "../helper-functions/reset";
import taskController from "../object-handlers/task";

const taskBox = (() => {
  const show = () => {
    const box = document.querySelector(".task-box");
    box.classList.remove("hidden");
    window.addEventListener("click", (event) => {
      if (event.target == box) hide();
    });
  };
  const hide = () => {
    const box = document.querySelector(".task-box");
    box.classList.add("hidden");
  };
  const addNew = () => {
    const taskData = [];

    const taskTitle = document.querySelector("#task-title");
    const taskDescription = document.querySelector("#task-description");
    const taskDueDate = document.querySelector("#task-date");
    const taskPriority = document.querySelector("#task-priority");
    const taskProject = document.querySelector("#task-projects");
    taskData.push(
      taskTitle,
      taskDescription,
      taskDueDate,
      taskPriority,
      taskProject
    );

    if (taskData.every(checkForInput)) {
      // add to project
      let targetIndex = projects.findIndex(
        (project) => project.title === taskProject.value
      );
      //how to add to project?
      projects[targetIndex].list.push(taskController.create(taskData));
      storageController.store("projects", projects);
      
      // render on page (with evenHandlers)
      taskData.forEach((element) => {
        if (element.id === "task-priority" || element.id === "task-projects") {
          element.selectedIndex = 0;
        } else resetValue(element);
      });
      hide();
    }
  };
  return { show, hide, addNew };
})();

export default taskBox;
