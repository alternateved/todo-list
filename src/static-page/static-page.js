import createHeader from "./header";
import createNav from "./nav";
import createMain from "./main";
import createFooter from "./footer";
import createModal from "./task-modal";

function renderStaticPage(content) {
  content.appendChild(createHeader());
  content.appendChild(createNav());
  content.appendChild(createMain());
  content.appendChild(createFooter());
  content.appendChild(createModal());
}

export default renderStaticPage;