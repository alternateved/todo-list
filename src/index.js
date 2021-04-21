import renderStaticPage from "./static-page/static-page";
import { storageController } from "./object-handlers/storage";
import startListening from "./dynamic-page/event-listeners";

const content = document.querySelector("#content");
renderStaticPage(content);
storageController.initiate();
startListening();

/* 
X create logo for page
X make page responsive
X dynamically create page's content
X properly display elements of the page with CSS
X add function to change theme
X establish color palette
X create dialog box to add new project
X create task modal box to add new task
X when creating project, save it by storage module and display change
X when creating task, save it in project, then save it by storage module and display change
X display dynamically projects in nav tag
X display dynamically projects in task modal drop-down list
X when displaying new project on page dynamically add eventListener to enable modification  
X add functionality to modify task (and re-render it on page)
X add functionality to remove task (and un-render it on page)
X when modifying task, modify it's parent project and then reflect it by storage module and on page
X when displaying new task on page dynamically add eventListener to enable modification
X on page start load "All tasks" tag and all appropriate tasks
X display dynamically task in main tag
X ensure that tasks titles are not the same
X ensure that projects titles are not the same
X find a way to "expand" tasks for details
X when changing shortcut or project, change title in main tag 
X separate taskModal from taskBox module
X create animation of striking in CSS/JavaScript
X add functionality to query tasks with search bar
X add functionality to segregate task by Today/7day/All
X ensure that tasks are created and modified in proper context
- add functionality to sort items by date (ascending and descending)
- use external library to format dates
- use Autoprefixer to fix possible cross-browser styling issues 
*/
