import createDOM from "./dom";

function createSearchBar() {
    const wrapDiv = createDOM("div", "wrap");

    const searchDiv = createDOM("div", "search");
    wrapDiv.appendChild(searchDiv);

    const searchInput = createDOM("input", "searchTerm");
    searchInput.type="text";
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

}
