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
  iconSpan.addEventListener("click", removeProject);
  elementDiv.appendChild(iconSpan);

}

function renderAllProjects (projects) {
  projects.forEach(project => renderProject(project.title));
}

function removeProject(event) {
  let projectDiv = event.target.parentNode;
  let projectTitle = event.target.previousSibling.textContent;

  let targetIndex = storageController.projects.findIndex((project) => project.title === projectTitle);
  storageController.projects.splice(targetIndex, 1);
  projectDiv.remove();

  storageController.store("projects", storageController.projects);
}

/* function updateBooks(event) {
  let bookNode = event.target.parentNode;
  let title = bookNode.querySelector("h3").textContent;

  let targetIndex = myLibrary.findIndex((book) => book.title === title);

  myLibrary.splice(targetIndex, 1);

  localStorage.setItem("myLibrary", JSON.stringify(myLibrary));
  displayStatistics();
  displayShelf();
} */

export { projectBox, renderProject, renderAllProjects };