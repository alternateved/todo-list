import createDOM from '../helper-functions/dom';

function createHeader() {
  const header = createDOM('header');

  const logoContainer = createDOM('div', 'logo');
  header.appendChild(logoContainer);

  const logo = createDOM('span', 'fas', 'fa-check-circle', 'fa-2x');
  logoContainer.appendChild(logo);

  const title = createDOM('h1');
  title.textContent = 'same.do';
  logoContainer.appendChild(title);

  const themeSwitcherDiv = createDOM('div');
  themeSwitcherDiv.id = 'theme-switcher';

  const themeSwitcher = createDOM('span', 'fas', 'fa-adjust', 'fa-lg');
  themeSwitcherDiv.appendChild(themeSwitcher);
  header.appendChild(themeSwitcherDiv);

  return header;
}

export default createHeader;
