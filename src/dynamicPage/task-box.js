const taskBox = (() => {
  const show = () => {
    const box = document.querySelector(".task-box");
    box.classList.remove("hidden");
    window.addEventListener("click", (event) => {
      if (event.target == box) hide();
    });
  };
  const hide = () => {
    const box = document.querySelector(".task-box");
    box.classList.add("hidden");
  };
  const addNew = () => {
    hide();
  };
  return { show, hide, addNew };
})();

export default taskBox;
