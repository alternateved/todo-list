import storageController from "../storage";

function loadTheme(targetTheme) {
  const content = document.querySelector("#content");
  content.dataset.theme = targetTheme;
}

function toggleTheme() {
  const content = document.querySelector("#content");
  let currentTheme = content.dataset.theme;
  let targetTheme = "";

  if (currentTheme === "light") {
    targetTheme = "dark";
  } else {
    targetTheme = "light";
  }
  content.dataset.theme = targetTheme;
  storageController.store("theme", targetTheme);
}

export { loadTheme, toggleTheme };
