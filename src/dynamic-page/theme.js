import { storageController } from '../object-handlers/storage';

function loadTheme(targetTheme) {
  const content = document.querySelector('#content');
  content.dataset.theme = targetTheme;
}

function toggleTheme() {
  const content = document.querySelector('#content');
  const currentTheme = content.dataset.theme;
  let targetTheme = '';

  if (currentTheme === 'light') {
    targetTheme = 'dark';
  } else {
    targetTheme = 'light';
  }
  content.dataset.theme = targetTheme;
  storageController.store('theme', targetTheme);
}

export { loadTheme, toggleTheme };
