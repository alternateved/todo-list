import { projects } from "../object-handlers/storage";
import checkForInput from "../helper-functions/error";
import createDOM from "../helper-functions/dom";

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

export { taskBox };
