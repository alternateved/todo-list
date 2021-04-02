import createDOM from "./dom";

function createSearchBar() {
  const wrapDiv = createDOM("div", "wrap");

  const searchDiv = createDOM("div", "search");
  wrapDiv.appendChild(searchDiv);

  const searchInput = createDOM("input", "searchTerm");
  searchInput.type = "text";
  searchInput.placeholder = "Search...";
  searchDiv.appendChild(searchInput);

  const searchButton = createDOM("button", "searchButton");
  searchButton.type = "submit";
  searchDiv.appendChild(searchButton);

  const searchIcon = createDOM("span", "fa", "fa-search");
  searchButton.appendChild(searchIcon);

  return wrapDiv;
}

function createNav() {
  const nav = createDOM("nav");
  const searchBar = createSearchBar();
  nav.appendChild(searchBar);

  const navigationDiv = createDOM("div", "navigation");
  nav.appendChild(navigationDiv);

  const shortcutsContainer = createDOM("div", "list-container");
  navigationDiv.appendChild(shortcutsContainer);
  const shortcutsTitleDiv = createDOM("div", "list-title");
  shortcutsContainer.appendChild(shortcutsTitleDiv);
  const shortcutsTitle = createDOM("h3");
  shortcutsTitle.textContent = "Shortcuts";
  shortcutsTitleDiv.appendChild(shortcutsTitle);

  const shortcutsListDiv = createDOM("div", "list-shortcuts");
  shortcutsContainer.appendChild(shortcutsListDiv);

  for (let i = 0; i < 3; i++) {
    const listElement = createDOM("div", "list-element");

    switch (i) {
      case 0:
        {
          const icon = createDOM("span", "fas", "fa-calendar-day");
          const description = createDOM("span");
          description.textContent = "Today";
          listElement.appendChild(icon);
          listElement.appendChild(description);
        }
        break;
      case 1:
        {
          const icon = createDOM("span", "fas", "fa-calendar-week");
          const description = createDOM("span");
          description.textContent = "Next 7 Days";
          listElement.appendChild(icon);
          listElement.appendChild(description);
        }
        break;
      case 2:
        {
          const icon = createDOM("span", "fas", "fa-calendar");
          const description = createDOM("span");
          description.textContent = "All tasks";
          listElement.appendChild(icon);
          listElement.appendChild(description);
        }
        break;
    }

    shortcutsListDiv.appendChild(listElement);
  }

  const projectsContainer = createDOM("div", "list-container");
  navigationDiv.appendChild(projectsContainer);
  const projectsTitleDiv = createDOM("div", "list-title");
  projectsContainer.appendChild(projectsTitleDiv);
  const projectsTitle = createDOM("h3");
  projectsTitle.textContent = "Projects";
  projectsTitleDiv.appendChild(projectsTitle);

  const projectsListDiv = createDOM("div", "list-projects");
  projectsContainer.appendChild(projectsListDiv);

  const addProjectButtonDiv = createDOM("div", "button-container");
  nav.appendChild(addProjectButtonDiv);

  const addProjectButton = createDOM("button");
  addProjectButton.id = "add-project";
  addProjectButton.textContent = "Add project";
  addProjectButtonDiv.appendChild(addProjectButton);

  return nav;
}

export default createNav;
