import renderStaticPage from "./staticPage/static-page";
import storageController from "./storage";
import startListening from "./dynamicPage/event-listeners";

const content = document.querySelector("#content");
renderStaticPage(content);
storageController.initiate();
startListening();


/* 
X create logo for page
- display dynamically task in main tag
X make page responsive
X dynamically create page's content
- properly display elements of the page with CSS
- add functionality to query tasks
- add functionality to segregate task by Today/7day/All
- create animation of striking in CSS/JavaScript
X create dialog box to add new project
- create animation to show task modal box to add new task  
- find a way to "expand" tasks for details
X add function to change theme
X establish color palette
*/