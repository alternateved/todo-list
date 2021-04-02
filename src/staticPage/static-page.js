import createHeader from "./header";
import createNav from "./nav";
import createMain from "./main";
import createFooter from "./footer";

function renderStaticPage(content) {
  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createMain());
  content.appendChild(createFooter());
}
const content = document.querySelector("#content");

export default renderStaticPage;