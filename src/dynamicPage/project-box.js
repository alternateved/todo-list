const projectBox = (() => {
  // const projectBox = document.querySelector(".project-box");
  // const addProjectButton = document.querySelector("#add-project");
  // console.log(`outside: ${document}, ${projectBox}, ${addProjectButton}`);
  // console.log(window.document.getElementById("#add-project"));

  const show = () => {
    const projectBox = document.querySelector(".project-box");
    const addProjectButton = document.querySelector("#add-project");
    
    addProjectButton.classList.add("hidden");
    projectBox.classList.remove("hidden");
  };
  const hide = () => {
    const projectBox = document.querySelector(".project-box");
    const addProjectButton = document.querySelector("#add-project");
    
    addProjectButton.classList.remove("hidden");
    projectBox.classList.add("hidden");
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
