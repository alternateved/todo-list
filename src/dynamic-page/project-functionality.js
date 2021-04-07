import projectController from "../object-handlers/project";
import storageController from "../object-handlers/storage";
import checkForInput from "../helper-functions/error";
import createDOM from "../helper-functions/dom"

const projectBox = (() => {
  
  const show = () => {
    const box = document.querySelector(".project-box");
    const addProjectButton = document.querySelector("#add-project");
    
    addProjectButton.classList.add("hidden");
    box.classList.remove("hidden");
  };
  const hide = () => {
    const box = document.querySelector(".project-box");
    const addProjectButton = document.querySelector("#add-project");
    
    addProjectButton.classList.remove("hidden");
    box.classList.add("hidden");
  };
  const addNew = () => {
    const userInput = document.querySelector("#project-name");

    if (checkForInput(userInput)) {
      projectController.create(storageController.projects, userInput.value);
      renderProject(userInput.value);
      userInput.value = "";
      hide();
    }
  };

  return { show, hide, addNew };
})();


function renderProject(title) {
  const projectsContainer = document.querySelector(".list-projects");
  
  const elementDiv = createDOM("div", "list-element");
  projectsContainer.appendChild(elementDiv);

  // RENDER PROJECT IN TASKBOX

  const titleSpan = createDOM("span", "element-title");
  titleSpan.textContent = title;
  elementDiv.appendChild(titleSpan);
  // titleSpan.addEventListener("click", switchProject);
  const iconSpan = createDOM("span", "fas", "fa-trash");
  elementDiv.appendChild(iconSpan);
  // iconSpan.addEventListener("click", removeProject);
}

function renderAllProjects (projects) {
  projects.forEach(project => renderProject(project.title));
}


export { projectBox, renderProject, renderAllProjects };