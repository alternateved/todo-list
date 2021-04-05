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

  // localStorage.setItem("theme", targetTheme);
}

export default toggleTheme;

// Check storage:
// let storedTheme =
//   localStorage.getItem("theme") ||
//   (window.matchMedia("(prefers-color-scheme: dark)").matches
//     ? "dark"
//     : "light");
// if (storedTheme)
//   document.documentElement.setAttribute("data-theme", storedTheme);

// Second way:
/* const container = document.getElementById('simulateDarkMode');
const buttonDarkMode = document.getElementById('toggleDarkMode');
const dataTheme = container.getAttribute('data-theme');

if(dataTheme === 'dark') {
  container.setAttribute('data-theme', 'light');
  buttonDarkMode.innerHTML = 'DARK MODE';
} else {
  container.setAttribute('data-theme', 'dark');
  buttonDarkMode.innerHTML = 'LIGHT MODE';
} */
