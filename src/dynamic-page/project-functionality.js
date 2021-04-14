import projectController from "../object-handlers/project";
import { projects } from "../object-handlers/storage";
import checkForInput from "../helper-functions/error";
import createDOM from "../helper-functions/dom";

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
      projectController.create(projects, userInput.value);
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

  const titleSpan = createDOM("span", "element-title");
  titleSpan.textContent = title;
  elementDiv.appendChild(titleSpan);
  // titleSpan.addEventListener("click", switchProject);
  const iconSpan = createDOM("span", "fas", "fa-trash");
  iconSpan.addEventListener("click", removeProject);
  elementDiv.appendChild(iconSpan);

  const projectSelect = document.querySelector("#task-projects");
  const projectOption = createDOM("option");
  projectOption.textContent = title;
  projectSelect.appendChild(projectOption);
}

function renderAllProjects(projects) {
  projects.forEach((project) => renderProject(project.title));
}

function removeProject(event) {
  let projectDiv = event.target.parentNode;
  let projectTitle = event.target.previousSibling.textContent;

  let targetIndex = projects.findIndex((project) => {
    if (project.title === projectTitle) return project;
  });
  projectController.erase(projects, targetIndex);
  projectDiv.remove();

  const projectSelectOptions = document.querySelectorAll(
    "#task-projects > option"
  );
  projectSelectOptions.forEach((option) => {
    if (option.textContent === projectTitle) option.remove();
  });
}

export { projectBox, renderProject, renderAllProjects };
