import createDOM from "../staticPage/dom"

// for each project in Storage.projects 
// display it's name in projects container in nav
// add bin icon on right side
// add eventListener on project name (in order to switch between projects)
// add eventListener on bin icon (in order to remove project) 

function renderProject(project) {
  const projectsContainer = document.querySelector(".list-projects");
  
  const elementDiv = createDOM("div", "list-element");
  projectsContainer.appendChild(elementDiv);

  const titleSpan = createDOM("span", "element-title");
  titleSpan.textContent = project.title;
  elementDiv.appendChild(titleSpan);
  // titleSpan.addEventListener("click", switchProject);
  const iconSpan = createDOM("span", "fas", "fa-trash");
  elementDiv.appendChild(iconSpan);
  // iconSpan.addEventListener("click", removeProject);
}

function renderAllProjects (projects) {
  projects.forEach(project => renderProject(project));
}



export { renderProject, renderAllProjects };