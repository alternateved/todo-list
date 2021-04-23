import renderStaticPage from './static-page/static-page';
import { storageController } from './object-handlers/storage';
import startListening from './dynamic-page/event-listeners';

// render static page inside content div
const content = document.querySelector('#content');
renderStaticPage(content);

// initiate storage from localStorage or generate default one
storageController.initiate();

// add eventListeners to all interactive elements on generated static page
startListening();
