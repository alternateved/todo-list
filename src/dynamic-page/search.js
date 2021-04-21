import taskController from "../object-handlers/task";
import { taskBox } from "./task-functionality";
import resetValue from "../helper-functions/reset";

function searchTerm () {
  const searchBox = document.querySelector(".search-term");
  const term = searchBox.value;

  const resultOfSearch = taskController.locateByTerm(term);
  taskBox.clear();
  taskBox.renderCustom(resultOfSearch);
  taskBox.setTitle(`Searched for: "${term}"`);
  resetValue(searchBox);
}

export default searchTerm;