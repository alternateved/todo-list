import createDOM from "./dom";

function createFooter() {
    const footer = createDOM("footer");
  
    const para = createDOM("p");
    para.textContent = "made by ";
    footer.appendChild(para);
  
    const link = createDOM("a");

    link.textContent = "alternateved ∆";
    link.href = "https://github.com/alternateved";
    link.target = "_blank";
    para.appendChild(link);
  
    return footer;
  }

  export default createFooter;