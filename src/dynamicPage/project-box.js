const projectBox = (() => {
  
  const show = () => {
    const box = document.querySelector(".project-box");
    const addProjectButton = document.querySelector("#add-project");
    
    addProjectButton.classList.add("hidden");
    box.classList.remove("hidden");
  };
  const hide = () => {
    const box = document.querySelector(".project-box");
    const addProjectButton = document.querySelector("#add-project");
    
    addProjectButton.classList.remove("hidden");
    box.classList.add("hidden");
  };
  const addNew = () => {
    hide();
  };

  return { show, hide, addNew };
})();

//const projectForm = document.querySelector("#project-name");
//{
//  console.log(projectForm.value);
//  projectForm.value = "";
//}

export default projectBox;
