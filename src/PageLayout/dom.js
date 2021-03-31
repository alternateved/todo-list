function createDOM(tag, ...classes) {
  const newDOM = document.createElement(tag);

  if (classes.length === 0) return newDOM;
  else {
    classes.forEach((string) => newDOM.classList.add(string));
    return newDOM;
  }
}

export default createDOM;